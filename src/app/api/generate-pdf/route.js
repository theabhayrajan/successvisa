import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const target = searchParams.get('url') || `http://localhost:3000/`;

    // Dynamically import puppeteer to avoid bundling issues
    const puppeteer = await import('puppeteer');
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();

    // Set a reasonable viewport so screenshots/PDF sizing match desktop
    await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 1 });
    await page.goto(target, { waitUntil: 'networkidle2' });

    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="SuccessVisa-Brand-Promotion-Poster.pdf"'
      }
    });
  } catch (err) {
    console.error('generate-pdf error', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

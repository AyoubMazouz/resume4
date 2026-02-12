const { chromium } = require("playwright")

const DEFAULT_APP_URL = "http://127.0.0.1:4173"

const dateFromNow = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, "0")
  const day = String(now.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

const buildFileName = (date, lang) => `AyoubMazouz_${date}_${lang}.pdf`

async function exportLang(page, appUrl, outDir, date, lang) {
  const url = `${appUrl}?lang=${lang}`
  const outputPath = `${outDir}/${buildFileName(date, lang)}`

  await page.goto(url, { waitUntil: "networkidle", timeout: 120000 })
  await page.waitForTimeout(2500)

  await page.addStyleTag({
    content: `
      @page { size: A4; margin: 0; }
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
    `,
  })

  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
    preferCSSPageSize: true,
  })

  return outputPath
}

;(async () => {
  const appUrl = process.env.APP_URL || DEFAULT_APP_URL
  const outDir = process.env.OUTPUT_DIR
  const date = process.env.EXPORT_DATE || dateFromNow()

  if (!outDir) {
    throw new Error("Missing OUTPUT_DIR env var")
  }

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({ viewport: { width: 1440, height: 2200 } })
  const page = await context.newPage()

  const outputs = []
  outputs.push(await exportLang(page, appUrl, outDir, date, "en"))
  outputs.push(await exportLang(page, appUrl, outDir, date, "fr"))

  await context.close()
  await browser.close()

  console.log("Generated PDF files:")
  outputs.forEach((file) => console.log(file))
})().catch((error) => {
  console.error(error)
  process.exit(1)
})

import { google } from 'googleapis'

/**
 * Append a contact form submission to a Google Sheet.
 *
 * Requirements:
 *   1. Create a Google Cloud service account and download the JSON key.
 *   2. Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY in env vars.
 *   3. Create a Google Sheet and share it (Editor) with the service account email.
 *   4. Set GOOGLE_SHEET_ID in env vars (the long ID from the sheet URL).
 *   5. The first row of "Sheet1" should have headers:
 *      Timestamp | Name | Email | Company | Message | Demo
 */

interface ContactData {
  name: string
  email: string
  company?: string | null
  message: string
  demo?: boolean
}

export async function appendToGoogleSheet(data: ContactData): Promise<void> {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const sheetId = process.env.GOOGLE_SHEET_ID

  if (!clientEmail || !privateKey || !sheetId) {
    console.warn('Google Sheets env vars not set — skipping sheet append.')
    return
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const timestamp = new Date().toISOString()

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Sheet1!A:F',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          timestamp,
          data.name,
          data.email,
          data.company || '',
          data.message,
          data.demo ? 'Yes' : 'No',
        ],
      ],
    },
  })
}

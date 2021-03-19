const { google } = require('googleapis');
const sheets = google.sheets('v4');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function getAuthToken() {
  const auth = new google.auth.GoogleAuth({
    scopes: SCOPES,
  });
  const authToken = await auth.getClient();

  return authToken;
}

async function getSpreadSheetValues({
  spreadsheetId,
  auth,
  majorDimension,
  sheetName,
}) {
  const res = await sheets.spreadsheets.values.get({
    auth,
    majorDimension,
    range: sheetName,
    spreadsheetId,
  });

  return res;
}

export async function getInputIDDirectoryRaw() {
  try {
    const auth = await getAuthToken();
    const response = await getSpreadSheetValues({
      auth,
      majorDimension: 'COLUMNS',
      sheetName: 'Sheet1',
      spreadsheetId: '1aKw1NKk2Tom4McnpoPHmoXNfAoteAkZJFeOxcYn_5hM',
    });

    const inputLists = response.data.values;

    const inputDirectory = inputLists.reduce(
      (accumulator, thisList, i, source) => {
        if (i % 2 === 0) {
          const [header, ...labels] = thisList;

          return {
            ...accumulator,
            [header]: {
              labels,
            },
          };
        } else {
          const legacyIDs = thisList.slice(1);
          const header = source[i - 1][0];
          const entries = accumulator[header].labels.map((label, j) => [
            label,
            legacyIDs[j],
          ]);

          return {
            ...accumulator,
            [header]: Object.fromEntries(entries),
          };
        }
      },
      {}
    );

    return inputDirectory;
  } catch (error) {
    console.log(error.message, error.stack);
  }
}

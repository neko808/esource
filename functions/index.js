const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

const {google} = require('googleapis');
const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');


exports.enviarV = functions.firestore
  .document('uxcontactos/{idContacto}')
  .onCreate(async (snap, context) => {
    const contacto = snap.data();
    const secretManagerClient = new SecretManagerServiceClient();


    const cs_secret_version = await secretManagerClient.accessSecretVersion({name: 'projects/amarello-esource-web-demo/secrets/llave_cs/versions/latest'});
    const cs = JSON.parse(cs_secret_version[0].payload.data.toString());
    const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
    const jwt = new google.auth.JWT(cs.client_email, null, cs.private_key, scopes);


    const sheets = google.sheets({version: 'v4'});
     sheets.spreadsheets.values.append({
      auth: jwt,
      spreadsheetId: '10xw-QZ3XnXzmeTwZZs7NGs28mpHtYHaaohVlbS5dWgM',
      range: 'A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            contacto.timestamp || 'NA',
            contacto.nombre || 'NA',
            contacto.email || 'NA',
            contacto.telefono || 'NA',
            contacto.empresa || 'NA',
            contacto.empleados || 'NA',
            contacto.version || 'NA',
            contacto.mensaje || 'NA',
            contacto.pais || 'NA',
            contacto.referrer || 'NA'
          ],
        ]
      }
    })
      .then(() => console.log('Contacto agregado a spreadsheet.'))
      .catch((error) => console.error(error));

	})


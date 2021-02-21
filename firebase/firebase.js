const admin = require('firebase-admin');
const firebase = require("firebase");

const {
	apiKey,
	authDomain,
	projectId
} = process.env

const firebaseConfig = {
	apiKey,
	authDomain,
	projectId
}

const { 
	type, 
	project_id, 
	private_key_id, 
	private_key, 
	client_email, 
	client_id, 
	auth_uri, 
	token_uri, 
	auth_provider_x509_cert_url, 
	client_x509_cert_url 
} = process.env;

const serviceAccount = { 
	type, 
	project_id, 
	private_key_id, 
	private_key_id, 
	private_key, 
	client_email, 
	client_id, 
	auth_uri, 
	token_uri, 
	auth_provider_x509_cert_url, 
	client_x509_cert_url 
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

firebase.initializeApp(firebaseConfig);

const db = admin.firestore();
//make users one variable, so it doesn't cling on more heft later
const users = db.collection('users');

module.exports = users;
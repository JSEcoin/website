import Firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyCmS2m3KViKLMBaFtRsefQ5CCYkT0jIcPw',
	authDomain: 'jsecoin1.firebaseapp.com',
	databaseURL: 'https://jsecoin1.firebaseio.com',
	projectId: 'jsecoin1',
	storageBucket: 'jsecoin1.appspot.com',
	messagingSenderId: '352364154296',
};
const app = Firebase.initializeApp(config);

const db = app.database();

export { db as default };


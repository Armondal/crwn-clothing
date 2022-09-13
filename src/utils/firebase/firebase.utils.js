import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDMjNO9tcr-BOb_GrYZMi4BdJf15EPwvL8',
	authDomain: 'crown-clothing-db-bba46.firebaseapp.com',
	projectId: 'crown-clothing-db-bba46',
	storageBucket: 'crown-clothing-db-bba46.appspot.com',
	messagingSenderId: '739877246604',
	appId: '1:739877246604:web:1380e22e1927f921294da9',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

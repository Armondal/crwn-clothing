import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from 'firebase/auth'

import {
	gerFirestore,
	doc,
	getDoc,
	setDoc,
	getFirestore,
} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDMjNO9tcr-BOb_GrYZMi4BdJf15EPwvL8',
	authDomain: 'crown-clothing-db-bba46.firebaseapp.com',
	projectId: 'crown-clothing-db-bba46',
	storageBucket: 'crown-clothing-db-bba46.appspot.com',
	messagingSenderId: '739877246604',
	appId: '1:739877246604:web:1380e22e1927f921294da9',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
	if (!userAuth) return
	const userDocRef = doc(db, 'users', userAuth.uid)
	const userSnapshot = await getDoc(userDocRef)

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			})
		} catch (error) {
			console.log('error creating the user', error.message)
		}
	}
	return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return
	createUserDocumentFromAuth(auth, email, password)
}

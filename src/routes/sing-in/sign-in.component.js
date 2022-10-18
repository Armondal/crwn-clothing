import { Fragment } from 'react'
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup()
		const userDocRef = await createUserDocumentFromAuth(user)
	}
	return (
		<Fragment>
			<div>sign-in.component</div>
			<button onClick={logGoogleUser}>signIn with google</button>
			<SignUpForm />
		</Fragment>
	)
}
export default SignIn

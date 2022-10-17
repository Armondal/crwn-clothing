import { Fragment } from 'react';
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		createUserDocumentFromAuth(user);
	};
	return (
		<Fragment>
			<div>sign-in.component</div>
			<button onClick={logGoogleUser}>signIn with google</button>
		</Fragment>
	);
};
export default SignIn;

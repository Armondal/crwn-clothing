import { Fragment } from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		console.log(response);
	};
	return (
		<Fragment>
			<div>sign-in.component</div>
			<button onClick={logGoogleUser}>signIn with google</button>
		</Fragment>
	);
};
export default SignIn;

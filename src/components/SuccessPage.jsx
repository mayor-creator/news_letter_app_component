import { Button } from "./Button";

import successIcon from "../assets/images/icon-success.svg";

export function SuccessPage({ email }) {
	return (
		<>
			<img
				src={successIcon}
				alt="check mark icon"
			/>
			<h1> Thanks for subscribing!</h1>
			<p>
				A confirmation email has been sent to <strong>{email}</strong>. Please
				open it and click the button inside to confirm your subscription.
			</p>
			<Button> Dismiss message</Button>
		</>
	);
}

SuccessPage.propTypes;

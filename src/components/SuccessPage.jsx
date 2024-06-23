import { Button } from "./Button";

import successIcon from "../assets/images/icon-success.svg";

export function SuccessPage() {
	return (
		<>
			<img
				src={successIcon}
				alt="check mark icon"
			/>
			<h1> Thanks for subscribing!</h1>
			<p>
				A confirmation email has been sent to
				<strong>ash@loremcompany.com</strong>. Please open it and click the
				button inside to confirm your subscription.
			</p>
			<Button> Dismiss message</Button>
		</>
	);
}

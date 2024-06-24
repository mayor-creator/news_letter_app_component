import { useNavigate } from "react-router-dom";

import { Button } from "./Button";
import successIcon from "../assets/images/icon-success.svg";

export function SuccessPage({ email }) {
	const navigate = useNavigate();

	function handleDismissMessage() {
		navigate("/");
	}

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
			<Button onClick={handleDismissMessage}> Dismiss message</Button>
		</>
	);
}

SuccessPage.propTypes;

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { Button } from "./Button";
import successIcon from "../assets/images/icon-success.svg";

import { EmailContext } from "./EmailContext";

export function SuccessPage() {
	const { email } = useContext(EmailContext);
	const navigate = useNavigate();

	function handleDismissMessage() {
		navigate("/");
	}

	return (
		<>
			<main>
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
			</main>
		</>
	);
}

SuccessPage.propTypes;

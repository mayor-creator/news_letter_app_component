import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const EmailContext = createContext();

export function EmailContextProvider({ children }) {
	const [email, setEmail] = useState("");
	const [editEmail, setEditEmail] = useState(false);
	const navigate = useNavigate();

	function handleEmailChange(event) {
		setEmail(event.target.value);
		setEditEmail(true);
	}

	function handleEmailOnSubmit(event) {
		event.preventDefault();
		setEditEmail(false);
		navigate("/success");
	}

	const emailValid = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
	const isValidEmail = emailValid.test(email);
	const error = "Valid email required";

	return (
		<>
			<EmailContext.Provider
				value={{
					email,
					editEmail,
					isValidEmail,
					error,
					handleEmailChange,
					handleEmailOnSubmit,
				}}>
				{children}
			</EmailContext.Provider>
		</>
	);
}

EmailContextProvider.propTypes;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import iconList from "../assets/images/icon-list.svg";
import { ImageCard } from "./ImageCard";
import { Input } from "./Input";
import { Button } from "./Button";

export function MainPage() {
	const [email, setEmail] = useState("");
	const [editEmail, setEditEmail] = useState(false);
	const navigate = useNavigate();

	function handleEmailChange(event) {
		setEmail(event.target.value);
		setEditEmail(true);
	}

	function handleEmailOnSubmit(event) {
		event.preventDefault();
		setEmail("");
		setEditEmail(false);
		navigate("/success");
	}

	const emailValid = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
	const isValidEmail = emailValid.test(email);
	let error = "Valid email is required";

	return (
		<>
			<main>
				<div>
					<section>
						<ImageCard></ImageCard>
					</section>
					<section>
						<h1>Stay updated!</h1>
						<p>Join 60,000+ product managers receiving monthly updates on:</p>
						<div>
							<ul>
								<li>
									<img
										src={iconList}
										alt="check mark icon"
									/>
									<span>Product discovery and building what matters</span>
								</li>
								<li>
									<img
										src={iconList}
										alt="check mark icon"
									/>
									<span>Measuring to ensure updates are a success</span>
								</li>
								<li>
									<img
										src={iconList}
										alt="check mark icon"
									/>
									<span>And much more!</span>
								</li>
							</ul>
						</div>
						<form onSubmit={handleEmailOnSubmit}>
							<div>
								<Input
									label="Email address"
									id="email"
									name="email"
									placeholder="email@company.com"
									required
									type="email"
									value={email}
									onChange={handleEmailChange}
								/>
							</div>
							{editEmail && !isValidEmail && <p>{error}</p>}
							<Button type="submit">Subscribe to monthly newsletter</Button>
						</form>
					</section>
				</div>
			</main>
		</>
	);
}

import mobile from "../../src/assets/images/illustration-sign-up-mobile.svg";
import desktop from "../../src/assets/images/illustration-sign-up-desktop.svg";

export function ImageCard() {
	return (
		<>
			<picture>
				<source
					media="(min-width:768px)"
					srcSet={desktop}
					sizes="100vw"
				/>
				<img
					src={mobile}
					alt="illustration sign up "
				/>
			</picture>
		</>
	);
}

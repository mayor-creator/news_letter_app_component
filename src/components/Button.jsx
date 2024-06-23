export function Button({ children, ...props }) {
	return (
		<>
			<button {...props}>{children}</button>
		</>
	);
}

Button.propTypes;

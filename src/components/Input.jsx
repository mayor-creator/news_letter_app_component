export function Input({ label, id, ...props }) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input {...props} />
		</>
	);
}

Input.propTypes;

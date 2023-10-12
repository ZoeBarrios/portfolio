export default function Input({ label, type, name }) {
  return (
    <div className="container-input">
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} className="input" name={name} />
    </div>
  );
}

export default function InputWithLabel({
  label,
  id,
  type = "text",
  onInputChange,
}) {
  return (
    <>
      <label htmlFor={id}>{label} </label>
      <input id={id} onChange={onInputChange} type={type} />
    </>
  );
}

export default function Input({ label, value, index, onChangeValue }) {
  function cleanClassName(text) {
    return text.toLowerCase().trim().replaceAll(/\s/g, "-");
  }
  function cleanLabel(text) {
    const lg = text.length;

    for (let i = 0; i < lg; i++) {
      if (text[i] >= "A" && text[i] <= "Z") {
        const newText = text.slice(0, i) + " " + text.slice(i);
        return newText;
      }
    }
    return text.toLowerCase().trim().replaceAll(/\s/g, "-");
  }
  const ccn = "user-input__" + cleanClassName(label);

  return (
    <div>
      <label htmlFor={ccn}>{cleanLabel(label)}</label>
      <input
        required
        type="number"
        value={value}
        id={ccn}
        name={ccn}
        onChange={(evt) => onChangeValue(index, evt.target.value)}
      />
    </div>
  );
}

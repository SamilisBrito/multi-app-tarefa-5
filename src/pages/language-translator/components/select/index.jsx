import { Label, SelectStyle } from "./style";

export function Select({ label, selectedValue, setSelectedValue, options }) {
  return (
    <>
      <Label>{label}:</Label>
      <SelectStyle
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {options.map(({ value, text }) => (
          <option key={value} value={value}>{text}</option>
        ))}
      </SelectStyle>
    </>
  );
}

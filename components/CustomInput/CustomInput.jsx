import { useState } from "react";

const CustomInput = ({
  name,
  placeholder = "",
  onChange = () => {},
  onBlur = () => {},
  value,
  type = "text",
}) => {
  const [error, setError] = useState("");
  const handleBlur = () => {
    const isValid = onBlur ? onBlur(value) : true;
    if (isValid) return setError("");
    setError(`invalid ${name}`);
  };
  return (
    <div className="custom-input">
      <input
        {...{ name, value, placeholder, onChange, type }}
        onBlur={handleBlur}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default CustomInput;

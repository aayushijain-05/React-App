/* eslint-disable react/prop-types */

import { Input } from "./Input";
import { Label } from "./Label";

export const FormInput = ({ text, value, onChange, className,placeholder }) => {
  return (
    <div>
      <div>
        <Label text={text} required></Label>
        <Input
          type="text"
          placeholder={placeholder || `Enter  ${text} . . .`} //placeholder = `Enter  ${text} . . .`
          value={value}
          onChange={onChange}
          className={`${className}`}
        />
      </div>
    </div>
  );
};

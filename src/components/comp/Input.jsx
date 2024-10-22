
/* eslint-disable react/prop-types */

export const Input = ({
  type,
  value,
  onChange,
  placeholder,
  className,
  required,
 
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-800 ${className}`}
        required={required}
      />
      
    </div>
  );
};


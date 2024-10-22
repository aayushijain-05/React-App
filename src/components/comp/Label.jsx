/* eslint-disable react/prop-types */


export const Label = ({ text, className, children,required }) => {
    return (
      <label className={`block text-gray-700 mt-2 mb-1 ${className}`}>
        {text} {children} {required && <span className="text-red-500">*</span>}
      </label>
    );
  };

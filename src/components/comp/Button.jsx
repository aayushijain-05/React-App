/* eslint-disable react/prop-types */

export const Button = ({ text,className,onClick}) => {
  return (
    <div>
        <button className={`bg-indigo-800 text-white font-semibold py-3 px-6 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500  cursor-pointer ${className}`} onClick={onClick}>{text}</button>
    </div>
  )
}

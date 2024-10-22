/* eslint-disable react/prop-types */

export const ErrorMessage = ({text}) => {
  return (
    <div>
        <span className="text-red-500 text-sm">{text}</span>
    </div>
  )
}

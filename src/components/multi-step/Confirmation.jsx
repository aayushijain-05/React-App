/* eslint-disable react/prop-types */

export const Confirmation = ({ prevStep, values, handleSubmit }) => {
  return (
    <div className="bg-white border border-slate-400 rounded-lg shadow-md p-6 mx-auto w-full max-w-md">
      <h2 className="text-xl font-bold text-center mb-4">Confirmation</h2>
      <ul className="mb-4">
        <li className="mb-2">First Name: <strong>{values.firstName}</strong></li>
        <li className="mb-2">Last Name: <strong>{values.lastName}</strong></li>
        <li className="mb-2">Email: <strong>{values.email}</strong></li>
        <li className="mb-2">Phone: <strong>{values.phone}</strong></li>
        <li className="mb-2">Address: <strong>{values.address}</strong></li>
        <li className="mb-2">City: <strong>{values.city}</strong></li>
      </ul>
      <div className="flex justify-end space-x-4">
        <button
          onClick={prevStep}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

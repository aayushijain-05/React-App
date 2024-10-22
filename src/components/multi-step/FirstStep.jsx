/* eslint-disable react/prop-types */

export const FirstStep = ({ nextStep, handleChange, values, errors }) => {
  return (
    <div className="bg-white border border-slate-400 rounded-lg shadow-md p-6 mx-auto my-6 w-full max-w-md">
      <h2 className="text-xl font-bold text-center mb-4">Step 1: Personal Details</h2>
      
      <label className="block mb-4">
        First Name:
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          className={`mt-1 w-full px-4 py-2 text-lg text-gray-700 border ${errors.firstName ? 'border-red-500' : 'border-slate-300'} rounded focus:outline-none focus:ring-2 focus:ring-orange-500`}
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
      </label>
      
      <label className="block mb-4">
        Last Name:
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          className={`mt-1 w-full px-4 py-2 text-lg text-gray-700 border ${errors.lastName ? 'border-red-500' : 'border-slate-300'} rounded focus:outline-none focus:ring-2 focus:ring-orange-500`}
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
      </label>
      
      <div className="flex justify-end space-x-4">
        <button
          onClick={nextStep}
          className="w-1/4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

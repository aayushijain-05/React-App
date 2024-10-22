/* eslint-disable react/prop-types */

export const ThirdStep = ({ nextStep, prevStep, handleChange, values, errors }) => {
  return (
    <div className="bg-white border border-slate-400 rounded-lg shadow-md p-6 mx-auto w-full max-w-md">
      <h2 className="text-xl font-bold text-center mb-4">Step 3: Address Details</h2>

      <label className="block mb-4">
        Address:
        <input
          type="text"
          name="address"
          value={values.address}
          onChange={handleChange}
          className={`mt-1 w-full px-4 py-2 text-lg text-gray-700 border ${errors.address ? 'border-red-500' : 'border-slate-300'} rounded focus:outline-none focus:ring-2 focus:ring-orange-500`}
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
      </label>

      <label className="block mb-4">
        City:
        <input
          type="text"
          name="city"
          value={values.city}
          onChange={handleChange}
          className={`mt-1 w-full px-4 py-2 text-lg text-gray-700 border ${errors.city ? 'border-red-500' : 'border-slate-300'} rounded focus:outline-none focus:ring-2 focus:ring-orange-500`}
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
      </label>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

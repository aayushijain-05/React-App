/* eslint-disable react/prop-types */

export const SecondStep = ({ nextStep, prevStep, handleChange, values, errors }) => {
  return (
    <div className="bg-white border border-slate-400 rounded-lg shadow-md p-6 mx-auto w-full max-w-md">
      <h2 className="text-xl font-bold text-center mb-4">Step 2: Contact Details</h2>

      <label className="block mb-4">
        Email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className={`mt-1 w-full px-4 py-2 text-lg text-gray-700 border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded focus:outline-none focus:ring-2 focus:ring-orange-500`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </label>

      <label className="block mb-4">
        Phone Number:
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          className={`mt-1 w-full px-4 py-2 text-lg text-gray-700 border ${errors.phone ? 'border-red-500' : 'border-slate-300'} rounded focus:outline-none focus:ring-2 focus:ring-orange-500`}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
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

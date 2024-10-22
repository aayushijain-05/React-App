/* eslint-disable react/prop-types */

import { ErrorMessage } from "./ErrorMessage";
import { FormInput } from "./FormInput";
import { Label } from "./Label";

const countries = [
  {
    name: "India",
    states: ["Maharashtra", "Punjab", "Haryana", "Uttar Pradesh"],
  },
  { name: "USA", states: ["Florida", "Georgia", "Alaska", "California"] },
  { name: "UK", states: ["England", "Scotland", "Wales", "Northern Ireland"] },
];

export const ShippingAddress = ({
  errors,
  address1,
  setAddress1,
  address2,
  setAddress2,
  landmark,
  setLandmark,
  selectedCountry,
  setSelectedCountry,
  selectedState,
  setSelectedState,
  city,
  setCity,
  pin,
  setPin,
  billingAddress,
  setBillingAddress,
}) => {
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState("");
  };

  return (
    <div className="px-4 py-1 rounded-lg">
      <div className="font-semibold text-gray-800 mb-2">Shipping Address</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <FormInput
            text={"Address 1"}
            required={true}
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
          {errors.address1 && (
            <ErrorMessage text={errors.address1}/>
          )}
        </div>
        <div>
          <FormInput
            text={"Address 2 "}
            required={true}
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </div>
        
        <div>
          <FormInput
            text={"Landmark"}
            required={true}
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Label text="Country" required></Label>
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className={`border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-800`}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.selectedCountry && (
           <ErrorMessage text={errors.selectedCountry}/>
          )}
        </div>
        <div>
          <Label text="State" required></Label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className={`border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-800`}
          >
            <option value="">Select State</option>
            {selectedCountry &&
              countries
                .find((c) => c.name === selectedCountry)
                ?.states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
          </select>
          {errors.selectedState && (
            <ErrorMessage text={errors.selectedState}/>
          )}
        </div>
        <div>
          <FormInput
            text={"City"}
            required={true}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {errors.city && (
            <ErrorMessage text={errors.city}/>
          )}
        </div>
      </div>

      <div>
        <FormInput
          text={"Pincode"}
          required={true}
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className={`w-1/3`}
        />

        {errors.pin && (
          <ErrorMessage text={errors.pin}/>
        )}
      </div>

      <div className="flex items-center mt-4 ">
        <input
          type="checkbox"
          id="billing-address-checkbox"
          className="mr-2 mt-1 cursor-pointer"
          checked={billingAddress}
          onChange={() => setBillingAddress(!billingAddress)}
        />
        <label
          htmlFor="billing-address-checkbox"
          className="cursor-pointer mt-1"
        >
          Billing address is same as shipping address
        </label>
      </div>
    </div>
  );
};

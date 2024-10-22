/* eslint-disable react/prop-types */
import { Label } from "./Label";
import { FormInput } from "./FormInput";
import { ErrorMessage } from "./ErrorMessage";

export const BillingAddress = ({
  errors,
  billingAddress,
  setAddress1,
  setAddress2,
  setLandmark,
  selectedCountry,
  setSelectedCountry,
  selectedState,
  setSelectedState,
  setCity,
  setPin,
  countries,
}) => {
  return (
    <div>
      {!billingAddress && (
        <div className="px-4 py-1 rounded-lg">
          <div className="font-semibold text-gray-800 mb-2">
            Billing Address
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <FormInput
                text={"Address 1"}
                required={true}
                onChange={(e) => setAddress1(e.target.value)}
              />
              {errors.address1 && <ErrorMessage text={errors.address1} />}
            </div>
            <div>
              <FormInput
                text={"Address 2 "}
                required={true}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>
            <div>
              <FormInput
                text={"Landmark"}
                required={true}
                onChange={(e) => setLandmark(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Label text="Country" required></Label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-800"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.selectedCountry && (
                <ErrorMessage text={errors.selectedCountry} />
              )}
            </div>
            <div>
              <Label text="State" required></Label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-800"
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
                <ErrorMessage text={errors.selectedState} />
              )}
            </div>
            <div>
              <FormInput
                text={"City"}
                required={true}
                onChange={(e) => setCity(e.target.value)}
              />
              {errors.city && <ErrorMessage text={errors.city} />}
            </div>
          </div>

          <div>
            <FormInput
              text={"Pincode"}
              required={true}
              onChange={(e) => setPin(e.target.value)}
              className={`w-1/3`}
            />
            {errors.pin && <ErrorMessage text={errors.pin} />}
          </div>
        </div>
      )}
    </div>
  );
};

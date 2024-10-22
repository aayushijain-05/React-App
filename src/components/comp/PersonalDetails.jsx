/* eslint-disable react/prop-types */

import { ErrorMessage } from "./ErrorMessage";
import { FormInput } from "./FormInput";

export const PersonalDetails = ({
  errors,
  firstname,
  setFirstname,
  lastname,
  setLastname,
  mobilenumber,
  setMobilenumber,
  email,
  setEmail,
}) => {
  return (
    <div>
      <div className="px-4 py-1 rounded-lg mt-2">
        <div className="font-semibold text-gray-800 mb-2">Personal Details</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <FormInput
              text={"First Name"}
              required={true}
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            {errors.firstname && <ErrorMessage text={errors.firstname} />}
          </div>
          <div>
            <FormInput
              text={"Last Name"}
              required={true}
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            {errors.lastname && <ErrorMessage text={errors.lastname} />}
          </div>
          <div>
            <FormInput
              text={"Mobile Number"}
              required={true}
              value={mobilenumber}
              onChange={(e) => setMobilenumber(e.target.value)}
            />
            {errors.mobilenumber && <ErrorMessage text={errors.mobilenumber} />}
          </div>
        </div>

        <div>
          <FormInput
            text={"Email Address"}
            placeholder={"Enter Email ID . . ."}
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-1/3`}
          />

          {errors.email && <ErrorMessage text={errors.email} />}
          {/* {errors.email && <ErrorMessage text={errors.email} />} */}
        </div>
      </div>
    </div>
  );
};

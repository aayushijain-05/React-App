/* eslint-disable react/prop-types */
import { useState } from "react";
import { PersonalDetails } from "../comp/PersonalDetails";
import { ShippingAddress } from "../comp/ShippingAddress";
import { BillingAddress } from "../comp/BillingAddress";
import { Button } from "../comp/Button";

const countries = [
  {
    name: "India",
    states: ["Maharashtra", "Punjab", "Haryana", "Uttar Pradesh"],
  },
  { name: "USA", states: ["Florida", "Georgia", "Alaska", "California"] },
  { name: "UK", states: ["England", "Scotland", "Wales", "Northern Ireland"] },
];

export const ConsigneeDetailsForm = ({ activeStep, setActiveStep }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [landmark, setLandmark] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [billingAddress, setBillingAddress] = useState(true);
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const newErrors = {};

    // const Properties = [
    //   {
    //     key:"firstName",
    // regexPattern:"dlkdkl",
    // placeholder:"First Name",
    // regexError:"lknfkln iejnioe eiojeife"

    //   }
    // ]

    // Properties.map((prop)=>{
    //   if(!prop.key){newErrors.prop.key = `${prop.placeholder} is required`}
    //   else{
    //     newErrors.prop.key = prop.regexError
    //   }
    // })

    if (!firstname) newErrors.firstname = "First Name is required.";
    else if (!/^[a-zA-Z\s]+$/.test(firstname))
      newErrors.firstname = "Please enter alphabetic  characters.";

    if (!lastname) newErrors.lastname = "Last Name is required.";
    else if (!/^[a-zA-Z\s]+$/.test(lastname))
      newErrors.lastname = "Please enter alphabetic  characters.";

    if (!mobilenumber) {
      newErrors.mobilenumber = "Mobile Number is required.";
    } else if (!/^[0-9\s()+()-]+$/.test(mobilenumber))
      newErrors.mobilenumber =
        "Only numbers,brackets, hyphen and + are allowed";
    // else if (mobilenumber.length !== 10) {
    //   newErrors.mobilenumber = "Mobile Number must be exactly 10 digits.";
    // }

    if (!email) {
      newErrors.email = "Email Address is required.";
    } else {
      const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegEx.test(email)) newErrors.email = "Email is not valid.";
    }

    if (!address1) newErrors.address1 = "Address 1 is required.";
    else if (!/^[@]+$/.test(address1))
      newErrors.address1 !=
        "Address 1 can only contain alphabets, numbers, commas, hyphens, slashes, hash symbols, ampersands, parentheses, underscores, periods, and spaces";

    if (!selectedCountry) newErrors.selectedCountry = "Country is required.";

    if (!selectedState) newErrors.selectedState = "State is required.";

    if (!city) newErrors.city = "City is required.";
    else if (!/^[a-zA-z\s]+$/.test(city))
      newErrors.city = "Only alphabets and spaces are allowed";

    if (!pin) {
      newErrors.pin = "Pincode is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log({
        firstname,
        lastname,
        mobilenumber,
        email,
        address1,
        address2,
        landmark,
        selectedCountry,
        selectedState,
        city,
        pin,
      });
      setActiveStep(3);
    }
  };

  return (
    <div>
      {activeStep == 2 && (
        <form
          onSubmit={handleChange}
          className="mt-4 bg-white space-y-6 border border-slate-200 p-3 rounded-md"
        >
          {/* Personal Details */}

          <PersonalDetails
            errors={errors}
            firstname={firstname}
            setFirstname={setFirstname}
            lastname={lastname}
            setLastname={setLastname}
            mobilenumber={mobilenumber}
            setMobilenumber={setMobilenumber}
            email={email}
            setEmail={setEmail}
          />

          {/* Shipping Address */}

          <ShippingAddress
            errors={errors}
            address1={address1}
            setAddress1={setAddress1}
            address2={address2}
            setAddress2={setAddress2}
            landmark={landmark}
            setLandmark={setLandmark}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            city={city}
            setCity={setCity}
            pin={pin}
            setPin={setPin}
            billingAddress={billingAddress}
            setBillingAddress={setBillingAddress}
          />
          {/* Billing Address */}

          <BillingAddress
            errors={errors}
            billingAddress={billingAddress}
            setAddress1={setAddress1}
            setAddress2={setAddress2}
            setLandmark={setLandmark}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            setCity={setCity}
            setPin={setPin}
            countries={countries}
          />

          <div className="flex justify-end mt-6">
            <Button type="submit" text="Continue"></Button>
          </div>
        </form>
      )}
    </div>
  );
};

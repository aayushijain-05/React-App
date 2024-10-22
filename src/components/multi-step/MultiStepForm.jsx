import { useState } from 'react';
import { Confirmation } from './Confirmation';
import { Success } from './Success';
import { FirstStep } from './FirstStep';
import { SecondStep } from './SecondStep';
import { ThirdStep } from './ThirdStep';

export const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {

    
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    else if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name can only contain letters.";
    }
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    else if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name can only contain letters.";
    }
    if (step === 2) {
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
      if (!formData.phone) newErrors.phone = "Phone number is required";
      else if (!/^[0-9]+$/.test(formData.phone)) {
        newErrors.phone = "Phone number can only contain numerics.";
      }
    }
    if (step === 3) {
      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.city) newErrors.city = "City is required";
      else if (!/^[a-zA-Z]+$/.test(formData.city)) {
        newErrors.city = "City can only contain letters.";
      }
    }
    return newErrors;
  };

  const nextStep = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setStep((prevStep) => prevStep + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    nextStep();
  };

  switch (step) {
    case 1:
      return (
        <FirstStep
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
          errors={errors}
        />
      );
    case 2:
      return (
        <SecondStep
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
          errors={errors}
        />
      );
    case 3:
      return (
        <ThirdStep
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
          errors={errors}
        />
      );
    case 4:
      return (
        <Confirmation
          prevStep={prevStep}
          values={formData}
          handleSubmit={handleSubmit}
        />
      );
    case 5:
      return <Success />;
    default:
      return (
        <FirstStep
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
          errors={errors}
        />
      );
  }
};

export default MultiStepForm;

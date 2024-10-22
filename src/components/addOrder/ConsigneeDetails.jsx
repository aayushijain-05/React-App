import { useState } from "react";
import { ConsigneeDetailsForm } from "./ConsigneeDetailsForm";
import { Consignor } from "./Consignor";
import { Shipment } from "./Shipment";
import { Shipping } from "./Shipping";
import Accordion from "../comp/Accordion";

export const ConsigneeDetails = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div>
      <div className="max-w-3xl mx-auto my-4 p-2 bg-white border-b-2 border-gray-200 shadow-md rounded-lg rounded-b-none text-sm">
        <Accordion
          text="Consignor Details"
          activeStep={activeStep}
          stepNumber={1}
          setActiveStep={setActiveStep}
          className={`ml-[520px]`}
          
        />
         <Consignor activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>

      {/* Consignee Details Section */}
      <div className="max-w-3xl mx-auto my-4 p-2 bg-white border-b-2 border-gray-200 shadow-md rounded-lg rounded-b-none text-sm">
        <Accordion
          text="Consignee Details"
          activeStep={activeStep}
          stepNumber={2}
          setActiveStep={setActiveStep}
          className={`ml-[515px]`}
        />

        <ConsigneeDetailsForm
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>

      {/* Shipment Information Section */}

      <div className="max-w-3xl mx-auto my-4 p-2 bg-white border-b-2 border-gray-200 shadow-md rounded-lg rounded-b-none text-sm">
        <Accordion
          text="Shipment Information"
          activeStep={activeStep}
          stepNumber={3}
          setActiveStep={setActiveStep}
          className={`ml-[488px]`}
        />

        <Shipment activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>

      {/* Select Shipping Partner Section */}
      <div className="max-w-3xl mx-auto my-4 p-2 bg-white border-b-2 border-gray-200 shadow-md rounded-lg rounded-b-none text-sm">
        <Accordion
          text="Select Shipping Partner"
          activeStep={activeStep}
          stepNumber={4}
          setActiveStep={setActiveStep}
          className={`ml-[490px]`}
        />

        <Shipping activeStep={activeStep} />
      </div>
    </div>
  );
};

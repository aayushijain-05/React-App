/* eslint-disable react/prop-types */

import { Button } from "../comp/Button";
import { Label } from "../comp/Label";

export const Consignor = ({ activeStep, setActiveStep }) => {
  return (
    <div>
      {activeStep == 1 && (
        <form className="space-y-2 bg-white border border-slate-200 p-4 rounded-md">
          <Label text="Select Customer"/>
          <select className="w-full border border-gray-300 p-2 mb-2 rounded-md">
            <option value="">Select Customer</option>
          </select>
          <div className="flex justify-end mt-6">
            <Button
              type="submit"
              text="Continue"
              onClick={() => {
                setActiveStep(2);
               
                
              }}
            />
          </div>
        </form>
      )}
    </div>
  );
};

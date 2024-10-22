/* eslint-disable react/prop-types */

import { Label } from "./Label";
import { Input } from "./Input";
import { ErrorMessage } from "./ErrorMessage";

export const BoxMeasure = ({
  deadWeight,
  setDeadWeight,
  length,
  setLength,
  breadth,
  setBreadth,
  height,
  setHeight,
  errors,
}) => {
  return (
    <div>
      <div className="font-semibold text-gray-800 m-0 mt-4">
        Box Measurements
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label className="" text="Dead Weight" required></Label>
          <div className="flex flex-row border border-gray-300 rounded ">
            <Input
              type="number"
              placeholder="Eg. 1.25"
              value={deadWeight}
              onChange={(e) => setDeadWeight(e.target.value)}
              className="border-none"
            />

            <span className=" px-3 py-2 border-l border-gray-300  bg-gray-200">
              kg
            </span>
          </div>
          {errors.deadWeight && <ErrorMessage text={errors.deadWeight} />}
        </div>
        <div>
          <Label className="" text="Length" required></Label>
          <div className="flex flex-row border border-gray-300 rounded">
            <Input
              type="number"
              placeholder="Eg. 10"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="border-none"
            />
            <span className=" px-3 py-2 border-l border-gray-300  bg-gray-200">
              cm
            </span>
          </div>
          {errors.length && <ErrorMessage text={errors.length} />}
        </div>
        <div>
          <Label className="" text="Breadth" required></Label>
          <div className="flex flex-row border border-gray-300 rounded">
            <Input
              type="number"
              placeholder="Eg. 10"
              value={breadth}
              onChange={(e) => setBreadth(e.target.value)}
              className="border-none"
            />
            <span className=" px-3 py-2 border-l border-gray-300  bg-gray-200">
              cm
            </span>
          </div>
          {errors.breadth && <ErrorMessage text={errors.breadth} />}
        </div>
        <div>
          <Label className="" text="Height" required></Label>
          <div className="flex flex-row border border-gray-300 rounded">
            <Input
              type="number"
              placeholder="Eg. 10"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border-none"
            />
            <span className=" px-3 py-2 border-l border-gray-300  bg-gray-200">
              cm
            </span>
          </div>
          {errors.height && <ErrorMessage text={errors.height} />}
        </div>
      </div>
    </div>
  );
};

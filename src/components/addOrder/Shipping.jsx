/* eslint-disable react/prop-types */

import { Button } from "../comp/Button";

export const Shipping = ({ activeStep }) => {
  return (
    <div>
      {activeStep == 4 && (
        <form className=" bg-white border border-slate-200 p-4 rounded-md">
          <p>
            All shipments via ShipGlobal services are
            <strong> Delivered Duty Paid (DDP)</strong>, hence
            <strong> no extra duty</strong>will be billed on the consignee or
            the shipper. Rates are inclusive of covid & fuel surcharge,
            exclusive of GST and ex-Delhi Hub.<br></br>
            <br></br>
            In case any doubt, please call/whatsapp at
            <span className="text-indigo-800 font-bold"> 011-422 77777</span>
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-32 h-16 bg-gray-200 border border-gray-400 rounded-md">
              <div className="flex flex-col mt-2">
                <div className="text-center font-semibold text-gray-600">
                  1 KG
                </div>
                <div className="text-center text-sm text-gray-600">
                  Dead Weight
                </div>
              </div>
            </div>
            <div className="w-36 h-16 bg-gray-200 border border-gray-400 rounded-md">
              <div className="flex flex-col mt-2">
                <div className="text-center font-semibold text-gray-600">
                  0.001 KG
                </div>
                <div className="text-center text-sm text-gray-600">
                  Volumetric Weight
                </div>
              </div>
            </div>
            <div className="w-32 h-16 bg-orange-100 border border-orange-400 rounded-md">
              <div className="flex flex-col mt-2">
                <div className="text-center font-semibold text-orange-600">
                  1 KG
                </div>
                <div className="text-center text-sm text-orange-600">
                  Billed Weight
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <p className="font-semibold">Showing 3 Results</p>
          </div>

          <div className="mt-2  overflow-hidden">
            <table className="">
              <tr className="grid grid-cols-4 py-2 w-[700px] border rounded-md mb-4px text-gray-400 bg-slate-100">
                <th className="">Courier Partner</th>
                <th className="">Delivery Time</th>
                <th className="">Shipment Rate</th>
                <th className="">Select</th>
              </tr>
              <tr className=" grid grid-cols-4 px-12 py-4 mt-2  w-[700px] border rounded-md mb-4px text-gray-500x">
                <td className="font-semibold">ShipGlobal WorldWide</td>
                <td className="ml-9">13 - 18 Days</td>
                <td className="ml-14">Rs. 3229</td>
                <td className="ml-28">
                  <input
                    className="border p-2 rounded-full accent-green-600 h-5 w-5 cursor-pointer"
                    type="Checkbox"
                    name=""
                    id=""
                  />
                </td>
              </tr>
              <tr className=" grid grid-cols-4 px-12 py-4 mt-2  w-[700px] border rounded-md mb-4px text-gray-500x">
                <td className="font-semibold">Fedex</td>
                <td className="ml-9">4 - 7 Days</td>
                <td className="ml-14">Rs. 3465</td>
                <td className="ml-28">
                  <input
                    className="border p-2 rounded-full accent-green-600 h-5 w-5 cursor-pointer"
                    type="Checkbox"
                    name=""
                    id=""
                  />
                </td>
              </tr>
              <tr className=" grid grid-cols-4 px-12 py-4 mt-2  w-[700px] border rounded-md mb-4px text-gray-500x">
                <td className="font-semibold">UPS</td>
                <td className="ml-9">4 - 7 Days</td>
                <td className="ml-14">Rs. 5785</td>
                <td className="ml-28">
                  <input
                    className="border p-2 rounded-full accent-green-600 h-5 w-5 cursor-pointer"
                    type="Checkbox"
                    name=""
                    id=""
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className="flex justify-end mt-8">
            <Button
              type="submit"
              text="Pay and Order"
              className={`rounded-md px-4 py-2 text-[14px] hover:bg-blue-900`}
            ></Button>
          </div>
        </form>
      )}
    </div>
  );
};

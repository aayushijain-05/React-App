/* eslint-disable react/prop-types */

import { useState } from "react";
import { Label } from "../comp/Label";
import { Input } from "../comp/Input";
import { BoxMeasure } from "../comp/BoxMeasure";
import { Button } from "../comp/Button";
import {FormInput} from "../comp/FormInput"

export const Shipment = ({ activeStep, setActiveStep }) => {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [invoiceCurrency, setInvoiceCurrency] = useState("INR");
  const [orderReferenceId, setOrderReferenceId] = useState("");
  const [iossNumber, setIossNumber] = useState("");
  const [deadWeight, setDeadWeight] = useState("");
  const [length, setLength] = useState("");
  const [breadth, setBreadth] = useState("");
  const [height, setHeight] = useState("");
  const [products, setProducts] = useState([
    {
      productName: "",
      sku: "",
      hsn: "",
      qty: "",
      unitPrice: "",
      igst: 0,
    },
  ]);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!invoiceNumber) newErrors.invoiceNumber = "Invoice Number is required.";
    else if (!/^[a-zA-Z0-9\s]+$/.test(invoiceNumber))
      newErrors.invoiceNumber = "Please enter alphanumeric characters";
    else if (invoiceNumber.length > 30) {
      newErrors.mobilenumber = "Strings must contain almost 30 characters.";
    }

    if (!invoiceDate) newErrors.invoiceDate = "Invoice Date is required.";

    if (!deadWeight || deadWeight <= 0)
      newErrors.deadWeight = "Weight must be atleast 0.01kg.";

    if (!length || length <= 0)
      newErrors.length = "Length must be atleast 1cm.";
    if (!breadth || breadth <= 0)
      newErrors.breadth = "Breadth must be atleast 1cm.";
    if (!height || height <= 0)
      newErrors.height = "Height must be atleast 1cm.";

    products.forEach((product, index) => {
      if (!product.productName) newErrors[`productName_${index}`] = "Required.";
      if (!product.hsn) newErrors[`hsn_${index}`] = "HSN must be 8 digits long";
      if (!product.qty || product.qty <= 0)
        newErrors[`qty_${index}`] = "Required";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddProduct = () => {
    setProducts([
      ...products,
      {
        productName: "",
        sku: "",
        hsn: "",
        qty: "",
        unitPrice: "",
        igst: 0,
      },
    ]);
  };

  const handleRemoveProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleProductChange = (index, e, productName) => {
    const updatedProducts = [...products];
    console.log(productName);
    console.log(updatedProducts[index], "skbjk");
    updatedProducts[index][productName] = e.target.value;
    setProducts(updatedProducts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({
        invoiceNumber,
        invoiceDate,
        invoiceCurrency,
        orderReferenceId,
        iossNumber,
        deadWeight,
        length,
        breadth,
        height,
        products,
      });
      setActiveStep(4);
    }
  };

  return (
    <div>
      {activeStep == 3 && (
        <form
          onSubmit={handleSubmit}
          className=" bg-white border border-slate-200 p-4 rounded-md"
        >
          {/* Invoice Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              
              <FormInput
              text={"Invoice Number"}
              required={true}
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              
            />
              {errors.invoiceNumber && (
                <p className="text-red-500 text-xs">{errors.invoiceNumber}</p>
              )}
            </div>
            <div>
              
              <FormInput
              text={"Invoice Date"}
              required={true}
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className={` pb-1.5 `}
            />
              {errors.invoiceDate && (
                <p className="text-red-500 text-xs">{errors.invoiceDate}</p>
              )}
            </div>
            <div>
              <Label className="" text="Invoice Currency" required></Label>
              <select
                value={invoiceCurrency}
                onChange={(e) => setInvoiceCurrency(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-800"
              >
                <option value="INR">INR</option>
              </select>
            </div>
          </div>

          {/* Order Reference ID and IOSS Number */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <FormInput
              text={"Order/Reference ID"}
              required={true}
              value={orderReferenceId}
              onChange={(e) => setOrderReferenceId(e.target.value)}
              
            />
            </div>
            <div>
              <Label className="" text="IOSS Number"></Label>
              <Input
                type="text"
                placeholder="Enter IOSS Number . . ."
                value={iossNumber}
                onChange={(e) => setIossNumber(e.target.value)}
                className=""
              />
              
            </div>
          </div>

          {/* Box Measurements */}
          <BoxMeasure
            deadWeight={deadWeight}
            setDeadWeight={setDeadWeight}
            length={length}
            setLength={setLength}
            breadth={breadth}
            setBreadth={setBreadth}
            height={height}
            setHeight={setHeight}
            errors={errors}
          />

          {/* Item Details */}
          <div className="font-semibold text-gray-800 mt-4 ">
            Item(s) Details
            <span className="m-1 text-[10px] font-normal p-0.5 text-red-500 bg-orange-50 rounded-md">
              Items that can export
            </span>
          </div>
          {products.map((product, index) => (
            <div key={index} className="p-1 mb-2">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-1">
                <div>
                  <Label className="" text="Product Name" required></Label>
                  <Input
                    type="text"
                    name={product.productName} // name={product.productName}
                    placeholder="Enter Product Name . . ."
                    value={product.productName}
                    onChange={(e) =>
                      handleProductChange(index, e, "productName")
                    }
                    className=""
                  />
                  {errors[`productName_${index}`] && (
                    <p className="text-red-500 text-xs">
                      {errors[`productName_${index}`]}
                    </p>
                  )}
                </div>
                <div>
                  <Label className="" text="SKU"></Label>
                  <Input
                    type="text"
                    name={product.sku}
                    placeholder="Enter SKU . . ."
                    value={product.sku}
                    onChange={(e) => handleProductChange(index, e)}
                    className=""
                  />
                </div>
                <div>
                  <Label className="" text="HSN" required></Label>
                  <Input
                    type="text"
                    name={product.hsn}
                    placeholder="Enter HSN . . ."
                    value={product.hsn}
                    onChange={(e) => handleProductChange(index, e)}
                    className=""
                  />
                  {errors[`hsn_${index}`] && (
                    <p className="text-red-500 text-xs">
                      {errors[`hsn_${index}`]}
                    </p>
                  )}
                </div>
                <div>
                  <Label className="" text="Qty" required></Label>
                  <Input
                    type="number"
                    name={product.qty}
                    placeholder="Enter Qty . . ."
                    value={product.qty}
                    onChange={(e) => handleProductChange(index, e)}
                    className={` rounded-l`}
                  />
                  {errors[`qty_${index}`] && (
                    <p className="text-red-500 text-xs">
                      {errors[`qty_${index}`]}
                    </p>
                  )}
                </div>
                <div>
                  <Label className="" text="Unit Price (INR)" required></Label>
                  <Input
                    type="number"
                    name={product.unitPrice}
                    placeholder="Enter Unit Price (INR) . . ."
                    value={product.unitPrice}
                    onChange={(e) => handleProductChange(index, e)}
                    className=""
                  />
                  {errors[`unitPrice_${index}`] && (
                    <p className="text-red-500 text-xs">
                      {errors[`unitPrice_${index}`]}
                    </p>
                  )}
                </div>
                <div>
                  <Label className="" text="IGST" required></Label>
                  <div className="flex items-center space-x-4">
                    <select
                      name={product.igst}
                      value={product.igst}
                      onChange={(e) => handleProductChange(index, e)}
                      className="border border-gray-300 p-2 rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-800 cursor-not-allowed"
                      disabled
                    >
                      <option value="0">0%</option>
                      <option value="10">10%</option>
                      <option value="20">20%</option>
                    </select>
                    {index > 0 && (
                      <button
                        onClick={() => handleRemoveProduct(index)}
                        className="ml-1 text-red-600"
                      >
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h2 className="font-semibold text-end mr-4">
            Total Price : INR 0.00
          </h2>
          <div className="flex flex-row justify-between">
            <button
              type="button"
              className="text-indigo-800 font-semibold ml-4"
              onClick={handleAddProduct}
            >
              +{" "}
              <span className="text-indigo-800 font-semibold underline">
                Add Another Product
              </span>
            </button>
          </div>

          <div className="flex justify-end mt-6">
            <Button type="submit" text="Select Shipping"></Button>
          </div>
        </form>
      )}
    </div>
  );
};

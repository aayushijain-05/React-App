/* eslint-disable react/prop-types */

const Accordion = ({
  text,
  activeStep,
  stepNumber,
  setActiveStep,
  className,
  
}) => {
  return (
    <div>
      {activeStep > stepNumber ? (
        <div className="flex items-center cursor-pointer">
          <span
            className={`bg-green-500 text-black rounded-md w-6 h-6 flex items-center justify-center mr-3`}
          >
            <i className="fa fa-check text-white"></i>
          </span>
          <button className="text-md text-gray-500 font-medium mb-4 mt-3">
            {text}
          </button>
          <span>
            {/* check condition here for button  */}
            <button
              className={` underline text-indigo-800 ${className}`}
              onClick={() => {
                setActiveStep(stepNumber);
              }}
            >
              change
            </button>
            {/* : other case */}
          </span>
        </div>
      ) : (
        <div className="flex items-center cursor-pointer">
          <span
            className={`bg-gray-100 text-black rounded-md w-6 h-6 flex items-center justify-center mr-3`}
          >
            {stepNumber}
          </span>
          <button className="text-md text-gray-500 font-medium mb-4 mt-3">
            {text}
          </button>
          <span>
            <i className={`'fa-solid fa-chevron-up'   ${className}`}></i>
          </span>
        </div>
      )}
    </div>
  );
};

export default Accordion;

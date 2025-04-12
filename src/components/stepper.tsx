import SignIcon from "./icon/signIcon";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                currentStep > index
                  ? "bg-emerald-600 border-emerald-600 text-white"
                  : currentStep === index + 1
                  ? "border-emerald-600 text-emerald-600"
                  : "border-gray-300 text-gray-300"
              }`}
            >
              {currentStep > index ? <SignIcon /> : <span>{index + 1}</span>}
            </div>
            <span
              className={`mt-2 text-xs ${
                currentStep >= index + 1
                  ? "text-emerald-600 font-medium"
                  : "text-gray-500"
              }`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <div className="hidden sm:block absolute left-0 right-0">
                <div
                  className={`h-0.5 w-full ${
                    currentStep > index + 1 ? "bg-emerald-600" : "bg-gray-300"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="hidden sm:flex mt-4">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 ${
              index === steps.length - 1 ? "" : "mr-1"
            } ${
              currentStep > index + 1
                ? "bg-emerald-600"
                : currentStep === index + 1
                ? "bg-emerald-200"
                : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Stepper;

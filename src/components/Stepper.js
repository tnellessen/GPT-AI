import React, { useEffect, useState } from "react";
import "./style.css";

const steps = [
  { label: "Business Overview", color: "#14142b" },
  { label: "Goals & Offer Clarity", color: "#14142b" },
  { label: "Marketing & Advertising Experience", color: "#14142b" },
  { label: "Infrastructure & Tech Stack", color: "#14142b" },
  { label: "Timeline & Fit", color: "#14142b" },
];

const Stepper = ({ currentStep }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [stepIndex, setStepIndex] = useState(0);

  const isMobile = windowWidth <= 555;
  const visibleSteps = isMobile ? steps.slice(stepIndex, stepIndex + 3) : steps;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLeft = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

  const handleRight = () => {
    if (stepIndex + 2 < steps.length) setStepIndex(stepIndex + 1);
  };

  return (
    <div className="stepper-wrapper">
      {isMobile && (
        <button className="arrow-btn left" onClick={handleLeft} disabled={stepIndex === 0}>
          ◀
        </button>
      )}

      <div className="custom-stepper">
        {visibleSteps.map((step, index) => {
          const realIndex = isMobile ? stepIndex + index : index;

          return (
            <div key={realIndex} className="step-item">
              <div className="circle-wrapper">
                <div
                  className={`step-circle ${
                    realIndex === currentStep
                      ? "current"
                      : realIndex < currentStep
                      ? "filled"
                      : ""
                  }`}
                ></div>
                <div className="step-label" style={{ color: step.color }}>
                  {step.label}
                </div>
              </div>

              {realIndex < steps.length - 1 && (
                <div
                  className={`step-line ${
                    realIndex === currentStep
                      ? "gradient"
                      : realIndex < currentStep
                      ? "filled"
                      : ""
                  }`}
                ></div>
              )}
            </div>
          );
        })}
      </div>

      {isMobile && (
        <button
          className="arrow-btn right"
          onClick={handleRight}
          disabled={stepIndex + 2 >= steps.length}
        >
          ▶
        </button>
      )}
    </div>
  );
};

export default Stepper;

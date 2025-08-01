import  { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Stepper from "./Stepper";
import {updateFormData, clearAiResponse, submitFormData,} from "../redux/formSlice";
import "./style.css";


const stepTitles = [
  "Business Overview",
  "Goals & Offer Clarity",
  "Marketing & Advertising Experience",
  "Infrastructure & Tech Stack",
  "Timeline & Fit",
];

const MultiStepForm = () => {
  
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const { formData, aiResponse, isSubmitting, error } = useSelector(
    (state) => state.form
  );
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox" && name === "access") {
      const current = formData.access || [];
      const updated = checked
      ? [...new Set([...current, value])]
      : current.filter((v) => v !== value);
      dispatch(updateFormData({ [name]: updated }));
    } else {
      dispatch(updateFormData({ [name]: value }));
    }
  };
  
  const nextStep = () => setStep((prev) => Math.min(prev + 1, stepTitles.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitFormData(formData));
    
  };

  
  return (
    <div className="outside-container">
      <div className="form-container pd-1">
        <Stepper currentStep={step - 1}/>
        <form onSubmit={handleSubmit}>
          <h2 className="form-title-header">{stepTitles[step - 1]}</h2>
          {step === 1 && <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />}
          {step === 2 && <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
          {step === 3 && <Step3 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
          {step === 4 && <Step4 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
          {step === 5 && <Step5 formData={formData} handleChange={handleChange} prevStep={prevStep} handleSubmit={handleSubmit} />}
        </form>
      </div>

      {isSubmitting && (
        <div className="overlay-2">
          <div className="loader-box">
            <div className="spinner"></div>
            <p>Submitting your form...</p>
          </div>
        </div>
      )}

{aiResponse && (
  <div className="max-contain">
  <div className="confirmation-overlay">  
    <div className="confirmation-content">
      <h1 className="confirmation-title">Thank you! 🎉</h1>
      <p className="confirmation-subtitle">
        We’ve received your details and generated a personalized strategy below.
      </p>
      <p>Let’s take your business to the next level 🚀</p>
      <div className="download-card">
        <h2>Here’s your AI-Generated Strategy 👇</h2>
        <p className="ai-response-text">{aiResponse}</p>
        <button className="download-btn" onClick={() => {dispatch(clearAiResponse()); window.location.reload(); }}>Close</button>
      </div>
    </div>
  </div>
  </div>
)}

      {error && !aiResponse && (
        <div className="overlay form-wrapper-resp">
          <div className="response-box-lft">
            <div className="inner-box-sub">
              <h1 style={{ color: "red" }}>{error}</h1>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default MultiStepForm;
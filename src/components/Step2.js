import React from "react";
import "./style.css"; // make sure this CSS file is created
import { useDispatch, useSelector } from "react-redux";
import { ClearErrors, setErrors } from "../redux/formSlice";


const validateStep2 = (formData) => {
  const errors = {};
  if (!formData.promoting?.trim()) errors.promoting = "This is required";
  if (!formData.coreoffer?.trim()) errors.coreoffer = "This is required";
  if (!formData.idealcustomer?.trim()) errors.idealcustomer = "This is required";
  if (!formData.differentiate?.trim()) errors.differentiate = "This is required";
  if (!formData.shortterm?.trim()) errors.shortterm = "This is required";
  if (!formData.success?.trim()) errors.success = "This is required";
 return errors;
};
const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {
  const dispatch = useDispatch();
const errors = useSelector((state) => state.form.errors);
const handleNext = () => {
  const validationErrors = validateStep2(formData);
  if (Object.keys(validationErrors).length > 0) {
    dispatch(setErrors(validationErrors));
    return;
  }
  dispatch(ClearErrors());
  nextStep();
};
  return (
    <div className="form-container">

      <div className="form-section">
        <div className="form-column">
          <div className="form-group">
            <label>What product or service are you currently promoting (or plan to promote)?<span className="clor-red"> *</span></label>
            <input type="text" name="promoting" value={formData.promoting || ""} onChange={handleChange} required/>
            {errors.promoting && <span className="error-text">{errors.promoting}</span>}
          </div>

          <div className="form-group">
            <label>What is your core offer?<span className="clor-red"> *</span></label>
            <input type="text" name="coreoffer" value={formData.coreoffer || ""} onChange={handleChange} required/>
            {errors.coreoffer && <span className="error-text">{errors.coreoffer}</span>}
          </div>
          <div className="form-group">

            <label>Who is your ideal customer? (Demographics, interests, pain points, etc.)<span className="clor-red"> *</span></label>
            <input type="text" name="idealcustomer" value={formData.idealcustomer || ""} onChange={handleChange}/>
            {errors.idealcustomer && <span className="error-text">{errors.idealcustomer}</span>}
          </div>
          <div className="form-group">

            <label>What differentiates your business from your competitors? <span className="clor-red"> *</span></label>
            <input type="text" name="differentiate" value={formData.differentiate || ""} onChange={handleChange} required/>
            {errors.differentiate && <span className="error-text">{errors.differentiate}</span>}
          </div>
          <div className="form-group">

            <label>What are your short-term goals with paid ads or email marketing? <span className="clor-red"> *</span></label>
            <input type="text" name="shortterm" value={formData.shortterm || ""} onChange={handleChange} required/>
            {errors.shortterm && <span className="error-text">{errors.shortterm}</span>}
          </div>
          <div className="form-group">

            <label>What does success look like to you 90 days from now?  <span className="clor-red"> *</span></label>
            <input type="text" name="success" value={formData.success || ""} onChange={handleChange} required/>
            {errors.success && <span className="error-text">{errors.success}</span>}
          </div>
        </div>

      </div>
      <div className="form-nav-btn">
            <div className="form-nav-1">
      <button type="button" className="button_next" onClick={prevStep}>Back</button>
      </div>
            <div className="form-nav-1">
        <button type="button" className="button_next" onClick={handleNext}>
          Save & Next
        </button>
      </div>
      </div>
    </div>
  );
};

export default Step2;

import React from "react";
import "./style.css";
import { ClearErrors, setErrors } from "../redux/formSlice";
import { useDispatch, useSelector } from "react-redux";



const validateStep1 = (formData) => {
  const errors = {};
  if (!formData.fullname?.trim()) errors.fullname = "Full name is required";
  if (!formData.email?.trim()) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email";

  if (!formData.companyname?.trim()) errors.companyname = "Company name is required";
  if (!formData.companywebsite?.trim()) errors.companywebsite = "Website is required";
  if (!formData.industry?.trim()) errors.industry = "Industry is required";
  if (!formData.working?.trim()) errors.working = "Business description is required";
  if (!formData.duration?.trim()) errors.duration = "This is required";
  if (!formData.monthlyrevenue?.trim()) errors.monthlyrevenue = "Monthly revenue is required";
  if (!formData.targetrevenue?.trim()) errors.targetrevenue = "Target revenue is required";

  return errors;
};
const Step1 = ({ formData, handleChange, nextStep }) => {
const dispatch = useDispatch();
const errors = useSelector((state) => state.form.errors);

const handleNext = () => {
  const validationErrors = validateStep1(formData);
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
            <label>Full Name  <span className="clor-red">*</span></label>
            <input
              type="text"
              placeholder="Enter your full name"
              name="fullname"
              value={formData.fullname || ""}
              onChange={handleChange}
            />
            {errors.fullname && <span className="error-text">{errors.fullname}</span>}
          </div>

          <div className="form-group">
            <label>Email Address  <span className="clor-red">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Phone Number (Optional)</label>
            <input
              type="number"
              name="phonenumber"
              value={formData.phonenumber || ""}
              onChange={handleChange}
            />
            {errors.phonenumber && <span className="error-text">{errors.phonenumber}</span>}
          </div>

          <div className="form-group">
            <label>Company Name  <span className="clor-red">*</span></label>
            <input
              type="text"
              name="companyname"
              value={formData.companyname || ""}
              onChange={handleChange}
            />
            {errors.companyname && <span className="error-text">{errors.companyname}</span>}
          </div>

          <div className="form-group">
            <label>Company Website  <span className="clor-red">*</span></label>
            <input
              type="text"
              name="companywebsite"
              value={formData.companywebsite || ""}
              onChange={handleChange}
            />
            {errors.companywebsite && <span className="error-text">{errors.companywebsite}</span>}
          </div>

          <div className="form-group">
            <label>What industry are you in?  <span className="clor-red">*</span></label>
            <input
              type="text"
              name="industry"
              placeholder="E.g., eCommerce, Coaching, SaaS, Local Services, Real Estate, etc."
              value={formData.industry || ""}
              onChange={handleChange}
            />
            {errors.industry && <span className="error-text">{errors.industry}</span>}
          </div>
        </div>

        <div className="form-column">
          <div className="form-group">
            <label>Briefly describe what your business does.  <span className="clor-red">*</span></label>
            <textarea
              className="textarea-step1"
              name="working"
              value={formData.working || ""}
              onChange={handleChange}
            />
            {errors.working && <span className="error-text">{errors.working}</span>}
          </div>

          <div className="form-group">
            <label>How long have you been in business?  <span className="clor-red">*</span></label>
            <select
              name="duration"
              value={formData.duration || ""}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Less than 1 year</option>
              <option>1–3 years</option>
              <option>3–5 years</option>
              <option>5+ years</option>
            </select>
            {errors.duration && <span className="error-text">{errors.duration}</span>}
          </div>

          <div className="form-group">
            <label>
              What is your current monthly revenue?  (Confidential)  <span className="clor-red">*</span>
            </label>
            <select
              name="monthlyrevenue"
              value={formData.monthlyrevenue || ""}
              onChange={handleChange}
            >

              <option value="">Select</option>
              <option>Less than $10k</option>
              <option>$10k–$50k</option>
              <option>$50k–$100k</option>
              <option>$100k–$500k</option>
              <option>$500k+</option>
            </select>
            {errors.monthlyrevenue && <span className="error-text">{errors.monthlyrevenue}</span>}
          </div>

          <div className="form-group">
            <label>
              What is your target monthly revenue over the next 6–12 months?  <span className="clor-red">*</span>
            </label>
            <input
              type="text"
              name="targetrevenue"
              value={formData.targetrevenue || ""}
              onChange={handleChange}
            />
            {errors.targetrevenue && <span className="error-text">{errors.targetrevenue}</span>}
          </div>
        </div>
      </div>

      <div className="form-nav-1">
        <button type="button" className="button_next" onClick={handleNext}>
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
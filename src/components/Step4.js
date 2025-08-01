import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setErrors, ClearErrors } from "../redux/formSlice";

// Step1 validation function
const ValidateStep1 = (formData) => {
  const errors = {};

  if (!formData.ecommerceplatform?.trim()) {
    errors.ecommerceplatform = "This is required";
  }

  if (!formData.emailmarketing?.trim()) {
    errors.emailmarketing = "This is required";
  }

  // Optional: check at least one access checkbox is selected
  if (!formData.access || formData.access.length === 0) {
    errors.access = "Select at least one access option";
  }

  return errors;
};

const Step4 = ({ formData, handleChange, nextStep, prevStep }) => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.form.errors);

  const handleNext = () => {
    const validationErrors = ValidateStep1(formData);
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
            <label>What eCommerce or CMS platform do you use? <span className="clor-red">*</span> </label>
            <input
              type="text"
              placeholder="E.g., Shopify, WordPress, ClickFunnels, Webflow, Kajabi, etc."
              name="ecommerceplatform"
              value={formData.ecommerceplatform || ""}
              onChange={handleChange}
              required
            />
            {errors.ecommerceplatform && (
              <span className="error-text">{errors.ecommerceplatform}</span>
            )}
          </div>

          <div className="form-group">
            <label>Which email marketing platform are you using (if any)? <span className="clor-red">*</span></label>
            <input
              type="text"
              name="emailmarketing"
              placeholder="E.g., Klaviyo, Mailchimp, ActiveCampaign, etc."
              value={formData.emailmarketing || ""}
              onChange={handleChange}
              required
            />
            {errors.emailmarketing && (
              <span className="error-text">{errors.emailmarketing}</span>
            )}
          </div>

          <div className="form-group-1">
            <label>Do you have access to: <span className="clor-red">*</span></label>

            <label>
              <input
                type="checkbox"
                name="access"
                value="meta_business"
                checked={formData.access?.includes("meta_business") || false}
                onChange={handleChange}
              />
              Your Meta Business Manager
            </label>

            <label>
              <input
                type="checkbox"
                name="access"
                value="tiktok"
                checked={formData.access?.includes("tiktok") || false}
                onChange={handleChange}
              />
              TikTok Ads Manager
            </label>

            <label>
              <input
                type="checkbox"
                name="access"
                value="emailloginpl"
                checked={formData.access?.includes("emailloginpl") || false}
                onChange={handleChange}
              />
              Email platform login
            </label>

            <label>
              <input
                type="checkbox"
                name="access"
                value="productcatalog"
                checked={formData.access?.includes("productcatalog") || false}
                onChange={handleChange}
              />
              Product catalog/feed
            </label>

            {errors.access && (
              <span className="error-text">{errors.access}</span>
            )}
          </div>
        </div>
      </div>

      <div className="form-nav-btn">
        <div className="form-nav-1">
          <button type="button" className="button_next" onClick={prevStep}>
            Back
          </button>
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

export default Step4;

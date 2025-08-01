import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setErrors, ClearErrors } from "../redux/formSlice";

// Validation function for final step
const ValidateFinalStep = (formData) => {
  const errors = {};

  if (!formData.capmpaingslaunch?.trim()) {
    errors.capmpaingslaunch = "This is required";
  }

  if (!formData.budgetplanning?.trim()) {
    errors.budgetplanning = "This is required";
  }

  if (!formData.lookingfor?.trim()) {
    errors.lookingfor = "This is required";
  }

  if (!formData.howhear?.trim()) {
    errors.howhear = "This is required";
  }

  if (!formData.shareus?.trim()) {
    errors.shareus = "This is required";
  }

  return errors;
};

const Step5 = ({ formData, handleChange, handleSubmit, prevStep }) => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.form.errors);

const handleFinalSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = ValidateFinalStep(formData);
  if (Object.keys(validationErrors).length > 0) {
    dispatch(setErrors(validationErrors));
    return;
  }
  dispatch(ClearErrors());
  await handleSubmit(e);
};

  return (
    <div className="form-container">
      <div className="form-section">
        <div className="form-column">
          <div className="form-group">
            <label>How soon are you looking to launch or scale your campaigns? <span className="clor-red">*</span></label>
            <select
              name="capmpaingslaunch"
              value={formData.capmpaingslaunch || ""}
              onChange={handleChange}
            >
              <option value="">select</option>
              <option>Immediately</option>
              <option>1–2 weeks</option>
              <option>1 month</option>
              <option>2+ months</option>
            </select>
            {errors.capmpaingslaunch && (
              <span className="error-text">{errors.capmpaingslaunch}</span>
            )}
          </div>

          <div className="form-group">
            <label>
              What budget are you planning to allocate monthly for growth
              marketing (ads + creative + strategy)? <span className="clor-red">*</span>
            </label>
            <select
              name="budgetplanning"
              value={formData.budgetplanning || ""}
              onChange={handleChange}
            >
              <option value="">select</option>
              <option>&lt;$3k </option>
              <option>$3k–$10k </option>
              <option>$10k–$30k </option>
              <option>$30k+ </option>
            </select>
            {errors.budgetplanning && (
              <span className="error-text">{errors.budgetplanning}</span>
            )}
          </div>

          <div className="form-group">
            <label>Are you looking for: <span className="clor-red">*</span></label>
            <select
              name="lookingfor"
              value={formData.lookingfor || ""}
              onChange={handleChange}
            >
              <option value="">select</option>
              <option>Done-for-you ad management</option>
              <option>Consulting/Strategy only</option>
              <option>Email marketing services</option>
              <option>Creative direction/UGC support</option>
              <option>Full funnel buildout</option>
            </select>
            {errors.lookingfor && (
              <span className="error-text">{errors.lookingfor}</span>
            )}
          </div>

          <div className="form-group">
            <label>How did you hear about Metatik Digital? <span className="clor-red">*</span></label>
            <input
              type="text"
              name="howhear"
              placeholder="Referral, social media, podcast, Google search, etc."
              value={formData.howhear || ""}
              onChange={handleChange}
              required
            />
            {errors.howhear && (
              <span className="error-text">{errors.howhear}</span>
            )}
          </div>

          <div className="form-group">
            <label>Any additional context you'd like to share with us? <span className="clor-red">*</span></label>
            <input
              type="text"
              name="shareus"
              value={formData.shareus || ""}
              onChange={handleChange}
              required
            />
            {errors.shareus && (
              <span className="error-text">{errors.shareus}</span>
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
          <button
            className="button_next"
            type="submit"
            onClick={handleFinalSubmit}
            
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5;

import React from "react";
import "./style.css"; // make sure this CSS file is created
import { useDispatch, useSelector } from "react-redux";
import { ClearErrors, setErrors } from "../redux/formSlice";


const ValidateStep3= (formData) =>{
  const errors ={};
  if (!formData.runads?.trim()) errors.runads = "This is required";
 if (!formData.access || formData.access.length === 0) errors.access = "This is required";
  if (!formData.adspent?.trim()) errors.adspent = "This is required";
  if (!formData.experienceagency?.trim()) errors.experienceagency = "This is required";
  if (!formData.marketingteam?.trim()) errors.marketingteam = "This is required";
  return errors;
}
const Step3 = ({ formData, handleChange, nextStep, prevStep }) => {
  const dispatch = useDispatch();
const errors = useSelector((state) => state.form.errors);
const handleNext = () => {
  const validationErrors = ValidateStep3(formData);
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
          <div className="form-group-1">
            <label>Have you run paid ads before? <span className="clor-red">*</span></label>
            <div className="">
            <label>
            <input type="radio" id="yes"  name="runads" value="yes" checked={formData.runads === "yes"}  onChange={handleChange} required/>
            Yes</label>
            <label>
            <input type="radio"  id="no" name="runads" value="no" checked={formData.runads==="no"} onChange={handleChange} required/>
            No</label>
            {errors.runads && <span className="error-text">{errors.runads}</span>}

          </div>
          </div>


          <div className="form-group-1">
            <label>If yes, which platforms have you advertised on? <span className="clor-red">*</span></label>
            <div>
            <input type="checkbox" name="access" value="platforms" checked={formData.access?.includes("platforms") || false} onChange={handleChange} required/>
            <label>Meta (Facebook/Instagram)</label>
            </div>
            <div>
            <input type="checkbox" name="access" value="tiktok1" checked={formData.access?.includes("tiktok1") || false} onChange={handleChange} required/>
            <label>TikTok </label>
            </div>
            <div>
            <input type="checkbox" name="access" value="google" checked={formData.access?.includes("google") || false} onChange={handleChange} required/>
            <label>Google </label>
            </div>
            <div>
            <input type="checkbox" name="access" value="youtube" checked={formData.access?.includes("youtube") || false} onChange={handleChange} required/>
            <label>YouTube </label>
            </div>  
            <div>
            <input type="checkbox" name="access" value="linkedin" checked={formData.access?.includes("linkedin") || false} onChange={handleChange} required/>
            <label>LinkedIn </label>
            </div>
            <div>
            <input type="checkbox" name="access" value="other" checked={formData.access?.includes("other") || false} onChange={handleChange} required/>
            <label>Other </label>
            </div>
            {errors.access && <span className="error-text">{errors.access}</span>}

          </div>
          <div className="form-group">

            <label>What’s your average monthly ad spend? <span className="clor-red">*</span></label>
            <select
              name="adspent"
              value={formData.adspent || ""}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option> &lt; $1k </option>
              <option>$1k–$5k </option>
              <option>$5k–$20k </option>
              <option>$20k–$100k </option>
              <option>$100k+ </option>
            </select>
            {errors.adspent && <span className="error-text">{errors.adspent}</span>}

          </div>
          <div className="form-group-1">
            <label>Do you have any of the following in place? <span className="clor-red">*</span> </label>
            <label>
            <input type="checkbox" name="access" value="pixel/conversion" checked={formData.access?.includes("pixel/conversion") || false} onChange={handleChange} required/>
            Pixel/Conversion tracking setup </label>
            <label>
            <input type="checkbox" name="access" value="emaillist" checked={formData.access?.includes("emaillist") || false} onChange={handleChange} required/>
            Email list  </label>
            <label>
            <input type="checkbox" name="access" value="activeemail" checked={formData.access?.includes("activeemail") || false} onChange={handleChange} required/>
            Active email campaigns </label>
            <label>
            <input type="checkbox" name="access" value="leadmagnet" checked={formData.access?.includes("leadmagnet") || false} onChange={handleChange} required/>
            Lead magnet/funnel  </label>
            <label>
            <input type="checkbox" name="access" value="ugccreative" checked={formData.access?.includes("ugccreative") || false} onChange={handleChange} required/>
            UGC/creative assets  </label>
            <label>
            <input type="checkbox" name="access" value="contentplan" checked={formData.access?.includes("contentplan") || false} onChange={handleChange} required/>
            Content plan/calendar </label>
            <label>
            <input type="checkbox" name="access" value="Offerlanding" checked={formData.access?.includes("Offerlanding") || false} onChange={handleChange} required/>
            Offer landing page </label>


            {errors.access && <span className="error-text">{errors.access}</span>}

          </div>
          <div className="form-group">

            <label>Have you worked with an agency or media buyer before? If yes, how was the experience? <span className="clor-red">*</span> </label>
            <input type="text" name="experienceagency" value={formData.experienceagency || ""} onChange={handleChange} required/>
            {errors.experienceagency && <span className="error-text">{errors.experienceagency}</span>}

          </div>
          <div className="form-group-1">

            <label>Do you currently have an in-house marketing team? <span className="clor-red">*</span></label>
            <div>
            <label> 
            <input type="radio" name="marketingteam" value="yes" checked={formData.marketingteam === "yes"} onChange={handleChange} required/> Yes</label>
            <label> 
            <input type="radio" name="marketingteam" value="no" checked={formData.marketingteam === "no"} onChange={handleChange} required/> No</label>
            {errors.marketingteam && <span className="error-text">{errors.marketingteam}</span>}
            
            </div>
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

export default Step3;
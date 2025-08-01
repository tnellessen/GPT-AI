// formSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const submitFormData = createAsyncThunk(
  "form/submitFormData",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch("https://backend-bt48.onrender.com/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        return rejectWithValue(result.message || "Submission failed.");
      }

return result.gptresponse || "Form submitted successfully!"; // ✅ match backend
    } catch (error) {
      return rejectWithValue("Something went wrong. Please try again.");
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: {
    formData: {},
    aiResponse: "",
    isSubmitting: false,
    error: null,
    errors: {},
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetFormData: (state) => {
      state.formData = {};
      state.aiResponse = "";
      state.error = null;
      state.errors = {};
    },
    clearAiResponse: (state) => {
      state.aiResponse = "";
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    ClearErrors: (state) =>{
      state.errors = {};
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(submitFormData.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
      })
      .addCase(submitFormData.fulfilled, (state, action) => {
        state.isSubmitting = false;
        state.aiResponse = action.payload;
      })
      .addCase(submitFormData.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.payload;
      });
  },
});

export const { updateFormData, resetFormData, ClearErrors, setErrors,  clearAiResponse } = formSlice.actions;
export default formSlice.reducer;
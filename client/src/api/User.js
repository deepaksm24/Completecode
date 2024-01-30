import axios from "axios";

const serverBaseUrl = "http://localhost:5000"; // Update with your server's base URL


export const userLogin = async (formData) => {
    try {
      const response = await axios.post(
        `${serverBaseUrl}/newprojectCML5480`,
        formData
      );
      return response.data;
    } catch (error) {
      // Handle the error (e.g., log it or display a user-friendly message)
      console.error("Error submitting form data:", error);
      throw error; // Re-throw the error if you want to handle it in the calling code
    }
  };
  

  export const userRegister = async (formData) => {
    try {
      const response = await axios.post(
        `${serverBaseUrl}/newprojectCML5480`,
        formData
      );
      return response.data;
    } catch (error) {
      // Handle the error (e.g., log it or display a user-friendly message)
      console.error("Error submitting form data:", error);
      throw error; // Re-throw the error if you want to handle it in the calling code
    }
  };
  
  export const userForgotPasssword = async (formData) => {
    try {
      const response = await axios.post(
        `${serverBaseUrl}/newprojectCML5480`,
        formData
      );
      return response.data;
    } catch (error) {
      // Handle the error (e.g., log it or display a user-friendly message)
      console.error("Error submitting form data:", error);
      throw error; // Re-throw the error if you want to handle it in the calling code
    }
  };
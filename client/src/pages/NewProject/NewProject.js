import React, { useState } from "react";
import NewProjectModel from "./NewProjectModel"; // Import the NewProjectModel component
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { submitFormData } from "../../api/NewFinish"; // Adjust the path based on your project structure
import moment from "moment";
//import TransNav from "./NavBar";
import allControllers from "./Processors"; // Adjust the path based on your project structure

const NewProject = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    processorType: "",
    slotNo: "",
    softwareVersion: "36",
  });
  const [selectedValue, setSelectedValue] = useState("");
  const [nameError, setNameError] = useState("");
  let NewProjectFinalObject = {};
  const handleControllerSelect = (value) => {
    setSelectedValue(value);
    setFormData((prevData) => ({ ...prevData, processorType: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "projectName") {
      const formattedValue = value.replace(/ /g, "_");
      if (/^[a-zA-Z][a-zA-Z0-9_]*$/.test(formattedValue) || value === "") {
        setFormData((prevData) => ({ ...prevData, [name]: formattedValue }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
      setNameError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Project Name:", formData.projectName);
    // console.log("Processor Type:", formData.processorType);
    // console.log("Slot No:", formData.slotNo);
    // console.log("Software Version:", formData.softwareVersion);
    // Generate the formatted date

    const currentDate = moment();
    const formattedDate = currentDate.format("ddd MMM D HH:mm:ss YYYY");

    const NewProjectObject = {
      TargetName: formData.projectName,
      Name: formData.projectName,
      ProcessorTypeSelected: formData.processorType,
      slotNo: formData.slotNo,
      SoftwareRevision: parseFloat(formData.softwareVersion).toFixed(2).toString(),
      MajorRev: Math.floor(formData.softwareVersion).toString(),
      Major: Math.floor(formData.softwareVersion).toString(),
      ProjectCreationDate: formattedDate,
      ExportDate: formattedDate,
      LastModifiedDate: formattedDate,
    };

    //console.log("Formatted Date:", formattedDate);

    const foundController = allControllers.find(
      (controller) => controller.value === formData.processorType
    );

    if (foundController) {
      // Merge properties from foundController into formDataObject
      NewProjectFinalObject = {
        ...NewProjectObject,
        ...foundController,
      };
     console.log("out-1", NewProjectFinalObject);
      //console.log("Found Controller Product Code:", foundController);
    } else {
      //console.log("Controller not found in allControllers.");
    }

    // Additional logic for form submission
    try {
      const currentDate = moment();
      const formattedDate = currentDate.format("ddd MMM D HH:mm:ss YYYY");
     
      // Use the submitFormData function to send data to the server
      const serverResponse = await submitFormData(NewProjectFinalObject);
      // Log the response from the server
      console.log("Server Response:", serverResponse);
      // Additional logic after successful form submission
    } catch (error) {
      // Handle errors from the server
      console.error("Error submitting form:", error.message);
      // You can also log error.response.data for more details if available
    }
  };

  const handleReset = () => {
    setFormData({
      projectName: "",
      processorType: "",
      slotNo: "",
      softwareVersion: "36",
    });
    setNameError(""); // Clear the error on reset
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="projectName" className="form-label">
                  Name of Project
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                />
              </div>
              {nameError && (
                <p style={{ color: "red" }}>
                  <ExclamationCircleOutlined /> {nameError}
                </p>
              )}
              <div className="mb-3">
                {formData.projectName &&
                  (!formData.projectName.includes("_") ||
                    /^[a-zA-Z0-9]+$/.test(
                      formData.projectName.split("_")[1]
                    )) && (
                    <NewProjectModel
                      controllerSelect={handleControllerSelect}
                    />
                  )}
              </div>
              <div className="mb-3">
                <label htmlFor="processorType" className="form-label">
                  Processor Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="processorType"
                  name="processorType"
                  value={formData.processorType}
                  onChange={handleChange}
                  disabled
                />
              </div>
              {formData.slotNo && (
                <div className="mb-3">
                  <label htmlFor="slotNo" className="form-label">
                    Slot No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="slotNo"
                    name="slotNo"
                    value={formData.slotNo}
                    onChange={handleChange}
                    disabled
                  />
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="softwareVersion" className="form-label">
                  Software Version
                </label>
                <select
                  className="form-select"
                  id="softwareVersion"
                  name="softwareVersion"
                  value={formData.softwareVersion}
                  onChange={handleChange}
                >
                  <option value="36.00">36</option>
                  <option value="34.01">34</option>
                  <option value="32.02">32</option>
                </select>
              </div>

              <div className="mb-3">
                {!nameError && formData.processorType && (
                  <button type="submit" className="btn btn-primary">
                    Finish
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProject;

import React, { useState } from "react";
import axios from "axios";
const Admin = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && !file.type.startsWith("image/")) {
      setUploadStatus(
        "Please upload a valid image file (jpeg, png, gif, etc.)"
      );
      setSelectedFile(null);
    } else {
      setSelectedFile(file);
      setUploadStatus("");
    }
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setUploadStatus(""); // Clear status when category changes
  };
  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select a file first.");
      return;
    }
    const formData = new FormData();
    formData.append("image", selectedFile);
    var uploadUrl = "";
    switch (selectedCategory) {
      case "logo":
        uploadUrl = "https://brandvillab.leadgenadvertisements.com/uploadLogo";
        break;
      case "poster":
        uploadUrl =
          "https://brandvillab.leadgenadvertisements.com/uploadPoster";
        break;
      case "festival":
        uploadUrl =
          "https://brandvillab.leadgenadvertisements.com/uploadFestival";
        break;
      case "brochure":
        uploadUrl =
          "https://brandvillab.leadgenadvertisements.com/uploadBrochure";
        break;
      // visting card
      case "visting card":
        uploadUrl =
          "https://brandvillab.leadgenadvertisements.com/uploadVisitingCard";
        break;
      default:
        setUploadStatus("Please select a valid category.");
        return;
    }
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(uploadUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setUploadStatus("Image uploaded successfully!");
        setSelectedFile(null);
        setSelectedCategory("");
      }
    } catch (error) {
      console.error("Error uploading image", error);
      setUploadStatus("Failed to upload image.");
    }
  };
  return (
    <section className="space-y-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
        {/* Dropdown for selecting the category */}
        <div className="flex flex-row items-center">
          <div>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="mb-4 border rounded p-2"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="logo">Logo</option>
              <option value="poster">Poster</option>
              <option value="festival">Festival</option>
              <option value="brochure">Brochure</option>
              <option value="visting card">Visiting Card</option>
            </select>
          </div>
          <div>
            <input
              type="file"
              accept="image/*" // Accept only image files
              onChange={handleFileChange}
              className="mb-4 border rounded p-2"
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              onClick={handleUpload}
            >
              Upload Image
            </button>
          </div>
        </div>
        {uploadStatus && (
          <p className="mt-4 text-lg text-center text-red-500">
            {uploadStatus}
          </p>
        )}
      </div>
    </section>
  );
};
export default Admin;

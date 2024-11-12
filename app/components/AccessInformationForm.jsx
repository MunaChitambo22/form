'use client';

import React, { useState } from 'react';

const AccessInformationForm = ({ onFormData, onNext, initialFormData }) => {
  const [formData, setFormData] = useState({
    institutionName: initialFormData?.institutionName || '',
    fullName: initialFormData?.fullName || '',
    identityNumber: initialFormData?.identityNumber || '',
    postalAddress: '',
    telephone: '',
    email: '',
    other: '',
    nameTypeofInformationDocument: '',
    identificationDetails: '',
    contentsOfDocument: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormData(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400 rounded-3xl">
      <form onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }} className="space-y-4 p-8 text-black text-sm w-full max-w-md bg-white shadow-lg rounded-3xl">
        <h2 className="font-bold">1. Name of information holder</h2>
        <div>
          <label htmlFor="institutionName" className="text-black italic">
            (Please state the title of the institution from which you are requesting access to information)
          </label>
          <input
            type="text"
            id="institutionName"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleChange}
            className="border w-full p-2 mt-1 bg-gray-50 rounded"
            // required
          />
        </div>

        <h2 className="font-bold mt-4 text-black">2. Particulars of person requesting to access information (Requester)</h2>
        <div>
          <label htmlFor="fullName" className="text-black italic">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border w-full p-2 mt-1 bg-gray-50 rounded"
            // required
          />
        </div>
        <div>
          <label htmlFor="identityNumber" className="text-black italic">Identity Number:</label>
          <input
            type="integer"
            id="identityNumber"
            name="identityNumber"
            value={formData.identityNumber}
            onChange={handleChange}
            className="border w-full p-2 mt-1 bg-gray-50 rounded"
            // required
          />
        </div>
        <div>
          <label htmlFor="postalAddress" className="text-black italic">Postal/Physical Address:</label>
          <input
            type="text"
            id="postalAddress"
            name="postalAddress"
            value={formData.postalAddress}
            onChange={handleChange}
            className="border w-full p-2 mt-1 bg-gray-50 rounded"
            // required
          />
        </div>
        <div>
          <label htmlFor="telephone" className="text-black italic">Telephone No:</label>
          <input
            type="integer"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="border w-full p-2 mt-1 bg-gray-50 rounded"
            // required
          />
        </div>
        <div>
          <label htmlFor="email" className="text-black italic">E-mail Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border w-full p-2 mt-1 bg-gray-50 rounded"
            // required
          />
        </div>
        <div>
          <label htmlFor="other" className="text-black italic">Other:</label>
          <input
            type="text"
            id="other"
            name="other"
            value={formData.other}
            onChange={handleChange}
            className="border w-full p-2 mt-1 bg-gray-50 rounded"
          />
        </div>

        <h2 className="font-bold mt-4 text-black">3. Description of information requested</h2>
        <div>
          <label htmlFor="nameTypeofInformationDocument" className="text-black italic"> a. Name/Type of information/document (if known):</label>
          <input
            type="text"
            id="nameTypeofInformationDocument"
            name="nameTypeofInformationDocument"
            value={formData.nameTypeofInformationDocument}
            onChange={handleChange}
            className="border w-full p-2 mt-1 bg-gray-50 rounded"
            // required
          />
          <label htmlFor="documentName" className="text-black italic"> b.Identification Details (if known):</label>
          <input
            type="text"
            id="identificationDetails"
            name="identificationDetails"
            value={formData.identificationDetails}
            onChange={handleChange}
            className="border w-full p-2 mt-1 bg-gray-50 rounded"
            // required
          />
        </div>
        <h2 className="font-bold mt-4 text-black">4. Contents of Document <br />
        <span className="font-normal italic">(give brief descripton or relevant part of the information)</span></h2>
        <div>
          <input
            type="text"
            id="contentsOfDocument"
            name="contentsOfDocument"
            value={formData.contentsOfDocument}
            onChange={handleChange}
            className="border w-full p-2 mt-1 bg-gray-50 rounded"
          />
        </div>

        <div className="flex justify-end mt-4">
          <button 
            type="next"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccessInformationForm;

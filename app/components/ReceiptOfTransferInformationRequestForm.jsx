import React, { useState } from 'react';

function ReceiptOfTransferInformationRequestForm({ onBack, onNext, onFormData }) {
  const [formData, setFormData] = useState({
    transferredFrom: '',
    officerName: '',
    infoHolderName: '',
    transferredInfoHolder: '',
    transferDate: '',
    requesterName: '',
    referenceNumber: '',
    date: '',
    infoOfficerName: '',
    signature: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    onFormData(formData);
    onNext();
  };

  return (
    <form className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg" onSubmit={handleNext}>
      <h2 className="text-xl text-center font-semibold text-black mb-4">ACKNOWLEDGEMENT OF RECEIPT OF TRANSFER OF REQUEST FOR INFORMATION</h2>

      <div className="mb-4">
        <label className="block italic text-black">Transferred Request From:</label>
        <input
          type="text"
          name="transferredFrom"
          className="w-full p-2 border border-black rounded text-black"
          placeholder="(Name of information holder from which request was received)"
          value={formData.transferredFrom}
          onChange={handleChange}
        />
      </div>

      <p className="text-black">I,</p>

      <div className="mb-4">
        <label className="block italic text-black">State Name of Information Officer:</label>
        <input
          type="text"
          name="officerName"
          className="w-full p-2 border border-gray-300 rounded text-black"
          placeholder="Officer's Name"
          value={formData.officerName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block italic text-black">Name of Information Holder:</label>
        <input
          type="text"
          name="infoHolderName"
          className="w-full p-2 border border-gray-300 rounded text-black"
          placeholder="Name of information holder"
          value={formData.infoHolderName}
          onChange={handleChange}
        />
      </div>

      <p className="mb-4 text-black">hereby acknowledge receipt of the request for access to information which was transferred from</p>

      <div className="mb-4">
        <label className="block italic text-black">Transferred From (Name of Information Holder):</label>
        <input
          type="text"
          name="transferredInfoHolder"
          className="w-full p-2 border border-gray-300 rounded text-black"
          value={formData.transferredInfoHolder}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block italic text-black">Date of Transfer:</label>
        <input
          type="date"
          name="transferDate"
          className="w-full p-2 border border-gray-300 rounded text-black"
          value={formData.transferDate}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block italic text-black">Requester’s Name:</label>
        <input
          type="text"
          name="requesterName"
          className="w-full p-2 border border-gray-300 rounded text-black"
          placeholder="Name of requester"
          value={formData.requesterName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block italic text-black">Reference Number:</label>
        <input
          type="text"
          name="referenceNumber"
          className="w-full p-2 border border-gray-300 rounded text-black"
          value={formData.referenceNumber}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block italic text-black">Date:</label>
        <input
          type="date"
          name="date"
          className="w-full p-2 border border-gray-300 rounded text-black"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block italic text-black">Name of Information Officer:</label>
        <input
          type="text"
          name="infoOfficerName"
          className="w-full p-2 border border-gray-300 rounded text-black"
          value={formData.infoOfficerName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <label className="block italic text-black">Signature of Information Officer:</label>
        <input
          type="text"
          name="signature"
          className="w-full p-2 border border-gray-300 rounded text-black"
          placeholder="Signature"
          value={formData.signature}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-between mt-6">
        <button type="button" onClick={onBack} className="bg-gray-300 text-black px-4 py-2 rounded">
          Back
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </form>
  );
}

export default ReceiptOfTransferInformationRequestForm;

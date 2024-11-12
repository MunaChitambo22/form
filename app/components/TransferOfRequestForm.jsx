import React, { useState } from 'react';

function TransferOfRequestForm({ onFormData, onBack, onNext }) {
  const [formData, setFormData] = useState({
    requesterNameAddress: '',
    informationDate: '',
    infoHolderA: '',
    infoHolderB: '',
    infoHolderC: '',
    requestDays: '',
    date: '',
    infoOfficerName: '',
    refNumber: '',
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
      <h2 className="text-xl text-center font-semibold text-black mb-4">TRANSFER OF REQUEST FOR INFORMATION</h2>
      
      <div className="mb-4">
        <label className="block italic text-black">Transfer of Request To:</label>
        <input
          type="text"
          name="requesterNameAddress"
          className="w-full p-2 border border-black rounded text-black"
          placeholder="(Name and address of requester)"
          value={formData.requesterNameAddress}
          onChange={handleChange}
        />
      </div>
      
      <p className="font-semibold text-black">TAKE NOTICE that—</p>

      <div className="mb-4">
        <label className="block italic text-black">Requested Information Date:</label>
        <input
          type="date"
          name="informationDate"
          className="w-full p-2 border border-black rounded text-black"
          value={formData.informationDate}
          onChange={handleChange}
        />
      </div>

      <p className="font-semibold text-black mb-2">The information to which you requested access on:</p>
      
      <div className="mb-4">
        <label className="block italic text-black">A. is not in the possession or control of this information holder</label>
        <input
          type="text"
          name="infoHolderA"
          className="w-full p-2 border border-black rounded text-black"
          placeholder="(Name and address of information holder)"
          value={formData.infoHolderA}
          onChange={handleChange}
        />
      </div>
      
      <div className="mb-4">
        <label className="block italic text-black">B. is in the possession of another information holder</label>
        <input
          type="text"
          name="infoHolderB"
          className="w-full p-2 border border-black rounded text-black"
          placeholder="(Name of the information holder)"
          value={formData.infoHolderB}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block italic text-black">C. the subject matter of the information is more closely connected with the functions of another information holder</label>
        <input
          type="text"
          name="infoHolderC"
          className="w-full p-2 border border-black rounded text-black"
          placeholder="(Name of the information holder)"
          value={formData.infoHolderC}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block italic text-black">Request Dealt Within (Days):</label>
        <input
          type="number"
          name="requestDays"
          max="7"
          className="w-full p-2 border border-black rounded text-black"
          placeholder="Not exceeding 7 days"
          value={formData.requestDays}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block italic text-black">Date:</label>
        <input
          type="date"
          name="date"
          className="w-full p-2 border border-black rounded text-black"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block italic text-black">Name of Information Officer:</label>
        <input
          type="text"
          name="infoOfficerName"
          className="w-full p-2 border border-black rounded text-black"
          value={formData.infoOfficerName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block italic text-black">Reference Number:</label>
        <input
          type="text"
          name="refNumber"
          className="w-full p-2 border border-black rounded text-black"
          value={formData.refNumber}
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <label className="block italic text-black">Signature of Information Officer:</label>
        <input
          type="text"
          name="signature"
          className="w-full p-2 border border-black rounded text-black"
          placeholder="Signature of Information Officer"
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

export default TransferOfRequestForm;

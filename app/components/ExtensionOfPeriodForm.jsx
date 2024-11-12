import React, { useState } from 'react';

const ExtensionOfPeriodForm = ({ onBack, onNext, onFormData }) => {
  const [formData, setFormData] = useState({
    requesterName: '',
    informationHolder: '',
    requestDate: '',
    extensionPeriod: '',
    reasonA: '',
    reasonB: '',
    reasonC: '',
    provisionA: '',
    provisionB: '',
    provisionC: '',
    provisionD: '',
    date: '',
    officerName: '',
    officerSignature: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Validate required fields
    if (!formData.requesterName || !formData.informationHolder || !formData.requestDate || !formData.extensionPeriod) {
      alert("Please fill in all required fields.");
      return;
    }

    onFormData(formData); // Pass the collected data to the FormContainer
    onNext(); // Move to the next step (NoticeToThirdPartiesForm)
  };

  return (
    <form className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg" onSubmit={handleNext}>
      <h2 className="text-xl text-black text-center font-bold mb-4">Extension of Period to Access Information</h2>
      {/* <p className="text-sm text-black mb-4">Form 12 - Reg. 20</p> */}

      <div className="mb-4">
        <label htmlFor="requesterName" className="block italic text-black">
          NOTICE OF EXTENSION OF PERIOD TO ACCESS INFORMATION TO: (Name of Requester)
        </label>
        <input
          type="text"
          id="requesterName"
          name="requesterName"
          placeholder="Enter name of requester"
          value={formData.requesterName}
          onChange={handleChange}
          className="border w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <p className="text-black font-bold mt-4">TAKE NOTICE THAT:</p>

      <div className="mb-4">
        <label htmlFor="informationHolder" className="block italic text-black mt-4">
          The request to access information that you lodged with (Name of Information Holder) on:
        </label>
        <input
          type="text"
          id="informationHolder"
          name="informationHolder"
          placeholder="Enter name of information holder"
          value={formData.informationHolder}
          onChange={handleChange}
          className="border w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="requestDate" className="block italic text-black mt-4">
          On the (Day) of (Month) 20__:
        </label>
        <input
          type="date"
          id="requestDate"
          name="requestDate"
          value={formData.requestDate}
          onChange={handleChange}
          className="border w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="extensionPeriod" className="block italic text-black mt-4">
          Has been extended for a period of (Not exceeding fourteen days):
        </label>
        <input
          type="number"
          id="extensionPeriod"
          name="extensionPeriod"
          placeholder="Enter period in days"
          value={formData.extensionPeriod}
          onChange={handleChange}
          className="border w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block italic text-black mt-4">
          Reasons for extension of period:
        </label>
        <input
          type="text"
          id="reasonA"
          name="reasonA"
          placeholder="(a)"
          value={formData.reasonA}
          onChange={handleChange}
          className="border w-full p-2 mt-1 rounded text-black"
        />
        <input
          type="text"
          id="reasonB"
          name="reasonB"
          placeholder="(b)"
          value={formData.reasonB}
          onChange={handleChange}
          className="border w-full p-2 mt-1 rounded text-black"
        />
        <input
          type="text"
          id="reasonC"
          name="reasonC"
          placeholder="(c)"
          value={formData.reasonC}
          onChange={handleChange}
          className="border w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block italic text-black mt-4">
          Provisions of the Act relied upon:
        </label>
        <input
          type="text"
          id="provisionA"
          name="provisionA"
          placeholder="(a)"
          value={formData.provisionA}
          onChange={handleChange}
          className="border w-full p-2 mt-1 rounded text-black"
        />
        <input
          type="text"
          id="provisionB"
          name="provisionB"
          placeholder="(b)"
          value={formData.provisionB}
          onChange={handleChange}
          className="border w-full p-2 mt-1 rounded text-black"
        />
        <input
          type="text"
          id="provisionC"
          name="provisionC"
          placeholder="(c)"
          value={formData.provisionC}
          onChange={handleChange}
          className="border w-full p-2 mt-1 rounded text-black"
        />
        <input
          type="text"
          id="provisionD"
          name="provisionD"
          placeholder="(d)"
          value={formData.provisionD}
          onChange={handleChange}
          className="border w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="flex items-center mt-4">
        <label htmlFor="date" className="block italic text-black">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border ml-2 p-2 rounded text-black"
        />
      </div>

      <div className="flex justify-between mt-4">
        <div>
          <label htmlFor="officerName" className="block italic text-black">Name of Information Officer</label>
          <input
            type="text"
            id="officerName"
            name="officerName"
            placeholder="Enter officer's name"
            value={formData.officerName}
            onChange={handleChange}
            className="border w-full p-2 mt-1 rounded text-black"
          />
        </div>

        <div className="ml-4">
          <label htmlFor="officerSignature" className="block italic text-black">Signature of Information Officer</label>
          <input
            type="text"
            id="officerSignature"
            name="officerSignature"
            placeholder="Enter officer's signature"
            value={formData.officerSignature}
            onChange={handleChange}
            className="border w-full p-2 mt-1 rounded text-black"
          />
        </div>
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
};

export default ExtensionOfPeriodForm; 
import React, { useState } from 'react';

const DeferralOfAccessForm = ({ onBack, onNext, onFormData }) => {
  const [formData, setFormData] = useState({
    requesterName: '',
    informationName: '',
    requestDate: '',
    deferralOption: '',
    deferralPeriod: '',
    noticeDate: '',
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
    if (!formData.requesterName || !formData.informationName || !formData.requestDate || !formData.deferralOption || !formData.deferralPeriod || !formData.noticeDate) {
      alert("Please fill in all required fields.");
      return;
    }

    onFormData(formData); // Pass the collected data to the FormContainer
    onNext(); // Move to the next step
  };

  return (
    <form className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg" onSubmit={handleNext}>
      <h2 className="text-xl text-black text-center font-bold mb-4">DEFERRAL OF ACCESS FORM</h2>
      {/* <p className="text-sm mb-4">Form 11 - Reg. 19 (1)</p> */}

      <div className="mb-4">
        <label htmlFor="requesterName" className="block italic text-black">
          NOTICE OF DEFERRAL OF INFORMATION TO: <br />
          <span className='block italics text-left text-gray-800'>(Name of Requester)</span> 
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

      <p className="text-black mt-4">TAKE NOTICE THAT:</p>

      <div className="mb-4">
        <label htmlFor="informationName" className="block italic text-gray-800 mt-4">
          The information you requested for from (Name of Information) on:
        </label>
        <input
          type="text"
          id="informationName"
          name="informationName"
          placeholder="Enter name of information"
          value={formData.informationName}
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

      <div className="mt-4">
        <p className="text-black">Has been deferred as the request relates to information that:</p>
        <div className="flex flex-col mt-2">
          <label className="inline-flex items-center text-gray-800 italic">
            <input
              type="radio"
              name="deferralOption"
              value="will be published within thirty days"
              checked={formData.deferralOption === 'will be published within thirty days'}
              onChange={handleChange}
              className="mr-2"
            />
            Will be published within thirty days after the receipt of the request for information
          </label>
          <label className="inline-flex items-center mt-2 text-gray-800 italic">
            <input
              type="radio"
              name="deferralOption"
              value="relates to judicial proceedings"
              checked={formData.deferralOption === 'relates to judicial proceedings'}
              onChange={handleChange}
              className="mr-2"
            />
            Relates to judicial proceedings pending before a court or tribunal
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="deferralPeriod" className="block italic text-gray-700 mt-4">
          In reference to (a), the request for access to information has been deferred for a period of days/months (not exceeding thirty days):
        </label>
        <input
          type="text"
          id="deferralPeriod"
          name="deferralPeriod"
          placeholder="Enter deferral period (days/months)"
          value={formData.deferralPeriod}
          onChange={handleChange}
          className="border w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <p className="mt-4 text-gray-700 italic">
        You are required to, within fourteen days of being informed of the deferral, make representation to the information holder as to why the information is required before its publication or before the period of thirty days.
      </p>

      <div className="flex items-center mt-4">
        <label htmlFor="noticeDate" className="italic text-black">Date:</label>
        <input
          type="date"
          id="noticeDate"
          name="noticeDate"
          value={formData.noticeDate}
          onChange={handleChange}
          className="border ml-2 p-2 rounded text-black"
        />
      </div>

      <div className="flex justify-between mt-6">
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

export default DeferralOfAccessForm;

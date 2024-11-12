import React, { useState } from 'react';

const NoticeInformationNotFoundForm = ({ onBack, onNext, onFormData }) => {
  const [formData, setFormData] = useState({
    requesterName: '',
    informationHolder: '',
    accessDate: '',
    option: '',
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
    onFormData(formData); // Pass the collected data to the FormContainer
    onNext(); // Move to the next step (DeferralOfAccessForm)
  };

  return (
    <form className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-center text-xl text-black mb-4">NOTICE OF INFORMATION THAT CANNOT BE FOUND OR DOES NOT EXIST</h2>
      {/* <p className="text-sm text-black mb-4">Form 10 - Reg. 18 (1)</p> */}

      <div className="mb-4">
        <label htmlFor="requesterName" className="block italic text-black">
          TO: (Name and Address of Requester)
        </label>
        <input
          type="text"
          id="requesterName"
          name="requesterName"
          placeholder="Enter name and address of requester"
          value={formData.requesterName}
          onChange={handleChange}
          className="border w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <p className="text-black mt-4">TAKE NOTICE THAT:</p>

      <div className="mb-4">
        <label htmlFor="informationHolder" className="block italic text-gray-700 mt-4">
          The information holder (Name of Information Holder) has taken reasonable steps to find the information you requested access to from:
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
        <label htmlFor="accessDate" className="block italic text-black mt-4">
          On the (Day) of (Month) 20__:
        </label>
        <input
          type="date"
          id="accessDate"
          name="accessDate"
          value={formData.accessDate}
          onChange={handleChange}
          className="border w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="mt-4">
        <p className="text-black">The information:</p>
        <label className="text-black italic inline-flex items-center">
          <input
            type="radio"
            name="option"
            value="cannot be found"
            checked={formData.option === 'cannot be found'}
            onChange={handleChange}
            className="mr-2"
          />
          Cannot be found
        </label>
        <label className="text-black italic inline-flex items-center ml-4">
          <input
            type="radio"
            name="option"
            value="does not exist"
            checked={formData.option === 'does not exist'}
            onChange={handleChange}
            className="mr-2"
          />
          Does not exist
        </label>
      </div>

      <p className="mt-4 italic text-gray-700">
        Kindly note that in the event that the information in question is subsequently found within reasonable time, the information holder shall process the request in accordance with section 16(2) of the Act.
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
            className="border w-full p-2 rounded text-black"
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
            className="border w-full p-2 rounded text-black"
          />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button type="button" onClick={onBack} className="bg-gray-300 text-black px-4 py-2 rounded">
          Back
        </button>
        <button type="button" onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </form>
  );
};

export default NoticeInformationNotFoundForm;
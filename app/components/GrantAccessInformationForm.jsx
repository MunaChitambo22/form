import React, { useState } from 'react';

const GrantAccessInformationForm = ({ onFormData, onNext, onBack }) => {
  const [formData, setFormData] = useState({
    requesterName: '',
    informationHolder: '',
    accessDate: '',
    feeAmount: '',
    accessForm: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormData(formData); // Pass form data to the parent
    onNext(); // Call the onNext function passed from FormContainer
  };

  return (
    <div className="max-w-2xl mx-auto"> {/* Set max width to half */}
      <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl mb-4 text-black text-center">GRANT OF ACCESS TO INFORMATION FORM</h2>
        {/* <p className="text-sm mb-4 text-black text-center">Form 4 - Reg. 8(1), 11(1)</p> */}

        <div>
          <label htmlFor="requesterName" className="block text-black italic">
            NOTICE TO: (Name of Requester)
          </label>
          <input
            type="text"
            id="requesterName"
            name="requesterName"
            placeholder="Enter name of requester"
            value={formData.requesterName}
            onChange={handleChange}
            className="border-2 border-gray-300 w-full p-2 mt-1 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <p className="mt-4 text-black">TAKE NOTICE THAT:</p>

        <div>
          <label htmlFor="informationHolder" className="block mt-4 text-black italic">
            Access to the information you request from (Name of Information Holder):
          </label>
          <input
            type="text"
            id="informationHolder"
            name="informationHolder"
            placeholder="Enter name of information holder"
            value={formData.informationHolder}
            onChange={handleChange}
            className="border-2 border-gray-300 w-full p-2 mt-1 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="accessDate" className="block mt-4 text-black italic">
            On the (Day) of (Month) 20__ has been granted:
          </label>
          <input
            type="date"
            id="accessDate"
            name="accessDate"
            value={formData.accessDate}
            onChange={handleChange}
            className="border-2 border-gray-300 w-full p-2 mt-1 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="feeAmount" className="block mt-4 text-black italic">
            Fee payable if granted (Amount):
          </label>
          <input
            type="number"
            id="feeAmount"
            name="feeAmount"
            placeholder="Enter fee amount"
            value={formData.feeAmount}
            onChange={handleChange}
            className="border-2 border-gray-300 w-full p-2 mt-1 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="accessForm" className="block mt-4 text-black italic">
            Form in which access shall be given if granted:
          </label>
          <input
            type="text"
            id="accessForm"
            name="accessForm"
            placeholder="Enter form of access"
            value={formData.accessForm}
            onChange={handleChange}
            className="border-2 border-gray-300 w-full p-2 mt-1 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center mt-4">
          <label htmlFor="noticeDate" className="text-black italic">Date:</label>
          <input
            type="date"
            id="noticeDate"
            name="noticeDate"
            value={formData.noticeDate}
            onChange={handleChange}
            className="border-2 border-gray-300 ml-2 p-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <label htmlFor="officerName" className="block text-black">Name of Information Officer</label>
            <input
              type="text"
              id="officerName"
              name="officerName"
              placeholder="Enter officer's name"
              value={formData.officerName}
              onChange={handleChange}
              className="border-2 border-gray-300 w-full p-2 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="ml-4">
            <label htmlFor="officerSignature" className="block text-black">Signature of Information Officer</label>
            <input
              type="text"
              id="officerSignature"
              name="officerSignature"
              placeholder="Enter officer's signature"
              value={formData.officerSignature}
              onChange={handleChange}
              className="border-2 border-gray-300 w-full p-2 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button 
            type="button" 
            onClick={onBack}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Back
          </button>
          <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default GrantAccessInformationForm;

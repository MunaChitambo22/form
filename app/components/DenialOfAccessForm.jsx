import React from 'react';

export default function DenialOfAccessForm({ onFormData, onBack, onNext, formData }) {
  const handleChange = (e) => {
    onFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400">
      <div className="bg-white p-12 shadow-lg rounded-md max-w-xl w-full">
        <h2 className="text-center text-2xl mb-8 text-gray-800 italic">B. Denial of Access to Information Form</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block italic mb-2 text-gray-700">NOTICE TO:</label>
            <input
              type="text"
              name="requestorName"
              className="w-full border border-gray-600 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="(name of requestor)"
              onChange={handleChange}
            />
          </div>

          <p className="mb-5 text-gray-700 italic">
            TAKE NOTICE that—<br />
            Access to the information you request from
            <input
              type="text"
              name="informationHolderName"
              className="w-full border-b border-gray-600 focus:outline-none mx-2 text-black"
              placeholder="(name of information holder)"
              onChange={handleChange}
            /> 
            <br />
            on the 
            <input
              type="text"
              name="day"
              className="border-b border-gray-600 focus:outline-none mx-2 text-black"
              placeholder="day"
              onChange={handleChange}
            />
            day of 
            <input
              type="text"
              name="month"
              className="border-b border-gray-600 focus:outline-none mx-2 text-black"
              placeholder="month"
              onChange={handleChange}
            />
            20
            <input
              type="text"
              name="year"
              className="border-b border-gray-600 focus:outline-none mx-2 text-black"
              placeholder="year"
              onChange={handleChange}
            />
            has been denied.
          </p>

          <div className="mb-5">
            <label className="block italic mb-2 text-gray-700">Reasons for denial of access to information</label>
            {["a", "b", "c", "d", "e"].map((item, index) => (
              <input
                key={index}
                type="text"
                name={`reason${item}`}
                className="w-full border border-gray-600 rounded p-4 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder={`(${item})`}
                onChange={handleChange}
              />
            ))}
          </div>

          <div className="mb-5">
            <label className="block italic mb-2 text-gray-700">Provisions of the Act relied upon.</label>
            {["a", "b", "c", "d", "e"].map((item, index) => (
              <input
                key={index}
                type="text"
                name={`provision${item}`}
                className="w-full border border-gray-600 rounded p-4 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder={`(${item})`}
                onChange={handleChange}
              />
            ))}
          </div>

          <div className="mb-5">
            <label className="block italic mb-2 text-gray-700">Date:</label>
            <input
              type="date"
              name="denialDate"
              className="w-full border border-gray-600 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label className="block italic mb-2 text-gray-700">Name of Information Officer:</label>
            <input
              type="text"
              name="officerName"
              className="w-full border border-gray-600 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label className="block italic mb-2 text-gray-700">Signature of Information Officer:</label>
            <input
              type="text"
              name="officerSignature"
              className="w-full border border-gray-600 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Signature"
              onChange={handleChange}
            />
          </div>

          <p className="text-sm text-gray-600 mt-6 italic">
            The requester may appeal to the Commission within thirty days of receiving this notice.
          </p>

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
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

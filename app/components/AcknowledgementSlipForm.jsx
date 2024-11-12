import React from 'react';

const AcknowledgementSlipForm = ({ onFormData, onBack, onNext, formData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl mb-4 text-black text-center">ACKNOWLEDGEMENT SLIP OF FEE PAYABLE</h2>
        <p className="text-sm mb-4 text-black text-center">Form 2 - Reg. 6(3)</p>

        <div>
          <label htmlFor="requesterName" className="block text-black italic">
            TO:
          </label>
          <input
            type="text"
            id="requesterName"
            name="requesterName"
            placeholder="(Please state name and address of requester)"
            value={formData.requesterName || ''}
            onChange={handleChange}
            className="border-2 border-gray-300 w-full p-2 mt-1 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="officerName" className="block mt-4 text-black italic">
            I, (State name of Information Officer and Information Holder):
          </label>
          <input
            type="text"
            id="officerName"
            name="officerName"
            placeholder="Name of Information Officer"
            value={formData.officerName || ''}
            onChange={handleChange}
            className="border-2 border-gray-300 w-full p-2 mt-1 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="requesterNameAgain" className="block mt-4 text-black italic">
            hereby acknowledge receipt of the non-refundable fee payable from (State name of requester):
          </label>
          <input
            type="text"
            id="requesterNameAgain"
            name="requesterNameAgain"
            value={formData.requesterNameAgain || ''}
            onChange={handleChange}
            className="border-2 border-gray-300 w-full p-2 mt-1 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center mt-4">
          <label htmlFor="date" className="text-black italic">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date || ''}
            onChange={handleChange}
            className="border-2 border-gray-300 ml-2 p-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <label htmlFor="officerName" className="block text-black italic">Name of Information Officer</label>
            <input
              type="text"
              id="officerName"
              name="officerName"
              value={formData.officerName || ''}
              onChange={handleChange}
              className="border-2 border-gray-300 w-full p-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="ml-4">
            <label htmlFor="officerSignature" className="block text-black italic">Signature of Information Officer</label>
            <input
              type="text"
              id="officerSignature"
              name="officerSignature"
              value={formData.officerSignature || ''}
              onChange={handleChange}
              className="border-2 border-gray-300 w-full p-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

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
  );
};

export default AcknowledgementSlipForm;

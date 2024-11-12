import React from 'react';

const AccessDecisionNoticeForm = ({ onFormData, onBack, onNext, formData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onNext === 'function') {
      onNext();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        {/* Form Title */}
        <h2 className="text-2xl font-semibold text-black mb-6 text-center">
          6. Notice of decision regarding request for access Decision Notice 
          <span className="text-sm text-gray-500 italic"> <br />
          (You will be notified within seven days in writing whether your request has been approved/denied. If you wish to be informed in another manner, please specify the manner and provide the necessary particulars to enable compliance with your request.)
          </span>
        </h2>

        {/* Form Fields */}
        <div className="space-y-6">
          <div className="form-group">
            <label className="block text-black text-sm italic mb-2">
              Decision Details
            </label>
            <textarea
              name="decisionDetails"
              value={formData.decisionDetails || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Enter decision details..."
            />
          </div>

          <div className="form-group">
            <label className="block text-black text-sm italic mb-2">
              Decision Date
            </label>
            <input
              type="date"
              name="decisionDate"
              value={formData.decisionDate || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="form-group">
            <label className="block text-black text-sm italic mb-2">
              Information Officer Name
            </label>
            <input
              type="text"
              name="officerName"
              value={formData.officerName || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="form-group">
            <label className="block text-black text-sm italic mb-2">
              Information Officer Signature
            </label>
            <input
              type="text"
              name="officerSignature"
              value={formData.officerSignature || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Form Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccessDecisionNoticeForm;

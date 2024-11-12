import React from 'react';

export default function GroundsForComplaintForm({ onFormData, onBack, onNext }) {
  const handleChange = (e) => {
    onFormData({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(); // Call the onNext function to navigate to the next step
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400">
      <div className="bg-white p-10 shadow-md rounded-md max-w-2xl w-full">
        <h2 className="text-xl font-semibold text-black mb-6">D. Grounds for Complaint</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">
              If the provided spaces are inadequate, please continue on a separate folio and attach it to this form. You must sign all additional folios.
            </p>
          </div>

          <div className="mb-4">
            <label className="block italic mb-1 text-black">State the grounds on which the internal complaint is based:</label>
            <textarea
              name="grounds"
              className="w-full border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              rows="3"
              placeholder="Enter grounds for complaint"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block italic mb-1 text-black">State any other information that may be relevant in considering the complaint:</label>
            <textarea
              name="additionalInfo"
              className="w-full border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              rows="3"
              placeholder="Enter additional information"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block italic mb-1 text-black">Indicate the mode of communication preferred:</label>
            <input
              type="text"
              name="preferredCommunication"
              className="w-full border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              placeholder="Preferred mode of communication"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between mt-4">
            <div className="w-1/3">
              <label className="block italic mb-1 text-black">Date:</label>
              <input
                type="date"
                name="date"
                className="border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <label className="block italic mb-1 text-black">Name of Complainant:</label>
              <input
                type="text"
                name="complainantName"
                className="border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                placeholder="Name of Complainant"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <label className="block italic mb-1 text-black">Signature of Complainant:</label>
              <input
                type="text"
                name="complainantSignature"
                className="border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                placeholder="Signature"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block italic mb-1 text-black">Appeal accompanied by the reasons for the information officer&apos;s decision:</label>
            <textarea
              name="reasonsForDecision"
              className="w-full border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              rows="3"
              placeholder="Enter reasons for decision"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block italic mb-1 text-black">REASONS FOR THE INFORMATION OFFICER&apos;S DECISION:</label>
            <textarea
              name="decisionReasons"
              className="w-full border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              rows="3"
              placeholder="Enter decision reasons"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex justify-between mt-4">
            <button type="button" onClick={onBack} className="px-4 py-2 bg-gray-300 rounded">Back</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

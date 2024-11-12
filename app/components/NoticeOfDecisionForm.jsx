import React, { useState } from 'react';

export default function NoticeOfDecisionForm({ onFormData, onBack, onNext }) {
  const [formData, setFormData] = useState({
    appealDate: '',
    informationHolder: '',
    submissionDate: '',
    outcome: '',
    decisionDate: '',
    headOfInformationHolder: '',
    signature: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormData(formData);
    onNext();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400">
      <div className="bg-white p-10 shadow-md rounded-md max-w-2xl w-full">
        <h2 className="text-center font-semibold text-lg text-black mb-6">NOTICE OF DECISION ON INTERNAL REVIEW</h2>
        {/* <h3 className="text-center font-semibold text-black mb-4">Form 7</h3> */}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h4 className="italic text-black mb-2">OFFICIAL NOTICE DECISION OF INTERNAL REVIEW:</h4>
            <div className="mb-4">
              <label className="block italic text-black mb-1">Appeal received on (date):</label>
              <input
                type="date"
                name="appealDate"
                value={formData.appealDate}
                onChange={handleChange}
                className="w-full border border-black rounded p-2 text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block italic text-black mb-1">By (name of Information Holder):</label>
              <input
                type="text"
                name="informationHolder"
                value={formData.informationHolder}
                onChange={handleChange}
                className="w-full border border-black rounded p-2 text-black"
                placeholder="Name of Information Holder"
              />
            </div>
            <div className="mb-4">
              <label className="block italic text-black mb-1">
                Appeal accompanied by the reasons for the information officer’s decision and, where applicable, the particulars of any third party to whom or which the record relates, submitted by the information officer on (date) to the relevant authority:
              </label>
              <input
                type="date"
                name="submissionDate"
                value={formData.submissionDate}
                onChange={handleChange}
                className="w-full border border-black rounded p-2 text-black"
              />
            </div>
          </div>

          <div className="mb-6">
            <h4 className="italic text-black mb-2">OUTCOME OF APPEAL:</h4>
            <label className="block italic text-black mb-1">DECISION OF INTERNAL REVIEW IS AS FOLLOWS:</label>
            <textarea
              name="outcome"
              value={formData.outcome}
              onChange={handleChange}
              className="w-full border border-black rounded p-2 text-black"
              rows="4"
              placeholder="Enter decision of internal review"
            ></textarea>
          </div>

          <div className="flex justify-between mt-4">
            <div>
              <label className="block italic text-black mb-1">Date:</label>
              <input
                type="date"
                name="decisionDate"
                value={formData.decisionDate}
                onChange={handleChange}
                className="border border-black rounded p-2 text-black"
              />
            </div>
            <div>
              <label className="block italic text-black mb-1">Name of Head of Information Holder:</label>
              <input
                type="text"
                name="headOfInformationHolder"
                value={formData.headOfInformationHolder}
                onChange={handleChange}
                className="border border-black rounded p-2 text-black"
                placeholder="Name of Head of Information Holder"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block italic text-black mb-1">Signature of Information Officer:</label>
            <input
              type="text"
              name="signature"
              value={formData.signature}
              onChange={handleChange}
              className="w-full border border-black rounded p-2 text-black"
              placeholder="Signature"
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
      </div>
    </div>
  );
}

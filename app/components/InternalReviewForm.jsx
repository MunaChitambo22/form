import React from 'react';

export default function InternalReviewForm({ onFormData, onBack, onNext }) {
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
      <div className="bg-white p-10 shadow-lg rounded-md max-w-2xl w-full">
        <h2 className="text-center text-2xl mb-6 text-gray-800">REQUEST FOR INTERNAL REVIEW</h2>
        {/* <p className="text-center mb-6 text-gray-700 italic">Form 6</p> */}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-800">STATE YOUR REFERENCE NUMBER:</label>
            <input
              type="text"
              name="referenceNumber"
              className="w-full border border-gray-400 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Reference Number"
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-gray-800">A. Particulars of requester who lodges for internal complaints review</h3>
            <p className="text-sm text-gray-600 mb-4 italic">
              (a) The particulars of the person who lodge the internal complaints review must be given below.<br />
              (b) Proof of the capacity in which complaint is lodged, if applicable, must be attached.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-gray-800 italic">Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  className="w-full border border-gray-400 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-800 italic">Date of Birth:</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  className="w-full border border-gray-400 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-800 italic">Sex:</label>
                <input
                  type="text"
                  name="sex"
                  className="w-full border border-gray-400 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Sex"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-800 italic">Identity Number:</label>
                <input
                  type="text"
                  name="identityNumber"
                  className="w-full border border-gray-400 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Identity Number"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-1 text-gray-800 italic">Postal/Physical Address:</label>
              <input
                type="text"
                name="address"
                className="w-full border border-gray-400 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Postal/Physical Address"
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="block mb-1 text-gray-800 italic">Telephone No.:</label>
              <input
                type="text"
                name="telephone"
                className="w-full border border-gray-400 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Telephone No."
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="block mb-1 text-gray-800 italic">E-mail address:</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-400 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="E-mail address"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="italic mb-2 text-gray-800">B. The decision against which the internal complaint is lodged</h3>
            <p className="text-sm text-gray-600 mb-4 italic">
              Mark the decision against which the internal Complaint is lodged with an X in the appropriate box:
            </p>
            <div className="flex flex-col gap-2">
              {[ 
                "Refusal of request for access",
                "Decision regarding fees prescribed",
                "Decision regarding the extension of the period within which the request must be dealt with in terms of section 13(1) of the Act",
                "Decision in terms of section 12(2)(b) of the Act to refuse access in the form requested by the request",
                "Decision to grant request for access"
              ].map((decision, index) => (
                <label key={index} className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-gray-800 italic">{decision}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="italic mb-2 text-gray-800">C. Particulars of public body</h3>
            <label className="block mb-1 text-gray-800 italic">The Information Officer:</label>
            <input
              type="text"
              name="informationOfficer"
              className="w-full border border-gray-400 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Information Officer"
              onChange={handleChange}
            />
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
    </div>
  );
}

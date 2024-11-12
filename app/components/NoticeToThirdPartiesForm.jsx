import React, { useState } from 'react';

const NoticeToThirdPartiesForm = ({ onBack, onNext }) => {
  const [formData, setFormData] = useState({
    thirdPartyName: '',
    fullName: '',
    dateOfBirth: '',
    sex: '',
    identityNumber: '',
    postalAddress: '',
    telephone: '',
    email: '',
    requestedInfo: '',
    informationHolderName: '',
    thirdPartyConsentName: '',
    thirdPartyAddress: '',
    interestIn: '',
    thirdPartyConsentDate: '',
    officerName: '',
    officerSignature: '',
    responseDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-xl text-center font-semibold text-black mb-4">Notice to Third Parties</h2>
      {/* <p className="text-sm mb-4">Form 13 - Reg. 21, 22</p> */}

      <div className="mb-4">
        <label htmlFor="thirdPartyName" className="block italic text-black">Particulars of the Third Party (Name and Address)</label>
        <input
          type="text"
          id="thirdPartyName"
          name="thirdPartyName"
          placeholder="Enter name and address"
          value={formData.thirdPartyName}
          onChange={handleChange}
          className="border border-black w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="fullName" className="block italic text-black">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={handleChange}
          className="border border-black w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="w-full">
          <label htmlFor="dateOfBirth" className="block italic text-black">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="border border-black w-full p-2 mt-1 rounded text-black"
          />
        </div>

        <div className="w-full">
          <label htmlFor="sex" className="block italic text-black">Sex:</label>
          <input
            type="text"
            id="sex"
            name="sex"
            placeholder="Enter sex"
            value={formData.sex}
            onChange={handleChange}
            className="border border-black w-full p-2 mt-1 rounded text-black"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="identityNumber" className="block italic text-black">Identity Number:</label>
        <input
          type="text"
          id="identityNumber"
          name="identityNumber"
          placeholder="Enter identity number"
          value={formData.identityNumber}
          onChange={handleChange}
          className="border border-black w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="postalAddress" className="block italic text-black">Postal/Physical Address:</label>
        <input
          type="text"
          id="postalAddress"
          name="postalAddress"
          placeholder="Enter postal address"
          value={formData.postalAddress}
          onChange={handleChange}
          className="border border-black w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="telephone" className="block italic text-black">Telephone No:</label>
        <input
          type="text"
          id="telephone"
          name="telephone"
          placeholder="Enter telephone number"
          value={formData.telephone}
          onChange={handleChange}
          className="border border-black w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block italic text-black">E-mail Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          className="border border-black w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="requestedInfo" className="block italic text-black">The above named person has requested the following information:</label>
        <textarea
          id="requestedInfo"
          name="requestedInfo"
          placeholder="Enter requested information"
          value={formData.requestedInfo}
          onChange={handleChange}
          className="border border-black w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <p className="font-bold mt-4">
        You may, within twenty-one days of being informed of the above request:
      </p>
      <ul className="list-disc pl-8">
        <li>object to the request in writing or orally; or</li>
        <li>
          give written consent for the disclosure of the requested information
          in form 13.
        </li>
      </ul>

      <h3 className="text-lg font-bold mt-6">CONSENT BY THIRD PARTY</h3>
      <div className="mb-4">
        <label htmlFor="informationHolderName" className="block italic text-black">Disclosure of Record to: (Name of Information Holder)</label>
        <input
          type="text"
          id="informationHolderName"
          name="informationHolderName"
          placeholder="Enter name of information holder"
          value={formData.informationHolderName}
          onChange={handleChange}
          className="border border-black w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="thirdPartyConsentName" className="block italic mt-4 text-black">I, (Name of Third Party)</label>
        <input
          type="text"
          id="thirdPartyConsentName"
          name="thirdPartyConsentName"
          placeholder="Enter name of third party"
          value={formData.thirdPartyConsentName}
          onChange={handleChange}
          className="border border-black w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="thirdPartyAddress" className="block italic mt-4 text-black">Third Party of (State Address)</label>
        <input
          type="text"
          id="thirdPartyAddress"
          name="thirdPartyAddress"
          placeholder="Enter third party address"
          value={formData.thirdPartyAddress}
          onChange={handleChange}
          className="border border-black w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="interestIn" className="block italic mt-4 text-black">Having an interest in:</label>
        <input
          type="text"
          id="interestIn"
          name="interestIn"
          placeholder="Enter interest"
          value={formData.interestIn}
          onChange={handleChange}
          className="border border-black w-full p-2 mt-1 rounded text-black"
        />
      </div>

      <div className="flex items-center mt-4">
        <label htmlFor="thirdPartyConsentDate" className="font-bold text-black">Date:</label>
        <input
          type="date"
          id="thirdPartyConsentDate"
          name="thirdPartyConsentDate"
          value={formData.thirdPartyConsentDate}
          onChange={handleChange}
          className="border border-black ml-2 p-2 rounded"
        />
      </div>

      <div className="flex justify-between mt-4">
        <div>
          <label htmlFor="officerName" className="block font-bold text-black">
            Name of Information Officer
          </label>
          <input
            type="text"
            id="officerName"
            name="officerName"
            placeholder="Enter officer's name"
            value={formData.officerName}
            onChange={handleChange}
            className="border border-black w-full p-2 mt-1 rounded"
          />
        </div>

        <div className="ml-4">
          <label htmlFor="officerSignature" className="block font-bold text-black">
            Signature of Information Officer
          </label>
          <input
            type="text"
            id="officerSignature"
            name="officerSignature"
            placeholder="Enter officer's signature"
            value={formData.officerSignature}
            onChange={handleChange}
            className="border border-black w-full p-2 mt-1 rounded"
          />
        </div>
      </div>

      <div className="flex items-center mt-4">
        <label htmlFor="responseDate" className="font-bold text-black">Date:</label>
        <input
          type="date"
          id="responseDate"
          name="responseDate"
          value={formData.responseDate}
          onChange={handleChange}
          className="border border-black ml-2 p-2 rounded"
        />
      </div>

      <div className="flex justify-between mt-6">
        <button type="button" onClick={onBack} className="bg-gray-300 text-black px-4 py-2 rounded">
          Back
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NoticeToThirdPartiesForm;

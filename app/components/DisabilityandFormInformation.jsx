import React, { useState } from 'react';

const DisabilityandFormInformation = ({ onFormData, onNext, onBack, initialFormData }) => {
  const [formData, setFormData] = useState({
    disability: '',
    formInformationRequired: '',
    recordAccessType: '',
    visualRecordType: '',
    audioRecordType: '',
    computerRecordType: '',
    copyOrTranscription: '',
  });

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
    onFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400">
      <form onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }} className="space-y-4 p-8 text-black text-sm w-full max-w-md bg-white shadow-lg rounded-3xl">
        <h2 className="font-bold text-center">Disability and Form Information</h2>
        <div>
          <label htmlFor="disability" className="italic">
            If you are prevented by a disability to read, view or listen to the record, state your disability:
          </label>
          <textarea
            id="disability"
            name="disability"
            value={formData.disability}
            onChange={handleChange}
            className="border w-full p-2 mt-1"
          />
        </div>
        <div>
          <label htmlFor="formInformationRequired" className="italic">
            Form in which information is required:
          </label>
          <textarea
            id="formInformationRequired"
            name="formInformationRequired"
            value={formData.formInformationRequired}
            onChange={handleChange}
            className="border w-full p-2 mt-1"
          />
        </div>

        <h2 className="font-bold mt-4">Select the appropriate box
            <br />
        <span className="font-normal italic">NOTES:
            <br />
(a) Compliance with your request for access in the specified form may depend on the form in which the record is available.
<br />
(b) Access in the form requested may be refused in certain circumstances. In such a case you will be informed if access will be granted in another form.
<br />
(c) The fee payable for access to the record, if any, will be determined party by the form in which access is requested.</span>
        </h2>

        <div>
          <h3 className="font-bold">1. If the record is in written or printed form:</h3>
          <label className="italic">
            <input
              type="radio"
              name="recordAccessType"
              value="copy"
              checked={formData.recordAccessType === 'copy'}
              onChange={handleChange}
            />
            Copy of record
          </label>
          <label className="ml-4 italic">
            <input
              type="radio"
              name="recordAccessType"
              value="inspection"
              checked={formData.recordAccessType === 'inspection'}
              onChange={handleChange}
            />
            Inspection of record
          </label>
        </div>

        <div>
          <h3 className="font-bold mt-4">2. If record consists of visual images (e.g., photographs, slides, video recordings, sketches):</h3>
          <label className="italic">
            <input
              type="radio"
              name="visualRecordType"
              value="view"
              checked={formData.visualRecordType === 'view'}
              onChange={handleChange}
            />
            View the record
          </label>
          <label className="ml-4 italic">
            <input
              type="radio"
              name="visualRecordType"
              value="copy"
              checked={formData.visualRecordType === 'copy'}
              onChange={handleChange}
            />
            Copy of record
          </label>
          <label className="ml-4 italic">
            <input
              type="radio"
              name="visualRecordType"
              value="transcription"
              checked={formData.visualRecordType === 'transcription'}
              onChange={handleChange}
            />
            Transcription of the record
          </label>
        </div>

        <div>
          <h3 className="font-bold mt-4">3. If record consists of recorded words or sound:</h3>
          <label className="italic">
            <input
              type="radio"
              name="audioRecordType"
              value="listen"
              checked={formData.audioRecordType === 'listen'}
              onChange={handleChange}
            />
            Listen to the audio recording
          </label>
          <label className="ml-4 italic">
            <input
              type="radio"
              name="audioRecordType"
              value="transcription"
              checked={formData.audioRecordType === 'transcription'}
              onChange={handleChange}
            />
            Transcription of audio recording (written or printed)
          </label>
        </div>

        <div>
          <h3 className="font-bold mt-4">4. If record is held in computer or machine-readable form:</h3>
          <label className="italic">
            <input
              type="radio"
              name="computerRecordType"
              value="printed"
              checked={formData.computerRecordType === 'printed'}
              onChange={handleChange}
            />
            Printed copy of record
          </label>
          <label className="ml-4 italic">
            <input
              type="radio"
              name="computerRecordType"
              value="derived"
              checked={formData.computerRecordType === 'derived'}
              onChange={handleChange}
            />
            Printed copy of information derived from the record
          </label>
          <label className="ml-4 italic">
            <input
              type="radio"
              name="computerRecordType"
              value="computer-readable"
              checked={formData.computerRecordType === 'computer-readable'}
              onChange={handleChange}
            />
            Copy in computer readable format
          </label>
        </div>

        <div>
          <h3 className="font-bold mt-4">Do you wish the copy or transcription to be sent to you?</h3>
          <label className="italic">
            <input
              type="radio"
              name="copyOrTranscription"
              value="yes"
              checked={formData.copyOrTranscription === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label className="ml-4 italic">
            <input
              type="radio"
              name="copyOrTranscription"
              value="no"
              checked={formData.copyOrTranscription === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        <h2 className="font-bold mt-4 text-black">5. Others <br />
        <span className="font-normal italic">(Please state any other details that may be relevant to the processing of the request)</span></h2>
        <div>
          <input
            type="text"
            id="contentsOfDocument"
            name="contentsOfDocument"
            value={formData.contentsOfDocument}
            onChange={handleChange}
            className="border w-full p-2 mt-1 bg-gray-50 rounded"
          />
        </div>

        <div className="flex justify-between mt-4">
          <button 
            type="button" 
            onClick={onBack}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md"
          >
            Back
          </button>
          <button 
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default DisabilityandFormInformation;

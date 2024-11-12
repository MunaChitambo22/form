'use client';

import React, { useState } from 'react';
import AccessInformationForm from './AccessInformationForm';
import DisabilityandFormInformation from './DisabilityandFormInformation';
import AccessDecisionNoticeForm from './AccessDecisionNoticeForm';
import AcknowledgementSlipForm from './AcknowledgementSlipForm';
import AcknowledgementOfReceiptForm from './AcknowledgementOfReceiptForm';
import GrantAccessInformationForm from './GrantAccessInformationForm';
import DenialOfAccessForm from './DenialOfAccessForm';
import InternalReviewForm from './InternalReviewForm';
import GroundsForComplaintForm from './GroundsForComplaintForm';
import NoticeOfDecisionForm from './NoticeOfDecisionForm';
import TransferOfRequestForm from './TransferOfRequestForm';
import ReceiptOfTransferInformationRequestForm from './ReceiptOfTransferInformationRequestForm';
import NoticeInformationNotFoundForm from './NoticeInformationNotFoundForm';
import DeferralOfAccessForm from './DeferralOfAccessForm';
import ExtensionOfPeriodForm from './ExtensionOfPeriodForm';
import NoticeToThirdPartiesForm from './NoticeToThirdPartiesForm';

const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    requesterName: '',
    officerName: '',
    informationHolderName: '',
    receivedDate: '',
    referenceNumber: '',
    date: '',
    officerSignature: '',
    denialReason: '',
    denialDate: '',
  });

  const [groundsData, setGroundsData] = useState({
    grounds: '',
    additionalInfo: '',
    preferredCommunication: '',
    complainantName: '',
    complainantSignature: '',
    appealReceivedOn: '',
    appealBy: '',
    reasonsForDecision: '',
    decisionReasons: '',
    headOfInformationHolderSignature: '',
    NoticeOfDecisionForm: '',
    DisabilityandFormInformation: '',
    TransferOfRequestForm: '',
    ReceiptOfTransferInformationRequestForm: '',
    NoticeInformationNotFoundForm: '',
    DeferralOfAccessForm: '',
    ExtensionOfPeriodForm: '',
    NoticeToThirdPartiesForm: '',
  });

  const totalSteps = 16;

  const handleFormData = (data) => {
    setFormData(prevData => ({
      ...prevData,
      ...data
    }));
  };

  const handleGroundsData = (data) => {
    setGroundsData(prevData => ({
      ...prevData,
      ...data
    }));
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleFinalSubmit = () => {
    console.log('Final form submission:', formData, groundsData);
    // Add your API submission logic here
  };

  const getStepTitle = (step) => {
    switch(step) {
      case 1:
        return "Access Information";
      case 2:
        return "Additional Details";
      case 3:
        return "Decision Notice";
      case 4:
        return "Acknowledgement Slip";
      case 5:
        return "Acknowledgement of Receipt";
      case 6:
        return "Grant Access Information";
      case 7:
        return "Denial of Access";
      case 8:
        return "Internal Review";
      case 9:
        return "Grounds For Complaint";
      case 10:
        return "Notice of Decision Form";
      case 11:
        return "Transfer of Request Form";
      case 12:
        return "Receipt of Transfer Information Request Form";
      case 13:
        return "Notice Information Not Found Form";
      case 14:
        return "Deferral of Access Form";
      case 15:
        return "Extension of Period Form";
      case 16:
        return "Notice to Third Parties Form";
      default:
        return "Unknown Step";
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    onFormData(formData); // Pass the collected data to the FormContainer
    onNext(); // Move to the next step (step 13)
  };

  return (
    <div className="min-h-screen bg-blue-400 rounded-3xl p-6 shadow-lg">
      {/* Progress Tracker */}
      <div className="mb-8 bg-blue-100 p-4 rounded-lg shadow-md">
        <div className="flex justify-center items-center gap-1 overflow-x-auto">
          {[...Array(totalSteps)].slice(Math.max(0, currentStep - 2), currentStep + 1).map((_, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center">
                <div 
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index + 1 <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
                <span className="text-xs mt-1 text-gray-600">
                  {getStepTitle(index + 1 + Math.max(0, currentStep - 2))}
                </span>
              </div>
              {index < totalSteps - 1 && (
                <div 
                  className={`w-4 h-0.5 transition-colors duration-200 mx-0.5 ${
                    index + 1 < currentStep ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-2 text-sm text-gray-600">
          Step {currentStep} of {totalSteps}
        </div>
      </div>

      {/* Form Components */}
      <div className="flex flex-col space-y-4">
        {currentStep === 1 && (
          <AccessInformationForm 
            onFormData={handleFormData} 
            onNext={handleNextStep}
            formData={formData}
          />
        )}
        {currentStep === 2 && (
          <DisabilityandFormInformation 
            onFormData={handleFormData}
            onBack={handlePrevStep}
            onNext={handleNextStep}
            formData={formData}
          />
        )}
        {currentStep === 3 && (
          <AccessDecisionNoticeForm 
            onFormData={handleFormData}
            onBack={handlePrevStep}
            onNext={handleNextStep}
            formData={formData}
          />
        )}
        {currentStep === 4 && (
          <AcknowledgementSlipForm 
            onFormData={handleFormData}
            onBack={handlePrevStep}
            onNext={handleNextStep}
            formData={formData}
          />
        )}
        {currentStep === 5 && (
          <AcknowledgementOfReceiptForm 
            onFormData={handleFormData}
            onBack={handlePrevStep}
            onNext={handleNextStep}
            formData={formData}
          />
        )}
        {currentStep === 6 && (
          <GrantAccessInformationForm 
            onFormData={handleFormData}
            onBack={handlePrevStep}
            onNext={handleNextStep}
            formData={formData}
          />
        )}
        {currentStep === 7 && (
          <DenialOfAccessForm 
            onFormData={handleFormData}
            onBack={handlePrevStep}
            onNext={handleNextStep}
            formData={formData}
          />
        )}
        {currentStep === 8 && (
          <InternalReviewForm 
            onFormData={handleFormData}
            onBack={handlePrevStep}
            onNext={handleNextStep}
          />
        )}
        {currentStep === 9 && (
          <GroundsForComplaintForm 
            onFormData={handleFormData}
            onBack={handlePrevStep}
            onNext={handleNextStep}
          />
        )}
        {currentStep === 10 && (
          <NoticeOfDecisionForm 
            onFormData={handleFormData}
            onBack={handlePrevStep}
            onNext={handleNextStep}
          />
        )}
        {currentStep === 11 && (
          <TransferOfRequestForm 
            onFormData={handleGroundsData}
            onBack={handlePrevStep}
            onNext={handleNextStep}
          />
        )}
        {currentStep === 12 && (
          <ReceiptOfTransferInformationRequestForm
            onFormData={handleGroundsData}
            onBack={handlePrevStep}
            onNext={handleNextStep}
          />
        )}
        {currentStep === 13 && (
          <NoticeInformationNotFoundForm
            onFormData={handleGroundsData}
            onBack={handlePrevStep}
            onNext={handleNextStep}
          />
        )}
        {currentStep === 14 && (
          <DeferralOfAccessForm
            onFormData={handleGroundsData}
            onBack={handlePrevStep}
            onNext={handleNextStep}
          />
        )}
        {currentStep === 15 && (
          <ExtensionOfPeriodForm
            onFormData={handleGroundsData}
            onBack={handlePrevStep}
            onNext={handleNextStep}
          />
        )}
        {currentStep === 16 && (
          <NoticeToThirdPartiesForm
            onFormData={handleGroundsData}
            onBack={handlePrevStep}
            onNext={handleFinalSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default FormContainer;


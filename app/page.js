// src/Page.js
'use client'; // Add this because we're using client-side state

import React from 'react';
import FormContainer from './components/FormContainer';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-8 justify-center">
        <h1 className="text-2xl font-bold mb-6 text-black text-center">Request for Information</h1>
        <FormContainer />
      </div>
    </div>
  );
}

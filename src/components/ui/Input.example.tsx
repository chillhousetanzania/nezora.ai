import React, { useState } from 'react';
import { Input } from './Input';

/**
 * Input Component Examples
 * 
 * Demonstrates all variants and states of the Input component.
 */

export const InputExamples = () => {
  const [textValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailBlur = () => {
    if (emailValue && !emailValue.includes('@')) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="p-8 space-y-12 bg-neutral-50 dark:bg-neutral-900 min-h-screen">
      <div>
        <h2 className="text-2xl font-heading font-semibold mb-6">Input Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Text Input */}
          <Input
            type="text"
            label="Full Name"
            placeholder="Enter your full name"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />

          {/* Email Input */}
          <Input
            type="email"
            label="Email Address"
            placeholder="you@example.com"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            onBlur={handleEmailBlur}
            error={emailError}
          />

          {/* Password Input */}
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />

          {/* Number Input */}
          <Input
            type="number"
            label="Age"
            placeholder="Enter your age"
            value={numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-heading font-semibold mb-6">Textarea</h2>
        <div className="max-w-2xl">
          <Input
            type="textarea"
            label="Message"
            placeholder="Enter your message here..."
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            rows={6}
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-heading font-semibold mb-6">States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Required */}
          <Input
            type="text"
            label="Required Field"
            placeholder="This field is required"
            required
          />

          {/* Disabled */}
          <Input
            type="text"
            label="Disabled Field"
            placeholder="This field is disabled"
            value="Cannot edit this"
            disabled
          />

          {/* With Error */}
          <Input
            type="email"
            label="Email with Error"
            placeholder="you@example.com"
            value="invalid-email"
            error="Please enter a valid email address"
          />

          {/* Success (no error) */}
          <Input
            type="email"
            label="Valid Email"
            placeholder="you@example.com"
            value="user@example.com"
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-heading font-semibold mb-6">Form Example</h2>
        <div className="max-w-2xl bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft-md">
          <h3 className="text-xl font-heading font-semibold mb-6">Contact Form</h3>
          <div className="space-y-6">
            <Input
              type="text"
              label="Full Name"
              placeholder="John Doe"
              required
            />
            
            <Input
              type="email"
              label="Email Address"
              placeholder="john@example.com"
              required
            />
            
            <Input
              type="text"
              label="Subject"
              placeholder="How can we help?"
              required
            />
            
            <Input
              type="textarea"
              label="Message"
              placeholder="Tell us more about your inquiry..."
              rows={5}
              required
            />
            
            <button className="w-full h-12 px-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium transition-all duration-normal hover:shadow-glow-primary">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-heading font-semibold mb-6">Responsive Layout</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            type="text"
            label="First Name"
            placeholder="John"
          />
          
          <Input
            type="text"
            label="Last Name"
            placeholder="Doe"
          />
          
          <Input
            type="email"
            label="Email"
            placeholder="john@example.com"
          />
        </div>
      </div>
    </div>
  );
};

export default InputExamples;

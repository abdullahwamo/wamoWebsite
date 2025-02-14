import React, { useState, ChangeEvent, FormEvent } from 'react';

const services = ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Other'];
const budgets = ['<$5,000', '$5,000 - $10,000', '$10,000 - $50,000', '$50,000+'];

type FormData = {
  name: string;
  email: string;
  service: string;
  phone: string;
  description: string;
  budget: string;
  nda: boolean;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    phone: '',
    description: '',
    budget: '',
    nda: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://formsubmit.co/info@wamolabs.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className='w-full h-full mx-auto p-6 bg-white dark:bg-[#1e1e1e] text-black dark:text-white'>
      <div className='mx-24 py-4'>
        <h2 className='text-3xl font-bold text-black dark:text-white'>Let&apos;s get started with your project</h2>
        <p className='text-black dark:text-white mt-2'>
          Whether you&apos;re looking to build something new and exciting or need our help with an ongoing project,
          we&apos;ve got you covered.
        </p>
        <div className='w-1/2'>
          <form className='mt-6 space-y-4' onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <input
                  name='name'
                  placeholder='Your name *'
                  className='w-full p-2 border-none dark:bg-[#1e1e1e] rounded'
                  onChange={handleChange}
                  required
                ></input>
                <hr />
              </div>
              <div>
                <input
                  name='email'
                  placeholder='Your email *'
                  type='email'
                  className='w-full p-2 border-none dark:bg-[#1e1e1e] rounded'
                  onChange={handleChange}
                  required
                />
                <hr />
              </div>
            </div>
            <select
              name='service'
              className='w-full p-2 border-none rounded dark:text-white dark:bg-[#1e1e1e] focus:outline-none'
              onChange={handleChange}
              required
            >
              <option value=''>Select the service you need *</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <hr />
            <input
              name='phone'
              placeholder='Phone number *'
              type='tel'
              className='w-full p-2 border-none dark:bg-[#1e1e1e] focus:outline-none rounded'
              onChange={handleChange}
              required
            />
            <hr />
            <textarea
              name='description'
              placeholder='Please describe your project *'
              className='w-full p-2 border-none dark:bg-[#1e1e1e] focus:outline-none rounded'
              onChange={handleChange}
              required
            />
            <hr />
            <select
              name='budget'
              className='w-full p-2 border-none rounded dark:text-white dark:bg-[#1e1e1e] focus:outline-none'
              onChange={handleChange}
              required
            >
              <option value=''>What is your budget? *</option>
              {budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
            <hr />
            <div className='flex items-center space-x-2'>
              <input type='checkbox' name='nda' onChange={handleChange} />
              <label htmlFor='nda' className='text-gray-700'>
                Request NDA
              </label>
            </div>
            <div className='border rounded p-4 text-gray-500 text-sm text-center'>[reCAPTCHA Placeholder]</div>
            <button type='submit' className='w-full p-2 bg-blue-950 hover:bg-orange-500 text-white rounded'>
              Submit →
            </button>
          </form>
        </div>

        <div className='mt-10'>
          <h3 className='text-2xl font-semibold text-orange-500'>What happens next</h3>
          <ul className='mt-4 text-black dark:text-white space-y-2 list-decimal pl-5'>
            <li>Our business development team contacts you within two working days</li>
            <li>A discovery session is held to understand your project requirements</li>
            <li>All the information shared is protected under the NDA</li>
            <li>
              Our technical and business development teams analyze the scope of your project and share the best way
              forward in a proposal
            </li>
            <li>A software development agreement is signed based on mutually agreed terms of the proposal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

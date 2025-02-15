import { jobs } from '@/utils/constant';
import React, { useState } from 'react';
import { Job, JobModalProps } from '@/utils/type';

export const JobListing: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const openModal = (job: Job): void => {
    setSelectedJob(job);
  };

  const closeModal = (): void => {
    setSelectedJob(null);
  };

  return (
    <div className='max-w-4xl mt-4 mx-auto p-6 bg-white dark:bg-[#121212] relative'>
      <h2 className='text-3xl font-bold text-blue-500'>Open positions</h2>
      <p className='text-gray-600 mt-2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada tellus vestibulum, commodo pulvinar id fames
        nunc.
      </p>
      <div className='mt-6 border-t border-gray-200'>
        {jobs.map((job, index) => (
          <div
            key={index}
            className='flex flex-col sm:flex-row sm:items-center justify-between py-4 rounded-xl border-gray-200 dark:hover:bg-black hover:bg-gray-50 transition'
          >
            <div className='flex flex-col sm:flex-row sm:items-center gap-2 mx-2'>
              <span className='text-lg font-semibold text-orange-500 '>{job.title}</span>
              <span className='text-gray-600'>{job.location}</span>
            </div>
            <button
              onClick={() => openModal(job)}
              className='mt-2 sm:mt-0 bg-gray-900 mx-2 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 w-full sm:w-auto'
            >
              View Full Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedJob && <JobModal job={selectedJob} onClose={closeModal} />}
    </div>
  );
};

interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  cvUrl: string;
}

const JobModal: React.FC<JobModalProps> = ({ job, onClose }) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    email: '',
    phone: '',
    cvUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Prepare data to send
    const applicationData = {
      jobTitle: job.title,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      cvUrl: formData.cvUrl,
    };

    try {
      // Make the API call to submit the form data
      const response = await fetch('https://formsubmit.co/hr@wamolabs.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      alert('Your application has been submitted successfully!');

      // Optionally, clear the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        cvUrl: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting your application. Please try again later.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        cvUrl: '',
      });
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      {/* Backdrop */}
      <div className='absolute inset-0 bg-black opacity-50' onClick={onClose}></div>
      {/* Modal Content */}
      <div className='bg-white dark:bg-[#1e1e1e] text-black dark:text-white rounded-lg p-6 z-10 max-w-md md:max-w-[50%] w-full overflow-y-auto max-h-screen'>
        <div className='flex justify-between items-center border-b pb-2'>
          <h3 className='text-xl font-semibold'>{job.title}</h3>
          <button onClick={onClose} className='text-gray-500 hover:text-gray-700'>
            &#x2715;
          </button>
        </div>
        <div className='mt-4 space-y-2'>
          <p>
            <strong className='text-orange-500'>Location:</strong> {job.location}
          </p>
          <p>
            <strong className='text-orange-500'>Description:</strong> {job.description}
          </p>
          <p>
            <strong className='text-orange-500'>Responsibilities:</strong> {job.responsibilities}
          </p>
          <p>
            <strong className='text-orange-500'>Requirements:</strong> {job.requirements}
          </p>
          <p className='text-blue-500'>
            <strong>Salary:</strong> {job.salary}
          </p>
        </div>
        {/* Application Form */}
        <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
          <h4 className='text-lg font-semibold'>Apply for this job</h4>
          <div>
            <label htmlFor='name' className='block text-sm font-medium'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            />
          </div>
          <div>
            <label htmlFor='phone' className='block text-sm font-medium'>
              Phone Number
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              required
              className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            />
          </div>
          <div>
            <label htmlFor='cvUrl' className='block text-sm font-medium'>
              Google Drive CV URL
            </label>
            <input
              type='url'
              id='cvUrl'
              name='cvUrl'
              value={formData.cvUrl}
              onChange={handleChange}
              placeholder='https://drive.google.com/...'
              required
              className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            />
          </div>
          <div className='mx-auto'>
            <button
              type='submit'
              className='w-full bg-gray-900 dark:bg-white text-white dark:text-black dark:hover:bg-orange-500 hover:bg-orange-500 px-4 py-2 rounded-lg text-sm font-medium'
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

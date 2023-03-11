'use client';

import { FormEvent, useState } from 'react';
import LoadingSpinner from '../../../components/spinner/LoadingSpinner';
import { EmailData } from '../../../typings';

export default function Page() {
  const initValues: EmailData = {
    name: '',
    subject: '',
    email: '',
    message: '',
  };

  const initState = { values: initValues, isLoading: false };
  const [fieldValues, setFieldValues] = useState(initState);

  const { values, isLoading } = fieldValues;

  const sendContactForm = async (data: EmailData) =>
    fetch(`/api/contact`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (!res.ok) throw new Error('Failed to send message');
      return res.json();
    });

  const handleChange = ({
    target,
  }: {
    target: HTMLInputElement | HTMLTextAreaElement;
  }) => {
    setFieldValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setFieldValues((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);
      setFieldValues(initState);
    } catch (err) {
      setFieldValues((prev) => ({
        ...prev,
        isLoading: false,
        error: err,
      }));
    }
  };

  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 text-center text-gray-600">
          We&apos;re here to answer all of your inquires.
        </p>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              required
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              required
              onChange={handleChange}
              value={values.email}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder="Let us know how we can help you"
              required
              onChange={handleChange}
              value={values.subject}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Leave a comment..."
              onChange={handleChange}
              value={values.message}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center w-36 text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300"
          >
            {!isLoading ? (
              'Send Message'
            ) : (
              <div className="flex justify-center">
                <LoadingSpinner size={4} />
              </div>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

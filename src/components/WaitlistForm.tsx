'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Form validation schema
const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | 'info' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: '',
      name: '',
    },
  });
  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      // First check if the email already exists in the waitlist
      const checkResponse = await fetch(`/api/waitlist/check?email=${encodeURIComponent(data.email)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const checkResult = await checkResponse.json();
      
      // If email already exists in the waitlist
      if (checkResult.exists) {
        setFormStatus({
          type: 'info',
          message: 'You are already on our waitlist! We\'ll be in touch soon.',
        });
        setIsSubmitting(false);
        return;
      }
      
      // If email doesn't exist, proceed with registration
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to join the waitlist. Please try again.');
      }

      setFormStatus({
        type: 'success',
        message: 'Thank you for joining our waitlist! We\'ll be in touch soon.',
      });
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="max-w-md w-full mx-auto relative z-10">
      {/* Decorative elements */}
      <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 bg-secondary/30 rounded-full blur-xl animate-pulse-slow"></div>
      
      {formStatus.type === 'success' ? (
        <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-900 rounded-lg shadow-lg p-4 mb-6 animate-fade-in">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p className="text-sm font-medium text-green-800 dark:text-green-300">
              {formStatus.message}
            </p>
          </div>
        </div>
      ) : null}

      {formStatus.type === 'error' ? (
        <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-lg shadow-lg p-4 mb-6 animate-fade-in">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <p className="text-sm font-medium text-red-800 dark:text-red-300">
              {formStatus.message}
            </p>
          </div>
        </div>
      ) : null}
      
      {formStatus.type === 'info' ? (
        <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 rounded-lg shadow-lg p-4 mb-6 animate-fade-in">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
              {formStatus.message}
            </p>
          </div>
        </div>
      ) : null}      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 backdrop-blur-sm bg-white/50 dark:bg-black/20 p-6 rounded-lg border border-white/20 shadow-xl animate-slide-up">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
            Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your name (optional)"
              className="pl-10 appearance-none block w-full px-4 py-3 border bg-white/70 dark:bg-gray-900/70 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
              {...register('name')}
            />
            {errors.name && (
              <p className="mt-1.5 text-sm font-medium text-red-600 dark:text-red-400 flex items-center">
                <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.name.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              placeholder="your@email.com"
              className="pl-10 appearance-none block w-full px-4 py-3 border bg-white/70 dark:bg-gray-900/70 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1.5 text-sm font-medium text-red-600 dark:text-red-400 flex items-center">
                <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center py-3 px-5 border border-transparent rounded-lg shadow-lg text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 relative overflow-hidden group"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            {isSubmitting ? (
              <><svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>Joining...</>
            ) : 'Join the Waitlist'}
          </button>
          <p className="mt-3 text-xs text-center text-gray-500 dark:text-gray-400">
            We'll notify you when iLost launches. No spam, ever.
          </p>
        </div>
      </form>
    </div>
  );
}

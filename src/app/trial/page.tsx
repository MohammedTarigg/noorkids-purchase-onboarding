'use client';

import { useState } from 'react';
import CTAButton from '../components/CTAButton';

export default function TrialPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--color-bg)', paddingLeft: 'var(--spacing-md)', paddingRight: 'var(--spacing-md)', paddingTop: 'var(--spacing-md)', paddingBottom: 'var(--spacing-md)' }}>
        <div className="bg-white rounded-3xl p-12 shadow-xl max-w-lg w-full text-center animate-scale-in">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'var(--color-secondary-light)' }}>
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Welcome to Noor Kids!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Your trial has been activated. We&apos;ve sent a confirmation email with your next steps.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="font-semibold transition-colors"
            style={{ color: 'var(--color-secondary)', }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-secondary-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-secondary)'}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--color-bg)' }}>
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        
        {/* Left Column: Summary */}
        <div className="bg-white rounded-3xl p-8 shadow-lg h-fit">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>Order Summary</h2>
          
          <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-100">
            <div className="w-16 h-20 bg-gray-200 rounded-md shrink-0"></div>
            <div>
              <h3 className="font-semibold text-gray-900">Noor Kids Character Program</h3>
              <p className="text-sm text-gray-500">Monthly Subscription</p>
            </div>
            <div className="ml-auto font-semibold text-gray-900">
              $0.99
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-600 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$0.99</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span style={{ color: 'var(--color-accent)' }}>FREE</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-gray-900 pt-3 border-t border-gray-100">
              <span>Total due today</span>
              <span>$0.99</span>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800 mb-6">
            <p><strong>Trial Terms:</strong> You pay <strong>$0.99 today</strong> for your first month. After 30 days, your subscription renews at just $89.99/year (less than $8/month). Cancel anytime in your account.</p>
          </div>
        </div>

        {/* Right Column: Checkout Form (Simulated) */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>Secure Checkout</h2>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                placeholder="parent@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all"
                style={{ '--tw-ring-color': 'var(--color-secondary)' } as React.CSSProperties}
                onFocus={(e) => e.currentTarget.style.setProperty('--tw-ring-color', 'var(--color-secondary)')}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all"
                style={{ '--tw-ring-color': 'var(--color-secondary)' } as React.CSSProperties}
                onFocus={(e) => e.currentTarget.style.setProperty('--tw-ring-color', 'var(--color-secondary)')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all"
                style={{ '--tw-ring-color': 'var(--color-secondary)' } as React.CSSProperties}
                onFocus={(e) => e.currentTarget.style.setProperty('--tw-ring-color', 'var(--color-secondary)')}
                />
              </div>
            </div>

            <div className="pt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Card Information</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="0000 0000 0000 0000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all pl-12"
                  style={{ '--tw-ring-color': 'var(--color-secondary)' } as React.CSSProperties}
                  onFocus={(e) => e.currentTarget.style.setProperty('--tw-ring-color', 'var(--color-secondary)')}
                />
                <svg className="w-6 h-6 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input 
                  type="text" 
                  placeholder="MM / YY"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all"
                style={{ '--tw-ring-color': 'var(--color-secondary)' } as React.CSSProperties}
                onFocus={(e) => e.currentTarget.style.setProperty('--tw-ring-color', 'var(--color-secondary)')}
                />
                <input 
                  type="text" 
                  placeholder="CVC"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all"
                style={{ '--tw-ring-color': 'var(--color-secondary)' } as React.CSSProperties}
                onFocus={(e) => e.currentTarget.style.setProperty('--tw-ring-color', 'var(--color-secondary)')}
                />
              </div>
            </div>

            <div className="pt-6">
              <CTAButton 
                onClick={handleCheckout} 
                disabled={isProcessing}
                className="flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Complete Order - $0.99'
                )}
              </CTAButton>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
              By clicking the button above, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

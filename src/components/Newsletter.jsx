// src/components/Newsletter.jsx
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    setSubmitted(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50" id='Community'>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5 bg-orange-500 p-10 flex flex-col justify-center text-white">
              <h3 className="text-3xl font-bold mb-4">Join Our Safari Community</h3>
              <p>Get exclusive offers and safari insights</p>
            </div>
            
            <div className="md:w-3/5 p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl text-amber-500 mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600">You've joined our safari community.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">Sign Up for Updates</h3>
                  <p className="text-gray-600 mb-8">
                    Subscribe to receive exclusive safari deals, travel tips, and special offers.
                  </p>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300"
                    >
                      Subscribe
                    </button>
                  </form>
                  
                  <p className="text-gray-500 text-sm mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
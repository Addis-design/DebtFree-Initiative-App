import React, { useState } from 'react';
import NavLink from '../NaBar/navBar';
const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    // Here you would typically handle the donation process
    console.log('Donation submitted:', { donationAmount, paymentMethod, isRecurring });
    alert('Thank you for your donation! (This is a demo - no actual donation was processed)');
  };

  return (
    <div style={{
      fontFamily: "'Arial', sans-serif",
      color: '#333',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <header style={{
        backgroundColor: '#009933',
        color: 'white',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>Kenya DebtFree Initiative</h1>
          <NavLink/>

        </div>
      </header>
      
      <main style={{ flexGrow: 1, maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#009933', textAlign: 'center', marginBottom: '1.5rem' }}>
          Make Your Contribution to Kenya's Future
        </h2>
        
        <div style={{ 
          backgroundColor: 'white', 
          padding: '2rem', 
          borderRadius: '8px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <form onSubmit={handleDonate}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="amount" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Donation Amount (KSh)
              </label>
              <input
                type="number"
                id="amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '0.5rem', 
                  fontSize: '1rem', 
                  border: '1px solid #ccc', 
                  borderRadius: '4px' 
                }}
                required
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="paymentMethod" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Payment Method
              </label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '0.5rem', 
                  fontSize: '1rem', 
                  border: '1px solid #ccc', 
                  borderRadius: '4px' 
                }}
                required
              >
                <option value="">Select a payment method</option>
                <option value="mpesa">M-Pesa</option>
                <option value="airtelMoney">Airtel Money</option>
                <option value="card">Debit/Credit Card</option>
                <option value="bankTransfer">Bank Transfer</option>
              </select>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={isRecurring}
                  onChange={(e) => setIsRecurring(e.target.checked)}
                  style={{ marginRight: '0.5rem' }}
                />
                Make this a monthly donation
              </label>
            </div>
            
            <button 
              type="submit" 
              style={{
                backgroundColor: '#bc2a26',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Donate Now
            </button>
          </form>
        </div>
        
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: '#009933', marginBottom: '1rem' }}>Your Impact</h3>
          <p>
            Every shilling you donate goes directly towards reducing Kenya's national debt. 
            Your contribution helps secure a brighter economic future for all Kenyans.
          </p>
        </div>
      </main>
      
      <footer style={{
        backgroundColor: '#000000',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        marginTop: '2rem',
      }}>
        <p style={{ margin: 0 }}>© 2024 Kenya DebtFree Initiative. Together, We Can Make a Difference!</p>
      </footer>
    </div>
  );
};

export default DonatePage;
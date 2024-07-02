import React, { useState, useEffect } from 'react';
import NavLink from '../NaBar/navBar';

const HomePage = () => {
  const [currentDebt, setCurrentDebt] = useState(10000000000000); // 10 trillion KSh
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [donationsReceived, setDonationsReceived] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
      setCurrentDebt(prev => prev - 31709); // Debt increases by about 31,709 KSh per second (example)
      setDonationsReceived(prev => prev + Math.floor(Math.random() * 1000)); // Random donations
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return num.toLocaleString('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleDonateClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Donation Amount: ${donationAmount}, Phone Number: ${phoneNumber}`);
    setIsPopupVisible(false);
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
        backgroundColor: '#009933', // Green, one of the colors of the Kenyan flag
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
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>GEN Z Kenya DebtFree Initiative</h1>
          <NavLink />
        </div>
      </header>
      
      <main style={{ flexGrow: 1, maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#009933' }}>Kenya's National Debt Needs Our Attention!</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            Every shilling counts. Your contribution today can help secure a better financial future for our nation.
          </p>
          <button onClick={handleDonateClick} style={{
            backgroundColor: '#bc2a26', // Red, another color from the Kenyan flag
            color: 'white',
            border: 'none',
            padding: '0.75rem 2rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
          }}>
            Donate Now - Every Shilling Counts!
          </button>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}>
          {[
            { title: "Current Debt", value: formatNumber(currentDebt), color: '#bc2a26' },
            { title: "Time Elapsed", value: formatTime(timeElapsed), color: '#000000' },
            { title: "Donations Received", value: formatNumber(donationsReceived), color: '#009933' },
            { title: "Kenyans Needed", value: "Millions", color: '#000000' },
          ].map((stat, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center',
            }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '1.2rem' }}>{stat.title}</h3>
              <p style={{ margin: 0, fontSize: '1.8rem', fontWeight: 'bold', color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.5rem', color: '#bc2a26' }}>The Clock is Ticking!</h3>
            <p style={{ marginBottom: '1rem' }}>
              Our national debt is growing by {formatNumber(31709)} every second. Each moment of inaction puts Kenya's economic future at greater risk. 
              Your donation today is an investment in a stable and prosperous tomorrow for all Kenyans.
            </p>
            <a href="#" style={{ color: '#009933', fontWeight: 'bold', textDecoration: 'none' }}>Learn Why This Matters for Kenya</a>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.5rem', color: '#009933' }}>Your Donation Makes a Difference for Kenya</h3>
            <p style={{ marginBottom: '1rem' }}>
              Every shilling contributed goes directly towards reducing our national debt. Your action today, 
              no matter how small, compounds over time to create a significant impact on Kenya's financial health.
            </p>
            <a href="#" style={{ color: '#009933', fontWeight: 'bold', textDecoration: 'none' }}>See Real-Time Impact on Kenya</a>
          </div>
        </div>
      </main>
      
      <footer style={{
        backgroundColor: '#000000', // Black, another color from the Kenyan flag
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        marginTop: '2rem',
      }}>
        <p style={{ margin: 0 }}>© 2024 GEN Z Kenya DebtFree Initiative. Act Now for a Better Tomorrow!</p>
      </footer>

      {isPopupVisible && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            maxWidth: '400px',
            width: '100%',
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.5rem', color: '#bc2a26' }}>Donate to GEN Z Kenya DebtFree Initiative</h3>
            <form onSubmit={handleFormSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>Donation Amount (KSh):</label>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>Phone Number:</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type="submit" style={{
                  backgroundColor: '#009933',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                }}>
                  Donate
                </button>
                <button type="button" onClick={handleClosePopup} style={{
                  backgroundColor: '#bc2a26',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                }}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

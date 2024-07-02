import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import NavLink from '../NaBar/navBar';
const AboutPage = () => {
  // Sample data for the debt growth chart
  const debtGrowthData = [
    { year: 2015, debt: 2.5 },
    { year: 2016, debt: 3.2 },
    { year: 2017, debt: 4.1 },
    { year: 2018, debt: 5.3 },
    { year: 2019, debt: 6.7 },
    { year: 2020, debt: 7.9 },
    { year: 2021, debt: 8.6 },
    { year: 2022, debt: 9.4 },
    { year: 2023, debt: 10.0 },
  ];

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
      
      <main style={{ flexGrow: 1, maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#009933', textAlign: 'center', marginBottom: '1.5rem' }}>
          About Kenya's National Debt Crisis
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3>Understanding the Crisis</h3>
            <p>Kenya's national debt has been growing at an alarming rate, reaching 10 trillion Kenyan Shillings in 2023. This debt burden poses significant challenges to our nation's economic growth and development.</p>
          </div>
          <div>
            <h3>Our Mission</h3>
            <p>The Kenya DebtFree Initiative aims to mobilize citizens and resources to actively participate in reducing our national debt, ensuring a prosperous future for all Kenyans.</p>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Kenya's Debt Growth Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={debtGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="debt" stroke="#009933" name="Debt in Trillion KSh" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3>Key Statistics</h3>
            <ul>
              <li>Current Debt: 10 Trillion KSh</li>
              <li>Debt-to-GDP Ratio: 67.5%</li>
              <li>Annual Interest Payment: 768 Billion KSh</li>
              <li>Debt per Capita: 197,000 KSh</li>
            </ul>
          </div>
          <div>
            <h3>Impact on Kenya</h3>
            <p>The high national debt affects every Kenyan by:</p>
            <ul>
              <li>Reducing funds available for public services</li>
              <li>Increasing tax burden on citizens</li>
              <li>Slowing economic growth and job creation</li>
              <li>Weakening the Kenyan Shilling</li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>How You Can Help</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px', backgroundColor: 'white', padding: '1rem', borderRadius: '8px' }}>
              <h4>Donate</h4>
              <p>Every shilling counts in our fight against national debt. Your contributions go directly towards debt reduction.</p>
            </div>
            <div style={{ flex: '1 1 300px', backgroundColor: 'white', padding: '1rem', borderRadius: '8px' }}>
              <h4>Spread Awareness</h4>
              <p>Share information about the national debt crisis and our initiative with your friends and family.</p>
            </div>
            <div style={{ flex: '1 1 300px', backgroundColor: 'white', padding: '1rem', borderRadius: '8px' }}>
              <h4>Volunteer</h4>
              <p>Join our team of volunteers to help organize events and campaigns for debt awareness and reduction.</p>
            </div>
          </div>
        </div>

        <div>
          <h3>Our Team</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ flex: '1 1 200px', textAlign: 'center' }}>
                <img src={`/api/placeholder/150/150`} alt={`Team Member ${i}`} style={{ borderRadius: '50%', marginBottom: '0.5rem' }} />
                <h4 style={{ margin: '0' }}>Team Member {i}</h4>
                <p style={{ margin: '0' }}>Position</p>
              </div>
            ))}
          </div>
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

export default AboutPage;
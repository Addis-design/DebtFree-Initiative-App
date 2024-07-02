import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NavLink = () => {
  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
        {['Home', 'About', 'Donate', 'Impact'].map((item) => (
          <li key={item}>
            <Link to={`/${item.toLowerCase()}`} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLink;

import axios from 'axios';
import { useState, useEffect } from 'react';

const getOAuthToken = async () => {
  const consumerKey = 'wXH5OuHrveZHQ8WJK744wKFwpGMs2vGshDA8wsfmx6VrkxyH';
  const consumerSecret = 'Yhc0xnRN8zsEkqFLJXg1ENzJLMGHDGcG8IvPvcJaNrFz8Zz6RPgjZTmEba6isztx';
  
  const token = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
  try {
    const response = await axios.post('https://api.daja.co.ke/oauth/token', {
      grant_type: 'client_credentials',
    }, {
      headers: {
        'Authorization': `Basic ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error obtaining OAuth token:', error);
    return null;
  }
};
export default getOAuthToken;

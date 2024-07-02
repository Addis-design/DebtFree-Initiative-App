import axios from 'axios';
import { useState, useEffect } from 'react';

// import buffer
import { Buffer } from 'buffer';

const getOAuthToken = async () => {
  const consumerKey = 'cP39RABALu8YGcaCXbZsuwTdZUQ7ABsBEumcsO6AOCEnDsQd';
  const consumerSecret = '3IdJyLrn0Legbqp99XFHis32OJQKvV6k44yzVCOsiFLZ9kyvm5kA7JiQDNGQAEnk';
  
  const token = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
  try {
    const response = await axios.post('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
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

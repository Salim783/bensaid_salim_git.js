import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.EXCHANGE_API_KEY;

const convertirMontant = async (montant, from = 'EUR', to = 'USD') => {
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`;
  const res = await fetch(url);
  const data = await res.json();
  const rate = data.conversion_rates[to];
  return montant * rate;
};

convertirMontant(150, 'EUR', 'USD').then(console.log);

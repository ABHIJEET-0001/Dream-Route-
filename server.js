// Node.js Express backend placeholder for Google Gemini API
const express = require('express');
const app = express();
app.use(express.json());
app.post('/api/ai', (req,res)=>{ res.json({output:'Gemini API response placeholder'}); });
app.listen(5000, ()=>console.log('Server running on port 5000'));
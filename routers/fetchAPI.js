const { application } = require("express")
const axios = require('axios');
const APIRouter=express.Router()


app.get('/api-data', async (req, res) => {
    try {
      const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Hirakud&appid=d65de52c0d795ff345deac94de5c5985");
      const data = response.data;
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });

  module.exports={APIRouter}
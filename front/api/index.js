import express from 'express';
import data from '../testData.json';
const router = express.Router();

//express().set('view engine', 'ejs');

router.get('/',(req,res) => {
  res.send(data);
});

export default router;

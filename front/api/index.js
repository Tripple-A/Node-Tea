import express from 'express';
const router = express.Router();
//express().set('view engine', 'ejs');

router.get('/',(req,res) => {
   res.render('index');
 });

export default router;

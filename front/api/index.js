import express from 'express';
 const router = express.Router();

 router.get('/',(req,res) => {
   res.send({
       me: 'hey'
   })
 });

export default router;

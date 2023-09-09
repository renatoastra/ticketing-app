import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
  const {email, password} = req.body;

  if(!email || !password) { 
    res.status(400).send('Email and password must be provided');
  }
  res.send('Hi there!');
})

export { router as signUpRouter };
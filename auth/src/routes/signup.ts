import express, {type Request, type Response} from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from "@renatoastra-ticketing/common";
import { User } from '../models/user';
import { BadRequestError } from "@renatoastra-ticketing/common";
import jwt from "jsonwebtoken"
import { validateRequest } from "@renatoastra-ticketing/common";

const router = express.Router();

router.post('/api/users/signup', [
  body('email')
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({min: 4, max: 20})
    .withMessage('Password must be between 4 and 20 characters')
], 
validateRequest,
async (req:Request, res: Response) => {
  const {email, password} = req.body;

  const existingUser = await User.findOne({ email });

  if(existingUser){
    throw new BadRequestError('Email already in use')
  }

  const user = new User({ email, password });
  await user.save();

  //generate jsonwebtoken
  const userJwt = jwt.sign({
    id: user.id,
    email: user.email
  }, process.env.JWT_KEY!)

  req.session = {
    jwt: userJwt
  }

  res.status(201).send(user);
})

export { router as signUpRouter };
import express, { Request, Response } from "express";
import { body } from "express-validator";

import { NotFoundError, currentUser, requireAuth, validateRequest } from "@renatoastra-ticketing/common";

const router = express.Router();


router.post('/api/tickets', requireAuth, [
  body('title')
    .not()
    .isEmpty()
    .withMessage('Title is required'),
  body('price')
    .isFloat({ gt: 0 })
    .withMessage('Price must be greater than 0')
],
validateRequest
, 
async (req: Request, res: Response) => {
  console.log("🚀 ~ file: new.ts:9 ~ router.post ~ req:", req.currentUser)
  res.sendStatus(200);
})

export { router as createTicketRouter };
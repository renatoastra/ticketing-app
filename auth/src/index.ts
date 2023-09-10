import express from "express";
import { json } from "body-parser"
import { currentUserRouter } from "./routes/current-user";
import { signInRouter } from "./routes/signin";
import { signOutRouter } from "./routes/signout";
import { signUpRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";


const app = express()
app.use(json());

app.all('/api/users/*', async (req, res, next) => {
  next(new NotFoundError())
})

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.use(errorHandler);



app.listen(4000, () => {
  console.log('LISTENING on port 4000 🎉🎉')
});
import { VerifyCurrentToken } from "./Middleware/AuthMiddleware.js";
// import {errorHandler} from "./Middleware/error.js";
import {databaseconfiguration} from './Config/DatabaseConfig.js'
import express from 'express'
import allroutes from './Routes/AllRoutes.js'

databaseconfiguration();
const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


const PORT = process.env.PORT || 4000;

app.use("/api", allroutes);
// app.use(errorHandler);

app.get("/", VerifyCurrentToken, (httprequest, httpresponse) => {
  httpresponse.json({
    message: "Advanced mobile Programming, Final Project",
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});


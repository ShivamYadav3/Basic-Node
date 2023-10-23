import express from "express";
import { getService } from "./service.controller.js";
import { serviceValidation } from "./service.validator.js";

const serviceRouter = express.Router();

serviceRouter.get("/", serviceValidation, getService);

export { serviceRouter };

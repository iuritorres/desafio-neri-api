import { Router } from "express";
import { formRouter } from "./form.ts";

export const apiRouter = Router();

apiRouter.use("/form", formRouter);

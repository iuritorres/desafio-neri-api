import { Router } from "express";
import { formFactory } from "../factories/formFactory.ts";

const controller = await formFactory.initialize();
export const formRouter = Router();

formRouter.post("/submit", controller.submit.bind(controller));

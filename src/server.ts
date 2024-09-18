import cors from "cors";
import express, { Router } from "express";
import { env } from "./env.ts";
import { formRouter } from "./routes/form.ts";

export const server = express();
server.use(express.json());
server.use(cors());

// Routers
export const apiRouter = Router();
server.use("/api", apiRouter);

apiRouter.use("/form", formRouter);

// Start server
const port = env.PORT || 3000;
server.listen(port, () => console.log(`Server running on port ${port}.`));

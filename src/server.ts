import express, { Router } from "express";
import cors from "cors";

export const server = express();
server.use(express.json());
server.use(cors());

// Routers
const apiRouter = Router();
server.use("/api", apiRouter);

const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log(`Server running on port ${port}.`);
});

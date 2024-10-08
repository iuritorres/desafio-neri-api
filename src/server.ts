import cors from "cors";
import express from "express";
import "express-async-errors";
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "../docs/swagger.json";
import { env } from "./env.ts";
import { errorMiddleware } from "./middlewares/error.ts";
import { apiRouter } from "./routes/index.ts";

export const server = express();
server.use(express.json());
server.use(cors());

server.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

server.use("/api", apiRouter);
server.use(errorMiddleware);

const port = env.PORT || 3000;
server.listen(port, () => console.log(`Server running on port ${port}.`));

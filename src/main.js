import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./router/group.router.js";

const app = express();
const PORT = process.env.port || 3001;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () =>
  console.info(`Express server running on port http://localhost:${PORT}`)
);

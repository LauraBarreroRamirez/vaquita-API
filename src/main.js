import express from "express";
import cors from "cors";
import { router } from "./routes/group.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () =>
  console.info(`Express server running on port http://localhost:${PORT}`)
);

import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./router/group.router.js";
import pg from "pg";

const app = express();
const PORT = process.env.port || 3001;
const { Pool, Client } = pg;

//coneccion a postgres
const obtenerCategorias = async () => {
  const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  });

  await client.connect();
  console.log("entre en newclient");
  try {
    const res = await client.query("select * from groups");
    console.table(res.rows);
    const result = res.rows[0].message;
    return result;
  } catch (err) {
    console.error(err, "tengo un error");
  } finally {
    await client.end();
  }
};

obtenerCategorias();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () =>
  console.info(`Express server running on port http://localhost:${PORT}`)
);

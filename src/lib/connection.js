import pg from "pg";
import "dotenv/config";

const { Pool, Client } = pg;

//conexion a postgres
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

export default obtenerCategorias;

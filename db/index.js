import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.PGCONNECT,
  ssl: { rejectUnauthorized: false },
});

export default pool;

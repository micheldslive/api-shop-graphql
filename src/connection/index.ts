import { createConnection } from "typeorm";

const HOST = process.env.HOST || "db-shopql";
const USER = process.env.USER || "root";
const PASS = process.env.PASS || "shopql";
const DATA = process.env.DATA || "postgres";

const connect = async () => {
  await createConnection({
    type: "postgres",
    host: HOST,
    port: 5432,
    username: USER,
    password: PASS,
    database: DATA,
    logging: true,
    synchronize: true,
    entities: ["./src/entities/*.ts"],
  });
};

export { connect };

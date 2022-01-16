import { createConnection } from "typeorm";

const HOST = "db-shopql";
const USER = "root";
const PASS = "shopql";
const DATA = "postgres";

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

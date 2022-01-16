import "reflect-metadata";
import { ApolloServer, ExpressContext } from "apollo-server-express";
import express, { Express, Request, Response } from "express";
import { buildSchema } from "type-graphql";
import { connect } from "./connection";
import { ClientesResolver } from "@resolvers/ClientesResolver";
import { ProdutosResolver } from "graphql/resolvers/ProdutosResolver";

export class App {
  private app: Express;
  private apolloServer: ApolloServer<ExpressContext>;
  private port: string = process.env.PORT || "4000";

  private async init() {
    await connect();
    this.app = express();
    const schema = await buildSchema({
      resolvers: [ClientesResolver, ProdutosResolver],
    });

    this.apolloServer = new ApolloServer({ schema });
    await this.apolloServer.start();
  }

  private middlewares() {
    this.apolloServer.applyMiddleware({ app: this.app });
  }

  private redirect() {
    this.app.get("/", (req: Request, res: Response) => {
      res.status(301).redirect("/graphql");
    });
  }

  async start() {
    await this.init();
    this.middlewares();
    this.app.listen(this.port, () =>
      console.log(`Server started at port ${this.port}`)
    );
    this.redirect();
  }
}

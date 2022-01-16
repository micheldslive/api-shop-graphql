import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Produto } from "entities/ProdutoEntity";
import { Cliente } from "entities/ClienteEntity";
import { ClienteInput } from "@inputs/ClienteInput";

@Resolver(Cliente)
export class ClientesResolver {
  @Query(() => [Cliente])
  async getClientes() {
    return Cliente.find();
  }

  @FieldResolver()
  async produtos(@Root() cliente: Cliente) {
    return Produto.find({ where: { clienteId: cliente.clienteid } });
  }

  @Mutation(() => Cliente)
  async createCliente(@Arg("clienteInput") clienteInput: ClienteInput) {
    const newCliente = Object.assign(new Cliente(), { ...clienteInput });
    await newCliente.save();
    return newCliente;
  }
}

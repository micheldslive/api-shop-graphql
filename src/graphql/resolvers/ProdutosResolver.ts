import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Produto } from "entities/ProdutoEntity";
import { ProdutoInput } from "graphql/inputs/ProdutoInput";

@Resolver(Produto)
export class ProdutosResolver {
  @Query(() => [Produto])
  async getProdutos() {
    return Produto.find();
  }

  @Mutation(() => Produto)
  async createProduto(@Arg("produtoInput") produtoInput: ProdutoInput) {
    const newProduto = Object.assign(new Produto(), { ...produtoInput });
    await newProduto.save();
    return newProduto;
  }
}

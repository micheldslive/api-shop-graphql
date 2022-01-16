import { Field, InputType } from "type-graphql";

@InputType()
export class ProdutoInput {
  @Field()
  name: string;

  @Field()
  marca: string;

  @Field()
  preco: number;

  @Field()
  preco_old: number;

  @Field()
  Descricao: string;

  @Field()
  ativo: number;

  @Field()
  clienteId: string;
}

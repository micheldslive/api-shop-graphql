import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cliente } from "./ClienteEntity";

@Entity("produtos")
@ObjectType()
export class Produto extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  produtoid: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  marca: string;

  @Column()
  @Field()
  preco: number;

  @Column()
  @Field()
  preco_old: number;

  @Column()
  @Field()
  Descricao: string;

  @Column()
  @Field()
  ativo: number;

  @ManyToOne(() => Cliente, { nullable: true })
  @Field(() => Cliente)
  cliente: Cliente;

  @Column()
  @Field()
  clienteId: string;
}

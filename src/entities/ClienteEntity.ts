import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import bcrypt from "bcryptjs";
import { Field, ID, ObjectType } from "type-graphql";
import { Produto } from "./ProdutoEntity";

@Entity("clientes")
@ObjectType()
export class Cliente extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  clienteid: string;

  @Column()
  @Field()
  firstname: string;

  @Column()
  @Field()
  lastname: string;

  @Column()
  @Field()
  email: string;

  password: string;

  @Column()
  @Field()
  password_hash: string;

  @Field(() => [Produto])
  produtos: Produto[];

  @BeforeInsert()
  private async hashPassword() {
    this.password_hash = await bcrypt.hash(this.password, 8);
  }
}

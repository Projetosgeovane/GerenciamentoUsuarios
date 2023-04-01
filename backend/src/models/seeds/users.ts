import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      nome: "Enablers",
      endereco: "Rua da Vila",
      telefone: "11972371061",
      email: "enablers@enablers.com.br",
      senha: "123456789",
    },
  ]);
}

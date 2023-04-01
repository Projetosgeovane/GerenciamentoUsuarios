import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("clients").del();

  // Inserts seed entries
  await knex("clients").insert([
    {
      nome: "Mario",
      endereco: "Rua da Bosque da Saúde de São Paulo",
      telefone: "11972371061",
      email: "Mario@gmail.com.br",
    },
  ]);
}

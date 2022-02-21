CREATE DATABASE knex;

CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  senha TEXT NOT NULL,
);

CREATE TABLE IF NOT EXISTS produtos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR NOT NULL,
  bar_code TEXT NOT NULL UNIQUE,
  quantidade TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS caixa (
  id SERIAL PRIMARY KEY,
  idDoUsuario INTEGER NOT NULL,
  idDoProduto INTEGER NOT NULL UNIQUE,
  quantidadeProduto INTEGER NOT NULL,
  FOREIGN KEY (idDoUsuario) REFERENCES usuarios (id),
  FOREIGN KEY (idDoProduto) REFERENCES produtos (id)
);
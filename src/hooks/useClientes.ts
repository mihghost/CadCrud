/* import { useEffect, useState } from "react";
import ClienteColecao from "../backend/db/ClienteColecao";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import UseTabelaOuForm from "./useTabelaOuForm";


export default function useClientes (){



    const {tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario} = UseTabelaOuForm()

    const repo: ClienteRepositorio = new ClienteColecao()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio);
  const [clientes, setClientes] = useState<Cliente[]>([]);


  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela
    });
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    exibirFormulario
  }
    return{
        
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        formularioVisivel,
        exibirTabela

    }
    
}

 */


import { useEffect, useState } from "react";
import ClienteColecao from "../backend/db/ClienteColecao";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import UseTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
  const repo: ClienteRepositorio = new ClienteColecao()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const {
    tabelaVisivel,
    exibirTabela,
    exibirForm,
  } = UseTabelaOuForm()

  useEffect(() => obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then( clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function clienteSelecionado(cliente:Cliente) {
    setCliente(cliente)
    exibirForm()
  }

  async function clienteExcluido(cliente:Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  function clienteNovo() {
    setCliente(Cliente.vazio())
    exibirForm()
  }

  async function clienteSalvo(cliente:Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  return {
    tabelaVisivel,
    exibirTabela,
    cliente,
    clientes,
    obterTodos,
    clienteNovo,
    clienteSalvo,
    clienteExcluido,
    clienteSelecionado,
  }
}
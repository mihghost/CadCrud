/* import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;
  function renderizarCabecalho() {
    return (
      <tr>
        <th className=" text-left p-4">Código</th>
        <th className=" text-left p-4">Nome</th>
        <th className=" text-left p-4">Idade</th>
        {exibirAcoes ? <th className="  p-4">Ações</th> : false}
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className=" text-left p-4">{cliente.id}</td>
          <td className=" text-left p-4">{cliente.nome}</td>
          <td className=" text-left p-4">{cliente.idade}</td>
          {exibirAcoes ? renderizarAcoes(cliente) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ? (
          <button
            onClick={() => props.clienteSelecionado?.(cliente)}
            className={`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50`}
          >
            {IconeEdicao}
          </button>
        ) : (
          false
        )}

        {props.clienteExcluido ? (
          <button
            onClick={() => props.clienteExcluido?.(cliente)}
            className={`flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50`}
          >
            {IconeLixo}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }
  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100`}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
 */

import Cliente from "../core/Cliente";
import { IconeEdit, IconeTrash } from "./Icones";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}
export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.clienteSelecionado || props.clienteExcluido;
  const style = {
    table: "w-full rounded-xl overflow-hidden",
    head: "bg-gradient-to-r from-gray-500 to-gray-800 text-gray-100",
    body: "",
    row: "",
    Htr: "",
    Btr: (i) => (i % 2 === 0 ? "bg-gray-300" : "bg-gray-200"),
    th: "text-left p-4",
    td: "p-4",
    btn: (cor, tam) => `
        flex justify-center items-center
        text-${cor}-${tam}
        rounded-full p-2 m-1 hover:bg-gray-50
      `,
  };

  function TabelaCabecalho() {
    return (
      <tr className={style.row + style.Htr}>
        <th className={style.th}>Código</th>
        <th className={style.th}>Nome</th>
        <th className={style.th}>Idade</th>
        {exibirAcoes ? <th className="p-4">Ações</th> : false}
      </tr>
    );
  }

  function TabelaLinhas() {
    return props.clientes?.map((cliente, i) => (
      <tr key={cliente.id} className={style.row + style.Btr(i)}>
        <td className={style.td}>{cliente.id}</td>
        <td className={style.td}>{cliente.nome}</td>
        <td className={style.td}>{cliente.idade}</td>
        {exibirAcoes ? LinhasAcoes(cliente) : false}
      </tr>
    ));
  }

  function LinhasAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center">
        <button
          onClick={() => props.clienteSelecionado?.(cliente)}
          className={style.btn("green", 600)}
        >
          {IconeEdit}
        </button>
        <button
          onClick={() => props.clienteExcluido?.(cliente)}
          className={style.btn("red", 500)}
        >
          {IconeTrash}
        </button>
      </td>
    );
  }

  return (
    <table className={style.table}>
      <thead className={style.head}>{TabelaCabecalho()}</thead>
      <tbody className={style.body}>{TabelaLinhas()}</tbody>
    </table>
  );
}

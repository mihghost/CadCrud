/* import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;

  clienteMudou?: (Cliente: Cliente) => void;

  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente.nome ?? "");
  const [idade, setIdade] = useState(props.cliente.idade ?? 0);
  return (
    <div>
      {id ? (
        <Entrada somenteLeitura texto="Código" valor={id} className="mb-4" />
      ) : (
        false
      )}

      <Entrada
        texto="Nome"
        valor={nome}
        valorMudou={setNome}
        className="mb-4"
      />

      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      />
      <div className="mt-3 flex justify-end">
        <Botao
          cor="blue"
          className="mr-2"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>

        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
}
 */

import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
  editado?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? (
        <Entrada texto="Código" valor={id} leitura className="mb-6" />
      ) : (
        false
      )}
      <Entrada texto="Nome" valor={nome} editado={setNome} className="mb-6" />
      <Entrada texto="Idade" tipo="number" valor={idade} editado={setIdade} />
      <div className="flex justify-end my-4">
        <Botao
          className="mr-2"
          onClick={() => props.editado?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao cor="gray" onClick={() => props.cancelado()}>
          Cancelar
        </Botao>
      </div>
    </div>
  );
}

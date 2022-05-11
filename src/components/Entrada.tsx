/* interface EntradaProps {
  texto: string;
  tipo?: "text" | "number";
  valor: any;
  somenteLeitura?: boolean;

  className?: string;

  valorMudou?: (valor: any) => void;
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className={` flex flex-col ${props.className}`}>
      <label className="mb-2">{props.texto}</label>

      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        className={`
                    border border-purple-500
                    rounded-lg
                    focus:outline-none
                    bg-gray-50
                    px-4 py- 2
                    ${props.somenteLeitura ? "" : "focus: bg-white"}
                   
        `}
      />
    </div>
  );
}
 */

interface EntradaProps {
  texto: string;
  tipo?: "text" | "number";
  valor: any;
  leitura?: boolean;
  className?: string;
  editado?: (valor: any) => void;
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label htmlFor={props.texto} className="mb-2">
        {props.texto}
      </label>
      <input
        type={props.tipo ?? "text"}
        id={props.texto}
        value={props.valor}
        readOnly={props.leitura}
        onChange={(e) => props.editado?.(e.target.value)}
        className={`
          border border-gray-500 rounded-lg
          focus:outline-none bg-blue-100 px-4 py-2
          ${props.leitura ? "" : "focus:bg-white"}
        `}
      />
    </div>
  );
}

/* interface BotaoProps {
  children: any;
  cor?: "green" | "blue" | "gray";
  className?: string;
  onClick?: () => void;
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? "gray";
  return (
    <button
      onClick={props.onClick}
      className={`focus-within: bg-gradient-to-r from-${cor}-400 to-${cor}-700
       text-white 
       px-4 py-2
       rounded-md
       ${props.className}`}
    >
      {props.children}
    </button>
  );
}
 */

interface BotaoProps {
  cor?: "green" | "blue" | "gray";
  className?: string;
  children: any;
  onClick?: () => void;
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? "blue";
  return (
    <button
      className={`
        bg-gradient-to-r from-${cor}-400 to-${cor}-700
        text-white px-4 py-2 rounded-md
        ${props.className}
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

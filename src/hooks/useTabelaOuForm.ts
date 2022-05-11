/* import { useState } from "react"


export default function useTabelaOuForm(){

    const[visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel ('form')
    return{

        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirFormulario, 

    }
} */


import { useState } from "react"

export default function UseTabelaOuForm() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const exibirTabela = () => setVisivel('tabela')
  const exibirForm = () => setVisivel('form')

  return {
    tabelaVisivel: visivel === 'tabela',
    formVisivel: visivel === 'form',
    exibirTabela,
    exibirForm
  }
}
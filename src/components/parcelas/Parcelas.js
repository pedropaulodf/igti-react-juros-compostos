import React from 'react'
import Parcela from './Parcela'
import css from './parcelas.module.css'

export default function Parcelas({dadosParcelas}) {
    
    return (
        <div className={css.flexRow}>
            {dadosParcelas.map(dados => {
                return <Parcela key={dados.id}>{dados}</Parcela>
            })}
        </div>
    )
}

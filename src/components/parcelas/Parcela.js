import React from 'react'
import css from './parcela.module.css'
import { formatCurrency, formatPercent } from '../../helpers/formatHelpers.js'

export default function Parcela({children}) {

    return (
        <div className={css.box}>
            <div className={css.position}>{children.id + 1}</div>
            <div>
                <div className={children.juros >= 0 ? css.lucro : css.prejuizo}>{`${formatCurrency(children.rendimento)}`}</div>
                <div className={children.juros >= 0 ? css.lucro : css.prejuizo}>{`${formatCurrency(children.juros)}`}</div>
                <div className={children.juros >= 0 ? css.taxaLucro : css.taxaPrejuizo}>{`${formatPercent(children.taxa)}`}</div>
            </div>
        </div>
    )
}

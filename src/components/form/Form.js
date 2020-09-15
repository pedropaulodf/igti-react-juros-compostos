import React from 'react'

export default function Form({valueCapitalInicial, valueTaxaJuros, valuePeriodoMeses, valueInputCapital, valueInputTaxa, valueInputPeriodo}) {

    const handleCapitalInicial = ({target}) =>{
        valueCapitalInicial(parseInt(target.value));
    }

    const handleTaxaJuros = ({target}) =>{
        valueTaxaJuros(parseFloat(target.value));
    }

    const handlePeriodoMeses = ({target}) =>{
        valuePeriodoMeses(parseInt(target.value));
    }

    return (
        <div className="row">
            <div className="input-field col s12 m4 l4">
                <input id="montanteInicial" value={valueInputCapital} step="100" min="0" max="100000" type="number" onChange={handleCapitalInicial} />
                <label className="active" htmlFor="montanteInicial">Montante Inicial: </label>
            </div>
            <div className="input-field col s12 m4 l4">
                <input id="taxaJurosMensal" value={valueInputTaxa} step="0.1" type="number" min="-12" max="12"onChange={handleTaxaJuros} />
                <label className="active" htmlFor="taxaJurosMensal">Taxa de Júros Mensal: </label>
            </div>
            <div className="input-field col s12 m4 l4">
                <input id="periodo" type="number" min="0" value={valueInputPeriodo}onChange={handlePeriodoMeses} />
                <label className="active" htmlFor="periodo">Período (meses): </label>
            </div>
        </div>
    )
}

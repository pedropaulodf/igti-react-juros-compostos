import React, { useEffect } from 'react';
import Form from './components/form/Form';
import Parcelas from './components/parcelas/Parcelas';

export default function App() {

  const [capitalInicial, setCapitalInicial] = React.useState(1000);
  const [taxaJurosMensal, setTaxaJurosMensal] = React.useState(0.5);
  const [periodoMeses, setPeriodoMeses] = React.useState(1);
  const [dadosParcelas, setQuantidadeParecelas] = React.useState([]);

  const handleInputCapitalInicial = (value) => {
    setCapitalInicial(value);
  };

  const handleInputTaxaJuros = (value) => {
    setTaxaJurosMensal(value);
  };

  const handleInputPeriodoMeses = (value) => {
    setPeriodoMeses(value);
  };

  useEffect(() => {

    let parcelas = [];
    let capitalMes = capitalInicial;
    let jurosMes = '';

    const quantidadeMeses = Array.from({ length: periodoMeses }, (_, i) => i);

    quantidadeMeses.map((item) => {

      capitalMes = ((capitalMes * taxaJurosMensal) / 100) + capitalMes;
      jurosMes = (capitalMes * taxaJurosMensal) / 100;

      parcelas.push({
        id: item,
        rendimento: capitalMes,
        juros: capitalMes - capitalInicial,
        taxa: (capitalMes - capitalInicial) / capitalInicial,
      });
      return '';
    })

    // console.log(parcelas);
    setQuantidadeParecelas(parcelas);

  }, [capitalInicial, taxaJurosMensal, periodoMeses]);

  return (
    <div className="container">
      <h3 style={{ textAlign: 'center' }}>React • Juros Compostos</h3>
      <Form
        valueCapitalInicial={handleInputCapitalInicial}
        valueInputCapital={capitalInicial}
        valueTaxaJuros={handleInputTaxaJuros}
        valueInputTaxa={taxaJurosMensal}
        valuePeriodoMeses={handleInputPeriodoMeses}
        valueInputPeriodo={periodoMeses}
      />
      <Parcelas
        dadosParcelas={dadosParcelas}
      />
    </div>
  );
}

import { React, useState } from 'react';
import NumberInput from './NumberInput';
import ComponenteEjemplo from './componente-ejemplo'
import Resultado from './Resultado';

const Calculator = () => {
    const [suma, setsuma] = useState(50);

   return (
       <div>
            <NumberInput name='Numero 1'/>
            <NumberInput name='Numero 2'/>
            <br />
           
           <Resultado operacion='Suma' calculo={suma}/>
           <Resultado operacion='Resta' calculo={suma}/>
           <Resultado operacion='Multiplicacion' calculo={suma}/>
           <Resultado operacion='Division' calculo={suma}/>
           
           <span>Resta: {suma}</span>
           <br />
           <span>Multiplicacion: {suma}</span>
           <br />
           <span>Division: {suma}</span>

       </div>
   ) 
}

export default Calculator
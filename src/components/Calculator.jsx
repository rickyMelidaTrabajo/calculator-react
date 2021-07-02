import { React, useState } from 'react';
import NumberInput from './NumberInput';

const Calculator = () => {
    const [suma, setsuma] = useState(0);

   return (
       <div>
            <NumberInput name='Numero 1'/>
            <NumberInput name='Numero 2'/>
            <br />
           
           <span>Suma: {suma}</span>
           <br />
           <span>Resta: {suma}</span>
           <br />
           <span>Multiplicacion: {suma}</span>
           <br />
           <span>Division: {suma}</span>
       </div>
   ) 
}

export default Calculator
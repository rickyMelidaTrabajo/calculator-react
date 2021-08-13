import { React, useState} from 'react'
import PropTypes from 'prop-types'
import Resultado from './Resultado';


const NumberInput = () => {
    
    const [numeros, setNumeros] = useState({
        numero1: 10,
        numero2: 5
    });
    
    const {numero1, numero2} = numeros;
    const [suma, setsuma] = useState(numero1 + numero2);

    const handleChange = (e)=>{
        
        setNumeros({
            ...numeros,
            [e.target.name]: parseFloat(e.target.value),
        });
        
        setsuma((actual) => actual + [e.target.value]);
    }

    return (
        <div>
            <label>
                Numero 1: <input name='numero1' value={numero1} type="number" onChange={handleChange} />
            </label>
            <label>
                Numero 2: <input name='numero2' value={numero2} type="number" onChange={handleChange} />
            </label>

            <br />
           
           <Resultado operacion='Suma' calculo={suma}/>
           <Resultado operacion='Resta' calculo={suma}/>
           <Resultado operacion='Multiplicacion' calculo={suma}/>
           <Resultado operacion='Division' calculo={suma}/>
                   
        </div>
    )
}

NumberInput.propTypes = {
    name: PropTypes.string,
};

export default NumberInput

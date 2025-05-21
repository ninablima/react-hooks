import { useState } from 'react'
import './Contador.css'

export default function Contador() {

    const [number, setNumber] = useState(0);

    function incrementar() {
        setNumber(number + 1)
    }

    function decrementar() {
        setNumber(number - 1)
    }

    function zerar() {
        setNumber(0)
    }


    return (
        <div className='box'>
            <span>{number}</span>
            <div className='botoes'>
                <button className='botao' onClick={decrementar}>-</button>
                <button onClick={zerar}>Zerar</button>
                <button className='botao' onClick={incrementar}>+</button>
            </div>
        </div>
    )
}
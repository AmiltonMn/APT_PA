"use client"

import React, { useState } from "react"

const Maths: React.FC = () => {

    const [numero1, setNumero1] = useState<string>("");
    const [numero2, setNumero2] = useState<string>("");
    const [respSoma, setRespSoma] = useState<number | undefined>(0);
    const [respSub, setRespSub] = useState<number | undefined>(0);
    const [respMult, setRespMult] = useState<number | undefined>(0);
    const [respDiv, setRespDiv] = useState<number | undefined>(0);
    const msgError = "Digite um número válido!";
    
    const handleSoma = () => {
        const n1 = parseFloat(numero1);
        const n2 = parseFloat(numero2);
        if(!isNaN(n1) && !isNaN(n2)){
            setRespSoma(n1 + n2);
        } else {
            setRespSoma(undefined);
        }
    }

    const handleSub = () => {
        const n1 = parseFloat(numero1);
        const n2 = parseFloat(numero2);
        if(!isNaN(n1) && !isNaN(n2)){
            setRespSub(n1 - n2);
        } else {
            setRespSub(undefined);
        }
    }
    
    const handleMult = () => {
        const n1 = parseFloat(numero1);
        const n2 = parseFloat(numero2);
        if(!isNaN(n1) && !isNaN(n2)){
            setRespMult(n1 * n2);
        } else {
            setRespMult(undefined);
        }
    }

    const handleDiv = () => {
        const n1 = parseFloat(numero1);
        const n2 = parseFloat(numero2);
        if(!isNaN(n1) && !isNaN(n2)){
            setRespDiv(n1 / n2);
        } else {
            setRespDiv(undefined);
        }
    }

    return(
        <>
            <div className="flex justify-center flex-col items-center">
                <h1>Operações Aritméticas</h1>
                <div className="flex flex-col items-center">
                    <label>Número 01</label>
                    <input className="border border-2" type="text" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
                </div>

                <div className="flex flex-col items-center">
                    <label>Número 02</label>
                    <input className="border border-2" type="text" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
                </div>
            </div>

            <br />

            <div className="flex justify-center items-center flex-col">
                <div className="flex justify-center flex-col items-center bg-cyan-600 w-52">
                    <h2>Soma</h2>
                    <button onClick={handleSoma}>SOMAR</button>
                    <h1>Resultado: {!isNaN(respSoma ?? NaN) ? respSoma : msgError}</h1>
                </div>

                <br />

                <div className="flex justify-center flex-col items-center bg-cyan-600 w-52">
                    <h2>Subtração</h2>
                    <button onClick={handleSub}>Subtrair</button>
                    <h1>Resultado: {!isNaN(respSub ?? NaN) ? respSub : msgError}</h1>
                </div>

                <br />

                <div className="flex justify-center flex-col items-center bg-cyan-600 w-52">
                    <h2>Multiplicação</h2>
                    <button onClick={handleMult}>Multiplicar</button>
                    <h1>Resultado: {!isNaN(respMult ?? NaN) ? respMult : msgError}</h1>
                </div>

                <br />

                <div className="flex justify-center flex-col items-center bg-cyan-600 w-52">
                    <h2>Multiplicação</h2>
                    <button onClick={handleDiv}>Dividir</button>
                    <h1>Resultado: {!isNaN(respDiv ?? NaN) ? respDiv?.toFixed(2) : msgError}</h1>
                </div>
            </div>
        </>
    )
}

export default Maths
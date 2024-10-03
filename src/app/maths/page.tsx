"use client"

import Image from "next/image";
import React, { useState } from "react"
import mais from "@/assets/mais.png"
import menos from "@/assets/menos.png"
import mult from "@/assets/mult.png"
import div from "@/assets/divisao.png"

const Maths: React.FC = () => {

    const style = 
    {
        op: "flex justify-center flex-col items-center w-min[208px] w-max[208px]",
    }

    const [numero1, setNumero1] = useState<string>("");
    const [numero2, setNumero2] = useState<string>("");
    const [respSoma, setRespSoma] = useState<number | undefined>(0);
    const [respSub, setRespSub] = useState<number | undefined>(0);
    const [respMult, setRespMult] = useState<number | undefined>(0);
    const [respDiv, setRespDiv] = useState<number | undefined>(0);
    const msgError = "Número inválido!";
    
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
        <div className="mt-28 flex justify-center">
            <div className="bg-slate-400 drop-shadow-2xl w-[600px] p-5 rounded-lg">
                <div className="flex justify-center flex-col items-center">
                    <h1>Operações Aritméticas</h1>
                    <div className="flex flex-col items-center">
                        <label>Número 01</label>
                        <input className="border" type="text" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
                    </div>

                    <div className="flex flex-col items-center">
                        <label>Número 02</label>
                        <input className="border" type="text" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
                    </div>
                </div>

                <br />

                <div className="flex justify-center items-center flex-row flex-wrap gap-4">
                    <div className={style.op}>
                        <Image src={mais} alt="" onClick={handleSoma} width={12} height={12}/>
                        <h1>Resultado: {!isNaN(respSoma ?? NaN) ? respSoma : msgError}</h1>
                    </div>

                    <br />

                    <div className={style.op}>
                        <Image src={menos} alt="" onClick={handleSub} width={12} height={12}/>
                        <h1>Resultado: {!isNaN(respSub ?? NaN) ? respSub : msgError}</h1>
                    </div>

                    <br />

                    <div className={style.op}>
                        <Image src={mult} alt="" onClick={handleMult} width={12} height={12}/>
                        <h1>Resultado: {!isNaN(respMult ?? NaN) ? respMult : msgError}</h1>
                    </div>

                    <br />

                    <div className={style.op}>
                        <Image src={div} alt="" onClick={handleDiv} width={12} height={12}/>
                        <h1>Resultado: {!isNaN(respDiv ?? NaN) ? respDiv?.toFixed(2) : msgError}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maths
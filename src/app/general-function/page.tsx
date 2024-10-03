"use client"
import { useState } from "react";
import Image from "next/image";
import mais from "@/assets/mais.png"
import menos from "@/assets/menos.png"
import mult from "@/assets/mult.png"
import divisao from "@/assets/divisao.png"

const GeneralFunction: React.FC = () => {

    interface HandleProps {
        a: string,
        b: string;
    }

    const style = 
    {
            bttn: "border border-orange-400 rounded-full placeholder:flex placeholder:gap-5 pl-3",
            op: "bg-gray-300 h-10 w-10 flex items-center justify-center cursor-pointer",
    }

    const [numero1, setNumero1] = useState<string>("");
    const [numero2, setNumero2] = useState<string>("");

    const [respSoma, setResp] = useState<number | undefined>();

    const erro = "Digite corretamente, Sr. Usuário!"

    const handleSub = ({a, b} : {a: string, b: string}) => {
        const n1 = parseFloat(a);
        const n2 = parseFloat(b);

        if (!isNaN(n1) && !isNaN(n2)) {
            setResp(n1 - n2);
        } else {
            setResp(undefined);
        }
    }

    const handleSoma = ({a, b} : {a: string, b: string}) => {
        const n1 = parseFloat(a);
        const n2 = parseFloat(b);

        if (!isNaN(n1) && !isNaN(n2)) {
            setResp(n1 + n2);
        } else {
            setResp(undefined);
        }
    }

    const handleMult = ({a, b} : {a: string, b: string}) => {
        const n1 = parseFloat(a);
        const n2 = parseFloat(b);

        if (!isNaN(n1) && !isNaN(n2)) {
            setResp(n1 * n2);
        } else {
            setResp(undefined);
        }
    }

    const handleDiv = ({a, b} : {a: string, b: string}) => {
        const n1 = parseFloat(a);
        const n2 = parseFloat(b);

        if (!isNaN(n1) && !isNaN(n2)) {
            setResp(n1 / n2);
        } else {
            setResp(undefined);
        }
    }

    return (
        <>
            <div className="flex items-center mt-52 gap-5 flex-col">

                <div className="bg-slate-400 w-[350px] h-[250px] rounded-lg drop-shadow-lg gap-10">

                    <div className="flex items-center flex-col mt-2">
                        <h1 className="mb-5 text-xl"><b>Insira 2 números</b></h1>

                        <div className="mb-5">
                            <input className={style.bttn} type="text" name="" placeholder="Número 01" id="" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
                        </div>

                        <div className="mb-5">
                            <input className={style.bttn} type="text" name="" placeholder="Número 02" id="" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
                        </div>
                    </div>
                        <div className="flex flex-row items-center justify-center gap-3 flex-wrap">

                            <div className={style.op} onClick={() => handleSoma({a: numero1, b: numero2})}>
                                <Image src={mais} alt="" />
                            </div>

                            <div className={style.op} onClick={() => handleSub({a: numero1, b: numero2})}>
                                <Image src={menos} alt="" />
                            </div>

                            <div className={style.op} onClick={() => handleMult({a: numero1, b: numero2})}>
                                <Image src={mult} alt="" />
                            </div>

                            <div className={style.op} onClick={() => handleDiv({a: numero1, b: numero2})}>
                                <Image src={divisao} alt="" />
                            </div>

                            
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <p>Resposta: {!isNaN(respSoma ?? NaN) ? respSoma : erro}</p>
                    </div>
                    
                    

                </div>

            </div>
        </>
    )
}

export default GeneralFunction;
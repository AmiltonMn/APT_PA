import Link from "next/link";
import Image from "next/image";
import batata from "@/assets/batata.jpg";
import batataDoce from "@/assets/batataDoce.jpg";
import batataAsterix from "@/assets/batataAsterix.jpg";

export const Cards = ({cor, corInfo, imagem, titulo} : {
    cor: string;
    corInfo: string;
    imagem: string;
    titulo: string

}) => {

    const style = 
    {
        card: "flex items-center justify-center flex-col hover:scale-110 text-wrap mt-5",
        imagemStyle: "flex rounded-t-2xl h-[200px]",
        textoCard: "flex bg-slate-200 w-full text-center h-32 items-center justify-center",
        infoCard: `flex ${cor} w-full rounded-b-2xl items-center justify-between flex-row h-20`,
    }

    console.log(cor, "batata");

    return (
        <div className={style.card}>
            <div>
                <Image className={style.imagemStyle} src={imagem === "batata" ? batata : imagem === "batataDoce" ? batataDoce : batataAsterix} width={300} alt='' />
            </div>  

            <div className={style.textoCard}>
                <div>
                    <h1 className="text-[24px]"><b>{titulo}</b></h1>
                    <p className="leading-[1]">Podemos fazer ela frita, assada e cozida <br/>
                    Tive que fazer um BR, se não buga</p>
                </div>
            </div>

            <div className={style.infoCard}>
                <div className={`flex ${corInfo} h-full justify-center flex-col items-center w-[98px] rounded-bl-2xl`}>
                    <h2>Preço:</h2>
                    <h2>R$12,40</h2>
                </div>

                <div className={`flex ${corInfo} h-full justify-center flex-col items-center w-[98px]`}>
                    <h2>Vendas:</h2>
                    <h2>40</h2>
                </div>

                <div className={`flex ${corInfo} h-full justify-center flex-col items-center w-[98px] rounded-br-2xl`}>
                    <h2>Nota:</h2>
                    <h2>4.5</h2>
                </div>
            </div>

        </div>
    )
}
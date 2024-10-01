import Link from "next/link";
import Image from "next/image";
import Batatas from "@/assets/batata.jpg";

export const Cards = () => {

    const style = 
    {
        card: "flex items-center justify-center flex-col",
        imagem: "flex rounded-t-2xl",
        textoCard: "bg-slate-200 w-full justify-center items-center"
    }

    return (
        <div className={style.card}>
            <div>
                <Image className={style.imagem} src={Batatas} width={300} alt='' />
            </div>
            <div className={style.textoCard}>
                <h2>A batata normal!</h2>
                <p>Podemos fazer ela frita, assada e cozida</p>
            </div>
            <div>

            </div>
        </div>
    )
}
"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

interface IData {
    name: string;
    id: number;
    image: string;
}


const FetchPage = () => {

    const [characters, setCharacters] = useState<IData[]>()

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
            const data = await res.json();
            setCharacters(data.results);
            console.log(data);
        }
        load();
    }, [])

    const style = 
    {
        main: "min-h-screen w-full bg-violet-950 text-white flex justify-center p-5 gap-3 items-center flex-row flex-wrap",
        nome: "rounded-lg w-[200px] flex justify-center text-center mb-2 text-white",
        card: "flex justify-center flex-row items-center bg-fuchsia-900 rounded-lg",
        image: "rounded-tl-lg rounded-bl-lg",
    }
    

    return (
        <>
            <main className={style.main}>
                {characters?.map((item) => {
                    return(
                        <div className="flex justify-center flex-row items-center flex-wrap" key={item.id}>
                            <div className={style.card}>
                                <Image className={style.image} src={item.image} width={200} height={200} alt=""/>
                                <div className="flex flex-col justify-start items-start">
                                    <h2 className={style.nome}>{item.name}</h2>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </main>
        </>
    )
}

export default FetchPage;
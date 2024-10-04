"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api }  from "@/constants/api"

interface IData {
    name: string;
    gender: string;
    status: string;
    species: string;
    image: string;
}

const axiosPage = () => {

    const [data, setData] = useState<IData[]>([]);
    const [erro, setErro] = useState<Boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("Não foi possível buscar os dados!")
    const [page, setPage] = useState<string>("1")

    useEffect(() => {
      
        api.get(`/character/?page=${page}`).then((res) => {
            setErro(false)
            setData(res.data.results)
        }).catch((err) => {
            if (err.response.status === 404) {
                setErrorMessage("Página não encontrada!")
            }
            if (err.response.status === 505) {
                setErrorMessage("Erro interno do servido!")
            } 
            setErro(true);
        })
    
    }, [page])
    

    return (
        <>
            <input type="text" value={page} onChange={(e) => setPage(e.target.value)} placeholder="1/42 - Insira a página" />
            {erro && <h5>{errorMessage}</h5>}
            {data?.map((item, index) => {
                return(
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <Image src={item.image} width={250} height={250} alt=""/>
                        <p>{item.gender}</p>
                        <p>{item.species}</p>
                        <p>{item.status}</p>
                    </div>
                )
            })}
            <br /><br />
        </>
    )
}

export default axiosPage;
import Link from "next/link";
import { Suspense } from "react"

type IData = {
    results : {
        name: string;
        status: string;
        id: string;
    }[]
}


const serverSide = async () => {

    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data : IData = await res.json()
    console.log(data)

    const style = {
        main: "min-h-screen w-full bg-black text-white flex justify-center items-center flex-row flex-wrap"
    }

    return (
        <>
            <h1>Server Side Rendering</h1>
            <main className={style.main}>
                <Suspense fallback={<div>Loading...</div>}>
                    {data.results.map((item) => {
                        return (
                            <div key={item.id}>
                                <h2>{item.name}</h2>
                                <Link href={`/perso/${item.id}`}>ABRIR</Link>
                            </div>
                        )
                    })}
                </Suspense>
            </main>
        </>
    )
}

export default serverSide
import { ROUTES } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    id: string;
    name: string;
    status: string;
    species: string;
    image: string;
}

interface IDataStaticIndex {
    results: IData[];
}


const Perso = async ({params: {id}} : IPerso) => {

    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data: IData = await res.json();

    return(
        <div>
            <h1>{data.id}</h1>
            <p>{data.name}</p>
            <p>{data.status}</p>
            <p>{data.species}</p>
            <Image className="h-auto w-[500px]" src={data.image} width={150} height={150} alt="Photo" priority={true}></Image>
            <Link href={ROUTES.serverPage}>VOLTAR</Link>
        </div>
    )
}

export default Perso;

export async function generateStaticParams () {
    const res = await fetch("https://rickandmortyapi.com/api/character/${id}")
    const data: IDataStaticIndex = await res.json()

    return data.results.map((item) => item.id.toString())
}
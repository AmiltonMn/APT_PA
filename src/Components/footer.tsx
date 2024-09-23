import Link from "next/link";

export const Footer = ({nome, texto} : {
    nome: string;
    texto: string;
}) => {

    return (
        <footer>
            <h1>{nome}</h1>
            <p>{texto}</p>
        </footer>
    )
}
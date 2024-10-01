import { ROUTES } from "@/constants/route";
import Link from "next/link";

// interface IMenu {
//     op1: string;
//     op2: string;
//     op3: string;
//     op4: string;
// }

// export const Menu : React.FC<IMenu> []...]

export const Menu = ({op1, op2, op3, op4} : {
    op1: string;
    op2: string;
    op3: string;
    op4: string;
}) => {

    const style = 
    {
        bttn:"px-2 py-1 min-w-3.5 text-branco cursor-pointer",
        nav: "text-pink-500 bg-pink-700 gap-3 font-robFont text-medium flex flex-row justify-around align-center p-3"
    }

    return (
    <nav className={style.nav}>
        <Link href={ROUTES.home} className={style.bttn}>{op1}</Link>
        <Link href={ROUTES.maths} className={style.bttn}>{op2}</Link>
        <Link href={ROUTES.generalFunction} className={style.bttn}>{op3}</Link>
        <p className={style.bttn}>{op4}</p>
    </nav>
    )
}
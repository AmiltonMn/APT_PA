import Link from "next/link";

export const Login = () => {

    const style = 
    {
        loginBox: "flex items-center justify-center w-full h-screen",
        loginForm: "flex flex-col items-center justify-evenly gap-4 border-solid border-2 border-gray-950 w-96 h-96 rounded-md",
        input: "border-2 border-dashed border-sky-500 rounded-full focus:outline-none focus:bg-gray-100"
    }

    return (
        <div className={style.loginBox}>
            
            <div className={style.loginForm}>
                <label htmlFor="">Usuário</label>
                <input className={style.input} type="text" />
                <label htmlFor="">Senha</label>
                <input className={style.input} type="password" />
            </div>
        </div>
    )
}
import { InputCEP,  } from "./InputCEP";



export function ConteudoPagina() {
    return (
        <>
            <header className="flex flex-col items-left justify-center h-2 p-10">
                <h2 className="text-2xl font-bold ">
                    CASOS DE COVID NO SEU ESTADO
                </h2>
            </header>
            <main className="flex flex-col items-left px-10">
            <InputCEP/>
        </main>
        </>
        
    )
}
import { InputCEP,  } from "./InputCEP";


interface MainContentProps {
    getCity: (parameter: string) => void;
}


export function ConteudoPagina({getCity}: MainContentProps ) {
    function getEstado(uf: string) {
        getCity(uf)
    }
    return (
        <>
            <header className="flex flex-col items-left justify-center h-2 p-10">
                <h2 className="text-3xl font-bold ">
                    CASOS DE COVID NO SEU ESTADO
                </h2>
            </header>
            <main className="flex flex-col items-left px-10">
            <InputCEP getEstado={getEstado} />
        </main>
        </>
        
    )
}
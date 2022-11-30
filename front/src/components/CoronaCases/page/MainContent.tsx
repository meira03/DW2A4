import { InputCEP,  } from "./InputCEP";


interface MainContentProps {
    getCity: (parameter: string) => void;
}


export function MainContent({getCity}: MainContentProps ) {
   
    function getEstado(uf: string) {
        getCity(uf)
    }
    
    return (
        <main className="flex flex-col items-left px-10">
            <InputCEP getEstado={getEstado} />
        </main>
    )
}
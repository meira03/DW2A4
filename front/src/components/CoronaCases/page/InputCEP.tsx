import { FormEvent, useState } from "react"
import { DadosCovid } from "./DadosCovid";

interface InputCEPProps {
    getEstado: (uf: string) => void;
}

export function InputCEP() {
    const [searchCEP, setSearchCEP] = useState<string>('');
    const [estadoUF, setEstadoUF] = useState<string>('')

    const cepMascara = {
        cep(value: string) {
            return value
                .replace(/\D/g, '')
                .replace(/(\d{5})(\d)/, '$1-$2')
                .replace(/(-\d{3})\d+?$/, '$1')
        },
        applyMask(event: FormEvent<HTMLInputElement>) {
            event.currentTarget.value = cepMascara.cep(event.currentTarget.value)
            setSearchCEP(event.currentTarget.value)
        }
    }

    function callApiCep() {
        fetch(`https://viacep.com.br/ws/${searchCEP}/json/`)
            .then(response => response.json())
            .then(data => setEstadoUF(data.uf))
    }

    function handleSubmitSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        searchCEP.length > 8 && callApiCep();
        
    }

    return (
        <>
            <section className="w-[min(90vw,1000px)]">
                <form
                    action="submit"
                    className="flex flex-col p-1"
                    onSubmit={(value) => handleSubmitSearch(value)}
                >
                    <label className="font-bold mb-1">Informe o CEP da sua rua:</label>
                    <div className="flex flex-row ">
                        <input type="text"
                            className="w-1/4 min-w-[100px] bg-zinc-800 text-zinc-100"
                            onChange={event => cepMascara.applyMask(event)}
                        />
                        <button type="submit"
                            className="p-2 min-w-[80px] w-30 text-bold ml-2 bg-brand-500 border-transparent flex justify-center items-center text-sm"
                        >
                            Buscar informações
                        </button>
                    </div>
                </form>

            </section>
            {estadoUF && <DadosCovid uf={estadoUF}/>}
        </>
    )
}
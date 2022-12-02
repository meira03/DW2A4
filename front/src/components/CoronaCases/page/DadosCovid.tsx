import {useState } from "react";


interface covidDataRepository {
    uf: any;
    state: any;
    cases: any;
    suspects: any;
    deaths: any;
}

interface DadosCovidProps {
    uf: string;
}

export function DadosCovid({ uf}: DadosCovidProps) {
    const [covidData, setCovidData] = useState<covidDataRepository[]>([
        {
            uf: 0,
            state: 0,
            cases: 0,
            suspects: 0,
            deaths: 0,
        }
    ])

    if (covidData[0].uf != uf)
        fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`)
            .then(response => response.json())
            .then(data => {
                setCovidData([data])
            })

    return (
        <>
            <section className=" w-[min(90vw,200px)] flex flex-col-reverse py-3" >
                <div className="flex-1 flex-col justify-around text-left my-2">
                    <h3>
                        <span className="font-bold mb-1 text-center text-xl">Casos Confirmados</span>
                    </h3>
                    <p className="text-3xl mt-3 font-bold h-full">{covidData[0].cases.toLocaleString()}</p>
                </div>

                <div className="flex-1 flex-col justify-around text-left my-5">
                    <h3>
                        <span className="font-bold mb-1 text-center text-xl">Total Óbitos</span>
                    </h3>
                    <p className="text-3xl mt-3 font-bold h-full">{covidData[0].deaths.toLocaleString()}</p>
                </div>
            </section>
        </>
    )
}
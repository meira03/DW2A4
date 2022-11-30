import { useState } from "react";
import { ConteudoPagina } from "./page/ConteudoPagina";

export function CoronaCases() {
    const [city, setCity] = useState("BRAZIL");

    function getCity(cityName: string) {
        setCity(cityName)
    }
    
    return (
        <>
            <ConteudoPagina getCity={getCity} />
        </>
    )
}
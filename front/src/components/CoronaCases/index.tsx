import { useState } from "react";
import { HeaderContent } from "./page/HeaderContent";
import { MainContent } from "./page/MainContent";

export function CoronaCases() {
    const [city, setCity] = useState("BRAZIL");

    function getCity(cityName: string) {
        setCity(cityName)
    }
    
    return (
        <>
            <HeaderContent city={city} />
            <MainContent getCity={getCity} />
        </>
    )
}
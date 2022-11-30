interface HeaderContentProps{
    city: string;
}

export function HeaderContent({ city }: HeaderContentProps) {
   
    return (
        <header className="flex flex-col items-left justify-center h-2 p-10">
            <h2 className="text-3xl font-bold ">
                    COVID - {city.toLocaleUpperCase()}
            </h2>
        </header>
    )
}
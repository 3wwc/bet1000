import Stadium from "/images/sports/stadium.webp";

export default function HeaderBet() {
    return (
        <div className="py-12 bg-cover bg-center text-white" style={{backgroundImage: `url(${Stadium})`}}>
            <div className="md:w-5/6 mx-auto">
                <div className="flex justify-center items-center gap-5">
                    <div className="">
                        Time A
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="md:text-2xl font-bold flex gap-2">
                            10/01 - 12:30
                        </div>
                        <p className="text-xs font-bold">Horário da Partida</p>
                    </div>
                    <div className="">
                        Time B
                    </div>
                </div>
            </div>
        </div>
    )
}
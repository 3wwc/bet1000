import Stadium from "/images/sports/stadium.webp";

export default function HeaderBet() {
    return (
        <div className="py-12 bg-cover bg-center text-white" style={{backgroundImage: `url(${Stadium})`}}>
            <div className="md:w-5/6 mx-auto">
                <div className="flex justify-center items-center gap-5">
                    <div className="">
                        Nome do Time A
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold flex gap-2">
                            <span>0</span>
                            -
                            <span>0</span>
                        </div>
                        <p className="text-xs font-bold">Horário da Partida</p>
                    </div>
                    <div className="">
                        Nome do Time B
                    </div>
                </div>
            </div>
        </div>
    )
}
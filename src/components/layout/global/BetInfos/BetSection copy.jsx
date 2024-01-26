const infoGame = {
    name: 'Mega-Sena',
    umDois: {
        "1": 1.5,
        "x": 2.5,
        "2": 3.5,
    },
    chanceDupla: {
        "1x": 1.5,
        "12": 2.5,
        "2x": 3.5,
    },
    empateDevolve: {
        "home": 1.5,
        "away": 3.5,
    },
    total: {
        "over": 1.5,
        "under": 2.5,
    },
    parImpar: {
        "par": 1.5,
        "impar": 2.5,
    },
    handicap: {
        "home": 1.5,
        "away": 2.5,
    },
    casaTotal: {
        "over": 1.5,
        "under": 2.5,
    },
    visitanteTotal: {
        "over": 1.5,
        "under": 2.5,
    },
}

export default function BetSection() {
    return (
        <>
            <div>
                <div>
                    <div className="bg-secondary text-white py-2 px-4 rounded mb-2">
                        1x2
                    </div>
                    <div className="grid md:grid-cols-3 gap-3 mb-2">
                        <div>
                            <button className="w-full flex justify-between px-4 py-3 border border-zinc-600 rounded">
                                <p>Casa</p>
                                <p>{infoGame.umDois["1"]}</p>
                            </button>
                        </div>
                        <div>
                            <button className="w-full flex justify-between px-4 py-3 border border-zinc-600 rounded">
                                <p>Empate</p>
                                <p>{infoGame.umDois["x"]}</p>
                            </button>
                        </div>
                        <div>
                            <button className="w-full flex justify-between px-4 py-3 border border-zinc-600 rounded">
                                <p>Fora</p>
                                <p>{infoGame.umDois["2"]}</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-secondary text-white py-2 px-4 rounded mb-2">
                        Chance dupla
                    </div>
                    <div className="grid md:grid-cols-3 gap-3 mb-2">
                        <div>
                            <button className="w-full flex justify-between px-4 py-3 border border-zinc-600 rounded">
                                <p>Casa ou empate</p>
                                <p>{infoGame.chanceDupla["1x"]}</p>
                            </button>
                        </div>
                        <div>
                            <button className="w-full flex justify-between px-4 py-3 border border-zinc-600 rounded">
                                <p>Casa ou Fora</p>
                                <p>{infoGame.chanceDupla["12"]}</p>
                            </button>
                        </div>
                        <div>
                            <button className="w-full flex justify-between px-4 py-3 border border-zinc-600 rounded">
                                <p>Empate ou fora</p>
                                <p>{infoGame.chanceDupla["2x"]}</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-secondary text-white py-2 px-4 rounded mb-2">
                        Empate devolve aposta
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 mb-2">
                        <div>
                            <button className="w-full flex justify-between px-4 py-3 border border-zinc-600 rounded">
                                <p>home</p>
                                <p>{infoGame.empateDevolve["home"]}</p>
                            </button>
                        </div>
                        <div>
                            <button className="w-full flex justify-between px-4 py-3 border border-zinc-600 rounded">
                                <p>away</p>
                                <p>{infoGame.empateDevolve["away"]}</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-secondary text-white py-2 px-4 rounded mb-2">
                        Total
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 mb-2">
                        <div>
                            <button className="w-full flex justify-between px-4 py-3 border border-zinc-600 rounded">
                                <p>over</p>
                                <p>{infoGame.total["over"]}</p>
                            </button>
                        </div>
                        <div>
                            <button className="w-full flex justify-between px-4 py-3 border border-zinc-600 rounded">
                                <p>under</p>
                                <p>{infoGame.total["under"]}</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-secondary text-white py-2 px-4 rounded mb-2">
                        Ímpar/par
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 mb-2">
                        <div>
                            <button className="w-full flex justify-between px-4 py-3 border border-zinc-600 rounded">
                                <p>par</p>
                                <p>{infoGame.parImpar["par"]}</p>
                            </button>
                        </div>
                        <div>
                            <button className="w-full flex justify-between px-4 py-3 border border-zinc-600 rounded">
                                <p>impar</p>
                                <p>{infoGame.parImpar["impar"]}</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-secondary text-white py-2 px-4 rounded mb-2">
                        Handicap 0:1
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 mb-2">
                        <div>
                            <button className="w-full flex justify-between px-4 py-3 border border-zinc-600 rounded">
                                <p>home</p>
                                <p>{infoGame.handicap["home"]}</p>
                            </button>
                        </div>
                        <div>
                            <button className="w-full flex justify-between px-4 py-3 border border-zinc-600 rounded">
                                <p>away</p>
                                <p>{infoGame.handicap["away"]}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
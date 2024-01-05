export default function SidebarBet() {
    return (
        <>
            <div className="w-full bg-zinc-100 rounded-2xl mb-4">
                <div className="w-full py-3 text-center border-b-2 border-secondary">
                    <p className="uppercase font-bold">Minhas Apostas</p>
                </div>
                <div className="py-3 px-4">
                    <p className="py-8 px-1 text-xs text-center">Sem seleções adicionadas</p>
                </div>
            </div>

            <div className="w-full grid gap-3">
                <img src="https://via.placeholder.com/500x300" className="w-full" alt="" />
                <img src="https://via.placeholder.com/500x300" className="w-full" alt="" />
                <img src="https://via.placeholder.com/500x300" className="w-full" alt="" />
            </div>
        </>
    )
}
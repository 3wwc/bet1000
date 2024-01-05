import GamesLive from "../components/layout/global/GamesLive";
import SidebarBet from "../components/layout/global/SidebarBet";

export default function Live() {
    return (
        <section id="live-page" className="py-8">
            <div className="container-bet">
                <div className="lg:flex gap-6 mb-8">
                    <div className="lg:w-3/4">
                        <header className="mb-4">
                            <h1 className="text-2xl font-bold">Ao vivo</h1>
                        </header>
                        <GamesLive />
                    </div>
                    <div className="lg:w-1/4">
                        <SidebarBet />
                    </div>
                </div>
            </div>
        </section>
    )
}
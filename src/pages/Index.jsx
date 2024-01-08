import HomeLayout from "../components/layout/content/HomeLayout";
import GamesByChampionship from "../components/layout/global/GamesByChampionship";
import SlideCasinoGames from "../components/layout/global/SlideCasinoGames";
import SlideHome from "../components/layout/global/SlideHome";

export default function Home() {
    return (
        <HomeLayout>
            <SlideHome/>
            <SlideCasinoGames/>
            <GamesByChampionship/>
        </HomeLayout>
    )
}
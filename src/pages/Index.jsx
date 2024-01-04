import HomeLayout from "../components/layout/content/HomeLayout";
import MainGames from "../components/layout/global/MainGames";
import SlideHome from "../components/layout/global/SlideHome";

export default function Home() {
    return (
        <HomeLayout>
            <SlideHome/>
            <MainGames/>
        </HomeLayout>
    )
}
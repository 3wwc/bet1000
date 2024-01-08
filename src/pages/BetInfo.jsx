import BetLayout from "../components/layout/content/BetLayout";
import BetSection from "../components/layout/global/BetInfos/BetSection";
import HeaderBet from "../components/layout/global/BetInfos/HeaderBet";

export default function BetInfo() {
    return (
        <>
            <HeaderBet />
            <BetLayout sectionId="bet-section-layout">
                <BetSection />
            </BetLayout>
        </>
    )
}
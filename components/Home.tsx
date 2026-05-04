/** @format */

import Header from "./Header";
import HomeBanner from "./HomeBanner";
import TrustedBrands from "./TrustedBrands";
import LearningProcess from "./LearningProcess";
import FocusedLearning from "./FocusedLearning";
import ExplorePrograms from "./ExplorePrograms";
import Team from "./Team";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HomeBanner />
      <LearningProcess />
      <FocusedLearning />
      <ExplorePrograms />
      <Team />
      <TrustedBrands />
    </main>
  );
}

import Footer from "@/components/footer";
import GetStarted from "@/components/getStarted";
import Header from "@/components/header";
import HomePage from "@/components/home";
import RoadMap from "@/components/roadmap";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/pageBG.png')" }}
    >
      <div className="sm:mx-10 xl:mx-auto my-8 min-h-full sm:w-full 2xl:w-[70%] max-w-7xl">
        <Header />
        <HomePage />
        <RoadMap />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}

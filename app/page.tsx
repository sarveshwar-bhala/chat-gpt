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
      <div className="mx-10 my-8 min-h-full">

        <Header />
        <HomePage />
        <RoadMap />  
        <GetStarted />
        <Footer/>
      </div>
    </div>
  );
}

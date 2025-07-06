import Header from "./components/header";
import Sidebar from "./components/sidebar";
import HeroSection from "./components/heroSection";

function App() {
  return (
    <>
      <div className="font-poppins bg-[url('./images/fitnessgirl1.png')] bg-cover bg-center h-screen">
        <Header />
        <Sidebar />
        <HeroSection />
      </div>
    </>
  );
}

export default App;

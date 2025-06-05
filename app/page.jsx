import Navbar from "@/components/Navbar";
import Lander from "@/components/Lander";
import SiteDetails from "@/components/SiteDetails";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div>
       <Navbar/>
       <Lander/>
       <SiteDetails/>
       <Footer/>
    </div>
  );
}

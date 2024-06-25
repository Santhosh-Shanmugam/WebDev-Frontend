import BannerDetails from "./components/Banner/BannerDetails";
import Blog from "./components/Blog/Blog.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar";
import Mode from "./components/navbar/mode/mode";
import OverviewCounter from "./components/overview-counter/OverviewCounter";
function App() {
  return (
    <>
    <Navbar/>
    <Mode/>
    <OverviewCounter/>
    <BannerDetails/>
    <Blog/>
    <Footer/>
    </>
  ); 
}
export default App

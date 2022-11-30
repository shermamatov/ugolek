import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./Routes/MainRoutes";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
function App() {
    return (
        <div className="App">
            <Navbar />
            <MainRoutes />
            <Footer />
        </div>
    );
}

export default App;

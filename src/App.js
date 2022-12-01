import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./Routes/MainRoutes";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
function App() {
    return (
        <div className="App">
            <Navbar />
            <MainRoutes />
            <Footer />
            <NotFoundPage />
        </div>
    );
}

export default App;

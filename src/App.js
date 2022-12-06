import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./Routes/MainRoutes";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
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

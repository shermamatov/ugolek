import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/MainPage/Main";
import AboutUsPage from "../Pages/AboutUsPage";
import AddFilmPage from "../Pages/AddFilmPage";
import AuthPage from "../Pages/AuthPage";
import CartPage from "../Pages/CartPage";
import EditFilmPage from "../Pages/EditFilmPage";
import MainPage from "../Pages/MainPage";
import WatchFilmPage from "../Pages/WatchFilmPage";

const MainRoutes = () => {
    const userRoutes = [
        { link: "/", element: <MainPage />, id: 1 },
        { link: "/about", element: <AboutUsPage />, id: 2 },
        { link: "/add", element: <AddFilmPage />, id: 3 },
        { link: "/watch/:id", element: <WatchFilmPage />, id: 4 },
        { link: "/edit/:id", element: <EditFilmPage />, id: 5 },
        { link: "/auth", element: <AuthPage />, id: 6 },
        { link: "/cart", element: <CartPage />, id: 7 },
    ];
    return (
        <>
            <Routes>
                {userRoutes.map((item) => (
                    <Route
                        path={item.link}
                        element={item.element}
                        key={item.id}
                    />
                ))}
            </Routes>
        </>
    );
};

export default MainRoutes;

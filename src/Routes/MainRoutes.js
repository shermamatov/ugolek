import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/MainPage/Main";
import AboutUsPage from "../Pages/AboutUsPage";
import AddFilmPage from "../Pages/AddFilmPage";
import EditFilmPage from "../Pages/EditFilmPage";
import WatchFilmPage from "../Pages/WatchFilmPage";

const MainRoutes = () => {
    const userRoutes = [
        { link: "/", element: <Main />, id: 1 },
        { link: "/about", element: <AboutUsPage />, id: 2 },
        { link: "/add", element: <AddFilmPage />, id: 3 },
        { link: "/watch/:id", element: <WatchFilmPage />, id: 4 },
        { link: "/edit/:id", element: <EditFilmPage />, id: 4 },
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

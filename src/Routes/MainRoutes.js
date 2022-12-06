import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../components/MainPage/Main";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import { useAuth } from "../Contexts/AuthContextProvider";
import AboutUsPage from "../Pages/AboutUsPage";
import AddFilmPage from "../Pages/AddFilmPage";
import AuthPage from "../Pages/AuthPage";
import CartPage from "../Pages/CartPage";
import EditFilmPage from "../Pages/EditFilmPage";
import MainPage from "../Pages/MainPage";
import WatchFilmPage from "../Pages/WatchFilmPage";

const MainRoutes = () => {
    const { user } = useAuth();
    const userRoutes = [
        { link: "/", element: <MainPage />, id: 1 },
        { link: "/about", element: <AboutUsPage />, id: 2 },
        { link: "/watch/:id", element: <WatchFilmPage />, id: 4 },
        { link: "/auth", element: <AuthPage />, id: 6 },
        { link: "/cart", element: <CartPage />, id: 7 },
        { link: "*", element: <NotFoundPage />, id: 7 },
    ];
    const PRIVATE_ROUTES = [
        { link: "/add", element: <AddFilmPage />, id: 3 },
        { link: "/edit/:id", element: <EditFilmPage />, id: 5 },
    ];
    const ADMIN = "admin@gmail.com";
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
                {user
                    ? PRIVATE_ROUTES.map((item) => (
                          <Route
                              key={item.id}
                              path={item.link}
                              element={
                                  user.email === ADMIN ? (
                                      item.element
                                  ) : (
                                      <Navigate replace to="*" />
                                  )
                              }
                          />
                      ))
                    : null}
            </Routes>
        </>
    );
};

export default MainRoutes;

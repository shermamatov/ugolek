import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import Filter from "../components/MainPage/Filters/Filter";
import Main from "../components/MainPage/Main";
import ProductSortPagination from "../components/MainPage/Pagination/PaginationFilm";
import SimpleSlider from "../components/MainPage/Slider/Slider";
import { filmContext } from "../Contexts/FilmContextProvider";

const MainPage = () => {
    const { data, getData } = useContext(filmContext);

    useEffect(() => {
        getData();
    }, []);

    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    const count = Math.ceil(data.length / itemsPerPage);

    function currentData() {
        const begin = (page - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        getData();
        setPage(1);
    }, [searchParams]);
    return (
        <div>
            <SimpleSlider />
            <Filter />
            <Main currentData={currentData} />
            <ProductSortPagination
                page={page}
                setPage={setPage}
                count={count}
            />
        </div>
    );
};

export default MainPage;

import axios from "axios";
import React, { createContext, useState } from "react";
export const filmContext = createContext();
const FilmContextProvider = ({ children }) => {
    const FILM_API = "http://localhost:8000/product";
    const [data, setData] = useState([]);

    function addData(obj) {
        axios.post(FILM_API, obj);
        getData();
    }
    async function getData() {
        let { data } = await axios.get(FILM_API);
        setData(data);
        console.log(data);
    }
    const values = {
        addData,
        getData,
        data,
    };
    return (
        <filmContext.Provider value={values}>{children}</filmContext.Provider>
    );
};

export default FilmContextProvider;

import axios from "axios";
import React, { createContext, useState } from "react";
export const filmContext = createContext();
const FilmContextProvider = ({ children }) => {
    const FILM_API = "http://localhost:8000/product";
    const [data, setData] = useState([]);
    const [oneData, setOneData] = useState({});

    function addData(obj) {
        axios.post(FILM_API, obj);
        getData();
    }
    async function getData() {
        let { data } = await axios.get(FILM_API);
        setData(data);
        console.log(data);
    }
    async function deleteData(id) {
        await axios.delete(`${FILM_API}/${id}`);
        getData();
    }
    async function getOneDate(id) {
        let result = await axios.get(`${FILM_API}/${id}`);
        setOneData(result.data);
    }
    async function editData(id, data) {
        await axios.patch(`${FILM_API}/${id}`, data);
        getData();
    }
    const values = {
        addData,
        getData,
        data,
        oneData,
        deleteData,
        oneData,
        getOneDate,
        editData,
    };
    return (
        <filmContext.Provider value={values}>{children}</filmContext.Provider>
    );
};

export default FilmContextProvider;

import axios from "axios";
import React, { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const filmContext = createContext();
const FilmContextProvider = ({ children }) => {
  const FILM_API = "http://localhost:8000/product";
  const [data, setData] = useState([]);
  const [oneData, setOneData] = useState({});

  // async function getRandomData() {
  //     let { data } = await axios.get(`${FILM_API}`);
  //     let randomId = parseInt(Math.random() * (data.length - 1) + 1);
  //     getOneDate(randomId);
  // }

  function addData(obj) {
    axios.post(FILM_API, obj);
    getData();
  }
  async function getData() {
    let { data } = await axios.get(`${FILM_API}/${window.location.search}`);
    setData(data);
  }

  async function deleteData(id) {
    await axios.delete(`${FILM_API}/${id}`);
    getData();
  }
  async function getOneDate(id) {
    let result = await axios.get(`${FILM_API}/${id}`);
    setOneData(result.data);
    getData();
  }
  async function editData(id, data) {
    await axios.patch(`${FILM_API}/${id}`, data);
    getData();
  }
  const navigate = useNavigate();
  const location = useLocation();

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);
    if (value === "All") {
      search.delete(query);
    } else if (query == "_sort") {
      search.set(query, "year");
      search.set("_order", value);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
    getData();
  };
  const values = {
    addData,
    getData,
    data,
    oneData,
    deleteData,
    oneData,
    getOneDate,
    fetchByParams,
    FILM_API,
    editData,
  };
  return <filmContext.Provider value={values}>{children}</filmContext.Provider>;
};

export default FilmContextProvider;

import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../fire";
import { async } from "@firebase/util";
export const filmContext = createContext();
let INIT_STATE = {
    data: [],
    oneData: {},
};
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_DATA":
            return { ...state, data: action.payload };
        case "GET_ONE_DATA":
            return { ...state, oneData: action.payload };
        default:
            return state;
    }
};
const FilmContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [searchState, setSearchState] = useState(false);
    const filmRef = collection(db, "films");
    async function addData(film) {
        await addDoc(filmRef, film);
    }
    async function getData() {
        let data = await getDocs(filmRef);
        dispatch({
            type: "GET_DATA",
            payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        });
    }
    async function getOneDate(id) {
        const oneDataRef = doc(db, "films", id);
        let oneData = await getDoc(oneDataRef);
        dispatch({
            type: "GET_ONE_DATA",
            payload: oneData.data(),
        });
    }

    async function editData(id, film) {
        const productDocRef = doc(db, "films", id);
        await updateDoc(productDocRef, film);
        getData();
    }

    async function deleteData(id) {
        const productDocRef = doc(db, "films", id);
        await deleteDoc(productDocRef);
        getData();
    }

    async function testData(filter, type) {
        if (type == "All") {
            const data = await getDocs(filmRef);
            dispatch({
                type: "GET_DATA",
                payload: data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                })),
            });
        } else {
            const q = query(filmRef, where(filter, "==", type));
            let filterArr = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                filterArr.push(doc.data());
            });
            dispatch({
                type: "GET_DATA",
                payload: filterArr.map((doc) => ({
                    ...doc,
                    id: doc.id,
                })),
            });
        }
    }

    async function searchData(input) {
        let data = await getDocs(filmRef);
        if (input) {
            let search = data.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
                .filter((item) => {
                    if (
                        item.name.toLowerCase().includes(input.toLowerCase()) ==
                        true
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                });
            dispatch({
                type: "GET_DATA",
                payload: search,
            });
        } else {
            dispatch({
                type: "GET_DATA",
                payload: data.docs.map((doc) => doc.data()),
            });
        }
    }
    // ! SORT
    async function testSort(sorting) {
        console.log(sorting);
        if (sorting == "All") {
            const data = await getDocs(filmRef);
            dispatch({
                type: "GET_DATA",
                payload: data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                })),
            });
        } else {
            const q = query(filmRef, orderBy("year", sorting));
            let sort = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                sort.push(doc.data());
            });
            dispatch({
                type: "GET_DATA",
                payload: sort,
            });
        }
    }

    const values = {
        addData,
        editData,
        getData,
        getOneDate,
        deleteData,
        data: state.data,
        oneData: state.oneData,
        testData,
        searchState,
        setSearchState,
        searchData,
        testSort,
    };
    return (
        <filmContext.Provider value={values}>{children}</filmContext.Provider>
    );
};

export default FilmContextProvider;

import React, { createContext, useState, useContext, useCallback } from "react";
import { fetchCars, fetchCarDetails } from "../services/carService"; 


const CarsContext = createContext();


export const CarsProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [carDetails, setCarDetails] = useState({});

   
    const fetchCarsData = useCallback(async (segment, order) => {
        setLoading(true);
        const data = await fetchCars(segment, order);
        setCars(data);
        setLoading(false);
    }, []);

    
    const fetchCarDetailsData = useCallback(async (id) => {
        if (!carDetails[id]) { 
            setLoading(true);
            const details = await fetchCarDetails(id);
            setCarDetails(prev => ({ ...prev, [id]: details }));
            setLoading(false);
        }
    }, [carDetails]);

    return (
        <CarsContext.Provider value={{ cars, carDetails, loading, fetchCarsData, fetchCarDetailsData }}>
            {children}
        </CarsContext.Provider>
    );
};


export const useCarsContext = () => {
    return useContext(CarsContext);
};

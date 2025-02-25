import React, { useState, useEffect } from "react";
import FilterSegment from "../components/Home/FilterSegment";
import FilterOrder from "../components/Home/FilterOrder";
import CarCard from "../components/Home/CarCard";
import { useCarsContext } from "../context/CarsContext"; 
import "./Home.css";

const Models = () => {
    const [segment, setSegment] = useState(null);
    const [order, setOrder] = useState("");
    const { cars, loading, fetchCarsData } = useCarsContext(); 
    const [hoveredCar, setHoveredCar] = useState(null);

    useEffect(() => {
        fetchCarsData(segment, order); 
    }, [segment, order, fetchCarsData]);



    return (
        <div className="models container">
            <h1>Descubrí todos los modelos</h1>

            <div className="d-flex align-items-center mb-3 justify-content-between flex-wrap">
                <span className="label">Filtrar por</span>

                {/* Filtro de Segmento */}
                <FilterSegment segment={segment} setSegment={setSegment} />

                {/* Select de ordenamiento */}
                <FilterOrder filter={order} setFilter={setOrder} />
            </div>

            <hr className="divider" />

            <div className="row">
                {loading && cars.length === 0 ? (
                    <p>Cargando autos...</p>
                ) : (
                    cars.map((car) => (
                        <CarCard
                            key={car.id}
                            car={car}
                            onHover={setHoveredCar}
                            onLeave={() => setHoveredCar(null)}
                            isHovered={hoveredCar}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Models;

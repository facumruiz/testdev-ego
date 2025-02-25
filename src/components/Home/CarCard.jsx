import React from "react";
import { Link } from "react-router-dom"; 
import "./CarCard.css"

const CarCard = ({ car, onHover, onLeave, isHovered }) => {
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const handleClick = (id) => {
        localStorage.setItem("lastVisitedModel", id); // Guardar el modelo visitado en localStorage
    };

    return (
        <div className="col-12 col-md-4 col-lg-3">
            <div
                className="model-card"
                onMouseEnter={() => onHover(car.id)}
                onMouseLeave={onLeave}
            >
                <h5>{car.name}</h5>
                <p>{car.year} | $ {formatPrice(car.price)}</p>
                <img src={car.thumbnail} alt={car.name} className="car-thumbnail" />
                {isHovered === car.id && (
                    <Link to={`/ficha-de-modelo/${car.id}`}>
                        <button className="view-details-btn" onClick={() => handleClick(car.id)}>Ver Modelo</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CarCard;

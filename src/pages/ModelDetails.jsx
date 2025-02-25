import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCarsContext } from "../context/CarsContext"; // Importamos el hook del contexto
import CardCarousel from "../components/ModelDetails/CardCarousel";
import "./ModelDetails.css"

const Files = () => {
    const { id } = useParams(); // Obtener el id de la URL
    const { carDetails, loading, fetchCarDetailsData } = useCarsContext(); // Usamos el contexto
    const car = carDetails[id]; // Accedemos al auto específico usando el id

    useEffect(() => {
        // Si el auto aún no está en el contexto, lo obtenemos
        if (!car) {
            fetchCarDetailsData(id); // Obtenemos los detalles del auto si aún no están cargados
        }
    }, [id, car, fetchCarDetailsData]); // Dependemos de 'id' y 'car' para recargar cuando cambie

    if (loading || !car) {
        return <div>Cargando...</div>; // Mostrar un mensaje de carga mientras se obtiene la data
    }

    return (
        <>
            {/* Primera sección de contenido: imagen y texto */}
            <div className="container d-flex flex-column flex-md-row align-items-center my-4">
                <img
                    src={car.photo}
                    alt={car.name}
                    className="img-fluid rounded mb-3 mb-md-0 me-md-4"
                    style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
                />
                <div className="text-start-1">
                    <h4>{car.name}</h4>
                    <h2 className="fw-bold text-dark">{car.title}</h2>
                    <p className="text-muted mt-2" dangerouslySetInnerHTML={{ __html: car.description }}></p>
                </div>
            </div>

            {/* Componente del carrusel de tarjetas */}
            <CardCarousel car={car} />
            {/* Segunda sección de contenido: highlight 1 */}
            <div className="container d-flex flex-column-reverse flex-md-row align-items-center my-4">

                <div className="text-start-2">
                    <h2 className="fw-bold text-dark">{car.model_highlights[0].title}</h2>
                    <p className="text-muted mt-2" dangerouslySetInnerHTML={{ __html: car.model_highlights[0].content }}></p>
                </div>
                <img
                    src={car.model_highlights[0].image}
                    alt={car.model_highlights[0].image}
                    className="img-fluid rounded mb-3 mb-md-0 me-md-4"
                    style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
                />
            </div>

            {/* Tercera sección de contenido: highlight 2 */}
            <div className="container d-flex flex-column flex-md-row align-items-center my-4">
                <img
                    src={car.model_highlights[1].image}
                    alt={car.model_highlights[1].image}
                    className="img-fluid rounded mb-3 mb-md-0"
                />
                <div className="text-start-3">
                    <h2 className="fw-bold text-dark">{car.model_highlights[1].title}</h2>
                    <p className="text-muted mt-2" dangerouslySetInnerHTML={{ __html: car.model_highlights[1].content }}></p>
                </div>
            </div>



        </>
    );
};

export default Files;

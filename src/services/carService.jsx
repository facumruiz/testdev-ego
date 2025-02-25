import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchCars = async (segment, order, id) => {
    try {
        const params = new URLSearchParams();
        
        // Agregar el segmento si se proporciona
        if (segment) params.append("segment", segment);
        
        // Agregar el criterio de ordenamiento si se proporciona
        if (order) {
            switch (order) {
                case "precio-asc":
                    params.append("ordering", "price");
                    break;
                case "precio-desc":
                    params.append("ordering", "-price");
                    break;
                case "nuevos":
                    params.append("ordering", "-year");
                    break;
                case "viejos":
                    params.append("ordering", "year");
                    break;
                default:
                    console.warn("Criterio de orden no válido.");
                    break;
            }
        }

    
        const url = id ? `${API_URL}${id}/` : API_URL; 
        const response = await axios.get(url, { params });
        
        return response.data;
    } catch (error) {
        console.error("Error al obtener los autos:", error);
        return [];
    }
};

// Función para obtener los detalles de un solo auto
export const fetchCarDetails = async (id) => {
    try {
        const url = `${API_URL}${id}/`; 
        const response = await axios.get(url);
        
        return response.data; 
    } catch (error) {
        console.error("Error al obtener los detalles del auto:", error);
        return null; 
    }
};

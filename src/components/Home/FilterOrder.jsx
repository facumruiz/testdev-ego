import React from "react";
import "./Filters.css"

const FilterOrder = ({ filter, setFilter }) => {
    return (
        <select
        className="d-flex form-select ms-auto"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">Nada</option>
        <hr className="divider" />
        <option value="precio-asc">De menor a mayor precio</option>
        <hr className="divider" />
        <option value="precio-desc">De mayor a menor precio</option>
        <hr className="divider" />
        <option value="nuevos">Más nuevos primero</option>
        <hr className="divider" />
        <option value="viejos">Más viejos primero</option>
      </select>
      
    );
};

export default FilterOrder

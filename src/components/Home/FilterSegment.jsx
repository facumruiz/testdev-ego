import React from "react";
import "./Filters.css"


const FilterSegment = ({ segment, setSegment }) => {
    return (
        <div>
            {/* Select para móvil */}
            <select
                className="form-select  d-md-none me-auto"
                onChange={(e) => setSegment(e.target.value)}
                value={segment || ""}
            >
                <option value="">Todos</option>
                <hr className="divider" />
                <option value="1">Sedán</option>
                <hr className="divider" />
                <option value="2">Hatchback</option>
                <hr className="divider" />
                <option value="3">Pickups y Comerciales</option>
                <hr className="divider" />
                <option value="4">SUVs y Crossovers</option>
            </select>

            {/* Botones de filtro en desktop */}
            <div className="d-flex gap-2 flex-wrap d-none d-md-flex">
                {["Todos", "Sedán", "Hatchback", "Pickups y Comerciales", "SUVs y Crossovers"].map((label, index) => (
                    <button
                        key={index}
                        className={`btn custom-tab ${segment === (index === 0 ? null : String(index)) ? "active" : ""}`}
                        onClick={() => setSegment(index === 0 ? null : String(index))}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterSegment;
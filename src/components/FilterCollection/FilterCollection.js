import React from "react";
import DropIcon from "../../assets/dropdown-icon.svg";

const FilterCollection = ({ filterType, filters }) => {
  return (
    <div
      id="FilterCollection"
      className="mt-4"
      style={{ border: "1px solid #EEEEEE", borderRadius: "4px" }}
    >
      <div
        className="d-flex justify-content-between btn"
        type="button"
        data-toggle="collapse"
        data-target={`#filter${filterType}`}
        aria-expanded="false"
        aria-controls={`filter${filterType}`}
      >
        <div
          style={{
            textTransform: "uppercase",
            fontSize: "12px",
            fontFamily: "Poppins",
            fontWeight: "600",
            letterSpacing: "1.08px",
          }}
        >
          {filterType}
        </div>

        <img src={DropIcon} alt="" />
      </div>
      {filters.map((filter, i) => {
        return (
          <div key={i} id={`filter${filterType}`} className="collapse mx-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={filter}
                id={`${filter}`}
              />
              <label
                className="form-check-label"
                for={`${filter}`}
                style={{ fontFamily: "Poppins", fontWeight: "400px" }}
              >
                {filter}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FilterCollection;

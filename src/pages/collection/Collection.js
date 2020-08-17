import React, { useState } from "react";
import Base from "../../components/Base/Base";
import ProductCard from "../../components/ProductCard/ProductCard";
import PrettyHeader from "../../components/PrettyHeader/PrettyHeader";
import product1 from "../../assets/Product1.png";
import product2 from "../../assets/Product2.png";
import product3 from "../../assets/Product3.png";
import FilterCollection from "../../components/FilterCollection/FilterCollection";

const Collection = () => {
  const [filterData, setFilterData] = useState({
    filter: { type: "Material", filters: ["Fabric", "Leather", "Others"] },
  });
  const { filter } = filterData;

  return (
    <Base>
      <div className="container my-4">
        <div className="row d-flex justify-content-center justify-content-md-between my-2 mx-1 align-items-baseline">
          <div className="col-12 col-md-3 pretty-text-left"></div>
          <div className="col-12 col-md-3 pretty-text-left">
            <PrettyHeader title="Loafers" />
          </div>
          <div className="col-12 col-md-3 pretty-text-left"></div>
          <div className="col-md-3 d-flex justify-content-end align-items-center">
            <div
              className="mr-2"
              style={{
                color: "#384355",
                fontFamily: "Poppins",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              SORT
            </div>
            <form>
              <div className="form-group mb-0">
                <select className="form-control rounded" id="sortby">
                  <option>Popular</option>
                  <option>Price high - low</option>
                  <option>Price low - high</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <FilterCollection
              filterType={filter.type}
              filters={filter.filters}
            />
            <FilterCollection
              filterType={filter.type}
              filters={filter.filters}
            />
            <FilterCollection
              filterType={filter.type}
              filters={filter.filters}
            />
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  imageUrl={product1}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={product2}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  imageUrl={product3}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  imageUrl={product1}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={product2}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  imageUrl={product3}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  imageUrl={product1}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={product2}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  imageUrl={product3}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};
export default Collection;

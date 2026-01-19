import React from "react";
// import { Link } from "react-router-dom";

const properties = [
  { img: "porperties1.jpg", name: "Washington" },
  { img: "porperties2.jpg", name: "Franklin" },
  { img: "porperties3.jpg", name: "Clinton" },
  { img: "porperties4.jpg", name: "Arlington", col: "col-md-8" },
  { img: "porperties5.jpg", name: "Centerville" },
];

function Propertyarea() {
  return (
    <section className="propertice_section">
      <div className="container">
        <div className="row propertice-row">
          <div className="col-md-6 propertice-col">
            <h2>Properties by Area</h2>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
          </div>
        </div>

        <div className="row row-propertires-i">
          {properties.map((item, i) => (
            <div key={i} className={item.col || "col-md-4"}>
              <div className="propertice-box">
                
                <img
                  src={`img/${item.img}`}
                  alt={item.name}
                  className="img-fluid"
                />

                <a href="#" className="innerpropertice">
                  <button className="view-detailbtn">
                    View Details
                  </button>

                  <div className="inner-por">
                    <div>
                      <h4>{item.name}</h4>
                      <p>25 listings</p>
                    </div>
                    <div>
                      <i className="bi bi-geo-alt"></i>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Propertyarea;

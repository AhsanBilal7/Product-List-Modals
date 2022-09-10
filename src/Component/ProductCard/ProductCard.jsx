import React from "react";
import product from "./ProductCard.module.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
// import imgShoes from '../../pictures/1.jpg'
function ProductCard(props) {
  const info = props.value;
  // console.log(info)
  return (
    <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
      <MDBCard className={product.cardMain}>
        <div className="d-flex justify-content-between p-3">
          <p className="lead mb-0">{info.tagline}</p>
          <div
            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
            style={{ width: "25px", height: "25px" }}
          >
            <p className="text-white mb-0 small">x4</p>
          </div>
        </div>
        {console.log(info.imgSource)}
        <MDBCardImage
          className={product.imageMain}
          src={info.imgSource}
          // position="top"
          alt="Laptop"
        />
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <p className="small">
              <a href="#!" className="text-muted">
                z
              </a>
            </p>
            <p className="small text-danger">
              <s>{info.productValue}</s>
            </p>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">{info.productName}</h5>
            <h5 className="text-dark mb-0">$999</h5>
          </div>

          <div class="d-flex justify-content-between mb-2">
            <p class="text-muted mb-0">
              Available: <span class="fw-bold">6</span>
            </p>
            <div class="ms-auto text-warning">
              <MDBIcon fas icon="star" />
              <MDBIcon fas icon="star" />
              <MDBIcon fas icon="star" />
              <MDBIcon fas icon="star" />
              <MDBIcon fas icon="star" />
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default ProductCard;

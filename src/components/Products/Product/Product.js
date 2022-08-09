import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="card" style={{ width: "18rem", height: "40rem" }}>
      <img className="card-img-top" src={product.image} alt="car_image" />
      <div className="card-body" style={{ height: "20rem" }}>
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price : $ {product.price}</li>
        <li className="list-group-item">KM : {product.km}</li>
        <li className="list-group-item">Model: {product.km}</li>
        <li className="list-group-item">Renk :{product.color}</li>
      </ul>
      <div className="card-footer text-center">
        <Link to={`/product/${product.id}`}>
        <button
          onClick={() => loadCurrentItem(product)}
          type="button"
          className="btn btn-outline-secondary"
        >
          View Item
        </button>
          </Link>
        <button
          onClick={() => addToCart(product.id)}
          type="button"
          className="btn btn-outline-secondary ml-2"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);

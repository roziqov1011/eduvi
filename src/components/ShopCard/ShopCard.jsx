import React from "react";
import "./ShopCard.scss";
import { Rate } from "antd";
function ShopCard({ item }) {
  return (
    <div className="shop__card">
      <div className="card__img__box">
        <img className="shop__card__img" src={item.image} alt="" />
      </div>
      <h1>{item.title}</h1>
      <div className="shop__card__ul">
        <li className="shop__card__ul__li">{item.price}</li>
        <li className="shop__card__ul__li">
          <Rate disabled defaultValue={item.rating} />
        </li>
      </div>
    </div>
  );
}

export default ShopCard;

import React from "react";
import nike from "../../../Assets/JANKJKANFA.png";
import nike1 from "../../../Assets/484560_00.png";
import nike2 from "../../../Assets/1222.png";
import nike3 from "../../../Assets/DSFSDFS.png";

import { Carousel } from "antd";

export default function ProductDetail() {
  return (
    <div>
      <Carousel autoplay={true}>
        <div className="product-img">
          <img src={nike} className="shoe-img" />
        </div>
        <div className="product-img">
          <img src={nike1} className="shoe-img" />
        </div>
        <div className="product-img">
          <img src={nike2} className="shoe-img" />
        </div>
        <div className="product-img">
          <img src={nike3} className="shoe-img" />
        </div>
      </Carousel>
    </div>
  );
}

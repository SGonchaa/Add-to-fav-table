import React, { useState, useEffect } from "react";
import style from "./styles/Detail.module.scss";

function Detail() {
  return (
    <div className={style.Detail}>
      <div className={style.Detail_info}>
        <h3>
          Customer İD:
          <span>Berg</span>
        </h3>
        <h3>
          Customer Company Name:
          <span>Berglunds snabbköp</span>
        </h3>
        <h3>
          Customer Contact Name:
          <span>Christina Berglund</span>
        </h3>
        <h3>
          Customer Contact Title:
          <span>Order Administrator</span>
        </h3>
        <h3>
          Customer Address:
          <span> Sweden, Luleå</span>
        </h3>
        <h3>
          Customer Phone:
          <span> 0921-12 34 65</span>
        </h3>
        <h3>
          Customer Postal Code:
          <span> S-958 22</span>
        </h3>
        <button>Go Back</button>
        <button>Add to favourites</button>
      </div>
    </div>
  );
}

export default Detail;

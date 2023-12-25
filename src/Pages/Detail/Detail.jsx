import React, { useState, useEffect } from "react";
import style from "./styles/Detail.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";


function Detail() {
  const params = useParams().customer
  console.log(params)
  const [customer, setCustomer] = useState() 
  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/customers/${params}`)
      .then((response) => {
        setCustomer(response.data);
        console.log(response.data)
      });
  }, []);
  return (
    <div className={style.Detail}>
      <div className={style.Detail_info}>
        <h3>
          Customer İD:
          <span>{customer?.id}</span>
        </h3>
        <h3>
          Customer Company Name:
          <span>{customer?.contactName}</span>
        </h3>
        <h3>
          Customer Contact Title:
          <span>{customer?.contactTitle}</span>
        </h3>
        <h3>
          Customer Address:
          <span>{customer?.address?.street}</span>
        </h3>
        <h3>
          Customer Phone:
          <span>{customer?.address?.phone}</span>
        </h3>
        <h3>
          Customer Postal Code:
          <span>{customer?.address?.postalCode}</span>
        </h3>
        <button>Go Back</button>
        <button>Add to favourites</button>
      </div>
    </div>
  );
}

export default Detail;

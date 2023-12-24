import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./styles/Customers.module.scss";
import { Table } from "antd";
import axios from "axios";

const columns = [
  {
    width: 100,
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    width: 200,
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName",
  },
  {
    width: 200,
    title: "Contact Name",
    dataIndex: "contactName",
    key: "contactName",
  },
  {
    width: 200,
    title: "Address",
    dataIndex: "street",
    key: "street",
    render: (_, raw) => <span>{raw.address.street}</span>,
  },
  {
    width: 100,
    title: "Detail",
    key: "detail",
    render: (_) => (
      <Link to="/Detail">
        <button className={style.detail_btn}>Detail</button>
      </Link>
    ),
  },
  {
    width: 100,
    title: "Add to favourite",
    key: "favourite",
    render: () => (
      <Link to="/Favourites">
        <button className={style.fav_btn}>Favourite</button>
      </Link>
    ),
  },
];
const data = [];
function Customers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/customers").then((response) => {
      setCustomers(response.data);
      console.log(response.data);
    });
  }, []);
  return <Table columns={columns} dataSource={customers} />;
}

export default Customers;

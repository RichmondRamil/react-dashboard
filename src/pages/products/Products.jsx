import React, { useState } from "react";
import { productColumns, productRows } from "../../data";
import { Sidebar, Navbar, DataTable } from "../../components";
import "./products.scss";

const Products = () => {
  const [query, setQuery] = useState("");

  // const keys = ["username", "email", "status"];

  const search = (data) => {
    return data.filter(
      (item) =>
        // keys.some((key) => item[key].toLowerCase().includes(query))
        item.product.toLowerCase().includes(query) ||
        item.status.toLowerCase().includes(query) ||
        item.id.toString().includes(query) ||
        item.quantity.toString().includes(query)
    );
  };
  return (
    <div className="products">
      <Sidebar />
      <div className="products-container">
        <Navbar />
        <DataTable
          userRows={search(productRows)}
          userColumns={productColumns}
          onChange={(e) => setQuery(e.target.value)}
          button="Add Product"
        />
      </div>
    </div>
  );
};

export default Products;

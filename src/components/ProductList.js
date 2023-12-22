import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
const ProductList = () => {
  const { filter_products} = useFilterContext();
  return <GridView products={filter_products} />;
};

export default ProductList;

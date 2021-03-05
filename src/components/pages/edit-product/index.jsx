/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { ProductForm } from "../../templates/product-form";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../../services/products";
import { NavBar } from "../../molecules/nav-bar";


export const EditProduct = () => {
  const { id } = useParams();
  const [initialVal, setVals] = useState();

  useEffect(() => {
    handleValues();
  },[]);

  const handleValues = async () => {
    setVals(await getProductsById(id));
  };
  return (
    <>
    <NavBar/>
      <ProductForm id={id} initialVal={initialVal} />
    </>
  );
};

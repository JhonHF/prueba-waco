import React, { useEffect, useState } from "react";
import { NavBar } from "../../molecules/nav-bar";
import { getproducts, deleteProduct } from "../../../services/products";
import { StyledCard, ListConstainer } from "./styles";
import { Link, useHistory } from "react-router-dom";

export const Home = () => {
  const [listProducts, setList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    handleProducts();
  }, []);

  const handleProducts = async () => {
    setList(await getproducts());
  };

  const handleDelete = async (id) => {
    await deleteProduct(id)
    handleProducts()
  }

  return (
    <>
      <NavBar />
      <button >Crear producto</button>
      <ListConstainer>
        {listProducts.map((item) => (
          <StyledCard
          >
            <p>Nombre: {item.name}</p>
            <p>Descripcion: {item.description}</p>
            <p>Stock: {item.stock}</p>
            <p>Price: ${item.price}</p>
            <button onClick={()=>{history.push(`/edit/${item.id}`)}}>
              Editar
            </button>
            <button onClick={()=>handleDelete(item.id)}>
              Eliminar
            </button>
          </StyledCard>
        ))}
      </ListConstainer>
    </>
  );
};

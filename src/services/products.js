import { db } from "../firebase/firebase-database";

const productsRef = db.collection("products");

/**
 * @description Función para añadir la información de un producto a la lista de productos.
 * @param {*} productData Información del producto
 */
export const createProduct = async (product) => {
  await productsRef
    .add(product)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

/**
 * @description Función para borrar la información de un producto.
 * @param {string} productID Identificador del produto
 */
export const deleteProduct = async (productId) => {
  await productsRef.doc(productId).delete();
};

/**
 * @description Función para obtener la información de los productos de la plataforma.
 */
export const getproducts = async () => {
  const res = await productsRef.get().then((res) => {
    const array = [];
    res.docs.forEach((doc) => {
      array.push({ id: doc.id, ...doc.data() });
    });
    return array;
  });
  return res;
};

/**
 * @description Función para editar la información de un producto de la plataforma
 * @param {string} productId Identificador del vehiculo
 * @param {*} newData Información del producto
 */
export const editProduct = async (productId, newData) => {
  await productsRef.doc(productId).set({ ...newData }, { merge: true });
};

export const getProductsById = async (id) => {
   const res = await productsRef.doc(id).get().then(res=>{
        return res.data();
    }).catch(err=>{
        console.log(err)
    })
    return res;
}
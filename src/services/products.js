import { db } from "../firebase/firebase-database";

const productsRef = db.collection("products");

export const createProduct = async (product) => {
  await productsRef
    .add(product)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const deleteProduct = async (productId) => {
  await productsRef.doc(productId).delete();
};

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

export const editProduct = async (productId, newData) => {
  await productsRef.doc(productId).set({ ...newData }, { merge: true });
};

export const getProductsById = async (id) => {
  const res = await productsRef
    .doc(id)
    .get()
    .then((res) => {
      return res.data();
    })
    .catch((err) => {
      console.log(err);
    });
  return res;
};

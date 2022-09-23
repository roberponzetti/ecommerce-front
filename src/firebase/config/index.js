import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getProducts = async() => {
  const productsCollection = collection(db, 'product');

  const productsSnapshot = await getDocs(productsCollection);

  const products = productsSnapshot.docs.map(doc => doc.data())

  return products;
}

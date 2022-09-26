import { Firebase } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export class Product extends Firebase {
    constructor(nameCollection) {
      super();
      this._nameCollection = nameCollection;
    }
  
    async getProducts() {
      const productsCollection = collection(this._db, this._nameCollection);
      const productSnapshot = await getDocs(productsCollection);
  
      const products = productSnapshot.docs.map((doc) => doc.data());
      return products;
    }
}
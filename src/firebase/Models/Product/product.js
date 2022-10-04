import { Firebase } from "../../firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export class Product extends Firebase {
  constructor(nameCollection) {
    super();
    this._nameCollection = nameCollection;
  }

  async getProducts() {
    const productsCollection = collection(this._db, this._nameCollection);
    const productSnapshot = await getDocs(productsCollection);

    const products = productSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    return products;
  }

  async getProductById(id) {
    const docRef = doc(this._db, this._nameCollection, id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    const selectedProduct = docSnap.data();
    return selectedProduct;
  }
}
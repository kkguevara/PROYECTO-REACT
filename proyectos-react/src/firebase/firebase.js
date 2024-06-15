// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import.meta.env
// Your web app's Firebase configuration
  const firebaseConfig =  {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId:import.meta.env. VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId:import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProducts() {
  const respuesta = await getDocs(collection(db, 'productos'));

  const misProductos = [];
  respuesta.forEach((producto) =>
    misProductos.push({ id: producto.id, ...producto.data() })
  );
  return misProductos;
}

export async function getProduct(id) {
  const respuesta = await getDocs(collection(db, "productos"));
  const misProductos = [];
  respuesta.forEach((producto) =>
    misProductos.push({ id: producto.id, ...producto.data() })
  );
  return misProductos.find((producto) => producto.id === id);
}

export async function getProductCategory(id) {
  const respuesta = await getDocs(collection(db, "productos"));
  const misProductos = [];
  respuesta.forEach((producto) =>
    misProductos.push({ id: producto.id, ...producto.data() })
  );
  return misProductos.filter((producto) => producto.categoria === id);
}

export async function addOrder(order) {
  const ordenRecopilada = collection(db, "ordenes");
  const referencia = await addDoc(ordenRecopilada, order);
  return referencia.id;
}

export async function actualizarProducto(id, toUpdate) {
  const productDoc = doc(db, "products", id);
  try {
    await updateDoc(productDoc, toUpdate);
  } catch (error) {
    console.log("Error " + error);
  }
}

export async function eliminarProducto(id) {
  const productDoc = doc(db, "products", id);
  try {
    await deleteDoc(productDoc);
  } catch (error) {
    console.log("Error " + error);
  }
}

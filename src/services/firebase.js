// Import base firebase code
import firebase from "firebase/app";
// Import database functions, because we plan on using them
import "firebase/database";

// Set the configuration for your app
const firebaseConfig = {
  apiKey: "AIzaSyAohaso5s4Q94h0IauMnAcglARWjoKIHUo",
  authDomain: "fir-course-3d4e4.firebaseapp.com",
  databaseURL: "https://fir-course-3d4e4.firebaseio.com",
  projectId: "fir-course-3d4e4",
  storageBucket: "fir-course-3d4e4.appspot.com",
  messagingSenderId: "10797012486",
  appId: "1:10797012486:web:d64ba679788f9eb7515587"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

/**
 * Listens to a path in Firebase and then will call the passed function with the data as a parameter
 *
 * @param {string} dataToListenTo E.g. "messages"
 * @param {Function} callbackFunction
 * @returns {Object} Firebase reference
 */
const listenTo = (dataToListenTo = "", callbackFunction = () => {}) => {
  const databaseRef = database.ref(dataToListenTo);

  databaseRef.on("value", snapshot => {
    callbackFunction(snapshot);
  });

  return databaseRef;
};

/**
 * Adds a piece of information to the passed collection.
 * If the collection does not exist, it is created
 * @param {string} dataToWriteTo E.g. "messages"
 * @param {*} value E.g. { data: "value" }
 */
const writeTo = (dataToWriteTo = "", value) => {
  const databaseRef = database.ref(dataToWriteTo);

  databaseRef.push(value);
};

/**
 * Updates a path with the passed value
 * @param {string} keyToUpdate E.g. "messages/{messageId}"
 * @param {*} value { data: "value" }
 */
const update = (keyToUpdate = "", value) => {
  const databaseRef = database.ref(keyToUpdate);

  databaseRef.update(value);
};

/**
 * Removes a particular entry in Firebase
 * @param {string} keyToUpdate E.g. "messages/{messageId}"
 */
const remove = (keyToUpdate = "") => {
  const databaseRef = database.ref(keyToUpdate);

  databaseRef.remove();
};

export default {
  writeTo,
  listenTo,
  update,
  remove
};


  // firebase.js
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

  const firebaseConfig = {
      apiKey: "AIzaSyB9vz-bE1mD4krqh8_lIvtv6gZ95435UWw",
      authDomain: "scsit-symposium.firebaseapp.com",
      projectId: "scsit-symposium",
      storageBucket: "scsit-symposium.firebasestorage.app",
      messagingSenderId: "12830455073",
      appId: "1:12830455073:web:d86f5a22a9177654087a60",
      measurementId: "G-2GY8ZP4J14"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Export the database instance for use in other files
  export const db = getDatabase(app);
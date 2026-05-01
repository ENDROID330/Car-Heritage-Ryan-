// ads.js

// Import Firebase SD
import { getFirestore, collection, onSnapshot } 
  from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const db = getFirestore(app);

// Display ads in Sale section
onSnapshot(collection(db, "ads"), snapshot => {
  const saleDiv = document.getElementById("saleAds");
  if (!saleDiv) return; // only run if sale.html has the container

  saleDiv.innerHTML = "";
  snapshot.forEach(doc => {
    const ad = doc.data();
    saleDiv.innerHTML += `
      <div class="ad-card">
        <h3>${ad.title}</h3>
        <p>${ad.description}</p>
        <small>Posted by ${ad.user}</small>
      </div>
    `;
  });
});

importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBxBD6ZZQi6YmRkpndqHNu2DcsoDfwnBW4",
  authDomain: "adonis-plan-canicule.firebaseapp.com",
  projectId: "adonis-plan-canicule",
  storageBucket: "adonis-plan-canicule.firebasestorage.app",
  messagingSenderId: "446516429386",
  appId: "1:446516429386:web:0920ef9cf8494253f5dcb3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || "Cognitive Care", {
    body: body || "",
    icon: "/icons/icon-192.png",
    badge: "/icons/icon-32.png",
  });
});

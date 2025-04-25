import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAcEQL-gX7RNZv2wiCfOn9E203XOFPQtGA",
  authDomain: "enaa-blog-44456.firebaseapp.com",
  projectId: "enaa-blog-44456",
  storageBucket: "enaa-blog-44456.appspot.com",
  messagingSenderId: "1052594192662",
  appId: "1:1052594192662:web:f7c167b15f636c71951037",
  measurementId: "G-0ELZ0EWCFZ"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};

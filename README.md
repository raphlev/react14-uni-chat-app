# Unichat 

Full-fledged Firebase Chat Application. With social authentication including Google and Facebook using Firebase, online statuses, great design, and functionality, image support, sound notifications, the ability to create multiple rooms, and much more, this chat app is even better than the first chat application video I've created. I've listened to every single one of your comments and added all the features that you've requested.
LEARN: Routing, Firebase Social Login, Firebase Google Login, Firebase Facebook Login, React Context API, Chat Engine, REST API's, environment variables


https://github.com/adrianhajdin/unichat-course/tree/5-userbase
https://www.youtube.com/watch?v=Bv9Js3QLOLY

## .env for a react app
- prefix REACT_APP to all env variables, don't need to install dotenv !!!!
- then use process.env.REACT_APP_XXX in your app to use them: see fb.js (??)
- restart server (npm start) after updating anf adding process.env in the app
- we don't need - if using above prefix - REACT_APP_XXX env vars - to use "dotenv": "^10.0.0" component and to add the following code in jsx file:
  import dotenv from 'dotenv'; 
  dotenv.config(); 
- dotenv is needed for backend code (not in browser for react)

## Create firebase.google.com project for OAuth and realtime database
- console.firebase.google.com/project/ > create a project: unichat --> unichat-2dea8 --> disable google analytics
- console.firebase.google.com/project/ > settings > your apps > select platform html </> > name=unichat, setup firebase hosting > register app
- npm install -g firebase-tools
- to deploy in console (later): firebase login + firebase init + firebase deploy
- console.firebase.google.com/project/ > project settings > your apps > SDK setup and configuration > select 'Config' > 
  const firebaseConfig = {
	apiKey: "AIzaSyBvn6AZfYiLWgGV37CLiC6HbMEwnC77W-s",
	authDomain: "unichat-2dea8.firebaseapp.com",
	projectId: "unichat-2dea8",
	storageBucket: "unichat-2dea8.appspot.com",
	messagingSenderId: "84626442686",
	appId: "1:84626442686:web:dd8a8567d31cf3fac251ef"
	};

## add firebase config in firebase.js

## Add Google Oauth into firebase
- console.firebase.google.com/project/ > Authentication > providers > google > enable > generated 'Project public-facing name' = project-84626442686 - select email=ptcGmail > Save

## Add facebook Oauth into developers.facebook.com/ + firebase : create facebook Oauth app and copy config into firebase App Auth 
- developers.facebook.com/ > App > Consumer > name=unichat, email=ptcGmail > Create App > Facebook Login > Setup > platform=web (www) > Site URL : localhost:3000  (TO BE UPDATED) > Save > Next > Next > Next (we use firebase for connection)
- console.firebase.google.com/project/ > Authentication > providers > facebook > enable + copy callback URL: https://unichat-2dea8.firebaseapp.com/__/auth/handler
- developers.facebook.com/ > App unichat > Products > Facebook Login > Settings > Valid OAuth Redirect URIs (copy/paste): https://unichat-2dea8.firebaseapp.com/__/auth/handler > Save
- developers.facebook.com/ > App unichat > Settings > Basic > copy App ID : 307640434161540
- console.firebase.google.com/project/ > Authentication > providers > facebook > App ID (copy/paste) : 307640434161540
- developers.facebook.com/ > App unichat > Settings > Basic > copy App Secret : 2a94e1f9650fc7ca658b9fce82023cd4
- console.firebase.google.com/project/ > Authentication > providers > facebook > App Secret (copy/paste) = 2a94e1f9650fc7ca658b9fce82023cd4 > Save
Fix connection error detected later at run-time:
- developers.facebook.com/ > App unichat > Products > Facebook Login > Settings > set 'Login from Devices' to 'Yes' + set 'Embedded Browser OAuth Login' to 'Yes'

## add google+facebook auth snippet in Login.js

## add facebook+google data in react context: AuthContext.js
  . defines AuthProvider in order to wrap a react context to our app
  . defines useAuth hook to simplify usage of the context value object (= { user } ) that is exported with AuthProvider

## Create and retrieve App Id from chatengine.io
- chatengine.io > create new project = unichat > Project ID: f6a9f20c-03a3-45d3-b6fd-62d0d4fe51f9  Private Key: 220e087b-2348-488b-8690-dfc3a6fef899

- add chatengine credentials into Chats.js file
- using { user } = useAuth() into Chats.js file in order to get the user from firebase with Auth either from google or facebook

## deploymnet
- deploy build folder to netlify - or create build from git?
- console.firebase.google.com/project/ > Authentication > Sign-in method > add domain = NETLIFY URL

## Testing
- chatengine.io > project = unichat > delete alreadt created user from previous testing in order to test user creation in chat engine (from firebase)
- During Testing in Chrome on localhost:3000 > Dev Tools > Application > Storage > Clear Site Data  OR  Local Storage > select localhost:3000 > Clear 

## ISSUE
- not possible to connect with several users
- not possible to connect with the google chrome perso

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebase : {
    apiKey: "AIzaSyBkFtBJtrf9HkPVbI5rszItFyQMzSOpB64",
    authDomain: "todoapp-6c746.firebaseapp.com",
    databaseURL: "https://todoapp-6c746.firebaseio.com",
    projectId: "todoapp-6c746",
    storageBucket: "todoapp-6c746.appspot.com",
    messagingSenderId: "791661657548"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

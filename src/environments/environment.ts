// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // todo move this to other file >:(
  spotify_client_id: '3503c48c3bd148ba9bddfce19674184b',
  spotify_client_secret: 'a57e112df75f4128ba7597ceafdb688d',
  spotify_response_type: 'code',
  spotify_redirect_uri: 'http://localhost:4200/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

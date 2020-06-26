/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'fsnd-auth-a2h.us', // the auth0 domain prefix
    audience: 'fsnd-auth', // the audience set for the auth0 app
    clientId: 'PxOMYGbtt7nZU95vw3qUH71ueSzKf9TW', // the client id generated for the auth0 app
    callbackURL: 'https://localhost:8100', // the base url of the running ionic application. 
  }
};

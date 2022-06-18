/* istanbul ignore file */
import env from "./env";
import { WebAuth } from "auth0-js";

const auth0 = new WebAuth({
  domain: env.AUTH0_DOMAIN,
  clientID: env.AUTH0_CLIENT_ID,
  responseType: "token id_token",
  redirectUri: "https://vajos.github.io/habit_track",
  audience: env.API_ENDPOINT,
  scope: "openid profile email",
});

export default auth0;

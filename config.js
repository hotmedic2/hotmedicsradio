module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/m99XhXPxFJ", //Support Server Link
  Token: process.env.Token || "ODU1ODMyNDY5MjIzNjM3MDEz.YM4OGQ.kbaF1sNWTC8TLaYGZ_zb7WVUCp8", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "855832469223637013", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "O89za6Jv6Qw1koZgFwkeVMYk_qpwVuS3", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://imgur.com/qO8CKol.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "80252585754d4a9f914239ea569b40bc", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "450ce3567db44a88b6d31d3d09d59a56", //Spotify Client Secret
  },
};

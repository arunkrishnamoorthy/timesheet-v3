const cds = require("@sap/cds");
const passport = require("passport");
const xsenv = require("@sap/xsenv");
const express = require("express");

var xsuaaCredentials = false;
// if (process.env.NODE_ENV === "production") {
  try {
    xsenv.loadEnv();
    const JWTStrategy = require("@sap/xssec").JWTStrategy;
    const services = xsenv.getServices({ xsuaa: { tags: "xsuaa" } });
    xsuaaCredentials = services.xsuaa;
    const jwtStrategy = new JWTStrategy(xsuaaCredentials);
    passport.use(jwtStrategy);
  } catch (error) {
    console.warn(error.message);
  }
// }

cds.on("bootstrap", async (app) => {
    // Authentication using JWT
  if (process.env.NODE_ENV === "production") {
    await app.use(passport.initialize());
    await app.use(passport.authenticate("JWT", { session: false }));
  }
});

module.exports = cds.server; 
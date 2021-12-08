module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }], // no need to import react and react-dom in jsx files unless
    //specific methods or states are needed.
  ],
};

const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

let publicPathUrl;
let enviroment = process.env.NODE_ENVIROMENT;
console.log("webpack.config LINE 12 =>", process.env.NODE_ENVIROMENT);

switch (enviroment) {
  case "develop":
    publicPathUrl = "http://localhost:4201/";
    break;
  case "qa":
    publicPathUrl = "http://localhost:4201/";
    break;
  case "production":
    console.log("webpack.config LINE 20 => production");
    publicPathUrl = "http://localhost:4201/";
    break;
  default:
    console.log("webpack.config LINE 25 => default");
    publicPathUrl = "http://localhost:4201/";
    break;
}
const moduleFederationConfig = withModuleFederationPlugin({
  name: "modelsAndControls",
  exposes: {
    "./ModelsAndControlsModule":
      "./src/app/presentation/modelsAndControls/modelsAndControls.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

moduleFederationConfig.output.publicPath = publicPathUrl;
module.exports = moduleFederationConfig;

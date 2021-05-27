module.exports = {
  apps : [{
    name: "tengyun",
    script: "./index.js",
    watch : true,
    env: {
      NODE_ENV: "development",
      //DEBUG: "*",
    },
  }]
};

require("dotenv").config();

const online = process.env.ONLINE;
const serverURL = process.env.SERVER_URL;
const localHost = process.env.LOCAL_HOST;

let apiEndPoint = "";

if (online === "true") {
  apiEndPoint = serverURL;
  console.log("On Line", apiEndPoint);
} else {
  apiEndPoint = localHost;
  console.log("Off line", apiEndPoint);
}

module.exports.apiEndPoint = apiEndPoint;

console.log(module.exports);

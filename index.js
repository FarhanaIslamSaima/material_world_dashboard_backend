const app = require("./app")
const config = require('./config/config')
const PORT = config.app.port;


app.listen(PORT, () => {
    console.log("App is running oh http://localhost:4000")
})
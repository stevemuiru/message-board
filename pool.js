const { Pool } = require("pg")

module.exports = new Pool({
   host : "localhost",
   user : "madders",
   database : "message_board",
   password : "markxlii",
   port: 5432
})
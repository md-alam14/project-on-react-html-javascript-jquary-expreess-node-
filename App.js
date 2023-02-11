const { Client } = require("pg"); 
let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header(
"Access-Control-Allow-Methods",
"GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
);
res.header(
"Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept"
);
next();
});
const client = new Client({
  user: "your database user",
  password: "Nafish@7131",
  database: "postgres",
  port: 5432,
  host: "db.peutsnrbxjjhcsaqrpyg.supabase.co",
  ssl: { rejectUnauthorized: false },
  });
  client.connect(function (res, error) {
  console.log(`Connected!!!`);
  });
  app.get("/users", function (req, res, next) 
  { console.log("Inside /users get api"); 
  const query =` SELECT * FROM users`;
  client.query(query, function (err, result) {
  if (err) { res.status(400).send(err);}
  res.send(result.rows);
  client.end();
  });
  });
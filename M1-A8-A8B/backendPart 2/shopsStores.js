const { query } = require("express");
let express = require("express");
let app = express();
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'db.peutsnrbxjjhcsaqrpyg.supabase.co',
  database: 'postgres',
  password: 'Nafish@7131',
  port: 5432,
});
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
const port = 2410;
app.listen(port, () => console.log(`Listening on port ${port}!`));




app.get("/shops", function (req, res, next) 
{ console.log("shops api"); 

{pool.query(`SELECT * FROM shops`, function (err, result) {
if (err) { res.status(400).send(err);}
console.log("Inside /users get api"); 
console.log(result); 
res.send(result)

 
});}
});
app.get("/products", function (req, res, next) 
{ console.log("shops api"); 

{pool.query(`SELECT * FROM products `, function (err, result) {
if (err) { res.status(400).send(err);}
console.log("Inside /users get api"); 
console.log(result); 
res.send(result)

 
});}
});
app.post("/products", function (req, res, next) { 
  console.log("Inside post of user");

const query=`insert into products(productname,category,description)
VALUES ($1,$2,$3)`;
var values = Object.values(req.body);
console.log(values);
pool.query(query, values, function (err, result) {
if (err) {
res.status(400).send(err);
}
console.log(query);
res.send(`${result} insertion successful`);
 
});
}); 
 app.get("/products/:productid", function (req, res, next) {
    console.log(" put ");    
    let productid= req.params.productid;
  const query =`Select * from products
  WHERE productid=${productid}`;
  pool.query(query,function (err, result) { if (err) {
     res.status(400).send(err);
     }
     res.send(result);
     });
     });
app.put("/products/:productid", function (req, res, next) {
  console.log(" put ");    
  let productid= req.params.productid;
 
  let productname= req.body.productname;
  let category= req.body.category;
  let description= req.body.description;
 const values=[category,description]
console.log(values)
const query =`UPDATE products SET category=$1,
description=$2
WHERE productid=${productid}`;

pool.query(query,values,function (err, result) { if (err) {
 
   res.status(400).send(err);
   }

   res.send(`${result} update successful`);
  
   });
   });
 
app.post("/shops", function (req, res, next) { 
  console.log("Inside post of user");

const query=`insert into shops(name,rent)
VALUES ($1,$2)`;
var values = Object.values(req.body);
console.log(values);
pool.query(query, values, function (err, result) {
if (err) {
res.status(400).send(err);
}
console.log(query);
res.send(`${result} insertion successful`);
 
});
});
app.get("/purchases", function (req, res, next) 
{ console.log("SELECT * FROM purchases  api"); 
let shop=req.query.shop
        let product=req.query.product
        let productid=req.query.productid
        let sort=req.query.sort
        let query=`SELECT * FROM purchases`
        if(sort==="st1")
             query=`SELECT * FROM purchases ORDER BY shopId`

        if(sort==="pr1")
        query=`SELECT * FROM purchases ORDER BY productid`
        
        if(sort==="QtyAsc")
        query=`SELECT * FROM purchases ORDER BY quantity`
           
        if(sort==="QtyDesc")
        query=`SELECT * FROM purchases ORDER BY quantity DESC`
        if(sort==="ValueAsc")
        query=`SELECT * FROM purchases ORDER BY price*quantity`
           
        if(sort==="ValueDesc")
        query=`SELECT * FROM purchases ORDER BY price*quantity DESC`
{pool.query(query, function (err, result) {
if (err) { res.status(400).send(err);}
console.log("Inside /users get api"); 


console.log(result); 
res.send(result)

 
});}
});

app.get("/purchases/shops/:shopid", function (req, res, next) 
{ console.log("SELECT * FROM purchases  api"); 
let shopid=req.params.shopid
{pool.query(`SELECT * FROM purchases where shopid=${shopid}`, function (err, result) {
if (err) { res.status(400).send(err);}
console.log("Inside /users get api"); 
console.log(result); 
res.send(result)

 
});}
});
app.get("/purchases/products/:productid", function (req, res, next) 
{ console.log("SELECT * FROM purchases productid  api"); 
let productid=req.params.productid
{pool.query(`SELECT * FROM purchases where productid=${productid}`, function (err, result) {
if (err) { res.status(400).send(err);}
console.log("Inside /users get api"); 
console.log(result); 
res.send(result)

 
});}
});
app.get("/totalPurchase/product/:productid", function (req, res, next) 
{ console.log("SELECT * FROM purchases productid  api"); 
let productid=req.params.productid
{pool.query(`SELECT DISTINCT 
shopid,
SUM(quantity) AS quantity,
SUM(quantity*price) AS totalpurchase,
price
FROM purchases 
where productid=${productid}
group by shopid,price`, function (err, result) {
if (err) { res.status(400).send(err);}
console.log("Inside /users get api"); 
console.log(result); 
res.send(result)

 
});}
});
app.get("/totalPurchase/shop/:shopid", function (req, res, next) 
{ console.log("SELECT * FROM purchases productid  api"); 
let shopid=req.params.shopid
{pool.query(`SELECT DISTINCT 
productid,

SUM(quantity) AS quantity,
price,
SUM(quantity*price) AS totalpurchase
FROM purchases 
where shopid=1
group by productid,price`, function (err, result) {
if (err) { res.status(400).send(err);}
console.log("Inside /users get api"); 
console.log(result); 
res.send(result)

 
});}
});
app.post("/purchases", function (req, res, next) { 


const query=`insert into purchases(shopId,productid,quantity,price)
VALUES ($1,$2,$3,$4)`;
var values = Object.values(req.body);
console.log(values);
pool.query(query, values, function (err, result) {
if (err) {
res.status(400).send(err);
}
console.log(query);
res.send(`${result} insertion successful`);
 
});
});
app.delete("/svr/mobile/:id", function (req, res) { 
    let id =req.params.id;
    const query=`DELETE FROM  mobile 
    where "id"=${id}`;
    pool.query(query, function (err, result) {
    if (err) { res.status(400).send(err);}
    console.log("Inside /users get api",query); 
    console.log(result); 
    res.send(result)
     
  })
  
})


  


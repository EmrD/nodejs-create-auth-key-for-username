const express = require("express");
const app = express();

app.get("/" , (req , res) =>{
    res.sendFile(__dirname + "/index.html");
});

function generate_auth_key(username) {
  const auth_key = username + Date.now() + Math.random(1,1000);
  return auth_key;
}

app.post("/auth" , (req , res) => {
  const user = req.headers["username"];
  res.send(generate_auth_key(user));
})

app.listen(3000 , () =>{
    console.log("Server is running on http://localhost:3000");
})
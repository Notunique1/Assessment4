const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
let getCompliment = [

    "You love chinese food.", "You look pretty.", "You love challenge.", "You never know who you touch.","You have yearning for perfection."
];
app.get("/api/compliment", getCompliment);
const port = 4000;
app.listen(4000, () => console.log("Server running on 4000"));



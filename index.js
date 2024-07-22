const express = require("express");
require('dotenv').config();
const app = express();

// app.get('/', (req, res) => {
//     res.send("We are serving on port 3000");
// });

// app.get('/satyam', (req, res) => {
//     const object = [
//         { name: "satyam", age: 28, city: "Delhi" },
//         { name: "suma", age: 26, city: "Pune" },
//         { name: "priya", age: 27, city: "Mumbai" },
//         { name: "kiran", age: 25, city: "Bangalore" },
//         { name: "ravi", age: 29, city: "Chennai" },
//         { name: "ramesh", age: 30, city: "Hyderabad" }
//     ];

//     const result = object.filter((item) => item.age > 27);
//     const a = result.map(item => item.name);

//     res.send(a);
// });

const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
    console.log(`Your port is active on port number ${process.env.PORT}`);
});

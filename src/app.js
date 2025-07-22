const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("🚀 Welcome to the Node.js Project!");
});
app.use("/users", userRoutes);
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

const colors = ['red','blue','green'];
colors.forEach(color =>console.log(color));

const lenghts = colors.map(color=> color.length);
console.log(lenghts);

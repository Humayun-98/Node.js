import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>HTTP Service.</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
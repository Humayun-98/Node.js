import express from "express"
import {dirname} from "path"
import {fileURLToPath} from "url"

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({extended: true}));

let isAuthorized = false;

function checkAuthority(req, res, next){
    const password = req.body["password"];
    if(password === "nodeAuth")
        isAuthorized = true;

    next();
}

app.use(checkAuthority);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    if(isAuthorized){
        res.sendFile(__dirname + "/public/secret.html")
    }else{
        res.sendFile(__dirname + "/public/index.html")
    }
})

app.listen(port, () => {
    console.log(`Server is being hosted at port: ${port}`);
})
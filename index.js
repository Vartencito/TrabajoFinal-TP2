import express from "express"

const app = express();
const port = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//agregar las rutas

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.on("error", (e)=>{console.log(e)});
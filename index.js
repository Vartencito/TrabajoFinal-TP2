import express from "express";
import config from "./config.js";
import ProductRouter from "./src/routes/product.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", new ProductRouter().start());

app.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`);
});

app.on("error", (errorDetail) => {
  console.error(
    `An error has ocurred while setting up the web server: ${errorDetail}`
  );
});

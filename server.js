const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Listening on http://127.0.0.1:${PORT}`);
});
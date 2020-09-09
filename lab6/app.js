const express = require("express");
const qr = require("qr-image");
const fs = require("fs");
const app = express();
const path = require("path");
const { type } = require("os");

app.use("/htmlpages", express.static(path.join(__dirname, "/statichtml")));

app.get("/", (req, res) => {
  res.send("QR");
});

app.get("/help.html", (res, req) => {
  req.redirect("/htmlpages/help.html");
});

app.get("/qr", (res, req) => {
  req.redirect("/htmlpages/help.html");
});

app.post("/qr",(res, req) => {
  req.redirect("/htmlpages/help.html")})

app.get("/qr-async", async(req, res) => {
  const code = await qr.image("fsdgdfgs", { type: "png" });
  res.type("png")
  code.pipe(res);
})

app.use((res, req) => {
  req.status(404).redirect("/htmlpages/Errorpage.html");
});

app.listen(3000, () => {
  console.log("Server running on port 3000...");
});


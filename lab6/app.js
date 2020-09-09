const express = require("express");
const qr = require("qr-image");
const fs = require("fs");
const app = express();
const path = require("path");
const { type } = require("os");
const bodyParser= require('body-Parser');

app.use("/htmlpages", express.static(path.join(__dirname, "/statichtml")));

app.get("/", (req, res) => {
  res.send("QR generator");
});

app.get("/help.html", (res, req) => {
  req.redirect("/htmlpages/help.html");
});
//convert url param to QR code
app.get("/qr/:data", async(req, res) => {
  console.log(req.params.data);
    if (req.query.type === "pdf") {
      const code = await qr.image(req.params.data, { type: "pdf" });
      res.type("pdf");
      code.pipe(res);
    } else if (req.query.type === "svg") {
      const code = await qr.image(req.params.data, { type: "svg" });
      res.type("svg");
      code.pipe(res);
    } else {
      const code = await qr.image(req.params.data, { type: "png" });
      res.type("png");
      code.pipe(res);
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//convert requestbody to QR code
app.post("/qr",async(req, res) => {
  console.log(req.body);  
  if (req.query.type === "pdf") {
    const code = await qr.image(req.body.data, { type: "pdf" });
    res.type("pdf");
    code.pipe(res);
  } else if (req.query.type === "svg") {
    const code = await qr.image(req.body.data, { type: "svg" });
    res.type("svg");
    code.pipe(res);
  } else {
    const code = await qr.image(req.body.data, { type: "png" });
    res.type("png");
    code.pipe(res);
  }
})
app.post("/qr",async(req, res) => {
  console.log(req.body);  
  if (req.query.type === "pdf") {
    const code = await qr.image(req.body.data, { type: "pdf" });
    res.type("pdf");
    code.pipe(res);
  } else if (req.query.type === "svg") {
    const code = await qr.image(req.body.data, { type: "svg" });
    res.type("svg");
    code.pipe(res);
  } else {
    const code = await qr.image(req.body.data, { type: "png" });
    res.type("png");
    code.pipe(res);
  }
})
app.get("/qr", async (req, res) => {
  console.log(req.body);
  if (req.query.type === "pdf") {
    const code = await qr.image(req.body.data, { type: "pdf" });
    res.type("pdf");
    code.pipe(res);
  } else if (req.query.type === "svg") {
    const code = await qr.image(req.body.data, { type: "svg" });
    res.type("svg");
    code.pipe(res);
  } else {
    const code = await qr.image(req.body.data, { type: "png" });
    res.type("png");
    code.pipe(res);
  }
});



app.use((res, req) => {
  req.status(404).redirect("/htmlpages/Errorpage.html");
});

app.listen(3000, () => {
  console.log("Server running on port 3000...");
});


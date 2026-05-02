const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.post("/translate", (req, res) => {
  const { text, to } = req.body;

  if (!text || !to) {
    return res.status(400).json({ error: "Text and target language required" });
  }

  let translated = "";

  if (text.toLowerCase() === "hello" && to === "hi") {
    translated = "नमस्ते";
  } else {
    translated = "Translated: " + text;
  }

  res.json({
    success: true,
    translatedText: translated
  });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
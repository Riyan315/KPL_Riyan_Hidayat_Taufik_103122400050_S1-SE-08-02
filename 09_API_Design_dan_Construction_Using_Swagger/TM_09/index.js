const http = require("http");

function angkaDariNama(nama) {
  let hash = 0;

  for (let i = 0; i < nama.length; i++) {
    hash = (hash * 31 + nama.charCodeAt(i)) >>> 0;
  }

  return (hash % 100) + 1;
}

const server = http.createServer((req, res) => {
  if (req.method !== "POST" || req.url !== "/") {
    res.writeHead(404, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Endpoint tidak ditemukan" }));
  }

  let body = "";

  req.on("data", chunk => {
    body += chunk;
  });

  req.on("end", () => {
    try {
      const data = JSON.parse(body);

      const nama = data.nama;
      const tebakan = data.tebakan;

      const angkaBenar = angkaDariNama(nama);

      let jawaban;

      if (tebakan === angkaBenar) {
        jawaban = `Benar sekali! Tebakannya adalah ${tebakan}.`;
      } else if (tebakan > angkaBenar) {
        jawaban = "Tebakanmu terlalu tinggi!";
      } else {
        jawaban = "Tebakanmu terlalu rendah!";
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ jawaban }));
    } catch {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "JSON tidak valid" }));
    }
  });
});

server.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
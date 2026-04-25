const { specs, swaggerUi } = require('./swagger.js');
const express = require('express');
const app = express();

const PORT = 3000;

const menuData = {
    bakmi: {
        "bakmi ayam spesial": 25000,
        "bakmi rica-rica": 28000,
        "bakmi komplit (bakso pangsit)": 35000
    },
    rames: {
        "nasi rames biasa": 15000,
        "nasi rames rendang": 25000,
        "nasi rames telur balado": 18000
    }
};

app.get('/', (req, res) => {
    const landing = {
        pesan: "Cek /docs untuk melihat rincian API"
    };

    res.json(landing);
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /menu/{category}:
 *   get:
 *     summary: Menu makanan berdasarkan kategori
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Menu berhasil ditampilkan
 *       404:
 *         description: Menu tidak ditemukan
 */

app.get('/menu/:category', (req, res) => {
    const category = req.params.category;
    const menu = menuData[category];

    if (menu) {
        res.json(menu);
    } else {
        res.status(404).json({ error: "Menu tidak ditemukan" });
    }
});

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Menampilkan semua kategori menu
 *     responses:
 *       200:
 *         description: Daftar kategori menu berhasil ditampilkan
 */
app.get('/menu', (req, res) => {
    const categories = Object.keys(menuData);
    res.json(categories);
});

app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});
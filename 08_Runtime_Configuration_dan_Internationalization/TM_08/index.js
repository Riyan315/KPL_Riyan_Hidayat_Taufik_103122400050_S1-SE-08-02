import 'dotenv/config'

const url = process.env.BASE_API

async function getKurs(rupiah) {
  const response = await fetch(url)
  const data = await response.json()

  const cnh = data.idr.cnh
  const eur = data.idr.eur

  const rupiahFormat = new Intl.NumberFormat('id-ID').format(rupiah)

  const hasilCnh = new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(rupiah * cnh)

  const hasilEur = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(rupiah * eur)

  const tanggal = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  console.log(`Kurs Rp${rupiahFormat} pada ${tanggal} adalah CNH ${hasilCnh} dan ${hasilEur}`)
}

 getKurs(25000)
 getKurs(50000)
 getKurs(100000)
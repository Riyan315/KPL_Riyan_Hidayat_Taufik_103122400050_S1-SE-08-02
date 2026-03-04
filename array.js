const kotaDIkunjungi = ["Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Medan"];
kotaDIkunjungi.unshift("Bali");
kotaDIkunjungi.push("Semarang");
kotaDIkunjungi.pop();
// kotaDIkunjungi.reverse();
kotaDIkunjungi.splice(0,1);// hapus kota by index
kotaDIkunjungi[1] = "Solo"; // update kota by index
console.log(kotaDIkunjungi);
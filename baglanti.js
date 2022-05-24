var mysql = require('mysql');//database bağlantımız

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "kutuphanevt"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Veri Tabanı Bağlantısı Başarılı");
});

module.exports={
  db:con
}

const connection = require('../koneksi');
const mysql = require('mysql');
const md5 = require('md5');
const response = require('../res');
const jsonwebtoken = require('jsonwebtoken');
const config = require('../config/secret');
const ip = require('ip');

//controller untuk register
exports.registration = function(req, res) {
  let post = {
    username: req.body.username,
    email: req.body.email,
    password: md5(req.body.password),
    role: req.body.role,
    created_at: new Date()
  }

  let query = 'SELECT email FROM ?? WHERE ??';
  let table = ["user", "email", post.email];

  query = mysql.format(query, table);

  connection.query(query, function(error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 0) {
        let query = "INSER INTO ?? SET ?";
        let table = ["user"];
        query = mysql.format(query, table);
        connection.query(query.post, function(error, rows) {
          if (error) {
            console.log(error);
          } else {
            response.ok("Berhasil menambahkan data user baru", res);
          }
        });
      } else {
        response.ok("Email sudah terdaftar")
      }
    }
  })
}
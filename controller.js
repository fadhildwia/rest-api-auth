'use strict';

let response = require('./res');
let connection = require('./koneksi');

exports.index = function(req, res) {
  response.ok('Aplikasi REST API berjalan!', res)
};

//menampilkan semua data mahasiswa
exports.showMahasiswa = function(req, res) {
  connection.query('SELECT * FROM mahasiswa', function(error, rows, fields) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//menampilakan semua data mahasiswa berdasarkan ID
exports.showWithId = function(req, res) {
  let id = req.params.id
  connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
    function(error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
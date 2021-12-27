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

//menambahkan data mahasiswa
exports.addMahasiswa = function(req, res) {
  let nim = req.body.nim;
  let nama = req.body.nama;
  let jurusan = req.body.jurusan;

  connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES(?,?,?)', [nim, nama, jurusan],
    function(error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        response.ok('Berhasil Menambahkan Data', res);
      }
    }
  );
};

//mengubah data berdasarkan ID
exports.updateMahasiswa = function(req, res) {
  let id = req.body.id_mahasiswa;
  let nim = req.body.nim;
  let nama = req.body.nama;
  let jurusan = req.body.jurusan;

  connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id],
    function(error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        response.ok('Berhasil Ubah Data', res);
      }
    }
  );
};
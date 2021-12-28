'use strict';

module.exports = function(app) {
  let jsonku = require('./controller');

  app.route('/')
    .get(jsonku.index);

  app.route('/show')
    .get(jsonku.showMahasiswa);

  app.route('/show/:id')
    .get(jsonku.showWithId);

  app.route('/add')
    .post(jsonku.addMahasiswa);
  
  app.route('/update')
    .put(jsonku.updateMahasiswa);
  
  app.route('/remove')
    .delete(jsonku.removeMahasiswa);

  app.route('/showmatakuliah')
    .get(jsonku.showGroupMataKuliah);
}
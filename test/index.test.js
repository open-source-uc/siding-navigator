const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const should = chai.should();
const logIn = require('../index');

chai.use(chaiAsPromised);

const username = process.env.SIDING_USERNAME;
const password = process.env.SIDING_PASSWORD;

describe('login', function() {
  it('builds the visit function correctly', function() {
    return logIn(username, password).should.eventually.be.ok;
  });
});

describe('visiting URLs', function() {
  it('visits the catalogue correctly', function() {
    return logIn(username, password).then(navigator => {
      return navigator.coursesCatalogue(2015, 1).then(res => {
        return res.body.includes('Cursos de Escuela');
      });
    }).should.eventually.be.true;
  });

  it('visits announcements correctly', function() {
    return logIn(username, password).then(navigator => {
      return navigator.courseAnnouncements(7345).then(res => {
        return res.body.includes('AVISOS');
      });
    }).should.eventually.be.true;
  });

  it('visits programmes correctly', function() {
    return logIn(username, password).then(navigator => {
      return navigator.courseProgramme(7345).then(res => {
        return res.body.includes('PROGRAMA');
      });
    }).should.eventually.be.true;
  });

  it('visits calendars correctly', function() {
    return logIn(username, password).then(navigator => {
      return navigator.courseCalendar(7345).then(res => {
        return res.body.includes('CALENDARIO');
      });
    }).should.eventually.be.true;
  });
});

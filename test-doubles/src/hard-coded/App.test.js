const { expect} = require('chai');
const App = require('./App');


describe('App', (done) =>{
  it('default route should return a bar name', (done) => {
    let app = new App();
    const req = { query: { term: 'best bar around here'}};
    app.searchBar(req, (err, result) => {
      expect(result.searchTerm).to.equal(req.query.term);
      expect(result.name).to.equal('Static Void Bar');
      done();
    });
  });
});
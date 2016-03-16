var expect = chai.expect;

describe("Clase Medida", function () {
  describe("constructor medida", function() {
    it("deberia tener un constructor", function() {
      var medida = new Medida (32, 'f');
      expect(medida.valor).to.equal(32);
    });
    it("deberia poder recibir un solo parametro", function() {
      var medida = new Medida ('32e-1 f');
      expect(medida.valor).to.equal(32e-1);
      expect(medida.tipo).to.equal('f');
    });
  });
});

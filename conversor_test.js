var expect = chai.expect;

describe("Conversor", function () {
  describe("constructor medida", function() {
    it("deberia tener un constructor", function() {
      var medida = new Medida (32, f);
      expect(medida.valor).to.equal(32);
    });
  });
});

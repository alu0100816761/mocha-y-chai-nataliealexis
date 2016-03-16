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

describe("Clase Temperatura", function () {
  describe("constructor temperatura", function() {
    it("deberia tener un constructor", function() {
      var temperatura = new Temperatura (32, 'c');
      expect(temperatura.valor).to.equal(32);
    });
    it("deberia poder recibir un solo parametro", function() {
      var temperatura = new Temperatura ('32 c');
      expect(temperatura.valor).to.equal(32);
      expect(temperatura.tipo).to.equal('c');
    });
  });
});

describe("Clase Fahrenheit", function () {
  describe("constructor fahrenheit", function () {
    it("deberia tener un constructor", function () {
      var far = new Fahrenheit (320e-1);
      expect(far.valor).to.equal(320e-1);
    });
  });
  describe("funciones de fahrenheit", function () {
    it("debe convertir a celsius", function () {
      var far = new Fahrenheit (320e-1);
      expect(far.toCelsius()).to.equal(0);
    });
    it("debe convertir a kelvin", function () {
      var far = new Fahrenheit (320e-1);
      expect(far.toKelvin()).to.equal(273.15);
    });
  });
});

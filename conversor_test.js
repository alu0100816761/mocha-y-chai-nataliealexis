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

describe("Clase Celsius", function () {
  describe("constructor celsius", function () {
    it("deberia tener un constructor", function () {
      var cel = new Celsius (320e-1);
      expect(cel.valor).to.equal(320e-1);
    });
  });
  describe("funciones de celsius", function () {
    it("debe convertir a fahrenheit", function () {
      var cel = new Celsius (320e-1);
      expect(cel.toFahrenheit()).to.equal(89.60);
    });
    it("debe convertir a kelvin", function () {
      var cel = new Celsius (320e-1);
      expect(cel.toKelvin()).to.equal(305.15);
    });
  });
});

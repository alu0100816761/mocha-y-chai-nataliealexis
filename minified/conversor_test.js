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
  describe("funcion match", function () {
    it("debería cazar bien", function () {
      var valor = Medida.match('330e-1 f to c');
      expect(parseFloat(valor.val)).to.equal(330e-1);
      expect(valor.tip).to.equal('f');
      expect(valor.para).to.equal('c');
    });
  });
  describe("funcion convertir", function () {
    it("deberia convertir correctamente", function() {
      var conv = Medida.convertir('320e-1 f to c');
      expect(conv).to.equal('0.00 Celsius');
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

describe("Clase Kelvin", function () {
  describe("constructor kelvin", function () {
    it("deberia tener un constructor", function () {
      var kel = new Kelvin (880e-1);
      expect(kel.valor).to.equal(880e-1);
    });
  });
  describe("funciones de kelvin", function () {
    it("debe convertir a celsius", function () {
      var kel = new Kelvin (880e-1);
      expect(parseFloat(kel.toCelsius().toFixed(2))).to.equal(-185.15);
    });
    it("debe convertir a fahrenheit", function () {
      var kel = new Kelvin (880e-1);
      expect(parseFloat(kel.toFahrenheit().toFixed(2))).to.equal(-301.27);
    });
  });
});

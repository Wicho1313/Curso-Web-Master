var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    Vmax: '60km',
    cambiaColor: function (nColor) {
        // bicicleta.color = nColor;
        this.color = nColor;
    }
};

console.log(bicicleta);

bicicleta.cambiaColor("azul");
console.log(bicicleta);

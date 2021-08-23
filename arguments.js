const wallColor = function () {
    console.log('The wall had been painted red')
};

wallColor();

const wallColor2 = function (color) {
    console.log('The wall had been painted ' + color)
};

wallColor2('green');
wallColor2('purple');
wallColor2();

//The wall had been painted undefined

const wallColor3 = function (color, color) {
    console.log('The north wall had been painted ' + color + ' and the south wall has been painted ' + color)
};

wallColor3('green', 'blue');

// ja de volgorde is wel belangerijk. als je ze wisseld komen ze op de andere plek te staan. dus dan is de north wall blue ipv green. 
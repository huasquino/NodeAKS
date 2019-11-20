// Requires
let express = require('express');


//Inicializar Variables

let app = express();

//Rutas
app.get('/', (req, res) => {

    res.status(200).json({
    ok: true,
    mensaje: 'Peticion realizada correctamente'
    });


});


// Escuchar peticion
app.listen(3000, ()=> {

    console.log('Express Server Puerto 3000 online');

});
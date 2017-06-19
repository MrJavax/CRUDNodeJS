//HomeController

module.exports = {
    //Funciones del Controlador
    index : function (req, res, next) {
        res.render('index', {title : 'Bienvenido al crud con node js'});
    }
}
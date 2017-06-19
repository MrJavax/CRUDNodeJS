var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');
/* GET home page. */
router.get('/', controllers.homecontroller.index);
//Rutas para Productos
router.get('/productos', controllers.productoscontroller.getProductos);
router.get('/nuevoproducto', controllers.productoscontroller.getNuevoProducto);
router.post('/crearproducto', controllers.productoscontroller.postNuevoProducto);
router.post('/eliminarproducto', controllers.productoscontroller.postEliminarProducto);
router.get('/modificarproducto/:cod', controllers.productoscontroller.getModificarProducto);
router.post('/modificar', controllers.productoscontroller.postModificarProducto);

module.exports = router;

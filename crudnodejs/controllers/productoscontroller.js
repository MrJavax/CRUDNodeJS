var mysql = require('mysql');

//Productos Controller
module.exports = {
    getProductos : function(req, res, next) {
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

        var productos = null;

        db.query('SELECT * FROM tb_producto', function(err, rows, fields){
            if (err) throw err;
            productos = rows;

            db.end();

            res.render('productos/productos', {productos: productos});
        });
    },

    getNuevoProducto : function(req, res, next) {
        res.render('productos/nuevoproducto')
    },

    postNuevoProducto : function(req, res, next) {
        console.log(req.body);
        var producto = {
            nom_pro : req.body.nombre, 
            pre_pro : req.body.precio,
            stk_pro : req.body.stock,
            cat_pro : req.body.categoria,
            fec_reg_pro : req.body.fecha
        }

        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

        db.query('INSERT INTO tb_producto SET ?', producto, function(err, rows, fields){
            if (err) throw err;
            db.end();
        });

        res.render('productos/nuevoproducto', {info : 'Producto registrado correctamente'});
    },

    postEliminarProducto : function(req, res, next) {
        var cod = req.body.cod;

        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

        var respuesta = {res : false};
        
        db.query('DELETE FROM tb_producto WHERE cod_pro = ?', cod, function(err, rows, fields){
            if (err) throw err;
            db.end();
            respuesta.res = true;
            res.json(respuesta);
        });
    },

    getModificarProducto : function(req, res, next) {
        var cod = req.params.cod;
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

        var productos = null;

        db.query('SELECT * FROM tb_producto WHERE cod_pro = ?', cod, function(err, rows, fields){
            if (err) throw err;
            productos = rows;

            db.end();

            res.render('productos/modificarproducto', {productos: productos});
        });
    },

    postModificarProducto : function(req, res, next) {
        var producto = {
            nom_pro : req.body.nombre, 
            pre_pro : req.body.precio,
            stk_pro : req.body.stock,
            cat_pro : req.body.categoria,
            fec_reg_pro : req.body.fecha
        }
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

        var productos = null;

        db.query('UPDATE tb_producto SET ? WHERE ?', [producto, {cod_pro : req.body.cod}], function(err, rows, fields){
            if (err) throw err;
            db.end();

            res.redirect('/productos');
        });
    }
}
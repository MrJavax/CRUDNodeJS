$(function(){
    $('.form-nuevoproducto form').form({
        nombre : {
            identifier : 'nombre',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un nombre.'
                }
            ]
        },
        precio : {
            identifier : 'precio',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un precio.'
                },
                {
                    type : 'number',
                    prompt : 'El precio debe ser númerico.'
                }
            ]
        },
        stock : {
            identifier : 'stock',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un stock.'
                },
                {
                    type : 'integer',
                    prompt : 'El stock debe ser un número entero.'
                }
            ]
        },
        categoria : {
            identifier : 'categoria',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese una categoría'
                }
            ]
        }
    });
    $('#tbl-Productos #btn-Eliminar').click(function(e){
        e.preventDefault();
        var item = $(this);
        var cod = item.parent().parent().find('#cod').text();
        var confimar = confirm('¿Desea eliminar este producto?');
        if (confirmar) {
            $.ajax({
                url : '/eliminarproducto',
                method : 'post',
                data : {cod : cod},
                success : function(res) {
                    console.log(res);
                    if (res.res) {
                        item.parent().parent().remove();
                    }
                }
            });
        }
    });
});
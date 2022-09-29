function getClients () {
    $.ajax({
        url: 'https://gfdc2db53358f36-wkpcu0pl1dye332v.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: 'json',
        success : function (clientes) {
            pintarClientes(clientes.items);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
            },
    });
}

function pintarClientes(items) {
    let tipo = "client";
    for (i=0 ; i<items.length ; i++) { 
        //guardarId (items[i].id);
        $("#ClientesAdmin").append("<tr id="+items[i].id+" class=reg_"+items[i].id+">\
        <td><input id=cbox type=checkbox value=checkbox</td>\
        <td>"+items[i].name+"</td><td>"+items[i].email+"</td><td>"+items[i].age+"</td></tr>");
    }
}

function guardarId(id, tipo){
    sessionStorage.setItem('id',id);
    sessionStorage('tipo', tipo);
    location.href="/detalle.html";
}
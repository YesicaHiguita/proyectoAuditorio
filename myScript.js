function leerClientes(){
    $.ajax({
        url : 'https://g4c9266e71926ed-md8u8t5nbh1i7y35.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'GET',
        dataType : 'json',
        success : function(clientes) {
            //let cs=clientes.items;
            pintarRespuestaClientes(clientes.items)
            //$("#listaClientes").empty();

            //for(i=0;i<cs.length;i++){
                //$("#listaClientes").append("<b>"+cs[i].name+"</b>"+"<br>");
                
            //}
        },
        error : function(xhr, status) {
        alert('ha sucedido un problema');
        },
    });
}

function pintarRespuestaClientes(items){
    let myTable ="<table id=content-table border=2px>";
    let tipo="client";
    myTable+="<tr>";
    myTable+="<th id=titulo-tabla>NOMBRE DE CLIENTE</th>";
    myTable+="</tr>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td guardarId("+items[i].id+",\""+tipo+"\");'>"+items[i].name+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#listaClientes").empty();
    $("#listaClientes").append(myTable);
}

function guardarId(id, tipo){
    sessionStorage.setItem('id',id);
    sessionStorage('tipo', tipo);
    location.href="/detalle.html";
}

function guardarCliente(){
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let mailCliente=$("#mailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:mailCliente,
        age:edad
    }
    
    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url : 'https://g4c9266e71926ed-md8u8t5nbh1i7y35.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'POST',
        //dataType : 'json',
        data : dataToSend,
        contentType: 'application/json',

        success : function(pepito) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        }
    });
}
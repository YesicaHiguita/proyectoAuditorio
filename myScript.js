function leerAuditorios(){
    $.ajax({
        url : 'https://g4c9266e71926ed-md8u8t5nbh1i7y35.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience',
        type : 'GET',
        dataType : 'json',
        success : function(auditorios) {
            let aud=auditorios.items;
            $("#listaAuditorios").empty();

            for(i=0;i<aud.length;i++){
                $("#listaAuditorios").append(aud[i].id+"<b>"+aud[i].owner+"</b>"+aud[i].capacity+" "+ aud[i].category_id+" "+aud[i].name);
                $("#listaAuditorios").append("<button onclick='borrarAuditorio("+aud[i].id+")'>Borrar</button><br>");
            }
        },
        error : function(xhr, status) {
        alert('ha sucedido un problema');
        },
    });
}

function guardarAuditorio(){
    let idAuditorio=$("#idAuditorio").val();
    let propietarioAuditorio=$("#propietario").val();
    let capacidadAuditorio=$("#capacidad").val();
    let categoriaAuditorio=$("#idCategoria").val();
	let nombreAuditorio=$("#nombreAuditorio").val();

    let dataAuditorio={
        id:idAuditorio,
        owner:propietarioAuditorio,
        capacity:capacidadAuditorio,
        category_id:categoriaAuditorio,
		name:nombreAuditorio
    };
    
    let dataToSendAuditorio=JSON.stringify(dataAuditorio);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://g4c9266e71926ed-md8u8t5nbh1i7y35.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience',
        type : 'POST',
        //dataType : 'JSON',
        data : dataToSendAuditorio,
        contentType: 'application/json',

        success : function(pepito) {
            $("#idAuditorio").val("");
            $("#propietario").val("");
            $("#capacidad").val("");
            $("#idCategoria").val("");
			$("#nombreAuditorio").val("");
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        }
    });
}

function editarAuditorio(){
	let idAuditorio=$("#idAuditorio").val();
	let propietario=$("#propietario").val();
	let capacidad=$("#capacidad").val();
	let categoriaAuditorio=$("#idCategoria").val();
	let nombreAuditorio=$("#nombreAuditorio").val();

	let data={
		id:idAuditorio,
		owner:propietario,
		capacity:capacidad,
		category_id:categoriaAuditorio,
		name:nombreAuditorio
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g4c9266e71926ed-md8u8t5nbh1i7y35.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience',
	    type : 'PUT',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
	   		$("#idAuditorio").val("");
			$("#propietario").val("");
			$("#capacidad").val("");
			$("#idCategoria").val("");
			$("#nombreAuditorio").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerAuditorios();
	    }
	});

}

function borrarAuditorio(idAuditorio){
	let data={
		id:idAuditorio
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g4c9266e71926ed-md8u8t5nbh1i7y35.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience' ,
	    type : 'DELETE',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
			$("#idAuditorio").val("");
			$("#propietario").val("");
			$("#capacidad").val("");
			$("#idCategoria").val("");
			$("#nombreAuditorio").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerAuditorios();
	    }
	});

}
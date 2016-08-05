$(document).ready(function() {
		// alert('hola');


function requestData(){
	$.ajax({
	url: '/externo.php',
	type: 'GET',
	// data: {data: 'value1'},
	success: function(data) {
		var datos = JSON.parse(data);
		var resultados = datos.result;
		var array = resultados.Leads.row;
		$.each(array, function(index, val) {
			 $('.cont-data').append('<tr><td>'+val.FL[4]+'</td><td>'+val.FL[5]+'</td><td>'+val.FL[6]+'</td></tr>');
		});
		}
	})
	
}

$('#btn-activar').click(function(event) {
	requestData();
});



























	});
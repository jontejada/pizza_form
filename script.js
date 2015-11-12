$(document).ready(function(){

	//var subtotalInsert = $('#sub')[0];
	var subtotal = 0;

	$('form').change(check);
	console.log(subtotal);
	function check() {
		subtotal = 0;
		if ($('#sm')[0].checked) {
			subtotal = 10;
		}
		if ($('#md')[0].checked) {
			subtotal = 16;
		}
		if ($('#lg')[0].checked) {
			subtotal = 24;
		}
		if ($('#cc')[0].checked) {
			subtotal += 1.5;
		}
		if ($('#ec')[0].checked) {
			subtotal += 1;
		}
		if ($('#bs')[0].checked) {
			subtotal += 5;
		}
		var selects = $('select').val() || [];
			for (var i = 0; i < selects.length; i++) {
				if (selects[i]==='chicken' || selects[i]==='bacon') {
					//console.log(i);
					//console.log('s[i]'+selects[i]);
					//console.log('before'+subtotal);
					subtotal += 0.5;
					//console.log('after'+subtotal);
				}
			}
		if ($('#del')[0].checked) {
			subtotal += 5;
			$('.delpopup').css('display','block');
			$('#address')[0].required = true;
			$('#city')[0].required = true;
			$('#state')[0].required = true;
			$('#note')[0].required = true;
		}
		if (!$('#del')[0].checked) {
			$('.delpopup').css('display','none');
			$('#address')[0].required = false;
			$('#city')[0].required = false;
			$('#state')[0].required = false;
			$('#note')[0].required = false;
		}
		//console.log('ran change! '+subtotal);
		$('#sub').text(subtotal.toFixed(2));
		$('#tax').text((subtotal/5).toFixed(2));
		$('#tip').text((subtotal*0.15).toFixed(2));
		$('#total').text((subtotal*1.35).toFixed(2));

	}
});

$( "select" ).change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "div" ).text( str );
  }).change();

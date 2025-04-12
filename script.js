document.addEventListener('DOMContentLoaded',function() {
	document.getElementById('form1').addEventListener('submit',function(event){
	event.preventDefault();
		function getFormvalue() {
	const fname=document.querySelector('input[name="fname"]').value;
		const lname=document.querySelector('input[name="lname"]').value;
	const form=`${fname}-${lname}`;
	alert(form);
		}
		getFormvalue();
	});
	});
	
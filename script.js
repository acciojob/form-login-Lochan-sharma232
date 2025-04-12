function getFormvalue(event) {
	event.preventDefault();
			const fname=document.querySelector('input[name="fname"]').value;
		const lname=document.querySelector('input[name="lname"]').value;
	const form=`${fname} ${lname}`;
	alert(form);
		}

	
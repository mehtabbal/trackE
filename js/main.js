// fetch('http://api.tracke.wmdd.ca/ulist').then((res) => {
//     res.json().then((data) => {
//         if(data.err) {
//             console.log(err);
//         } else {
//             alert("connected")
//         };
//     })
// })


signupbtn.addEventListener('click', (e) => { alert("Successfully Registered");
    let d = new Date();
    let newMonth = d.getMonth() + 1;
    if(newMonth < 10){
        newMonth = "0" + newMonth;
    }
    let newDay = d.getDate();
    if (newDay < 10){
        newDay = "0" + newDay;
    }
    let newDate = `${ d.getFullYear() }-${ newMonth }`-{ newDay };

    let jsonPut = {
        firstName : newfName1.value,
        lastName : newlName.value,
        sinceDate : newDate,
        email : newemail.value,
        city : newcity.value,
        province : newprovince.value,
        country : newcountry.value,
        postalCode : newpostalCode.value,
        password : newPassword.value      
    };
    jsonPut = JSON.stringify(jsonPut);
    fetch(`http://api.tracke.wmdd.ca/signup`, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: jsonPut}).then((res) => {
        res.json().then((data) => {
            if(data.err) {
                console.log(err);
            } 
			
			else {
				alert("working");
                // msgArea2.innerHTML = data.msg;
                newfName.value = '';
                // newmName.value = '';
                newlName.value = '';
                // newcName.value = '';
                // newcRefer.value = '';
                newEmail.value = '';

            }
        })
    })

})
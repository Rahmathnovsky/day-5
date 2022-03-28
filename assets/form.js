

function submitData() {
    let name = document.getElementById('in-name').value
    let email = document.getElementById('in-email').value
    let phone = document.getElementById('in-phone').value
    let subject = document.getElementById('in-option').value
    let message = document.getElementById('in-message').value

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);


    if (name == '' ) {
        return alert("Input your Name")
    } else if (email == '' ) {
        return alert("E-mail cannot be empty")
    } else if (phone == '' ) {
        return alert("Phone cannot be empty")
    }else if (subject == '' ) {
        return alert("Choose Subject!")
    }else if (message == '' ) {
        return alert("Message does not exist :(")
    }

    let emailReceiver = 'rahmathnovskyn@mail.com'

    let a = document.createElement('a') // pembuatan tag anchor / a

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name} 
    
    
    
    ${message} silahkan hubungi ke ${phone}`

    a.click() // menjalankan tag ancor/ mengklik tag anchor


    let dataObject = {
        namaLengkap: name,
        email: email,
        phoneNumber: phone,
        subject: subject,
        message: message
    }

    console.log(dataObject);
}
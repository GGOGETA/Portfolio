function sendEmail(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !phone || !subject || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    var file = document.getElementById('fileUpload').files[0];
    var fileData = null;

    if (file) {
        if (file.size / (1024 * 1024) > 5) {
            alert('File size exceeds 5MB. Please upload a smaller file.');
            return;
        }

        var reader = new FileReader();
        reader.onload = function() {
            fileData = reader.result.split(',')[1]; // Get the base64 data
            sendEmailWithAttachment(name, email, phone, subject, message, fileData, file.name);
        };
        reader.readAsDataURL(file);
    } else {
        sendEmailWithAttachment(name, email, phone, subject, message);
    }
}

function closeModalOnOutsideClick(modalId) {
    const modal = document.getElementById(modalId);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(modalId);
        }
    });
}

function sendEmailWithAttachment(name, email, phone, subject, message, fileData, fileName) {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "7895780544j@gmail.com",
        Password : "4AE286E3E7351207DA844B326E6AF0344D54",
        To : 'vishalsharma92050@gmail.com',
        From : '7895780544j@gmail.com',
        Subject : subject,
        Body :  `
            <br> Name:- ${name}
            <br> Phone no.:- ${phone}
            <br> Message:- ${message}
            <br> Email:- ${email}
        `,
        Attachments : fileData ? [{name : fileName, data : fileData}] : []
    }).then(
            message => {
                if (message === 'OK') {
                    openModal('successModal');
                    closeModalOnOutsideClick('successModal'); // Close on outside click
                } else {
                    openModal('errorModal');
                    closeModalOnOutsideClick('errorModal'); // Close on outside click
                }
            }
        );
    }

function openModal(modalId) {
    document.getElementById(modalId).classList.add('open-popup');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('open-popup');
}


function resetForm() {
    document.getElementById('fileUpload').value = '';
    document.getElementById('fileName').textContent = 'File Name: ';
    ['name', 'email', 'phone', 'subject', 'message'].forEach(id => {
        document.getElementById(id).value = '';
    });
}


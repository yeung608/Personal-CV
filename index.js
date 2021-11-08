function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "deadlysage@gmail.com",
    Password: "acky.608",
    To: 'a.yeung608@yahoo.com',
    From: document.getElementById("email").value,
    Subject: "New Message from Personal CV",
    Body: document.getElementById("name").value + "\n" + document.getElementById("email").value + "\n" + document.getElementById("message").value,
  }).then(
    message => alert("mail sent successfully")
  );
}

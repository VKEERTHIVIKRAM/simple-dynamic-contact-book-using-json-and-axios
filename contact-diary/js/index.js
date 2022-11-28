// Write the JavaScript code here to make Contact App functional

const url = "http://localhost:3000/contacts";
const getPromise = axios.get(url);
// Code to show the persisted data
// const showPersistedData = null;

function showPersistedData() {
    window.onload = () =>
        getPromise.then((response) => {
            let text = "<table class =\"table table-border\" border='1'>";
            text +=
                "<tr><th>Name</th><th>Email</th><th>Contact Number</th><th>Job Title</th></tr>";
            response.data.forEach((item) => {
                text +=
                    "<tr><td>" +
                    '<span class="badge badge-success" style="background:green;border-radius:70%">' +
                    item.firstName.charAt(0) +
                    item.lastName.charAt(0) +
                    "</span>&emsp;" +
                    item.firstName +
                    " " +
                    item.lastName +
                    "</td><td>" +
                    item.email +
                    "</td><td>" +
                    item.contactNo +
                    "</td><td>" +
                    item.jobTitle +
                    "</td></tr>";
            });
            document.body.innerHTML += text;
        });
}
showPersistedData();

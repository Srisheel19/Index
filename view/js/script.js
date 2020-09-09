// JS code goes here
document.getElementById("submit").addEventListener("click", function () {

    if (!validateName(document.getElementById("name").value) ||
        !validateEmail(document.getElementById("email").value) ||
        !validatePhone(document.getElementById("mobile").value)) {
        document.getElementById("error").style.display = "block";
    } else {

        document.getElementById("error").style.display = "none";
        var table = document.getElementById("summaryTable");


        var row = table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = document.getElementById("name").value;
        cell2.innerHTML = document.getElementById("mobile").value;
        cell3.innerHTML = document.getElementById("email").value;

        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("mobile").value = '';


    }
});

function validateName(name) {

    if (name.length > 20) {
        return false;
    }

    var re = /^[a-zA-Z]*$/;
    return re.test(name);
}

function validatePhone(phone) {
    if (phone.length != 10) {
        return false;
    }
    var re = /^\d+$/
    return re.test(phone);
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


function Ascending(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

function Ascending(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

function Ascending(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
const comparer = (idx, asc) => (a, b) => ((v1, v2) => v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2))(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)')).sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc)).forEach(tr => table.appendChild(tr));
})));

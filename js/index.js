getQuote();

function getQuote() {
    fetch('https://store.zapier.com/api/records?secret=5APfNFe3DaUs6PHX')
        .then((resp) => resp.json())
        .then(function (data) {
            document.getElementById("status").innerHTML = data.status;
            document.getElementById("last_status").innerHTML = data.statuses.list[1];
            document.getElementById("last_status2").innerHTML = data.statuses.list[2];
            document.getElementById("last_status3").innerHTML = data.statuses.list[3];
        });
}

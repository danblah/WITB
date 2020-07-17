getQuote();

function getQuote() {
    fetch('https://store.zapier.com/api/records?secret=5APfNFe3DaUs6PHX')
        .then((resp) => resp.json())
        .then(function (data) {
            document.getElementById("status").innerHTML = data.status;
        
            var container = document.querySelector('#container');
            var ul = document.createElement('ul');

            data.statuses.forEach(function (item) {
                var li = document.createElement('li');

                li.textContent = item;
                ul.appendChild(li);
            });

            container.appendChild(ul);
        });
}

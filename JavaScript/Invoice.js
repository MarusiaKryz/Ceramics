function activeBtn () {
    document.getElementById("btnInvoice").disabled = false;
    document.getElementById("btnCount").disabled = false;
}
function myPrice() {
    var quant = document.getElementById('quantity').value;
    var priceNew = document.getElementById('price');
    if (quant < 5) {
        priceNew.value = '75.00';
    }
    else if (quant >= 5 && quant < 10) {
        priceNew.value = '60.00';
    }
    else {
        priceNew.value = '45.00';
    }
};

function costCount() {
    var quant = document.getElementById('quantity').value;
    var myPrice = document.getElementById('price').value;
    var currency = document.getElementById("selectCurrency").value;
    var rate = document.getElementById("rate");
    var newCost = document.getElementById("cost");
    var priceNewCurrency = document.getElementById("priceNewCurrency");
    var fixerUrl = "http://data.fixer.io/api/latest?access_key=8368459daaedd2247dec733e1889d55b&base=EUR&symbols=" + currency;

    var fixerRequest = new XMLHttpRequest();
    fixerRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            var rateNew = JSON.parse(this.responseText);
            rate.value = rateNew.rates[Object.keys(rateNew.rates)[0]];
            priceNewCurrency.value = myPrice * rate.value;
            newCost.value = quant * myPrice * rate.value;

            rate.value = Math.round(rate.value * 100)/100;
            priceNewCurrency.value = Math.round(priceNewCurrency.value * 100)/100;
            newCost.value = Math.round(newCost.value * 100)/100;
        }
    };
        fixerRequest.open("GET", fixerUrl, false); // true for asynchronous
        fixerRequest.send();

var costRate = document.getElementById("selectCurrency").value;
    document.getElementById("priceCurrency").innerText = `, ${costRate}:`;
    document.getElementById("costCurrency").innerText = `, ${costRate}:`;
};

var counter = 1;

function addToInvoice() {
    document.getElementById("invoiceNew").style.display = "block";
    var costRate = document.getElementById("selectCurrency").value;

    document.getElementById("invoicePriceCurrency").innerText = `, ${costRate}:`;
    document.getElementById("invoiceCostCurrency").innerText = `, ${costRate}:`;

    var rowTable = document.createElement("tr");

    var dataTable = document.createElement("td");

    dataTable.innerHTML = counter++;
    rowTable.appendChild(dataTable);

    dataTable = document.createElement("td");
    dataTable.innerHTML = document.getElementById("selectProd").value;
    rowTable.appendChild(dataTable);

    dataTable = document.createElement("td");
    dataTable.innerHTML = document.getElementById("quantity").value;
    rowTable.appendChild(dataTable);

    dataTable = document.createElement("td");
    dataTable.innerHTML = document.getElementById("priceNewCurrency").value;
    rowTable.appendChild(dataTable);

    dataTable = document.createElement("td");
    dataTable.innerHTML = document.getElementById("cost").value;
    rowTable.appendChild(dataTable);

    document.getElementById("invoiceNewOne").appendChild(rowTable);

    var divForBtn = document.createElement("div");
    var submitInvoice = document.createElement("button");
    var titleBtn = document.createTextNode("Підтвердити");
    submitInvoice.appendChild(titleBtn);
    divForBtn.appendChild(submitInvoice);
    document.body.appendChild(divForBtn);
    divForBtn.setAttribute("id", "submitInvoice");

    document.getElementById("selectProd").value = "Виберіть товар";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("priceNewCurrency").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("priceCurrency").innerText = "";
    document.getElementById("costCurrency").innerText = "";

    document.getElementById("selectCurrency").disabled = true;
    document.getElementById("btnInvoice").disabled = true;
    document.getElementById("btnCount").disabled = true;

    };


var bill = [];

var payment = function () {
  //window.document.getElementById("payment").click();
  window.parent.document.getElementById('payment').click(); 

}


var updateCharity = function (val, total) {
    val = parseFloat(val) + total;
    val = val.toFixed(2);
    $("#billAmount").text(val);

}

var updateQuantity = function (val, price, item) {
    
    val = parseInt(val);
    price = price * val;
    $("#" + item).html(price);
   // $("#billAmount").text(val);
    console.log(bill)



    


}

var cartLoad = function () {

    productList = [
        {
            no: "1",
            id: "perfume",
            name: "Perfume",
            price: 29.99
        },
        {
            no: "2",
            id: "headphones",
            name: "Beats EP",
            price: 148
        },
        {
            no: "3",
            id: "tshirt",
            name: "Polo T-shirt",
            price: 14.99
        }
    ]

    cartList = sessionStorage.getItem("cart");

    var total = 0;
    var li = 1;
    if (cartList) {
        $("#noList").html("");
        $("#head").children().eq(0).html("Product Name");
        $("#head").children().eq(1).html("Price");
        $("#head").children().eq(2).html("Quantity");
        $("#head").children().eq(3).html("Total Cost");
        productList.forEach(list => {
            if (JSON.parse(cartList).indexOf(list.id) != -1) {
                total = total + list.price;

                bill.push({
                    id: list.id,
                    name: list.name,
                    price: list.price,
                    no: 1,
                    total: list.price
                })

                var item = "<tr><td>" + list.name + "</td><td>" + list.price + "</td><td> <select  onchange='updateQuantity(value," + list.price + "," + li + " )'  >  <option value='1'>1</option> <option value='2'>2</option> <option value='3'>3</option> <option value='4' >4</option></select> </td><td id=" + li + "  >" + list.price + "</td></tr>";
                li = li + 1;

                $(".CartList table").append(item)


            }
        });

        var totalCost = "<tr class='highlight' ><td></td><td></td><td >Total Price</td><td >" + total + "</td></tr>"
        var charity = "<tr class='highlight' ><td></td><td></td><td  >Add Charity</td><td><input type='text' value='0' onchange='updateCharity(value," + total + ")'/></td></tr>"
        var totalBill = "<tr class='highlight' ><td></td><td></td><td >Total Bill</td><td id='billAmount'>" + total + "</td></tr>"

        $(".CartList table").append(totalCost);
        $(".CartList table").append(charity);
        $(".CartList table").append(totalBill);
        $(".CartList").append("<button id='buyNow' class='btn right120 pull-right btn-primary' onclick='payment()'>Buy Now</button>")



    }
    else {
        $("#noList").html("No Items added in cart.");
    }


}



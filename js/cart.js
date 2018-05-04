(function() {
  //HTML Objects
  var cartBox;
  var sideGutter;

  //Attributes
  var sum = 0;

  //init function
  var init = function() {

    //initialize Objects
    var setHTMLObjects = function() {
      cartList = document.getElementById('cart-list');
      sideGutter = document.getElementById('side-gutter');

    }(); //end setHTMLObjects

    //create HTML Objects
    var itemsArray = function() {

    }(); //end create Items Array

    var setEvents = function() {

    }(); //end setEvents

    var setGUI = function() {

      var cookie = JSON.parse(getCookie('cart'));

      if (cookie) {

        var buyBox = document.createElement('div');
        buyBox.className = 'buy-box';

        var totalP = document.createElement('p');
        totalP.className = 'total-p';

        var sumP = document.createElement('p');
        sumP.className = 'sum-p';

        var checkOut = document.createElement('button');
        checkOut.className = 'check-out';
        checkOut.innerHTML = '<a href="index-handlekurven.html">CHECK OUT (delete cookie)</a>';
        checkOut.onclick = function(){
          deleteAllCookies();
        };

        buyBox.appendChild(totalP);
        buyBox.appendChild(sumP);
        sideGutter.appendChild(buyBox);
        sideGutter.appendChild(checkOut);

        for (var i = 0; i < cookie.length; i++) {

          var productID = cookie[i].productID;
          var item = items[productID];

          sum += items[i].price;
          console.log(sum);

          if (productID == item.id) {

            var cartBox = document.createElement('div');
            cartBox.className += 'cart-box';

            var title = document.createElement('h3');
            title.className += 'cart-title';
            title.textContent = item.title;

            img = document.createElement('img');
            img.className += 'cart-img';
            img.src = item.img;

            var price = document.createElement('p');
            price.className += 'cart-price';
            price.textContent = item.price + ' kr';

            var description = document.createElement('p');
            description.className += 'cart-description';
            description.textContent = '"' + item.description + '"';

            cartBox.id = 'item-' + i;

            cartBox.appendChild(title);
            cartBox.appendChild(img);
            cartBox.appendChild(price);
            cartBox.appendChild(description);
            cartList.appendChild(cartBox);
          }//End if item is in cart
        }//End for loop

        totalP.innerHTML = 'Subtotal';
        sumP.innerHTML = sum + ' kr';

      } else {

        var emptyBox = document.createElement('div');
        emptyBox.className = 'empty-box';

        var emptyH3 = document.createElement('h3');
        emptyH3.className += 'empty-h3';
        emptyH3.textContent = '~~~ Your cart is currently empty ~~~';

        var emptyP = document.createElement('p');
        emptyP.className = 'empty-p';
        emptyP.innerHTML = 'Continue browsing <a href="index-handlekurven.html">here.</a>';

        emptyBox.appendChild(emptyH3);
        emptyBox.appendChild(emptyP);
        cartList.appendChild(emptyBox);

      }//end if else
    }(); //end setGUI

  }(); //end init

  function deleteAllCookies() {
    setCookie('cart', '', -1);
  }//end deleteAllCookies


})(); //end function

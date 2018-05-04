(function() {
  //HTML Objects
  var productBox;

  //Attributes


  //init function
  var init = function() {

    //initialize Objects
    var setHTMLObjects = function() {
      productList = document.getElementById('product-list');

    }();//end setHTMLObjects

    //create HTML Objects
    // var cartCount = function() { TODO skrive car count function
    // }();//end create Items Array

    var setGUI = function() {

      for ( var i = 0; i < 4; i++) {
        var item = items[i];

        var productBox = document.createElement('div');
        productBox.className += 'product-box';

        var title = document.createElement('h3');
        title.className += 'product-title';
        title.textContent = item.title;

        img = document.createElement('img');
        img.className += 'product-img';
        img.src = item.img;

        var addContainer = document.createElement('div');
        addContainer.className += 'add-container';

        var price = document.createElement('div');
        price.className += 'product-price';
        price.textContent = item.price + ' kr';

        var addBtn = document.createElement('div');
        addBtn.className += 'add-btn';
        addBtn.id = i;
        addBtn.innerHTML = '+';
        addBtn.onclick = function(){
          updateCart(this.id);
        };

        productBox.id = 'item-' + items[i];

        productBox.appendChild(title);
        productBox.appendChild(img);
        productBox.appendChild(addContainer);
        addContainer.appendChild(price);
        addContainer.appendChild(addBtn);
        productList.appendChild(productBox);
      }

    }();//end setGUI

  }(); //end init

})(); //end function

//ArrayList med 4 objekter som inneholder produktene
var items = [{
  title: 'Futuro 8.125" - Blue Fade',
  id: 0,
  img: 'pictures/blueboard.jpg',
  price: 699,
  quantity: 0,
  description: 'Jake Johnson Pro Model 8.125" X 31.75"  WB 14.125" Manufactured at PS Stix'
}, {
  title: 'K.O. \[Black\]',
  id: 1,
  img: 'pictures/shirt.jpg',
  price: 499,
  quantity: 0,
  description: 'Midweight Tee. 100% Cotton.'
}, {
  title: 'Metalhead 8.25" - Peach',
  img: 'pictures/greenboard.jpg',
  id: 2,
  price: 699,
  quantity: 0,
  description: 'Tyler Bledsoe Pro Model 8.25" X 32.125"  WB 14.25" Manufactured at PS Stix'
}, {
  title: 'Bars \[Denim\]',
  id: 3,
  img: 'pictures/hat.jpg',
  price: 399,
  quantity: 0,
  description: 'low crown, unstructured, adjustable six panel, denim, embroidered back, made in the usa \[nobody cares\]'
}];


var cartCount = 0;

var setHTMLObjects = function() {
  cart = document.getElementById('cart');
  cartList = document.getElementById('cart-list');
  cookiestatus = document.getElementById('cookiestatus');

}();

function cartAdd() {
  cartCount++;
  cart.innerHTML = 'Cart(' + cartCount + ')';
}

function updateCart(id) {
  var cookie = getCookie('cart');

  if (!cookie) {
    cookie = [{
      productID: id
    }];
  } else {
    cookie = JSON.parse(cookie);

    cookie.push({
      productID: id
    });
  }
  console.log(JSON.stringify(cookie));
  setCookie('cart', JSON.stringify(cookie), 7);
  cartAdd();
} // End updateCart

function setCookie(cookieName, value, duration) {
  if (duration) {
    var date = new Date();
    date.setTime(date.getTime() + (duration * 24 * 60 * 60 * 1000));
    var expires = '; expires=' + date.toGMTString();
  } else {
    var expires = '';

  }
    document.cookie = cookieName + '=' + value + expires + '; path=/';

} //End setCookie

function getCookie(cookieName) {
  var cookieNameID = cookieName + '=';
  var id = document.cookie.split(';');
  for (var i = 0; i < id.length; i++) {
    var c = id[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(cookieNameID) == 0) {
      return c.substring(cookieNameID.length, c.length);
    }
  }
  return null;
} //End getCookie

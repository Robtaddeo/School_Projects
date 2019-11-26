function total(){
  var gucciBelt = 450;
  var louisBag = 600;
  var gucciQuantity = document.getElementById('gucci-quantity').value;
  var louisQuantity = document.getElementById('louis-quantity').value;
  document.getElementById('gucci-subtotal').value = gucciQuantity * gucciBelt;
  document.getElementById('louis-subtotal').value = louisQuantity * louisBag;
  document.getElementById('total').value = (louisQuantity * louisBag +  gucciQuantity * gucciBelt) + ((louisQuantity * louisBag +  gucciQuantity * gucciBelt) * .06);

}

window.onload = function() {
  total();
}

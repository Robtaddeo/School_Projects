function convert(){
  var value = document.getElementById("dollar").value;
  document.getElementById("euro").value = value * 0.87;
}

function total(){
  var gucciShirt = 250;
  var astroHoodie = 50;
  var gucciQuantity = document.getElementById('gucci-quantity').value;
  var astroQuantity = document.getElementById('astro-quantity').value;
  document.getElementById('gucci-subtotal').value = gucciQuantity * gucciShirt;
  document.getElementById('astro-subtotal').value = astroQuantity * astroHoodie;
  document.getElementById('total').value = (astroQuantity * astroHoodie +  gucciQuantity * gucciShirt) + ((astroQuantity * astroHoodie +  gucciQuantity * gucciShirt) * .06);

}

function validateForm(){
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var zip = document.getElementById('zip');
  var cardName = document.getElementById('cardname');
  var cardNum = document.getElementById('cardnum');
  var debit = document.getElementById('debit');
  var credit = document.getElementById('credit');
  var agreement = document.getElementById('agreement');

  if(credit.value == null && debit.value == null){
    alert ("You must pick debit or credit");
  }

  if(agreement.checked == false){
    alert ("You must agree that this card is yours!");
  }

  if (name.value == "" || name.value == null){
      alert ("You must enter value for first name");
      name.focus();
      name.select();
      name.style.backgroundColor="#F00";
  }

  if (cardNum.value == "" || cardNum.value == null){
      alert ("You must enter your credit card number!");
      cardNum.focus();
      cardNum.select();
      cardNum.style.backgroundColor="#F00";
  }

  if (cardName.value == "" || cardName.value == null){
      alert ("You must enter value for name on the card!");
      cardName.focus();
      cardName.select();
      cardName.style.backgroundColor="#F00";
  }

  if(validateEmail(email.value) == false){
    alert ("You must enter a valid value for email");
    email.focus();
    email.select();
    email.style.backgroundColor="#F00";
  }

  if(zip.value.toString().length != 5){
    alert ("You must enter a valid value for zipCode");
    zip.focus();
    zip.select();
    zip.style.backgroundColor="#F00";
  }



}

function reset(){
document.getElementById('name').value = null;
document.getElementById('email').value = null;
document.getElementById('zip').value = null;
document.getElementById('cardname').value = null;
document.getElementById('cardnum').value = null;
document.getElementById('debit').value = null;
document.getElementById('credit').value = null;
document.getElementById('agreement').unchecked = true;
}

function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}



window.onload = function() {
  total();
  document.getElementById("formSubmit").onclick = function click() {
    validateForm();
  }
}

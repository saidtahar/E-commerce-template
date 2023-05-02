function onLogoClick() {
    document.getElementsByTagName("BODY")[0]
    console.log("test")
    window.location.reload();
  }
  
  function onProfileClick() {
    //go to profile page
  }
  function oncartclick() {
    //got to cart page
  }
  function onSearchClick() {
    //  search
  }
  
  function onProductClick(productID) {
    //  Go to product page
    console.log(productID);
  }
  
  function onNosProduitsClick() {
    //  Go to NosProduits page
    
    const element = document.getElementById("productsSection");
  
    element.scrollIntoView({ behavior: "smooth" });
  }
  
  function onPromotionsClick() {
    //  Go to Promotions page
  }
  
  function onActualitesClick() {
    //  Go to Actualités page
  }
  function onContactClick() {
    // //  Go to Contact page
    const element = document.getElementById("myfooter");
  
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }
  // scroll top
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Email verification
function validation()
{
    var form = document.getElementById("form")
    var email1 = document.getElementById("email1").value;;
    var text1 = document.getElementById("text1");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email1.match(pattern))
    {form.classList.add("valid")
    form.classList.remove("invalid")
    text1.innerHTML = "your Email address is valid"
    text1.style.color = "#00ff00";}
    else
    {form.classList.remove("valid")
        form.classList.add("invalid")
        text1.innerHTML = "please enter valid email address";
        text1.style.color = "#ff0000"}
        if(email1 == "")
        {
          form.classList.remove("valid");
          form.classList.remove("invalid");
          text1.innerHTML = "";
          text1.style.color = "#00ff00"
        }
}
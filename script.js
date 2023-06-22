//    validation

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var sendError = document.getElementById('send-error');

function validateName()
{
    var name = document.getElementById('name').value;

    if(name.length == 0)
    {
        nameError.innerHTML = 'name is required';
         document.getElementById('name').style.border = '1px solid red'; 
        return false;
    }
    if((!name.match(/^[A-Za-z]*[A-Za-z]*(\s{1,}[A-Za-z]*)*$/)))
    {
        nameError.innerHTML = 'invalid name';   
        document.getElementById('name').style.border = '1px solid red';
        return false; 
    }
    if(name.length < 3){
        nameError.innerHTML = 'minimum 3 cheracters';   
        document.getElementById('name').style.border = '1px solid red';
        return false; 
    }
    
    nameError.innerHTML = '';
    document.getElementById('name').style.border = '1px solid green';
    return true;
}

function validateEmail()
{
    var email = document.getElementById('email').value;
    if(email.length == 0)
    {
        emailError.innerHTML = 'Email is required';
        document.getElementById('email').style.border = '1px solid red';
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
        emailError.innerHTML = 'Email invalid';
        document.getElementById('email').style.border = '1px solid red';   
        return false; 
    }
    emailError.innerHTML = '';
    document.getElementById('email').style.border = '1px solid green';
    return true;

}
function validateSubject()
{
    var subject = document.getElementById('subject').value;
    var required = 20;
    var left = required - subject.length;

    if(left > 0)
    {
        subjectError.innerHTML = left + ' more characters green';
        document.getElementById('subject').style.border = '1px solid red';
        return false;
    }

     subjectError.innerHTML = '';
     document.getElementById('subject').style.border = '1px solid green';
     return true;   

}
function validateMessage()
{
    var message = document.getElementById('message').value;
    var required = 50;
    var left = required - message.length;

    if(left > 0)
    {
        messageError.innerHTML = left + ' more characters green';
        document.getElementById('message').style.border = '1px solid red';
        return false;
    }

     messageError.innerHTML = '';
     document.getElementById('message').style.border = '1px solid green';
     return true;   

}
function validateForm(){

    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage()){
        sendError.style.display = 'block';
        sendError.innerHTML = 'please fix all above'
        setTimeout(function(){sendError.style.display = 'none';}, 3000)
        return false;
    }
}




// --------------Toggle NavBar---------------

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {  
      hideSection();
      toggleNavbar();
     document.body.classList.toggle("hide-scrolling");
});
function hideSection() 
{
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar()
{
    document.querySelector(".header").classList.toggle("active");
}
// Active Section
    document.addEventListener("click",(e) =>{
        if(e.target.classList.contains("link-item")&& e.target.hash !== "")
        {
            // activate the overlay to prevent multiple clicks
            document.querySelector(".overlay").classList.add("active");
            navToggler.classList.add("hide");
            if(e.target.classList.contains("nav-item"))
            {
                toggleNavbar();
                console.log("true");
            }
            else
            {
               hideSection();
               document.body.classList.add("hide-scrolling");
            }
            setTimeout(() =>
            {
                document.querySelector("section.active").classList.remove("active", "fade-out");
                document.querySelector(e.target.hash).classList.add("active");
                window.scrollTo(0, 0);
                document.body.classList.remove("hide-scrolling");
                navToggler.classList.remove("hide");
                document.querySelector(".overlay").classList.remove("active");
            },500);
        }
    });

// -------------- About Tabs ------------- 

const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");


tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const target = e.target.getAttribute("data-target");
        console.log(target);
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});



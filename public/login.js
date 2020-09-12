async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        })
      });
  
      if (response.ok) {
        document.location.replace('/opportunities');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  const testFunc = function(event) {
    console.log('hello');
  }
  
  
  let a = document.querySelector('.login-form')
  console.log("this is login handler", a)
  document.querySelector('#login').addEventListener('submit', loginFormHandler);
  //
  document.querySelector('.signup-form').addEventListener('submit', testFunc);
// 
  // document.querySelector("#reButton").addEventListener("click",function(event){
  //   event.preventDefault();
  //   var request = new XMLHttpRequest();
  //   request.open('post','/',true);

  //   request.setRequestHeader("Content-Type","application/json");

  // })  
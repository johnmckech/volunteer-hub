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
  document.querySelector('#firstLogin').addEventListener('submit', loginFormHandler);
  //
//   document.querySelector('.signup-form').addEventListener('submit', testFunc);

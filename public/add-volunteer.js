/*async function newFormHandler(event) {
    event.preventDefault();
  
    const firstName = document.querySelector('input[name="registerFirstName"]').value;
    const lastName = document.querySelector('input[name="registerLastName"]').value;
    const username = document.querySelector('input[name="registerUsername"]').value;
    const email = document.querySelector('input[name="registerEmail"]').value;
    const password = document.querySelector('input[name="registerPassword"]').value;
    const language = document.querySelector('input[name="languageForm"]').checkbox;
    const techKnowledge = document.querySelector('input[name="technicalForm"]').checkbox;
    const specialKnowledge = document.querySelector('input[name="specialForm"]').checkbox;
    const HoursPerWeek = document.querySelector('input[name="registerHours"]').value;
  
    const response = await fetch(`/api/volunteers`, {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        password,
        language,
        techKnowledge,
        specialKnowledge,
        HoursPerWeek,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/results');
    } else {
      alert(response.statusText);
    }
  };
  
document.querySelector('#registerID').addEventListener('submit', newFormHandler); */
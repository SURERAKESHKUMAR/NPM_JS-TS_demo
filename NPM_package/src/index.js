function greet(name) {
  return `Hello NJM Returning your request, ${name}!`;
}

function sum(a, b) {
  return a + b;
}

function validateEmail(email) { 

  if (typeof email !== "string") return false; 

 

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  return regex.test(email.trim()); 

};

module.exports = {
  greet,
  sum,
  validateEmail
};
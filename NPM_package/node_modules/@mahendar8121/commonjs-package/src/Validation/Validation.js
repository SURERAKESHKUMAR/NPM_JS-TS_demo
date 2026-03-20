exports.isValidEmail = function (email) { 

  if (typeof email !== "string") return false; 

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  return regex.test(email.trim()); 

}; 

exports.isRequired = function (value) { 

  return value !== null && value !== undefined && value !== ""; 

}; 
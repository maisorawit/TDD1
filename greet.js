function checkUpperCase(name){
    return name == name.toUpperCase();
}
function checkUnUpperCase(name){
    return name != name.toUpperCase();
}


function greet(name) {
  if (name == null) {
    return "Hello, my friend.";
  } else if (Array.isArray(name)) {
      if(name.filter(checkUpperCase).length >= 1){
      return `Hello, ${name.filter(checkUnUpperCase).join(" and ")}. AND HELLO ${name.filter(checkUpperCase)}!`
    }else if (name.length > 2) {
      return `Hello, ${name.slice(0, name.length - 1).join(", ")}, and ${name.slice(name.length - 1, name.length)}.`;
    } else {
      return `Hello, ${name.join(" and ")}.`;
    }
  } else if (name == name.toUpperCase()) {
    return `HELLO ${name}!`;
  }
  return `Hello, ${name}.`;
}

module.exports = greet;

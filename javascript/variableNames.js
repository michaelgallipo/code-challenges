// First Attempt
function variableName(name) {
  const a = string.split("");

  if (/[0-9]/.test(a[0])) {
    return false;
  } else {
    o = a.every(item => {
      return /[a-z0-9_]/.test(item);
    });
    return;
  }
}

//Second Attempt

function variableName(name) {
  return /^[a-z_]\w*$/i.test(name);
}

// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit. Check if the given string is a correct variable name.
// for name = "var_1__Int" => true
// for name = "2w2" => false



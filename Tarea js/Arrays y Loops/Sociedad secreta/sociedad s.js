function secretName(names) {
  return names
    .sort()                    
    .map(name => name[0])       
    .join('');                  
}
console.log(secretName(["Joaquin", "Guzman", "Loera"])); // "EFN"
console.log(secretName(['Viviano', 'Alonso', 'Perez', 'Romero'])); // "CJMPRR"
console.log(secretName(['Harry', 'Ron', 'Hermione'])); // "HHR"

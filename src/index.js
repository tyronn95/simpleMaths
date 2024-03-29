//code Source Index

function Calculatrice(nombre1, operateur, nombre2) {
  let resultat;
  
  switch (operateur) {
      case '+':
          resultat = Addition(nombre1, nombre2);
          break;
      case '-':
          resultat = Subtraction(nombre1, nombre2);
          break;
      case '*':
          resultat = Multiplication(nombre1, nombre2);
          break;
      case '/':
        if(nombre2!=0){
        throw new Error('Division impossible par 0');
        }
        else{
          resultat = Division(nombre1, nombre2);
          break;
        }
      default:
          throw new Error('Opérateur non valide');
  }
  
  return resultat;
}

function Subtraction(nb1, nb2) {
  result = nb1 - nb2;
  return result;
}

function Addition(a, b){
  return a + b;
}

function Multiplication(n1, n2) {
  return n1 * n2;
}
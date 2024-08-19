export function capitalizeFirstLetter(str) {
  if (!str) {
    return ""; // Retorna una cadena vacía si str es undefined, null o vacío
  }
  // Verifica si la cadena no está vacía
  if (str.length === 0) {
    return str; // Retorna la cadena original si está vacía
  }

  // Convierte la primera letra a mayúscula y concatena el resto de la cadena
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const toLowerCase = (str) => {
  return str.toLowerCase();
};

export function removeLastCharacter(str) {
  if (str.length === 0) return str; // Devuelve el string tal cual si está vacío
  return str.slice(0, -1); // Quita la última letra usando slice
}

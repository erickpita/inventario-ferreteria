const listCategorias = [
  "Del Hogar",
  "Ferreteria",
  "Construccion",
  "Decoracion y Acabados",
];

(() => {
  const select = document.getElementById("categoria");
  select.innerHTML = "<option>Seleccione..</option>";
  listCategorias.forEach((x) => {
    console.log(x);
    select.innerHTML += "<option>" + x + "</option>";
  });
})();

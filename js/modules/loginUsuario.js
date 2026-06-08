export default function loginUsuario() {
  const form = document.querySelector("form");

  const dados = {};

  function handleChange({ target }) {
    dados[target.name] = target.value;
    console.log(dados);
  }

  form.addEventListener("change", handleChange);
}

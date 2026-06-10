const dadosCadastro = {};
const formCadastro = document.getElementById("form-cadastro");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function handleChange({ target }) {
  dadosCadastro[target.name] = target.value;
  console.log(dadosCadastro);
}

function handleSubmit(event) {
  event.preventDefault();

  if (dadosCadastro.senha !== dadosCadastro.confirmSenha) {
    alert("As senhas não coincidem");
  } else {
    const usuario = {
      nome: dadosCadastro.nome,
      email: dadosCadastro.email,
      senha: dadosCadastro.senha,
    };

    usuarios.push(usuario);
    console.log(usuarios);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
}

formCadastro.addEventListener("change", handleChange);
formCadastro.addEventListener("submit", handleSubmit);
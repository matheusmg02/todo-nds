export default function cadastrarUsuario() {
  const listaUsuarios = [];
  const dadosCadastro = {};
  const formCadastro = document.getElementById('form-cadastro');

  function handleChange({target}) {
    dadosCadastro[target.name] = target.value;
    console.log(dadosCadastro);
  }

  formCadastro.addEventListener('change', handleChange);
}
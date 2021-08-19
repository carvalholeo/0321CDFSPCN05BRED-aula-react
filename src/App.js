function App() {
  return (
    <div>
      <form action="">
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" id="nome" />

        <br /><br />

        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />

        <br /><br />

        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" id="senha" />

        <br /><br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;

import Input from './components/Inputs'
import Form from './components/Form'

function App() {
  const propriedades = [
    {
      idCampo: 'nome',
      tipo: 'text',
      name: 'name',
      titulo: 'Nome completo'
    },
    {
      idCampo: 'email',
      tipo: 'email',
      name: 'email',
      titulo: 'E-mail'
    },
    {
      idCampo: 'senha',
      tipo: 'password',
      name: 'senha',
      titulo: 'Senha super segura'
    },
    {
      idCampo: 'data_nascimento',
      tipo: 'date',
      name: 'data_nascimento',
      titulo: 'Sua data de velhice'
    },
    {
      idCampo: 'telefone',
      tipo: 'number',
      name: 'telefone',
      titulo: 'Seu telefone'
    }
  ]
  return (
    <>
      <Form>
        {
          propriedades.map((prop, index) => (
            <Input key={prop.idCampo+index} idCampo={prop.idCampo} tipo={prop.tipo} titulo={prop.titulo} name={prop.name} />
          ))
        }
      </Form>
    </>
  );
}

export default App;

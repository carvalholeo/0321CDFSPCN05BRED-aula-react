import valoresPadrao from 'prop-types';
import './index.css'

function Input({idCampo, titulo, tipo, name, children}) {
  return (
    <>
      <label htmlFor={idCampo} className="label-input-component" >{titulo}</label>
      <input type={tipo} name={name} id={idCampo} className="input-input-component" />
      {children}
      <br /><br />
    </>
  );
}

export default Input;

Input.defaultProps = {
  titulo: 'ARRUMA AQUI KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK',
  idCampo: 'sem-id',
  tipo: 'text',
  name: 'sem-nome'
}

Input.propTypes = {
  titulo: valoresPadrao.string,
  idCampo: valoresPadrao.string,
  tipo: valoresPadrao.string,
  name: valoresPadrao.string
}


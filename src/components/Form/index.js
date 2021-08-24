import Button from '../Button';

function Form({children}) {
  return (
    <form className="meu-form">
      {children}
      <Button tipo="submit" texto="Enviar" />
      <Button tipo="reset" texto="Cancelar" className="" />
    </form>
  );
}

export default Form;
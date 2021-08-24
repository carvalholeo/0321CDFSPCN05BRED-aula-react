import './index.css'
function Button({tipo, texto, className}) {
  return (
    <button type={tipo} className={"button-component " + className}>{texto}</button>
  )
}

export default Button;

const Boton = () => {
    const handleClick = () => {
        alert('Botón clickeado')
    }
    return (
        <button onClick={handleClick}>Hace click acá</button>
    )
}

export default Boton;
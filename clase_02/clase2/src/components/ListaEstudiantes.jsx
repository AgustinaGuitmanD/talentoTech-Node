const ListaEstudiantes = (props) => {
    return (
        props.edad > 23 ?
            <h2>{props.nombre}, {props.edad}</h2>
            :
            <h3>{props.nombre}, ¡{props.edad}!</h3>
    );
}

export default ListaEstudiantes;
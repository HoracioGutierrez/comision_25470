const Main = (props) => {

    props.nombre = "Carlos"

    return (
        <main className="container">
            <h2>Bienvenido {props.nombre} {props.apellido}!</h2>
            <p>Tengo {props.edad} años</p>
            <p>{props.usuarios}</p>
            {props.children}
        </main>
    );
}

export default Main;
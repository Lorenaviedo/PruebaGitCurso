import eye from "../assets/vista.png"
// import mas from "../assets/boton-agregar.png"
import '../estilos/estilos.css'

const Facturas = () => {

    const saved = ()=>{
        console.log("guardado");
    }

    return(
    <>
        <br>
        </br>
        <br>
        </br>
        <div className="titulo">
                            <h1>Gestion de Facturas</h1>
                        </div>
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">cantProducto</th>
                        <th scope="col">Lista Productos</th>
                        <th scope="col">Precio Total</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                            <td>Mark Rios</td>
                            <td>50</td>
                            <td>llave expansiva profesional de uso manual de marca URREA</td>
                            <td>50.000</td>
                            <td>
                                <img src={eye} alt="ojito" />
                            </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                            <td>Lorena
                                426156531
                            </td>
                            <td>20</td>
                            <td>diseñado con mango ergonomico de accion suave con mayor fuerza de engrapado para uso rudo. Largo: 18.21 cm x ancho: 18.01 cm x alto: 30.4 cm</td>
                            <td>800.000</td>
                            <td>
                                <img src={eye} alt="ojito" />
                            </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                            <td>Andrea 
                                73268927481</td>
                            <td>12</td>
                            <td>Diseñado con funciones estables y estructura moderna. ideal para realizar las siguientes pruebas de continuidad y diodo</td>
                            <td>3439921.99</td>
                            <td>
                                <img src={eye} alt="ojito" />
                            </td>
                    </tr>
                    <tr>
                        <th>
                            {/* <td>
                                <img src={mas} alt="sumar" />
                            </td> */}
                            <button className="agregar" onClick={saved}>Agregar nueva factura</button>
                        </th>
                    </tr>
                </tbody>
                </table>
        </div>
        </>
    )

};

export default Facturas;
    

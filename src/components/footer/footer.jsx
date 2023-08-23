import bat from "../../multimedia/Batman-Logo-1939.png"

export default function Footer() {
    return (
        <div>
            <footer>
                <figure class="Ubi">
                    <img src={bat} height="220px" width="50%" alt="Ubi" />
                </figure>
                <h2 class="title">Contacto</h2>
                <br />
                <p>+54 2612656770</p>
                <br />
                <p> 2023 pilcha. Todos los derechos reservados.</p>
                <p>Contacto: i.lozano@alumno.etec.um.edu.ar.</p>
            </footer>
        </div>     
    )
}
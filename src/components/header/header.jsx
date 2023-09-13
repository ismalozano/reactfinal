import './header.css';
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className = "divHeader">
            <nav className="head">

                <div className="logo">
                    <Link to="/home">Logo</Link>
                </div>

                <div className="navbar">
                    <Link to="/carrito">Carrito</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/num_contacto">Contacto</Link>
                    <Link to="/iniciar_sesion">Iniciar Sesion</Link>
                </div>

            </nav>
            
            <header className="content header">

                <h2 className="title">Inicio</h2>

                <p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    Somos un emprendimiento de ropa muy flama.
                </p>


                <div className="btn-home">

                    <Link to="/IG" className="btn">IG </Link>
                    
                    <Link to="/TW" className="btn">TW </Link>

                </div>

            </header>
            
            <br/>

            <section className="content sau">

                <h2 className="title">Productos</h2>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus eligendi quod id sunt? Fuga,
                    illum sequi facilis voluptatum odit libero expedita porro
                    in corrupti ad architecto necessitatibus ex nemo illo!
                </p>

                <div className="box-container">
                    <br/>

                    <div className="box">

                        <i className="fab fa-angular"></i>
                        <h3>lorem</h3>
                        <br/>
                        <p>in corrupti ad architecto </p>

                    </div>
                    <br/>
                    <div className="box">

                        <i className="fab fa-apple"></i>
                        <h3>lorem</h3>
                        <br/>
                        <p>in corrupti ad architecto </p>
                        <br/>

                    </div>
                    
                    <div className="box">

                        <i className="fab fa-android"></i>
                        <h3>lorem</h3>
                        <br/>
                        <p>in corrupti ad architecto </p>
                        <br/>

                    </div>   

                </div>

            </section>

            <section className="content about">

                <h2 className="title">about</h2>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Quasi reprehenderit 
                    placeat ullam voluptas itaque enim culpa 

                </p>

                <a href="#" className="btn">Saber Mas</a>


            </section>
            <br/>

            <section className="content price">

                <article className="contain">

                    <h2 className="title">Precio</h2>
                    <br />
                    <p>El precio depende de que articulo de la pagina te gusta, para saberlo, visita: 
                        <a href="#" className="btn">Articulos</a> 
                    </p>
                    <br />

                </article>
            </section>
            <br/><br/><br/><br/><br/>
        </div>
    )
}
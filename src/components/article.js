import React from 'react';
import './styles.css';
import biografiaIcon from '../common/assets/biografia-icon.png';
import documentosIcon from '../common/assets/documentos-icon.png';
import recomendadosIcon from '../common/assets/libros-recomendados-icon.png';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

let atajos = {
    iconAtajo: null
};

class Article extends React.Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        switch (this.props.artProps) {
            case '1':
                atajos = {
                    titulo: 'Biografías',
                    iconAtajo: biografiaIcon,
                    descripcion: 'Encontrá las mejores Biografías de nuestros próceres: San Martín, Belgrano, Rosas, Quiroga [Ver Más...]'
                };
                break;
            case '2':
                atajos = {
                    titulo: 'Documentos',
                    iconAtajo: documentosIcon,
                    descripcion: 'Siempre es bueno para todo historiador, leer las fuentes originales y sacar sus propias conclusiones [Ver Más...]'
                };
                break;
            case '3':
                atajos = {
                    titulo: 'Libros Recomendados',
                    iconAtajo: recomendadosIcon,
                    descripcion: 'Te recomendamos los mejores libros, de grandes autores, para que puedas instruirte [Ver Más...]'
                };
                break;
            case '4':
                atajos = {
                    titulo: 'Biografías',
                    iconAtajo: biografiaIcon,
                    descripcion: 'Te recomendamos los mejores libros, de grandes autores, para que puedas instruirte [Ver Más...]'
                };
                break;
            default:
                atajos = {
                    titulo: 'Biografías',
                    iconAtajo: biografiaIcon,
                    descripcion: 'Te recomendamos los mejores libros, de grandes autores, para que puedas instruirte [Ver Más...]'
                };
        }
    }

    render() {
        console.log('icons', atajos.iconAtajo)

        return (
            <div className="galeria-section-div">
                <article style={{background: '#1b60ad', margin: 3, borderRadius: 6, minHeight: 240}}>
                    <a href="#" className="article">
                        <img src={atajos.iconAtajo} style={{margin: 6}} alt="Some alt text"/>
                        <h3 style={{color: '#0f3560'}}>{atajos.titulo}</h3>
                        <p style={{color: '#0c2a4d', padding: 3}}>
                            {atajos.descripcion}
                        </p>
                    </a>
                </article>
            </div>
        );
    }

}

export default Article;
import React from 'react';
import './Articulos.css'; 

const articulosData = [
  {
    id: 1,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_913555-CBT53171586996_012023-O.webp',
    descripcion: 'Juguetes para perros:Los juguetes para perros son importantes para el bienestar físico y mental de las mascotas, Proporcionan estimulación mental, previenen el aburrimiento y comportamientos destructivos, promueven el ejercicio físico y el desarrollo dental, alivian la ansiedad, fortalecen el vínculo entre el dueño y la mascota, y sirven como herramientas de entrenamiento y recompensa. Además, los juguetes ofrecen diversión y entretenimiento para los perros. Es crucial elegir juguetes seguros y apropiados para el tamaño y tipo de mordida de cada perro',
  },
  {
    id: 2,
    imagen: 'https://www.divinechien.com/wp-content/uploads/2014/09/37.jpg',
    descripcion: 'Camas para perros: Comodidad y descanso al igual que los humanos, las mascotas también necesitan un lugar cómodo para descansar y dormir.',
  },

  {
    id: 2,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0sYIb5WEnOLJx-pNpkbl2qW2Mb7fUDdLQQ&usqp=CAU',
    descripcion: 'Alimento para tus mascotas: Nutrición completa y equilibrada: Los alimentos diseñados específicamente para mascotas suelen estar formulados para proporcionar los nutrientes esenciales que los animales necesitan para mantenerse saludables. Estos nutrientes incluyen proteínas, grasas, carbohidratos, vitaminas y minerales en proporciones adecuadas.',
  },

  {
    id: 2,
    imagen: 'https://www.perrogato.net/upload/blockblog/-iquest-como-se-sabe-la-talla-de-collar-para-un-perro-700x700.jpg',
    descripcion: 'Collar para tus mascotas del tamaño que lo dese para que su mascota se sienta comodo, ademas servira para tenerlo identificado',
  },

  
  {
    id: 2,
    imagen: 'https://grisitiendaenlinea.com.mx/cdn/shop/products/7_Pack_Pet_Care_2020_539x.jpg?v=1627578487',
    descripcion: 'Jabones para tus mascotas: El uso de jabón específico para mascotas contribuye al cuidado del pelaje. Puede ayudar a mantener el pelaje limpio, suave y libre de enredos, lo cual es especialmente importante en razas con pelaje largo.',
  },

  {
    id: 2,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjJnghFxMDiyOkTtz7L0gH2FLH-7xBEi7TA&usqp=CAU',
    descripcion: 'Ropa: En climas fríos, la ropa puede ayudar a mantener a las mascotas abrigadas. Esto es especialmente importante para razas pequeñas, con pelajes cortos o aquellos que son más sensibles a las bajas temperaturas.',
  },
  
  
]

function Articulos() {
  return (
    <div>
      <h2>Artículos Recomendados para tus mascotas</h2>
      <div className="articulos-container">
        {articulosData.map((articulo) => (
          <div key={articulo.id} className="articulo">
            <img src={articulo.imagen} alt={`Artículo ${articulo.id}`} />
            <p>{articulo.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articulos;


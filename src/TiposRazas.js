import React from 'react';
import './Articulos.css'; 

const articulosData = [
  {
    id: 1,
    imagen: 'https://heraldodemexico.com.mx/u/fotografias/m/2021/3/12/f850x638-335321_412810_5050.jpg',
    descripcion: 'JBulldog Inglés:Son de Tamaño Mediano y su Personalidad: Tranquilo, dócil y amigable. A pesar de su apariencia robusta, son perros cariñosos y leales.',
  },
 
  {
    id: 2,
    imagen: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/01-chocolate-lab-nationalgeographic_1154144.jpg?w=1600&h=10677',
    descripcion: 'Labrador Retriever es de Tamaño Grande y Personalidad es Amigable, inteligente y enérgico. Son conocidos por ser buenos compañeros y excelentes perros de trabajo.',
  },

  {
    id: 1,
    imagen: 'data:image/jpeg;base64,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',
    descripcion: 'Golden Retriever: Su Tamaño es Grande y su Personalidad es Amigable, inteligente y devoto. Son conocidos por su pelaje dorado y su disposición amigable, siendo excelentes mascotas familiares.'
  },

{
  id: 1,
    imagen: 'https://t2.ea.ltmcdn.com/es/posts/3/2/9/curiosidades_del_pastor_aleman_23923_600_square.jpg',
    descripcion:'Pastor Alemán: Su Tamaño es Grande y tiene una personalidad Inteligente, leal y trabajador. Suelen ser utilizados como perros policías y de servicio debido a su inteligencia y habilidades de entrenamiento.'
},

{
  id: 1,
  imagen: 'data:image/jpeg;base64,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',

  descripcion:'Chihuahua: Su Tamaño es pequeño y tiene una personalidad Audaz, alerta y cariñoso. A pesar de su pequeño tamaño, estos perros tienen una gran personalidad y pueden ser muy protectores con sus dueños.'
},

{
  id: 1,
  imagen: 'data:image/jpeg;base64,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',

  descripcion:'Dálmata: Su Tamaño es mediano a grande y es de personalidad: Energético, amigable y juguetón. Son conocidos por sus distintivas manchas negras en un fondo blanco y a menudo se asocian con los cuerpos de bomberos debido a su historia como perros de carroza.'
},

{
  id: 1,
  imagen: 'https://images.hola.com/imagenes/mascotas/20201005176621/perro-husky-raza-perro-lobo/0-874-229/husky-m.jpg?tx=w_680',

  descripcion:'Husky Siberiano: Es de tamaño grande y con una personalidad: Independiente, enérgico y amistoso. Originario de Siberia, son conocidos por sus ojos azules distintivos y su pelaje espeso.'
},




  

  
  
]

function TiposRazas() {
  return (
    <div>
      <h2>Tipos De Razas</h2>
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

export default TiposRazas;

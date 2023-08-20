

// Modificar título
const titulo = document.getElementById("titulo");
titulo.innerHTML = "<h1>Libreria Cosas Necesarias</h1> <h2>Buscar Libro</h2>";

//constructor
let iva = 1.19
class Libro {
    constructor(nombre, autor, editorial, paginas, precio, stock) {
        this.nombre = nombre;
        this.autor = autor;
        this.editorial = editorial;
        this.paginas = paginas;
        this.precio = precio;
        this.precioConIva = precio * iva;
        this.stock = stock;
    }
}

// Definición de los objetos 
const libro1 = new Libro("it", "stephen king", "plaza janes", 1500, 100000, 5);
const libro2 = new Libro("apocalipsis", "stephen king", "plaza janes", 1580, 100000, 2);
const libro3 = new Libro("insomnia","stephen king","debolsillo",900,15000,4);
const libro4 = new Libro("el estigma","john saul","javier vergara",300,15000,2)
const libro5 = new Libro("tiburon","peter benchley","javier vergara",300,5000,4)
const libro6 = new Libro("parque jurasico","michael crichton","debolsillo",400,16000,9)
const libro7 = new Libro("el fantasma de la opera","gaston leroux","alma",200,10000,30)
const libro8 = new Libro("cuentos completos","edgar allan poe","paginas de espuma",1200,35000,2)
const libro9 = new Libro("narrativa completa vol 1","h.p. lovecraft","valdemar",900,45000,1)
const libro10 = new Libro("narrativa completa vol 2","h.p. lovecraft","valdemar",1100,45000,3)
const libro11 = new Libro("be water, my friend","shanon lee","dojo",200,14000,10)
const libro12 = new Libro("el tao del jeet kune do","bruce lee","dojo",300,45000,2)


//array
const libros =[libro1,libro2,libro3,libro4,libro5,libro6,libro7,libro8,libro9,libro10,libro11,libro12]

// Función para mostrar resultados en el DOM y guardar en localStorage
function mostrarResultadosEnDOM(resultados) {
    const resultadoDiv = document.getElementById("resultados");

    // Operador ternario para decidir qué contenido asignar a resultadoDiv.innerHTML
    resultadoDiv.innerHTML = resultados.length > 0 ? 

    // Si hay resultados el método map transforma cada objeto resultado en un fragmento de HTML
    resultados.map(({ nombre, autor, editorial, paginas, precio, precioConIva, stock }) =>
            `<div>
                <p>Nombre: ${nombre}</p>
                <p>Autor: ${autor}</p>
                <p>Editorial: ${editorial}</p>
                <p>Páginas: ${paginas}</p>
                <p>Precio: ${precio}</p>
                <p>Precio con IVA: ${precioConIva}</p>
                <p>Stock: ${stock}</p>
                <hr>
            </div>`
          )
        : "<p>No se encontraron resultados.</p>";

         // Los resultados los manda al localStorage
    if (resultados.length > 0) {
        localStorage.setItem("resultados", JSON.stringify(resultados));
    }
}

// Funciones para buscar libro por nombre o autor
function buscarLibroPorNombre(event) {
    event.preventDefault();
    const busqueda = document.getElementById("BuscaInputNombre").value.trim();
    const resultados = libros.filter(({ nombre }) => nombre.includes(busqueda));
    mostrarResultadosEnDOM(resultados);
}

function buscarLibroPorAutor(event) {
    event.preventDefault();
    const busqueda = document.getElementById("BuscaInputAutor").value.trim();
    const resultados = libros.filter(({ autor }) => autor.includes(busqueda));
    mostrarResultadosEnDOM(resultados);
}

// Eventos para mostrar resultados en el DOM
const searchFormNombre = document.getElementById("FormularioNombre");
searchFormNombre.addEventListener("submit", buscarLibroPorNombre);

const searchFormAutor = document.getElementById("FormularioAutor");
searchFormAutor.addEventListener("submit", buscarLibroPorAutor);

const botonTotal = document.getElementById("total");
botonTotal.addEventListener("click", () => mostrarResultadosEnDOM(libros));

// Importa i componenti ButtonComponent e ImageComponent.
import React from "react";

// Questo è un componente funzionale che restituisce un bottone.

function ButtonComponent(props) {
  return (
    // Bottone con stili Tailwind CSS per un aspetto moderno e responsivo
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 m-2">
      {props.buttonText} {/* Il testo del bottone viene visualizzato qui */}
    </button>
  );
}

// Questo è un componente basato su classe che restituisce un tag <img>.

class ImageComponent extends React.Component {
  render() {
    return (
      <img
        src={this.props.src} // La sorgente dell'immagine
        alt={this.props.alt} // Il testo alternativo per l'immagine
        className="max-w-full h-auto rounded-lg shadow-md border-2 border-gray-200 m-2"
        style={{ maxWidth: "300px" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/300x200/CCCCCC/000000?text=Immagine+Non+Trovata";
        }} // Fallback in caso di errore di caricamento
      />
    );
  }
}

// Il componente principale dell'applicazione
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 rounded-lg p-3 bg-white shadow-md">
        Benvenuto nella tua App React!
      </h1>

      {/* Utilizzo del ButtonComponent */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Esempio di ButtonComponent (Funzionale)
        </h2>
        <ButtonComponent buttonText="Cliccami!" />
        <ButtonComponent buttonText="Un altro bottone" />
      </div>

      {/* Utilizzo dell'ImageComponent */}
      <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Esempio di ImageComponent (Classe)
        </h2>
        <ImageComponent src="#" alt="Un'immagine di esempio" />
        <ImageComponent src="#" alt="Seconda immagine di esempio" />
      </div>
    </div>
  );
}

export default App;

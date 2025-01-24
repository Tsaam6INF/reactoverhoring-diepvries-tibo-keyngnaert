import React from "react"; // Importeer React om componenten en JSX te gebruiken

const diepvries = [ // Maak een lijst met de inhoud van de diepvries
  { lade: 1, voeding: "worst", aantal: "4", gewicht: "200g" , invriestijd:" ,  24/12/24"}, // Item voor lade 1
  { lade: 1, voeding: "broccoli", aantal: "-", gewicht: "500g", invriestijd:" , 22/12/24" }, // Item voor lade 1
  { lade: 1, voeding: "biefstuk", aantal: "2", gewicht: "400g" , invriestijd: " ,  28/12/24"}, // Item voor lade 1
  { lade: 2, voeding: "hamburgers", aantal: "6", gewicht: "-" , invriestijd:" ,  27/12/24"}, // Item voor lade 2
  { lade: 3, voeding: "frieten", aantal: "1", gewicht: "1Kg", invriestijd:" ,  26/12/24" }, // Item voor lade 3
];

const App = () => { // Begin van de React component
  const uniekeLades = []; // Maak een lege lijst voor unieke lades

  for (let item of diepvries) { // Kijk naar elk item in de diepvrieslijst
    if (!uniekeLades.includes(item.lade)) { // Controleer of de lade al in de lijst staat
      uniekeLades.push(item.lade); // Voeg de lade toe als hij nog niet in de lijst zit
    }
  }

  return ( // Begin van wat de component moet tonen
    <div> 
      <h1>Diepvries Inhoud</h1> 
      {uniekeLades.map((lade) => ( // Voor elke unieke lade, toon de inhoud
        <div key={lade}> 
          <h2>Lade {lade}</h2>
          <ul> 
            {diepvries // Filter de lijst om alleen items van de juiste lade te laten zien
              .filter((item) => item.lade === lade) // Kies alleen items die bij de huidige lade horen
              .map((item, index) => ( // Voor elk item, maak een lijst-item
                <li key={index}> 
                  {item.voeding}
                  {item.aantal && item.aantal !== "-" ? `, aantal: ${item.aantal}` : ""}  
                  {item.gewicht && item.gewicht !== "-" ? `, gewicht: ${item.gewicht}` : ""} 
                  {item.invriestijd}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default App; // Exporteer de component zodat we deze kunnen gebruiken in andere delen van de app

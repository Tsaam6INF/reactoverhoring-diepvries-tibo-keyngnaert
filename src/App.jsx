import React from "react";

const diepvries = [
  { lade: 1, voeding: "worst", aantal: "4", gewicht: "200g" },
  { lade: 1, voeding: "broccoli", aantal: "-", gewicht: "500g" },
  { lade: 1, voeding: "biefstuk", aantal: "2", gewicht: "400g" },
  { lade: 2, voeding: "hamburgers", aantal: "6", gewicht: "-" },
  { lade: 3, voeding: "frieten", aantal: "1", gewicht: "1Kg" },
];

const App = () => {
  const uniekeLades = [];
  diepvries.forEach((item) => {
    if (!uniekeLades.includes(item.lade)) {
      uniekeLades.push(item.lade);
    }
  });

  return (
    <div>
      <h1>Diepvries Inhoud</h1>
    </div>
  )
}

export default App 
import React from 'react';
import DeckCard from './DeckCard';

const DeckColumn = ({ title, className, color, decks }) => {
  return (
    <div className="bg-hs-dark rounded-lg overflow-hidden">
      <div className={`class-header ${color}`}>
        <h3 className="text-sm font-bold">{title}</h3>
      </div>
      <div className="p-3 space-y-2">
        {decks.map((deck, index) => (
          <DeckCard key={index} {...deck} rank={index + 1} />
        ))}
        <div className="text-center pt-2">
          <button className="text-hs-green text-xs hover:text-green-400 transition-colors">
            First Streamed: Jaxon
          </button>
        </div>
        <div className="text-center">
          <button className="bg-hs-green text-white text-xs px-3 py-1 rounded hover:bg-green-600 transition-colors">
            4 more decks
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeckColumn;
import React from 'react';

const DeckCard = ({ name, winRate, games, rank }) => {
  const getRarityClass = (rank) => {
    if (rank <= 2) return 'card-rarity-legendary';
    if (rank <= 4) return 'card-rarity-epic';
    if (rank <= 6) return 'card-rarity-rare';
    return 'card-rarity-common';
  };

  return (
    <div className={`deck-list-item ${getRarityClass(rank)}`}>
      <div className="flex items-center space-x-2">
        <span className="text-gray-400 text-xs w-4">{rank}</span>
        <span className="text-white text-xs flex-1 truncate">{name}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-green-400 text-xs font-bold">{winRate}</span>
        <span className="text-gray-400 text-xs">{games}</span>
      </div>
    </div>
  );
};

export default DeckCard;
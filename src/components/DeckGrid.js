import React from 'react';
import DeckColumn from './DeckColumn';

const DeckGrid = () => {
  const deckColumns = [
    {
      title: 'Menagerie Priest',
      className: 'priest',
      color: 'bg-gray-600',
      decks: [
        { name: 'Elemental Priest', winRate: '64%', games: '1,234' },
        { name: 'Catrina Priest', winRate: '62%', games: '987' },
        { name: 'Resurrect Priest', winRate: '61%', games: '1,456' },
        { name: 'Big Priest', winRate: '59%', games: '2,123' },
        { name: 'Control Priest', winRate: '58%', games: '876' },
        { name: 'Shadow Priest', winRate: '57%', games: '1,234' },
        { name: 'Miracle Priest', winRate: '56%', games: '654' },
        { name: 'Combo Priest', winRate: '55%', games: '432' }
      ]
    },
    {
      title: 'Ramp Druid',
      className: 'druid',
      color: 'bg-orange-600',
      decks: [
        { name: 'Jade Druid', winRate: '63%', games: '1,567' },
        { name: 'Aggro Druid', winRate: '61%', games: '2,345' },
        { name: 'Token Druid', winRate: '60%', games: '1,234' },
        { name: 'Malygos Druid', winRate: '59%', games: '876' },
        { name: 'Beast Druid', winRate: '58%', games: '1,456' },
        { name: 'Spell Druid', winRate: '57%', games: '987' },
        { name: 'Taunt Druid', winRate: '56%', games: '654' },
        { name: 'Mill Druid', winRate: '55%', games: '432' }
      ]
    },
    {
      title: 'Elemental Mage',
      className: 'mage',
      color: 'bg-blue-600',
      decks: [
        { name: 'Freeze Mage', winRate: '65%', games: '1,789' },
        { name: 'Tempo Mage', winRate: '63%', games: '2,456' },
        { name: 'Secret Mage', winRate: '62%', games: '1,567' },
        { name: 'Burn Mage', winRate: '61%', games: '1,234' },
        { name: 'Control Mage', winRate: '60%', games: '987' },
        { name: 'Spell Mage', winRate: '59%', games: '876' },
        { name: 'Elemental Mage', winRate: '58%', games: '654' },
        { name: 'Big Mage', winRate: '57%', games: '543' }
      ]
    },
    {
      title: 'Across the Timelines',
      className: 'neutral',
      color: 'bg-gray-500',
      decks: [
        { name: 'Combo Deck', winRate: '66%', games: '1,890' },
        { name: 'Aggro Deck', winRate: '64%', games: '2,567' },
        { name: 'Control Deck', winRate: '63%', games: '1,678' },
        { name: 'Midrange Deck', winRate: '62%', games: '1,345' },
        { name: 'Tempo Deck', winRate: '61%', games: '1,123' },
        { name: 'Value Deck', winRate: '60%', games: '998' },
        { name: 'Synergy Deck', winRate: '59%', games: '765' },
        { name: 'Tribal Deck', winRate: '58%', games: '654' }
      ]
    },
    {
      title: 'Paladin (2)',
      className: 'paladin',
      color: 'bg-yellow-600',
      decks: [
        { name: 'Aggro Paladin', winRate: '67%', games: '2,123' },
        { name: 'Control Paladin', winRate: '65%', games: '1,789' },
        { name: 'Murloc Paladin', winRate: '64%', games: '1,456' },
        { name: 'Secret Paladin', winRate: '63%', games: '1,234' },
        { name: 'Handbuff Paladin', winRate: '62%', games: '1,098' },
        { name: 'Dragon Paladin', winRate: '61%', games: '987' },
        { name: 'Mech Paladin', winRate: '60%', games: '876' },
        { name: 'Heal Paladin', winRate: '59%', games: '765' }
      ]
    },
    {
      title: 'Elemental Mage',
      className: 'mage',
      color: 'bg-blue-600',
      decks: [
        { name: 'Freeze Mage', winRate: '68%', games: '2,345' },
        { name: 'Tempo Mage', winRate: '66%', games: '2,123' },
        { name: 'Secret Mage', winRate: '65%', games: '1,890' },
        { name: 'Burn Mage', winRate: '64%', games: '1,678' },
        { name: 'Control Mage', winRate: '63%', games: '1,456' },
        { name: 'Spell Mage', winRate: '62%', games: '1,234' },
        { name: 'Elemental Mage', winRate: '61%', games: '1,098' },
        { name: 'Big Mage', winRate: '60%', games: '987' }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {deckColumns.map((column, index) => (
        <DeckColumn key={index} {...column} />
      ))}
    </div>
  );
};

export default DeckGrid;
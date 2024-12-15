import React from 'react';
import './PlayerCard.css'; // Import CSS for styling

const PlayerCard = () => {
  const players = [
    { name: 'John Doe', role: 'Defender', matchesWon: 8, image: '/player/image01.png' },
    { name: 'Jane Smith', role: 'Forward', matchesWon: 5, image: '/player/image02.png' },
    { name: 'Michael Johnson', role: 'Guard', matchesWon: 10, image: '/player/image03.png' },
    { name: 'Emily Davis', role: 'Defender', matchesWon: 7, image: '/player/image04.png' },
    { name: 'Chris Lee', role: 'Forward', matchesWon: 6, image: '/player/image05.png' },
    { name: 'Patricia Brown', role: 'Guard', matchesWon: 9, image: '/player/image06.png' },
    { name: 'Robert Wilson', role: 'Defender', matchesWon: 4, image: '/player/image07.png' },
    { name: 'Linda Martinez', role: 'Forward', matchesWon: 8, image: '/player/image08.png' },
    { name: 'David Garcia', role: 'Guard', matchesWon: 3, image: '/player/image09.png' },
    { name: 'Susan Rodriguez', role: 'Defender', matchesWon: 10, image: '/player/image10.png' },
    { name: 'James Lewis', role: 'Forward', matchesWon: 5, image: '/player/image11.png' },
    { name: 'Barbara Walker', role: 'Guard', matchesWon: 7, image: '/player/image12.png' },
    { name: 'Michael Hall', role: 'Defender', matchesWon: 6, image: '/player/image13.png' },
    { name: 'Jessica Young', role: 'Forward', matchesWon: 4, image: '/player/image14.png' },
    { name: 'Matthew King', role: 'Guard', matchesWon: 9, image: '/player/image15.png' },
    { name: 'Laura Wright', role: 'Defender', matchesWon: 3, image: '/player/image16.png' },
    { name: 'Lionel Messi', role: 'Forward', matchesWon: 8, image: '/player/image17.png' }
  ];

  return (
    <div className="player-list m-3">
      {players.map((player, index) => (
        <div className="card" style={{ height: '250px' ,width:"300px", backgroundColor: '#333333' }} key={index}>
          <img className='img' src={player.image} alt={player.name} />
          <div className="textBox">
            <p className="text head">{player.name}</p>
            <span>{player.role}</span>
            <p className="text price">Matches Won: {player.matchesWon}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;

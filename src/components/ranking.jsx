import React from 'react';
import './TeamRanking.css'; // Import the CSS

const TeamRanking = () => {
  const teams = [
    { rank: 1, img: 'extra-images/ranking-widget-flag-1.png', name: 'L.A Pirates', school: 'Bebop Institute', matches: 8, wins: 8, points: 16 },
    { rank: 2, img: 'extra-images/ranking-widget-flag-2.png', name: 'Ocean Kings', school: 'Icarus College', matches: 8, wins: 7, points: 14 },
    { rank: 3, img: 'extra-images/ranking-widget-flag-3.png', name: 'Red Wings', school: 'Marine College', matches: 7, wins: 7, points: 14 },
    { rank: 4, img: 'extra-images/ranking-widget-flag-4.png', name: 'Lucky Clovers', school: 'Elric Bros School', matches: 7, wins: 6, points: 12 },
    { rank: 5, img: 'extra-images/ranking-widget-flag-5.png', name: 'Draconians', school: 'Atlantic School', matches: 6, wins: 5, points: 10 },
    { rank: 6, img: 'extra-images/ranking-widget-flag-6.png', name: 'Bloody Wave', school: 'Marine College', matches: 6, wins: 4, points: 8 },
    { rank: 7, img: 'extra-images/ranking-widget-flag-7.png', name: 'Ocean Kings', school: 'St. Patrick’s Institute', matches: 6, wins: 4, points: 8 },
    { rank: 8, img: 'extra-images/ranking-widget-flag-2.png', name: 'Sharks', school: 'Icarus College', matches: 6, wins: 2, points: 4 },
  ];

  return (
    <div className="widget widget_team_ranking" style={{color:'black'}}>
      <div className="sportsmagazine-fancy-title"><h2  style={{color:'black'}}>Team Rankings</h2></div>
      <div className="ranking-title-table">
        <ul className="ranking-title-row">
          <li  style={{color:'black'}}>Team Rank</li>
          <li  style={{color:'black'}}>M</li>
          <li  style={{color:'black'}}>W</li>
          <li  style={{color:'black'}}>PTS</li>
        </ul>
      </div>
      {teams.map(team => (
        <div key={team.rank} className="ranking-content-table">
          <ul className="ranking-content-row">
            <li  style={{color:'black'}}>{team.rank}</li>
            <li>
              <img src={team.img} alt={team.name} />
              <div className="ranking-logo">
                <span  style={{color:'black'}}>{team.name}</span>
                <small>{team.school}</small>
              </div>
            </li>
            <li  style={{color:'black'}}>{team.matches}</li>
            <li  style={{color:'black'}}>{team.wins}</li>
            <li  style={{color:'black'}}>{team.points}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TeamRanking;

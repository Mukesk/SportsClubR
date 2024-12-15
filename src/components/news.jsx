import React from 'react';
import "./news.css"

const newsList = [
  {
    id: 1,
    title: 'Historic Win: Local Team Clinches Championship',
    content: 'In an exhilarating match, the local team defeated their rivals to claim the championship title for the first time in decades.',
    imgSrc: '/news/img1.jpg',
    source: 'ESPN'
  },
  {
    id: 2,
    title: 'Olympics 2024: Athletes to Watch',
    content: 'As the 2024 Olympics approach, here are the athletes who are expected to make headlines in their respective sports.',
    imgSrc: '/news/img2.jpg',
    source: 'NBC Sports'
  },
  {
    id: 3,
    title: 'Record-Breaking Season for Star Player',
    content: 'The star player has broken multiple records this season, becoming a leading contender for MVP.',
    imgSrc: '/news/img3.jpg',
    source: 'Sports Illustrated'
  },
  {
    id: 4,
    title: 'New Rules in Football Spark Controversy',
    content: 'The introduction of new rules in football has divided opinions among fans and players alike.',
    imgSrc: '/news/img4.jpg',
    source: 'Bleacher Report'
  },
  {
    id: 5,
    title: 'Top 10 Most Anticipated Matches This Year',
    content: 'A look at the most exciting matchups coming up this sports season that fans won’t want to miss.',
    imgSrc: '/news/img5.jpg',
    source: 'The Athletic'
  },
  {
    id: 6,
    title: 'Female Athletes Break Barriers in Sports',
    content: 'Female athletes continue to shatter records and break barriers in various sports, inspiring future generations.',
    imgSrc: '/news/img6.jpg',
    source: 'Women’s Sports Network'
  },
  {
    id: 7,
    title: 'Emerging Sports Trends to Watch',
    content: 'Explore the trends shaping the future of sports, from technology to athlete wellness.',
    imgSrc: '/news/img7.jpg',
    source: 'Forbes'
  },
  {
    id: 8,
    title: 'Impact of Sports on Mental Health',
    content: 'Studies show that participating in sports can significantly improve mental health and well-being.',
    imgSrc: '/news/img8.jpg',
    source: 'Healthline'
  },
  {
    id: 9,
    title: 'Fan Reactions: The Most Shocking Moments of the Season',
    content: 'Fans share their thoughts on the most surprising and controversial moments of the sports season.',
    imgSrc: '/news/img9.jpg',
    source: 'FanSided'
  },
  {
    id: 10,
    title: 'Rising Stars: Next Generation of Athletes',
    content: 'Meet the up-and-coming athletes who are poised to take the sports world by storm.',
    imgSrc: '/news/img10.jpg',
    source: 'Yahoo Sports'
  },
  {
    id: 11,
    title: 'Sports Injuries: Prevention and Recovery',
    content: 'An expert guide on how to prevent common sports injuries and the best practices for recovery.',
    imgSrc: '/news/img11.jpg',
    source: 'Mayo Clinic'
  },
  {
    id: 12,
    title: 'The Role of Sports in Community Building',
    content: 'Sports play a vital role in bringing communities together, fostering teamwork and unity.',
    imgSrc: '/news/img12.jpg',
    source: 'Community Sports Journal'
  }
];

const SportsNewsCard = ({ news }) => (
  <div className="card" style={{width:"300px"}}>
    <div className="icons">
      <button className="save">
        <svg className="save__icon" viewBox="0 0 20 20">
          <path d="M8.416,3.943l1.12-1.12v9.031c0,0.257,0.208,0.464,0.464,0.464c0.256,0,0.464-0.207,0.464-0.464V2.823l1.12,1.12c0.182,0.182,0.476,0.182,0.656,0c0.182-0.181,0.182-0.475,0-0.656l-1.744-1.745c-0.018-0.081-0.048-0.16-0.112-0.224C10.279,1.214,10.137,1.177,10,1.194c-0.137-0.017-0.279,0.02-0.384,0.125C9.551,1.384,9.518,1.465,9.499,1.548L7.76,3.288c-0.182,0.181-0.182,0.475,0,0.656C7.941,4.125,8.234,4.125,8.416,3.943z M15.569,6.286h-2.32v0.928h2.32c0.512,0,0.928,0.416,0.928,0.928v8.817c0,0.513-0.416,0.929-0.928,0.929H4.432c-0.513,0-0.928-0.416-0.928-0.929V8.142c0-0.513,0.416-0.928,0.928-0.928h2.32V6.286h-2.32c-1.025,0-1.856,0.831-1.856,1.856v8.817c0,1.025,0.832,1.856,1.856,1.856h11.138c1.024,0,1.855-0.831,1.855-1.856V8.142C17.425,7.117,16.594,6.286,15.569,6.286z"></path>
        </svg>
        Save 
      </button>
      <button className="see-more">
        <svg viewBox="0 0 20 20" className="see-more__icon">
          <path d="M3.936,7.979c-1.116,0-2.021,0.905-2.021,2.021s0.905,2.021,2.021,2.021S5.957,11.116,5.957,10 S5.052,7.979,3.936,7.979z M3.936,11.011c-0.558,0-1.011-0.452-1.011-1.011s0.453-1.011,1.011-1.011S4.946,9.441,4.946,10 S4.494,11.011,3.936,11.011z M16.064,7.979c-1.116,0-2.021,0.905-2.021,2.021s0.905,2.021,2.021,2.021s2.021-0.905,2.021-2.021 S17.181,7.979,16.064,7.979z M16.064,11.011c-0.559,0-1.011-0.452-1.011-1.011s0.452-1.011,1.011-1.011S17.075,9.441,17.075,10 S16.623,11.011,16.064,11.011z M10,7.979c-1.116,0-2.021,0.905-2.021,2.021S8.884,12.021,10,12.021s2.021-0.905,2.021-2.021 S11.116,7.979,10,7.979z M10,11.011c-0.558,0-1.011-0.452-1.011-1.011S9.442,8.989,10,8.989S11.011,9.441,11.011,10 S10.558,11.011,10,11.011z"></path>
        </svg>
      </button>
    </div>
    <div className="image" style={{ backgroundImage: `url(${news.imgSrc})` }}></div>
    <div className="card__info">
      <span className="page">{news.source}</span>
      <a href="#" className="title">{news.title}</a>
      <p style={{color:"black"}} className="content">{news.content}</p>
    </div>
  </div>
);

const News = () => (
  <div className="news-list">
    {newsList.map(news => (
      <SportsNewsCard key={news.id} news={news} />
    ))}
  </div>
);

export default News;

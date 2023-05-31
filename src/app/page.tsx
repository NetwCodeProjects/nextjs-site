'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import citylogo from '../../public/city_do_wht_horiz.jpg'
import Loading from './components/Loading';

type FeedItem = {
  title: string | null;
  link: string | null;
  date: string;
};

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const feedUrl = 'https://feeds.feedburner.com/TheHackersNews';
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`);
      const data = await response.json();
      const parser = new DOMParser();
      const xml = parser.parseFromString(data.contents, 'application/xml');
      const items = xml.querySelectorAll('item');
      const parsedItems = Array.from(items).map((item) => {
        const titleElement = item.querySelector('title');
        const linkElement = item.querySelector('link');
        const dateElement = item.querySelector('pubDate');

        const title = titleElement ? titleElement.textContent : '';
        const link = linkElement ? linkElement.textContent : '';
        const date = dateElement && dateElement.textContent ? new Date(dateElement.textContent).toDateString() : 'No date available';
        
        return { title, link, date };
      });

      setFeedItems(parsedItems);
      setIsLoading(false);
    };

    fetchFeed();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Welcome to Cyber Trust</title>
      </head>
      <body>
        {isLoading ? (
          <Loading />
          ) : (
            <div className="container">
              <header>
                <h1>./CyberTrust</h1>
                <Image src={citylogo} alt="Logo" className="logo" width={200} height={80}/>
                <nav>
                  <ul>
                    <li><a href="/signup">Signup</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Support</a></li>
                  </ul>
                </nav>
                <p>believe in the reliability, truth, ability</p>
              </header>
              <div className="content">
                <p>The content below contains links.</p>
              </div>
              <div className="rss">
                <h2>Latest from thehackernews.com</h2>
                <div id="feed"></div>
                {feedItems.map((item, index) => (
                  <div className="feed-item" key={index}>
                    <a className="feed-item-title" href={item.link || undefined} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                    <div className="feed-item-date">{item.date}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        <div className="loading-container">
          <div className="loading-spinner">
            <div className="loading-dot1"></div>
            <div className="loading-dot2"></div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Page;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NewsCard from './NewsCard';

// const News = ({ category, language }) => {
//   const [articles, setArticles] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const apiKey = process.env.REACT_APP_NEWSAPI_API_KEY;
//         if (!apiKey) {
//           throw new Error('API key is missing');
//         }

//         let apiUrl = `https://newsapi.org/v2/top-headlines?language=${language}&apiKey=${apiKey}`;

//         // Add category to API URL if provided
//         if (category) {
//           apiUrl += `&category=${category}`;
//         }

//         console.log(`Fetching news from API: ${apiUrl}`);

//         const response = await axios.get(apiUrl, {
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         });

//         setArticles(response.data.articles);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//         if (error.response) {
//           console.error('Error response data:', error.response.data);
//           setError(`Failed to fetch news: ${error.response.data.message}`);
//         } else if (error.request) {
//           console.error('Error request:', error.request);
//           setError('Failed to fetch news: No response received from the server.');
//         } else {
//           console.error('Error message:', error.message);
//           setError(`Failed to fetch news: ${error.message}`);
//         }
//       }
//     };

//     fetchNews();
//   }, [category, language]);

//   return (
//     <div style={{ minHeight: '300px' }}>
//       <h3 style={{ margin: '0px 40px' }}>
//         {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} News` : 'Top Headlines'}
//       </h3>

//       <div className="news-container">
//         {error ? (
//           <p>{error}</p>
//         ) : articles.length > 0 ? (
//           articles.map((article, index) => (
//             <NewsCard
//               key={index}
//               title={article.title}
//               description={article.description}
//               url={article.url}
//               imageUrl={article.urlToImage || 'default-image-url.jpg'}
//               published_date={article.publishedAt}
//             />
//           ))
//         ) : (
//           <p>No news articles available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

//  export default News;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NewsCard from './NewsCard';

// const News = ({ category, language }) => {
//   const [articles, setArticles] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         let apiUrl = `http://localhost:5000/news?language=${language}`;

//         // Add category to API URL if provided
//         if (category) {
//           apiUrl += `&category=${category}`;
//         }

//         console.log(`Fetching news from API: ${apiUrl}`);

//         const response = await axios.get(apiUrl);
//         setArticles(response.data.articles);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//         setError('Failed to fetch news. Please try again later.');
//       }
//     };

//     fetchNews();
//   }, [category, language]);

//   return (
//     <div style={{ minHeight: '300px' }}>
//       <h3 style={{ margin: '0px 40px' }}>
//         {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} News` : 'Top Headlines'}
//       </h3>

//       <div className="news-container">
//         {error ? (
//           <p>{error}</p>
//         ) : articles.length > 0 ? (
//           articles.map((article, index) => (
//             <NewsCard
//               key={index}
//               title={article.title}
//               description={article.description}
//               url={article.url}
//               imageUrl={article.urlToImage || 'default-image-url.jpg'}
//               published_date={article.publishedAt}
//             />
//           ))
//         ) : (
//           <p>No news articles available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default News;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

const News = ({ category, language }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = process.env.REACT_APP_GNEWS_API_KEY; // Update the environment variable name
        if (!apiKey) {
          throw new Error('API key is missing');
        }

        let apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=${language}`;

        // Add category to API URL if provided
        if (category) {
          apiUrl += `&topic=${category}`;
        }

        console.log(`Fetching news from API: ${apiUrl}`);

        const response = await axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
        if (error.response) {
          console.error('Error response data:', error.response.data);
          setError(`Failed to fetch news: ${error.response.data.message}`);
        } else if (error.request) {
          console.error('Error request:', error.request);
          setError('Failed to fetch news: No response received from the server.');
        } else {
          console.error('Error message:', error.message);
          setError(`Failed to fetch news: ${error.message}`);
        }
      }
    };

    fetchNews();
  }, [category, language]);

  return (
    <div style={{ minHeight: '300px' }}>
      <h3 style={{ margin: '0px 40px' }}>
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} News` : 'Top Headlines'}
      </h3>

      <div className="news-container">
        {error ? (
          <p>{error}</p>
        ) : articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              imageUrl={article.image || 'default-image-url.jpg'} // Updated the image property
              published_date={article.publishedAt}
            />
          ))
        ) : (
          <p>No news articles available.</p>
        )}
      </div>
    </div>
  );
};

export default News;



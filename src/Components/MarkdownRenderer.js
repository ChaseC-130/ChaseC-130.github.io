import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import './Styles/MarkdownRenderer.css'

const MarkdownRenderer = () => {
  const [content, setContent] = useState('');
  const [toc, setToc] = useState([]);
  const [activeHeading, setActiveHeading] = useState('');  // New state for tracking active heading
  const location = useLocation();  // Get location object
  const [error, setError] = useState(null); // State to track loading errors
  const [isHome, setIsHome] = useState(false);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);  // State for mobile TOC visibility


  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.replace('/markdown/', '');
    path === "home" ? setIsHome(true) : setIsHome(false);

    const filePath = `/markdown/${path}.md`;

    fetch(filePath)
      .then(response => {
        if (!response.ok) { 
          throw new Error('Markdown file not found');
        }
        return response.text();
      })
      .then(text => {
        if (isHtmlContent(text)) {
          throw new Error('Page not found.');
        }
        if (text.trim() === '') {
          throw new Error('File is empty');
        }

        const headings = text.match(/^# .+$/gm);
        const toc = headings ? headings.map(heading => ({
          title: heading.replace(/^# /, '').trim(),
          id: heading.replace(/^# /, '').toLowerCase().replace(/\s+/g, '-')
        })) : [];

        
        setToc(toc);
        setContent(text);
        setError(null); 
      })
      .catch(error => {
        console.error('Error loading markdown:', error);
        setError(error.message);
        navigate('/404', { replace: true });
      });
  }, [location.pathname, navigate]);

  const isHtmlContent = (text) => {
    return /<\/?[a-z][\s\S]*>/i.test(text);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileTocOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const scrollToSection = (id) => {
    setActiveHeading(id);  // Set the clicked heading as active
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileTocOpen(false); 

    }
  };

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    );
  }

  const components = {
    h1: ({ node, ...props }) => {
      const text = String(props.children);
      const id = text.toLowerCase().replace(/\s+/g, '-');
      return (
        <h1 id={id} className={id === activeHeading ? 'active-heading' : ''}>
          {props.children}
        </h1>
      );
    }
  };

  return (
    <div className="markdown-page">
      
      <div className="mobile-toc-button" onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}>
        {isMobileTocOpen ? 'Close TOC' : 'Open TOC'}
      </div>

      <div className={`mobile-toc ${isMobileTocOpen ? 'open' : ''}`}>
        <ul>
          {!isHome && (
            <li key="home">
              <button onClick={() => navigate('../markdown/home')}>Home</button>
            </li>
          )}
          {toc.map(item => (
            <li key={item.id}>
              <button onClick={() => scrollToSection(item.id)}>{item.title}</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="toc">
         
        <ul>
        {!isHome &&
         <>
        <li key="home"><button onClick={() => navigate('../markdown/home')}>Home</button></li>
        </>}
          {toc.map(item => (
            <li key={item.id}>
              <button onClick={() => scrollToSection(item.id)}>{item.title}</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="markdown-container">
        <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownRenderer;

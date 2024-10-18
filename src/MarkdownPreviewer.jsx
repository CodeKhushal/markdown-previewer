import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState('');

  // Function to handle the download of the HTML file
  const handleDownloadHTML = () => {
    const element = document.createElement("a");
    const file = new Blob([marked(markdown)], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = "markdown.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  // Function to clear the input field
  const handleClear = () => {
    setMarkdown('');
  };

  return (
    <div className="markdown-previewer">
      <textarea
        className="input-area"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter Markdown here..."
      />
      
      <div
        className="preview-area"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />

      <div className="button-container">
        <button onClick={handleClear} className="clear-button">Clear</button>
        <button onClick={handleDownloadHTML} className="download-button">Download as HTML</button>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;

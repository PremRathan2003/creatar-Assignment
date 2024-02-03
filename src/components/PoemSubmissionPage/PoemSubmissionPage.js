import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import './PoemSubmissionPage.css'; // Import CSS for PoemSubmissionPage

function PoemSubmissionPage() {
  const [poem, setPoem] = useState({ title: '', body: '', author: '' });
  const [submitted, setSubmitted] = useState(false); // State to track submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPoem(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Poem:', poem);
    setPoem({ title: '', body: '', author: '' });
    setSubmitted(true); // Set submitted to true after successful submission
  };

  const handleAnotherSubmit = () => {
    setSubmitted(false); // Set submitted back to false to show the form again
  };

  return (
    <>
      <Navbar />
      <div className="poem-submission-container">
        <div className="form-section">
          {submitted ? ( // Conditionally render the "thank you" message if submitted is true
            <div className="thank-you-message">
              <span className="tick-mark-green">✓</span> Thank you for your submission!
              <button className="submit-another-button" onClick={handleAnotherSubmit}>Submit Another Poem</button>
            </div>
          ) : (
            <>
            <div className='row'>
            <div>
              <h2 className="poem-submission-title">Poem Submission</h2>
              <form onSubmit={handleSubmit} className="poem-submission-form">
                <input type="text" name="title" value={poem.title} onChange={handleChange} placeholder="Poem Title" className="poem-input" />
                <textarea name="body" value={poem.body} onChange={handleChange} placeholder="Poem Body" className="poem-textarea"></textarea>
                <input type="text" name="author" value={poem.author} onChange={handleChange} placeholder="Author Name" className="poem-input" />
                <button type="submit" className="submit-button">Submit Poem</button>
              </form>
            </div>
            <div className='image-selection'>
            <img src="https://www.yearindays.com/media/medium/world-poetry-day.jpg" alt="Related" className="related-photo" />
            </div>
            </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default PoemSubmissionPage;

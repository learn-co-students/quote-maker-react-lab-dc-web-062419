import React, { useState } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

const QuoteForm = props => {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (content === '' || author === '') return;
    const quote = { content, author, id: uuid(), votes: 0 };
    props.addQuote(quote);
    setContent('');
    setAuthor('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', gridGap: '10px', width: '20%', margin: '0 auto' }}
    >
      <input
        type="text"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <input
        type="text"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
      />
      <button type="submit">Add Quote</button>
    </form>
  );
};

export default connect(
  null,
  { addQuote },
)(QuoteForm);

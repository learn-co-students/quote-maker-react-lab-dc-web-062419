import React from 'react';
import { connect } from 'react-redux';
import QuoteCard from './QuoteCard';

const Quotes = props => {
  return (
    <ul>{props.quotes && props.quotes.map(quote => <QuoteCard key={quote.id} {...quote} />)}</ul>
  );
};

export default connect(state => ({ quotes: state.quotes }))(Quotes);

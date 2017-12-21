import React from 'react'
import { render } from 'react-dom'

var ce = React.createElement;

var MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

var MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'House of Cards', color: 'Yellow' }),
    ce(MyTitle, { title: 'Orange is the New Black', color: 'Green' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'Red' })
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));

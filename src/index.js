import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';

ReactDOM.render(
  <div>
     <div className="divImage">
        <i className="iconAmazonTwo iconAmazon" role="img" aria-label="Amazon"></i>
        <i className="iconAmazonDomain" role="presentation"></i>
    </div>
    <Form></Form>
  </div>,
  document.getElementById('root')
  );


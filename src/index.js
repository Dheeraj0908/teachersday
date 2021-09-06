import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages';
import ReactDOM from 'react-dom';

ReactDOM.render((
  <BrowserRouter>
   <Pages />
  </BrowserRouter>
  ), document.getElementById('root')
);
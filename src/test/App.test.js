import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

describe('App component', () => {
  test('renders', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});

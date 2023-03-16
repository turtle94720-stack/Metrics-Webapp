import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import City from '../components/City';

describe('App component', () => {
  test('renders', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <City />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});

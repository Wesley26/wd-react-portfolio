import { render } from '@testing-library/react';
import App from '../../src/App';
import '../../src/index.css';

it(`render App.tsx test component`, () => {

    const view = (render(<App />));

    expect(view).toMatchSnapshot();

});
import { render } from '@testing-library/react';
import Home from '../../../src/webPages/Home';
import '../../src/index.css';

it(`render App.tsx test component`, () => {

    const view = (render(<Home />));

    expect(view).toMatchSnapshot();

});
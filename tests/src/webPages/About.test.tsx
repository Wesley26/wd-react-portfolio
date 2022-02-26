import { render } from '@testing-library/react';
import About from '../../../src/webPages/About';
import '../../src/index.css';

it(`render About.tsx test component`, () => {

    const view = (render(<About />));

    expect(view).toMatchSnapshot();

});
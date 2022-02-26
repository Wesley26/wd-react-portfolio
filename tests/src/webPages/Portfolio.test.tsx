import { render } from '@testing-library/react';
import Portfolio from '../../../src/webPages/Portfolio';
import '../../src/index.css';

it(`render ContactMe.tsx test component`, () => {

    const view = (render(<Portfolio />));

    expect(view).toMatchSnapshot();

});
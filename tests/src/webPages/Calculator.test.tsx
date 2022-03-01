import { render } from '@testing-library/react';
import Calculator from '../../../src/webPages/Calculator';
import '../../src/index.css';

it(`render ContactMe.tsx test component`, () => {

    const view = (render(<Calculator />));

    expect(view).toMatchSnapshot();

});
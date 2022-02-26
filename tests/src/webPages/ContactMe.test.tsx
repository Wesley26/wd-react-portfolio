import { render } from '@testing-library/react';
import ContactMe from '../../../src/webPages/ContactMe';
import '../../src/index.css';

it(`render ContactMe.tsx test component`, () => {

    const view = (render(<ContactMe />));

    expect(view).toMatchSnapshot();

});
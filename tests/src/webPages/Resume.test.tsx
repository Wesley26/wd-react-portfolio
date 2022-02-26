import { render } from '@testing-library/react';
import Resume from '../../../src/webPages/Resume';
import '../../src/index.css';

it(`render ContactMe.tsx test component`, () => {

    const view = (render(<Resume />));

    expect(view).toMatchSnapshot();

});
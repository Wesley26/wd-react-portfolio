import { render } from '@testing-library/react';
import TodoList from '../../../src/webPages/TodoList';
import '../../src/index.css';

it(`render ContactMe.tsx test component`, () => {

    const view = (render(<TodoList />));

    expect(view).toMatchSnapshot();

});
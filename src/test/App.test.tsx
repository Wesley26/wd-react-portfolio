import { render, screen } from '@testing-library/react';
import Home from '../webPages/Home';

it("App.tsx should have this title in the document with the home page title text", () => {

    render(<Home />);
    const homeText = screen.queryByText(/Web and Mobile Design: Perfectly Balanced To Meet Your Future Business Image/i);
    expect(homeText).toBeInTheDocument();

});

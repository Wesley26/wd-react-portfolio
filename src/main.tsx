import { createRoot, Root } from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * This was once index.tsx when there was
 * create-react-app
 */

const container : any = document.getElementById('root');
const root: Root = createRoot(container);
root.render(<App />);

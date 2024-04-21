import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './components/register';

const routes = [
    {
        path:'/',
        element: <div>Hello Laravel 11 with React 18</div>,
    },
    {
        path: '/register',
        element: <Register />,
    }

];

createRoot(document.getElementById('root')).render(
    <RouterProvider router={createBrowserRouter(routes)} />
)
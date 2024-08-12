import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <App />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </>
)

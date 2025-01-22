import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Main from "./layout/Main";
import { Hero } from "./components"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Hero />
        }
      ]
    }
  ])

  return (
    <div className="relative bg-primary z-0">
      <RouterProvider router={router} />
    </div>
  )
}

export default App

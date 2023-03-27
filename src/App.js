import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ProgressSpinner } from "primereact/progressspinner"

import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"

import Root from "./pages"
import Dashboard from "./pages/dashboard"
import Approach from "./pages/approach"
import Project from "./pages/projects"
import Login from "./pages/login"
import Offset from "./pages/offset"
import Reset from "./pages/reset"
import Payment from "./pages/payment"
import Error from "./pages/error"

import { HEADER_NAV_LINK } from "./utils/headerUtils"

const router = createBrowserRouter([
  {
    path: HEADER_NAV_LINK.root,
    element: <Root lang={process.env.REACT_APP_LANG_CHINESE} />,
    errorElement: <Error />,
    children: [
      {
        path: HEADER_NAV_LINK.root,
        element: <Dashboard title="root" />,
      },
      {
        path: HEADER_NAV_LINK.payment,
        element: <Payment />,
      },
      {
        path: HEADER_NAV_LINK.reset,
        element: <Reset title="reset" />,
      },
      {
        path: HEADER_NAV_LINK.login,
        element: <Login title="login" />,
      },
      {
        path: HEADER_NAV_LINK.offset,
        element: <Offset title="offset" />,
      },
      {
        path: HEADER_NAV_LINK.our_approach,
        element: <Approach title="Our Approach" />,
      },
      {
        path: HEADER_NAV_LINK.calculator,
        element: <Dashboard title="Calculator" />,
      },
      {
        path: HEADER_NAV_LINK.projects,
        element: <Project title="Projects" />,
      },
      {
        path: HEADER_NAV_LINK.about_us,
        element: <Dashboard title="About Us" />,
      },
      {
        path: HEADER_NAV_LINK.faq,
        element: <Dashboard title="FAQ" />,
      },
      {
        path: HEADER_NAV_LINK.updates,
        element: <Dashboard title="Updates" />,
      },
      {
        path: HEADER_NAV_LINK.offers,
        element: <Dashboard title="Offers" />,
      },
      {
        path: HEADER_NAV_LINK.wre_pbc,
        element: <Dashboard title="Wre PBC" />,
      },
      {
        path: HEADER_NAV_LINK.wre_financial,
        element: <Dashboard title="Wre Financial" />,
      },
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<ProgressSpinner />} />
  )
}

export default App

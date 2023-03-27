import React, { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { HEADER_SCROLL_LIMITE, HEADER_NAV_LINK } from "../utils/headerUtils"

import Footer from "./footer"
import Header from "./header"

function Root(props) {
  const location = useLocation()
  const [isScrollEnable, toggleScrollEnable] = useState(false)
  const [isOpenNav, toggleOpenNav] = useState(false)
  window.onscroll = () => {
    toggleScrollEnable(
      document.body.scrollTop > HEADER_SCROLL_LIMITE ||
        document.documentElement.scrollTop > HEADER_SCROLL_LIMITE,
    )
  }
  return (
    <>
      <Header
        lang={props.lang}
        isScrollEnable={isScrollEnable}
        isOpenNav={isOpenNav}
        toggleOpenNav={toggleOpenNav}
        themeColor={
          isScrollEnable ||
          isOpenNav ||
          location.pathname != HEADER_NAV_LINK.root
            ? process.env.REACT_APP_BLACK_THEME
            : process.env.REACT_APP_WHITE_THEME
        }
      />
      <Outlet context={{ lang: props.lang }} />
      <Footer lang={props.lang} />
    </>
  )
}

export default Root

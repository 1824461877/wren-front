import React from "react"
import { Link } from "react-router-dom"

import {
  FooterContainer,
  FooterOutContainer,
  FooterMenuContent,
  FooterNavContent,
  FooterMenuContainer,
  FooterSocialItem,
  FooterNavBar,
} from "./components"

import {
  FOOTER_NAV_ENGLISH,
  FOOTER_NAV_CHINESE,
  FOOTER_MENU_ENGLISH,
  FOOTER_MENU_CHINESE,
  FOOTER_ICONS,
} from "../../utils/footerUtils"

function Footer(props) {
  const isChinese = props.lang == process.env.REACT_APP_LANG_CHINESE
  const FOOTER_NAV = isChinese ? FOOTER_NAV_CHINESE : FOOTER_NAV_ENGLISH
  const FOOTER_MENU = isChinese ? FOOTER_MENU_CHINESE : FOOTER_MENU_ENGLISH

  return (
    <FooterOutContainer>
      <FooterContainer>
        <FooterMenuContent className="grid">
          <img
            className="cus_footer_logo col-1"
            src={process.env.PUBLIC_URL + "wren-bird-white.png"}
          />
          <div className="col-11">
            <div className="grid">
              <FooterMenuContainer
                className="cus_first md:col-3 col-12"
                title={FOOTER_MENU.wren.title}
              >
                <p>{FOOTER_MENU.wren.description}</p>
                <FooterSocialItem>
                  <Link to={FOOTER_MENU.wren.link.twitter}>
                    <img src={process.env.PUBLIC_URL + FOOTER_ICONS.twitter} />
                  </Link>
                  <Link to={FOOTER_MENU.wren.link.instagram}>
                    <img
                      src={process.env.PUBLIC_URL + FOOTER_ICONS.instagram}
                    />
                  </Link>
                  <Link to={FOOTER_MENU.wren.link.linkedin}>
                    <img src={process.env.PUBLIC_URL + FOOTER_ICONS.linkedin} />
                  </Link>
                </FooterSocialItem>
              </FooterMenuContainer>
              <FooterMenuContainer
                className="md:col-3 col-12"
                title={FOOTER_MENU.explore.title}
              >
                {Object.keys(FOOTER_MENU.explore.menu).map((key) => (
                  <Link key={key} to={FOOTER_MENU.explore.link[key]}>
                    {FOOTER_MENU.explore.menu[key]}
                  </Link>
                ))}
              </FooterMenuContainer>
              <FooterMenuContainer
                className="md:col-3 col-12"
                title={FOOTER_MENU.resources.title}
              >
                {Object.keys(FOOTER_MENU.resources.menu).map((key) => (
                  <Link key={key} to={FOOTER_MENU.resources.link[key]}>
                    {FOOTER_MENU.resources.menu[key]}
                  </Link>
                ))}
              </FooterMenuContainer>
              <FooterMenuContainer
                className="md:col-3 col-12"
                title={FOOTER_MENU.projects.title}
              >
                {Object.keys(FOOTER_MENU.projects.menu).map((key) => (
                  <Link key={key} to={FOOTER_MENU.projects.link[key]}>
                    {FOOTER_MENU.projects.menu[key]}
                  </Link>
                ))}
              </FooterMenuContainer>
            </div>
          </div>
        </FooterMenuContent>

        <FooterNavContent>
          <Link to={FOOTER_NAV.copyright_link}>
            {FOOTER_NAV.copyright_name}
          </Link>
          <hr />
          <FooterNavBar>
            {Object.keys(FOOTER_NAV.link).map((key) => (
              <span key={key}>
                <Link to={FOOTER_NAV.link[key]}>{FOOTER_NAV.name[key]}</Link> •{" "}
              </span>
            ))}
          </FooterNavBar>
        </FooterNavContent>
      </FooterContainer>
    </FooterOutContainer>
  )
}

export default Footer

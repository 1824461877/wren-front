import { Button } from "primereact/button"
import {
  HEADER_ITEM_TITLE_ENGLISH,
  HEADER_ITEM_TITLE_CHINESE,
  HEADER_ITEM_DESCRIPTION_ENGLISH,
  HEADER_ITEM_DESCRIPTION_CHINESE,
  HEADER_NAV_LINK,
  HEADER_NAV_ICONS,
  HEADER_SCROLL_LIMITE,
} from "../../utils/headerUtils"

import {
  CusCurrencyUnit,
  CusStartBtn,
  CusLogo,
  CusDivider,
  CusNavContainer,
  CusNavHItem,
  CusNavVItem,
  CusNavBarsBtn,
  CusNavDropDown,
  CusNavVSubItem,
  CustNavVDivider,
  CusNavItemHGroup,
  CusNavbarOutline,
  CusNavVContainer,
  CusNavDropDownDivider,
  CustNavVSubItemContainer,
} from "./components"

import { RootItemContainer_W_90 } from "../cus_components"
import { Link } from "react-router-dom"

function Header(props) {
  const HEADER_TITLE_LANG =
    props.lang == process.env.REACT_APP_LANG_CHINESE
      ? HEADER_ITEM_TITLE_CHINESE
      : HEADER_ITEM_TITLE_ENGLISH
  const HEADER_DESCRIPTION_LANG =
    props.lang == process.env.REACT_APP_LANG_CHINESE
      ? HEADER_ITEM_DESCRIPTION_CHINESE
      : HEADER_ITEM_DESCRIPTION_ENGLISH
  return (
    <CusNavbarOutline open={props.isOpenNav} scrol={props.isScrollEnable}>
      <RootItemContainer_W_90>
        <CusNavContainer
          className="flex justify-content-between"
          themeColor={props.themeColor}
        >
          <Link
            className="flex-initial flex align-items-center justify-content-between"
            to={HEADER_NAV_LINK.root}
          >
            <CusLogo
              src={
                process.env.REACT_APP_PUBLIC_URL +
                (props.themeColor == process.env.REACT_APP_BLACK_THEME
                  ? "logo-black.svg"
                  : "logo-white.svg")
              }
              alt="logo"
            />
          </Link>
          <div className="flex-initial flex align-items-center justify-content-between">
            <CusNavItemHGroup>
              <CusNavHItem>
                <Link to={HEADER_NAV_LINK.careers}>
                  {HEADER_TITLE_LANG.careers}
                </Link>
              </CusNavHItem>
              <CusNavHItem>
                <Link to={HEADER_NAV_LINK.our_approach}>
                  {HEADER_TITLE_LANG.our_approach}
                </Link>
              </CusNavHItem>
              <CusNavHItem>
                <Link to={HEADER_NAV_LINK.projects}>
                  {HEADER_TITLE_LANG.projects}
                </Link>
              </CusNavHItem>
              <CusNavHItem className="cus_dropdown">
                <Link>
                  {HEADER_TITLE_LANG.learn}{" "}
                  <i className="pi pi-chevron-down"></i>
                </Link>
                <CusNavDropDown>
                  <Link to={HEADER_NAV_LINK.about_us}>
                    {HEADER_TITLE_LANG.about_us}
                  </Link>
                  <Link to={HEADER_NAV_LINK.faq}>{HEADER_TITLE_LANG.faq}</Link>
                  <CusNavDropDownDivider />
                  <Link to={HEADER_NAV_LINK.updates}>
                    {HEADER_TITLE_LANG.updates}
                  </Link>
                  <Link to={HEADER_NAV_LINK.offers}>
                    {HEADER_TITLE_LANG.offers}
                  </Link>
                  <Link to={HEADER_NAV_LINK.wre_pbc}>
                    {HEADER_TITLE_LANG.wre_pbc}
                  </Link>
                  <Link to={HEADER_NAV_LINK.wre_financial}>
                    {HEADER_TITLE_LANG.wre_financial}
                  </Link>
                </CusNavDropDown>
              </CusNavHItem>
              <CusDivider> | </CusDivider>
              <CusNavHItem>
                <Link to={HEADER_NAV_LINK.login}>
                  {HEADER_TITLE_LANG.login}
                </Link>
              </CusNavHItem>
            </CusNavItemHGroup>
            <Link to={HEADER_NAV_LINK.calculator}>
              <CusStartBtn>
                {HEADER_TITLE_LANG.calculator}
                <i className="pi pi-chevron-right" />
                <i className="pi pi-arrow-right" />
              </CusStartBtn>
            </Link>
            <CusCurrencyUnit>$ USD</CusCurrencyUnit>
            <CusNavBarsBtn
              themeColor={props.themeColor}
              open={props.isOpenNav}
              onClick={() => props.toggleOpenNav(!props.isOpenNav)}
            >
              <i className={props.isOpenNav ? "pi pi-times" : "pi pi-bars"}></i>
            </CusNavBarsBtn>
          </div>
        </CusNavContainer>
      </RootItemContainer_W_90>
      <CusNavVContainer show={props.isOpenNav}>
        <CusNavVItem
          imgSrc={
            process.env.REACT_APP_PUBLIC_URL + HEADER_NAV_ICONS.our_approach
          }
          title={HEADER_TITLE_LANG.our_approach}
          content={HEADER_DESCRIPTION_LANG.our_approach}
        />
        <CusNavVItem
          imgSrc={process.env.REACT_APP_PUBLIC_URL + HEADER_NAV_ICONS.projects}
          title={HEADER_TITLE_LANG.projects}
          content={HEADER_DESCRIPTION_LANG.projects}
        />
        <CusNavVItem
          imgSrc={process.env.REACT_APP_PUBLIC_URL + HEADER_NAV_ICONS.about_us}
          title={HEADER_TITLE_LANG.about_us}
          content={HEADER_DESCRIPTION_LANG.about_us}
        />
        <CusNavVItem
          imgSrc={process.env.REACT_APP_PUBLIC_URL + HEADER_NAV_ICONS.faq}
          title={HEADER_TITLE_LANG.faq}
          content={HEADER_DESCRIPTION_LANG.faq}
        />
        <CusNavVItem
          imgSrc={process.env.REACT_APP_PUBLIC_URL + HEADER_NAV_ICONS.updates}
          title={HEADER_TITLE_LANG.updates}
          content={HEADER_DESCRIPTION_LANG.updates}
        />
        <CusNavVItem
          imgSrc={process.env.REACT_APP_PUBLIC_URL + HEADER_NAV_ICONS.gifts}
          title={HEADER_TITLE_LANG.gifts}
          content={HEADER_DESCRIPTION_LANG.gifts}
        />
        <CustNavVDivider />
        <CustNavVSubItemContainer title="learn more">
          <CusNavVSubItem
            imgSrc={process.env.REACT_APP_PUBLIC_URL + HEADER_NAV_ICONS.book}
            title={HEADER_TITLE_LANG.offers}
          />
          <CusNavVSubItem
            imgSrc={process.env.REACT_APP_PUBLIC_URL + HEADER_NAV_ICONS.book}
            title={HEADER_TITLE_LANG.wre_pbc}
          />
          <CusNavVSubItem
            imgSrc={process.env.REACT_APP_PUBLIC_URL + HEADER_NAV_ICONS.book}
            title={HEADER_TITLE_LANG.wre_financial}
          />
        </CustNavVSubItemContainer>
        <CustNavVDivider thick />
        <CustNavVSubItemContainer title="currency">
          <CusCurrencyUnit virtical>$ USD</CusCurrencyUnit>
          <Button
            className="cus_success_btn"
            label={HEADER_TITLE_LANG.calculator}
            severity="success"
          />
          <Button
            label={HEADER_TITLE_LANG.login}
            severity="secondary"
            outlined
          />
        </CustNavVSubItemContainer>
      </CusNavVContainer>
    </CusNavbarOutline>
  )
}

export default Header

import styled from "styled-components"
import { Link } from "react-router-dom"

export const CusNavbarOutline = styled.div`
  top: 0;
  width: 100%;
  background-color: ${(props) => (props.scrol ? "#f4f3ef" : "transparent")};
  border-bottom: ${(props) => (props.scrol ? "1px solid #d0cfcc" : "none")};
  position: ${(props) => (props.scrol ? "fixed" : "absolute")};
  z-index: 10000000;
  @media (max-width: 1080px) {
    background-color: ${(props) => props.open && "white"};
    position: ${(props) => (props.open ? "fixed" : "absolute")};
  }
`

export const CusNavContainer = styled.div`
  color: ${(props) =>
    props.themeColor == "white" ? "white" : "black"}; !important;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  background-color: none;
  padding: 18px;
  font-size: 16px !important;
  font-weight: 600;
  
  & a {
    display: inline;
  }
  
  ${(props) =>
    props.themeColor == "white"
      ? `& a {
          color: white;
          text-decoration: none;
      }`
      : `& a {
          color: black;
          text-decoration: none;
      }`} 
`

export const CusNavVContainer = styled.div`
  position: fixed;
  overflow: auto;
  height: 93%;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.15s, opacity 0.15s linear;
  background-color: white;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 15px;
  top: 0;
  margin-top: 65px;
  padding-top: 30px;
  width: 100%;
  z-index: 1000;

  & a {
    text-decoration: none;
    color: #333333 !important;
  }

  @media (max-width: 1080px) {
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    opacity: ${(props) => (props.show ? "1" : "0")};
  }
`
export const CusNavVItemChild = ({ className, imgSrc, title, content }) => (
  <Link className={className + " grid"}>
    <img src={imgSrc} className="col-3" />
    <div className="col-9">
      <div className="cus_nav_title">{title}</div>
      <div className="cus_nav_content">{content}</div>
    </div>
  </Link>
)

export const CusNavVSubItemChild = ({ className, imgSrc, title }) => (
  <Link className={className + " grid"}>
    <img src={imgSrc} className="col-1" />
    <div className="cus_nav_sub_title col-10">{title}</div>
  </Link>
)

export const CustNavVSubItemContainerChild = ({
  className,
  title,
  children,
}) => (
  <div className={className}>
    <div className="sub_container_title">{title}</div>
    {children}
  </div>
)

export const CusNavVItem = styled(CusNavVItemChild)`
  padding: 5px 30px;
  & img {
    width: 60px;
    height: 60px;
    margin-left: 20px;
  }

  & div.cus_nav_title {
    font-weight: bold;
    line-height: 1.4;
    font-style: normal;
  }

  & div.cus_nav_content {
    color: #666666;
  }
  @media (max-width: 379px) {
    width: 100%;
    text-align: center;
    padding: 10px 0 10px 50px;
    &:hover {
      transition: 0.3s;
      background-color: rgba(0, 0, 0, 0.15);
    }

    & img {
      margin: 0 27%;
    }
  }
`

export const CustNavVSubItemContainer = styled(CustNavVSubItemContainerChild)`
  padding: 10px 52px 15px 52px;
  & div.sub_container_title {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    color: rgba(55, 53, 47, 0.8);
    margin-top: 6px;
    margin-left: 0px;
    margin-bottom: 12px;
    font-size: 11px !important;
  }
  & button {
    margin-bottom: 10px;
    width: 100%;
  }
  & button.cus_success_btn {
    margin-top: 30px;
    background-color: #27ae60 !important;
    border: 1px solid #27ae60 !important;
  }
`

export const CustNavVDivider = styled.div`
  width: 100%;
  height: ${(props) => (props.thick ? "1.3px" : "1px")};
  background-color: rgba(0, 0, 0, 0.15);
`

export const CusNavVSubItem = styled(CusNavVSubItemChild)`
  & img {
    width: 35px;
    height: 35px;
    margin: 3px 0;
  }

  & div.cus_nav_sub_title {
    font-weight: 600;
    line-height: 1.4;
    font-style: normal;
  }

  @media (max-width: 330px) {
    margin-top: 3px;
    &:hover {
      transition: 0.3s;
      background-color: rgba(0, 0, 0, 0.15);
    }
    & div.cus_nav_sub_title {
      text-align: center;
      padding-left: 30px;
    }

    & img {
      width: 100%;
    }
  }
`
export const CusLogo = styled.img`
  height: 100%;
  max-width: 170px;
`

export const CusStartBtn = styled.div`
  text-align: center;
  cursor: pointer;
  color: white;
  font-size: 18px !important;
  box-sizing: border-box;
  display: inline-flex;
  font-weight: 500;
  background-color: #f79f22;
  transition: all 0.3s ease 0s;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  text-decoration: none !important;
  border-radius: 50px !important;
  padding: 2px 8px 2px 17px !important;

  &:hover {
    background-color: #e89013;
    & i.pi-chevron-right {
      display: none;
    }
    & i.pi-arrow-right {
      display: block;
    }
  }

  & i {
    font-size: 0.5rem;
    padding: 2px 3px 2px 5px !important;
    margin: 7px 3px 0 3px;
  }

  & i.pi-chevron-right {
    display: block;
  }
  & i.pi-arrow-right {
    display: none;
  }

  @media (max-width: 1080px) {
    padding: 2px 5px 2px 11px !important;
    font-size: 12px !important;
    & i {
      padding: 2px 2px 2px 3px !important;
      margin: 4px 2px 0 3px;
    }
  }
`

export const CusDivider = styled.span`
  padding: 0px 20px;
  color: #cdcccc;
`

export const CusNavDropDown = styled.div`
  display: none;
  right: 0;
  margin-top: 5px;
  padding: 8px 0;
  border-radius: 5px;
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1234;

  & a {
    color: #333333;
    padding: 8px 16px;
    text-decoration: none;
    display: block;
  }

  & a:hover {
    background-color: #f1f1f1;
  }
`

export const CusNavDropDownDivider = styled.hr`
  color: #333333;
  text-align: center;
`
export const CusNavItemHGroup = styled.div`
  display: block;
  @media (max-width: 1080px) {
    display: none;
  }
`

export const CusNavHItem = styled.div`
  display: inline;
  position: relative;
  transition: background-color 200ms ease-in-out 0s;
  padding: 4px 8px;
  margin: 4px 8px;
  border-radius: 3px;
  width: fit-content;
  cursor: pointer;
  z-index: 1234;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    & div {
      display: ${(props) =>
        props.className == "cus_dropdown" ? "block" : "none"};
    }
  }

  & i {
    font-size: 0.7rem;
    padding: 2px 3px !important;
    margin-top: 5px;
  }
`

export const CusCurrencyUnit = styled.div`
  margin-left: ${(props) => (props.virtical ? "-10px" : "16px")};
  border-radius: 3px;
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
    ${(props) => props.virtical && `background-color: rgba(0, 0, 0, 0.1)`}
  }
  @media (max-width: 1080px) {
    display: ${(props) => (props.virtical ? "block" : "none")};
  }
`

export const CusNavBarsBtn = styled.button`
  background-color: transparent;
  color: ${(props) =>
    props.open || props.themeColor == "black" ? "black" : "white"};
  transition: all 0.3s;
  border: none;
  margin-top: 1px;
  padding: 5px 0 5px 20px;
  cursor: pointer;
  display: none;
  @media (max-width: 1080px) {
    display: block;
  }
`

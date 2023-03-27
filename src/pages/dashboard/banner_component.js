import styled from "styled-components"
import { Link } from "react-router-dom"

export const BannerOutContainer = styled.div``

export const BannerInnerContainer = styled.div`
  width: 100%;
  height: 460px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transform: scale(1);
  @media (min-width: 720px) {
    height: 580px;
  }

  @media (min-width: 430px) {
    height: 500px;
  }
`

export const BannerOutOverLayer = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: 10;
  bottom: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 91, 75, 0.8) 100%,
    rgba(0, 91, 75, 0.8) 100%
  );
`

export const BannerInnerOverLayer = styled.div`
  position: absolute;
  pointer-events: none;
  bottom: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 91, 75, 0.8) 100%,
    rgba(0, 91, 75, 0.8) 100%
  );
  z-index: -1;
`

export const BannerImage = styled.img`
  width: 100%;
  min-height: 460px;
  object-fit: cover;
  height: 100%;
  overflow: hidden;
  transition: filter 300ms ease 0s, opacity 300ms linear 0s;
  @media (min-width: 720px) {
    min-height: 580px;
  }
  @media (min-width: 430px) {
    min-height: 500px;
  }
`

const BannerFooterChild = ({ className, children }) => (
  <div className={className}>
    <div className="cus"></div>
    {children}
  </div>
)

const BannerFooter = styled(BannerFooterChild)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding-bottom: 10px;
  @media (max-width: 450px) {
    display: none;
  }
  & .cus {
    background: rgba(31, 161, 139, 0.3);
    backdrop-filter: blur(4px);
    width: 400px;
    padding: 20px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: absolute;
    font-size: 14px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    text-align: center;
    color: white;
    font-weight: 400 !important;
  }

  & img {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    margin-right: 8px;
    margin-bottom: -6px;
    position: relative;
  }

  & span {
    width: 360px;
    display: inline;
    position: relative;
    color: white;
    font-size: 14px;
    font-weight: 400;
    padding-left: 5px;
  }
`

export const BannerMainContentChild = ({ className, text }) => {
  return (
    <div className={className}>
      <h1>{text.title}</h1>
      <p>{text.description_text}</p>
      <Link to="/calculator">{text.button_text}</Link>
      <p className="cus_btn_desc">{text.description_text}</p>
      <BannerFooter>
        <img src={process.env.PUBLIC_URL + text.avartar[0]} />
        <span>
          <b>{text.name[0]}</b> {text.banner_footer[0]}
        </span>
      </BannerFooter>
    </div>
  )
}
export const BannerMainContent = styled(BannerMainContentChild)`
  position: absolute;
  align-self: flex-start;
  text-align: center;
  height: 100%;
  z-index: 100;

  & h1 {
    font-family: Blanco, serif;
    font-weight: 600;
    font-style: normal;
    color: white;
    font-size: 32px;
    letter-spacing: -0.5px;
    line-height: 1;
    max-width: 500px;
    padding-top: 100px;
    width: 90%;
    @media (min-width: 1000px) {
      font-size: 55px;
    }
    @media (min-width: 720px) {
      font-size: 55px;
      padding-top: 110px;
    }
    @media (min-width: 430px) {
      padding-top: 100px;
      width: auto;
    }
    @media (min-width) {
      font-size: 60px;
    }
  }

  & p {
    font-size: 20px;
    margin: 8px auto 25px;
    line-height: 1.3;
    font-weight: 400;
    color: white;
    max-width: 90%;
    @media (max-width: 1000px) {
      ont-size: 24px;
      max-width: 510px;
    }
    @media (max-width: 720px) {
      font-size: 24px;
      max-width: 510px;
    }
    @media (max-width: 430px) {
      font-size: 22px;
      max-width: 400px;
    }
  }

  & p.cus_btn_desc {
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 400;
    line-height: 1.4;
    font-style: normal;
    color: white;
    margin: 12px auto 0px;
    max-width: 200px;
    font-size: 14px !important;

    @media (min-width: 720px) {
      font-size: 16px;
    }
  }

  & a {
    border-radius: 4px;
    -webkit-box-align: center;
    align-items: center;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font: 500 22px / 1 Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    gap: 0.8125em;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    transition-property: opacity, color, background-color, border-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    min-height: 44px;
    min-width: 44px;
    background-color: rgb(247, 159, 34);
    border-color: rgb(247, 159, 34);
    color: white;
    box-shadow: 0 3px 2px 0 rgb(0, 0, 0, 0.15);
    padding: 13px 36px;
    text-decoration: none !important;
  }
`

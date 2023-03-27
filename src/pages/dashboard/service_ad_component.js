import { Link } from "react-router-dom"
import styled from "styled-components"

export const ServiceOutContainer = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 15px;
  box-sizing: border-box;
  padding-bottom: 15px;
  background: white;
`

export const ServiceInnerContainer = styled.div`
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-around;
  max-width: 1250px;
  margin: auto;
  align-items: center;
`

const ServiceItemChild = ({ className, text, link, img, max_width }) => (
  <div className={className}>
    <Link to={link}>
      <img src={img} style={{ maxWidth: max_width }} />
      <p>{text}</p>
    </Link>
  </div>
)

export const ServiceItem = styled(ServiceItemChild)`
  @media (max-width: 1000px) {
    margin: 0px;
    width: 30%;
  }
  @media (max-width: 720px) {
    margin: auto;
    width: 100%;
    animation-name: fade;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    ${(props) =>
      props.index !== 0 ? "display: none!important;" : "display: block;"}
  }
  margin: 0px;
  width: 30%;
  display: inherit;
  padding: 0px 12px;
  max-width: 250px;

  & a {
    font-weight: 400;
    text-decoration: none !important;

    & img {
      width: 100%;
      filter: grayscale(100%);
      margin-bottom: 6px;
      opacity: 0.8;
      margin: 0px;
    }

    & p {
      @media (min-width: 430px) {
        font-size: 18px;
        line-height: 30px;
      }

      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      color: #333333;
      margin-bottom: 10px;
      max-width: 250px;
      opacity: 0.6;
      padding-top: 2px;
      font-size: 13px !important;
      line-height: 16px !important;
    }
  }
  @keyframes fade {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

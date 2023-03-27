import styled from "styled-components"
import { Link } from "react-router-dom"

export const StepContainer1 = styled.div`
  @media (max-width: 1000px) {
    column-gap: 30px;
    margin-top: 100px;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: row-reverse;
  }
  @media (max-width: 720px) {
    column-gap: 60px;
    margin-top: 50px;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 420px) {
    display: none;
  }
  column-gap: 65px;
  margin-top: 100px;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: row-reverse;
  display: flex;
`

export const StepContainer2 = styled.div`
  @media (max-width: 1000px) {
    column-gap: 30px;
    margin-top: 100px;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: row;
  }
  @media (max-width: 720px) {
    column-gap: 60px;
    margin-top: 50px;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 420px) {
    display: none;
  }
  column-gap: 65px;
  margin-top: 100px;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
}
`

const Step2ItemChild = ({ className }) => {
  ;<div className={className}>
    <div>
      <div></div>
    </div>
  </div>
}

export const Step2Item = styled(Step2ItemChild)`
  margin-top: 0px;
  background-color: #ebebeb;
  border-radius: 5px;

  & div {
    opacity: 1;
    & div {
      background-image: url(https://projectwren.imgix.net/you-funded-clean-cooking-fuel.png?auto=format%2Ccompress&q=35);
      background-position: center center;
      background-size: cover;
      position: relative;
      width: 100%;
      border-radius: 5px;
    }
  }
`

export const StepVideo = styled.video`
  object-fit: cover;
  border: 1px solid #072f10;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  width: 540px;
  height: 360px !important;
  @media (max-width: 1000px) {
    width: 400px;
    height: 300px !important;
  }
  @media (max-width: 720px) {
    width: 100%;
    height: 320px !important;
  }
`

const StepDescriptionChild = ({
  className,
  number,
  imgSrc,
  title,
  description,
  refer_text,
  refer_img,
}) => (
  <div className={className}>
    <>
      <div className="cus_stepo_title">
        <b>{number}</b>
        <img
          src={process.env.REACT_APP_PUBLIC_URL + imgSrc}
          className="cus_step_bracket"
        />
      </div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </>
    <>
      <cite>{refer_text}</cite>
      <img className="cus_step_abb_img" src={refer_img} />
    </>
  </div>
)

export const StepDescription = styled(StepDescriptionChild)`
  @media (max-width: 1000px) {
    padding: 0px;
  }
  @media (max-width: 720px) {
    padding: 24px 0px;
  }
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  padding: 24px 0px;

  & div.cus_stepo_title {
    @media (max-width: 1000px) {
      -webkit-box-align: center;
      align-items: center;
      flex-direction: row;
    }
    @media (max-width: 720px) {
      -webkit-box-align: center;
      align-items: center;
      flex-direction: row;
    }
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: row;
    color: #999999;
    margin-bottom: 12px;
    font-size: 20px;
    & b {
      @media (max-width: 1000px) {
        font-size: inherit;
      }
      @media (max-width: 720px) {
        font-size: 12px;
      }
      color: #333333;
    }
  }
  & h1 {
    @media (max-width: 1000px) {
    }
    @media (max-width: 720px) {
      font-size: 28px !important;
    }
    font-size: 40px !important;
    font-family: Blanco, serif;
    font-weight: 600;
    line-height: 1.2;
    font-style: normal;
    // font-size: 28px !important;
  }

  & h2 {
    @media (max-width: 1000px) {
      font-size: 20px;
    }
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    font-style: normal;
    color: #999999;
  }

  & cite {
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
    font-style: normal;
    color: #999999;
    display: block;
    margin-bottom: 12px;
  }

  & img.cus_step_bracket {
    padding-left: 4px;
  }

  & img.cus_step_abb_img {
    margin-top: 60px;
    filter: invert(10%);
    width: 200px;
  }
`

export const StepContainer = styled.div`
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 420px) {
    display: block;
  }
  display: none;
  grid-template-columns: 1fr;
  margin: 32px auto;
  width: 100%;
  max-width: 1000px;
`

const StepItemChild = ({
  className,
  imgSrc,
  title,
  content,
  link,
  linkName,
}) => (
  <div className={className}>
    <img src={imgSrc} />
    <p className="cus_work_title">
      <b>{title}</b>
    </p>
    <h3 className="cus_work_content">{content}</h3>
    <Link to={link}>{linkName}</Link>
  </div>
)

export const StepItem = styled(StepItemChild)`
  text-align: center;

  & img {
    height: 63px;
    margin-bottom: 12px;
  }

  & p {
    font-size: 18px;
    font-weight: 400;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    text-align: center;
    margin-bottom: 8px;
    line-height: 1.4;
  }

  & h3 {
    @media (min-width: 720px) {
      font-size: 18px;
    }
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    font-style: normal;
  }

  & a {
    color: #3789c7;
    text-decoration: none;
  }
`

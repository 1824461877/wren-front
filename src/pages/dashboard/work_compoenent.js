import { Link } from "react-router-dom"
import styled from "styled-components"

export const WorkSection = styled.div`
  width: 100%;
  grid-column: 1 / 4 !important;
`

const WorkPartnerChild = ({ className }) => (
  <div className={className}>
    <h2>我们有业内最优秀的合作伙伴：</h2>
    <picture>
      <source
        media="()"
        srcSet="	https://projectwren.imgix.net/projects/partners-slate.png?auto=format%2Ccompress&q=35&w=1200"
      ></source>
      <img src="https://projectwren.imgix.net/projects/partners-slate.png?auto=format%2Ccompress&q=35&w=1200" />
    </picture>
  </div>
)
export const WorkPartner = styled(WorkPartnerChild)`
  @media (max-width: 1000px) {
    padding-top: 24px;
    padding-bottom: 0px;
    margin: 32px 0px;
  }
  @media (max-width: 720px) {
    padding-top: 40px;
    padding-bottom: 16px;
    margin: 0px;
  }

  @meida (max-width: 430px) {
    padding-top: 42px;
    padding-bottom: 42px;
    margin: 0px;
  }
  border-top: 6px solid #ebebeb;
  border-bottom: 6px solid #ebebeb;

  & h2 {
    @media (max-width: 720px) {
      max-width: none;
    }
    @media (max-width: 1000px) {
      font-size: 20px;
    }
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 18px;
    line-height: 1.4;
    font-style: normal;
    font-weight: 400;
    text-align: center;
  }

  & img {
    @media (max-width: 1000px) {
      width: 90%;
      margin: 24px auto 50px;
    }
    width: 80%;
    margin: 24px auto 50px;
    display: block;
    max-width: 1000px;
  }
`

const WorkPublicHeaderChild = ({ className, children }) => (
  <div className={className}>
    <h1>我们所有的工作都是公开的。</h1>
    <h2>
      Wren<Link to="/charter">具有法律约束的章程</Link>，保证绝对的透明。
    </h2>
    {children}
  </div>
)

export const WorkPublicHeader = styled(WorkPublicHeaderChild)`
  @media (max-width: 1000px) {
    padding: 100px 24px;
  }
  @media (max-width: 720px) {
    padding: 45px 24px;
  }
  background-color: #fafafa;
  padding: 45px 24px;
  box-sizing: border-box;
  text-align: center;
  margin-top: -32px;
  margin-bottom: 64px;

  & h1 {
    @media (max-width: 1000px) {
      font-size: 40px !important;
      line-height: 35px;
    }
    @media (max-width: 720px) {
      font-size: 30px;
      line-height: 35px;
    }
    font-family: Blanco, serif;
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 8px;
    line-height: 115% !important;
  }

  & h2 {
    @media (max-width: 1000px) {
      font-size: 20px;
    }
    @media (max-width: 720px) {
      max-width: none;
    }
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    font-style: normal;
    text-align: center;
    & a {
      color: #3789c7;
      text-decoration: none;
    }
  }
`

export const WorkPublicTypeContainer = styled.div`
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
  grid-template-columns: 1fr;
  margin: 32px auto;
  width: 100%;
  max-width: 1000px;
`

const WorkPublicTypeChild = ({
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

export const WorkPublicType = styled(WorkPublicTypeChild)`
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
    @media (max-width: 1000px) {
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

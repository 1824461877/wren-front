import { Link } from "react-router-dom"
import styled from "styled-components"

export const OffsetOutContainer = styled.div`
  background-color: white;
  width: 100%;
  margin: 0px;
  position: relative;
  overflow: hidden;
`

const OffsetHeaderChild = ({ className, title, imgSrc }) => (
  <header className={className}>
    <img className="cus_offset_header_img_first" src={imgSrc} />
    <img className="cus_offset_header_img_second" src={imgSrc} />
    <h1>{title}</h1>
  </header>
)

export const OffsetHeader = styled(OffsetHeaderChild)`
  @media (max-width: 720px) {
    padding: 100px 16px 50px;
  }
  text-align: center;
  padding: 120px 50px 50px;

  & img {
    position: absolute;
    top: 130px;
    width: 200px;
  }

  & img.cus_offset_header_img_first {
    right: 0px;
    transform: rotate(-90deg);
  }

  & img.cus_offset_header_img_second {
    left: 0px;
    transform: rotate(90deg);
  }

  & h1 {
    font-family: Blanco, serif;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -1px;
    font-style: normal;
    margin-bottom: 0px;
    max-width: 500px;
    font-size: 45px !important;
    width: 100%;
    margin: auto;
  }
`

const OffsetBannerSectionChild = ({ className, imgSrc }) => (
  <section className={className}>
    <div className="cus_offset_banner_cotainer">
      <img src={imgSrc} />
    </div>
  </section>
)

export const OffsetBannerSection = styled(OffsetBannerSectionChild)`
  display: grid;
  grid-template-columns: 1fr min(1000px, 90%) 1fr;
  & > * {
    grid-column: 2 / auto;
  }
  & div.cus_offset_banner_cotainer {
    & img {
      width: 100%;
      max-height: 522px;
      margin: auto;
    }
  }
`

const OffsetDescriptionSectionChild = ({ className, description }) => (
  <section className={className}>
    <p>
      <b>{description[0][0]}</b>
      {description[0][1]}
      <Link to="">{description[0][2]}</Link>
    </p>
    <p>{description[1]}</p>
  </section>
)

export const OffsetDescriptionSection = styled(OffsetDescriptionSectionChild)`
  display: grid;
  grid-template-columns: 1fr min(600px, 90%) 1fr;
  margin-bottom: 96px;
  & > * {
    grid-column: 2 / auto;
  }

  & p {
    line-height: 1.6;
    color: #333333;
    margin-bottom: 12px;
    font-family: Blanco, serif !important;
    font-size: 20px !important;
  }
`
const OffsetMethodSectionChild = ({
  className,
  children,
  imgSrc,
  title,
  description,
}) => (
  <section className={className}>
    <div className="cus_offset_method_header">
      <img src={imgSrc} />
      <h1>{title}</h1>
    </div>
    {description[0] ? (
      <>
        <p className="cus_offset_method_description">{description[0]}</p>
        <p className="cus_offset_method_description">{description[1]}</p>
      </>
    ) : (
      <p></p>
    )}
    {children}
  </section>
)

export const OffsetMethodSection = styled(OffsetMethodSectionChild)`
  display: grid;
  grid-template-columns: 1fr min(600px, 90%) 1fr;
  margin-bottom: 96px;
  margin-top: 96px;
  & > * {
    grid-column: 2 / auto;
  }
  & div.cus_offset_method_header {
    text-align: center;
    border-bottom: 1px solid rgb(204, 204, 204);
    padding-bottom: 24px;
    margin-bottom: 24px;

    & img {
      width: 60px;
      margin-bottom: 16px;
    }

    & h1 {
      @media (max-width: 720px) {
        font-size: 24px;
      }
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      font-size: 30px;
      font-weight: 600;
      line-height: 1.2;
      font-style: normal;
    }
  }

  & p.cus_offset_method_description {
    line-height: 1.6;
    color: #333333;
    margin-bottom: 12px;
    font-family: Blanco, serif !important;
    font-size: 20px !important;
  }
`

const OffsetDonationOneTimeSectionChild = ({ className, title, children }) => (
  <div className={className}>
    <h2>{title}</h2>
    <div className="cus_one_time_section">{children}</div>
  </div>
)

export const OffsetDonationOneTimeSection = styled(
  OffsetDonationOneTimeSectionChild,
)`
  margin-top: 30px;
  & h2 {
    padding-bottom: 5px;
    font-family: Blanco, serif;
    font-size: 22px;
    font-weight: bold;
    line-height: 1.4;
    font-style: normal;
    color: rgb(51, 51, 51);
    border-bottom: 1px solid rgb(204, 204, 204);
  }
  & div.cus_one_time_section {
    grid-template-columns: 1fr 2fr;
    display: grid;
    gap: 24px;
    margin-bottom: 43px;
    margin-top: 24px;

    & label.cus_label {
      padding: 10px 0;
    }

    & span {
      & label.cus_onetime_radio_label {
        font-family: Blanco, serif;
        font-size: 15px;
        font-weight: 200;
        line-height: 1.4;
        font-style: normal;
        color: rgb(51, 51, 51);
        margin: 10px 0;
      }
    }

    & div.cus_onetime_checkbox {
      margin-top: 25px;
      & label.cus_onetime_checkbox_label {
        font-family: Blanco, serif;
        font-size: 15px;
        font-weight: 200;
        line-height: 1.4;
        font-style: normal;
        color: rgb(51, 51, 51);
        margin: 10px 0;
      }
    }
  }
`

export const OffsetValidation = styled.div`
  color: #f44336;
  margin-top: 10px;
`

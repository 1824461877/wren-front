import styled from "styled-components"

export const GoalSection = styled.div`
  grid-column: 2 / auto;
  @media (max-width: 720px) {
    grid-column: 1 / 4;
  }
  @media (max-width: 430px) {
    grid-column: 1 / 4;
  }
`

const GoalHeaderTitleChild = ({ className, title }) => (
  <div className={className}>
    <h1>
      {title[0]}
      <em>{title[1]}</em>
    </h1>
  </div>
)

export const GoalHeaderTitle = styled(GoalHeaderTitleChild)`
  @media (max-width: 1000px) {
    padding: 50px 0px 0px;
  }
  @media (max-width: 720px) {
    padding: 50px 0px 24px;
  }
  padding: 50px 0px 0px;
  text-align: center;
  background-color: white;
  color: #333333;
  margin: 0px !important;

  & h1 {
    font-family: Blanco, serif;
    font-weight: 600;
    line-height: 1.2;
    font-style: normal;
    width: 100%;
    padding: 0 20px;
    font-size: 40px !important;
    position: relative;
    margin-top: 40px;
    margin-bottom: 0px;

    @media (max-width: 720px) {
      font-size: 28px;
    }
  }
`
export const GoalItemContainer = styled.div`
  margin: 0 90px;
  @media (max-width: 720px) {
    margin: 0;
  }
`
export const GoalItem = styled.div`
  @media (max-width: 1000px) {
    margin: 50px auto 120px;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
  @media (max-width: 720px) {
    margin: 0px auto;
    grid-template-columns: 1fr;
    gap: 0px;
  }
  @media (max-width: 420px) {
    margin: 0px auto;
    display: grid;
  }
  margin: 50px auto 120px;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  display: grid;
`

const GoalImageChild = ({ className, pictureTitle, pictureContent }) => (
  <div>
    <div className={className}>
      <h2>{pictureTitle}</h2>
      <hr></hr>
      <p>{pictureContent}</p>
    </div>
  </div>
)

export const GoalImage = styled(GoalImageChild)`
  @media (max-width: 1000px) {
    background-image: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.73)
      ),
      url(https://projectwren.imgix.net/protect-rainforest.jpg?auto=format%2Ccompress&q=35&h=800);
    height: 650px;
    border-radius: 4px;
  }
  @media (max-width: 720px) {
    background-image: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgb(0, 0, 0)
      ),
      url(https://projectwren.imgix.net/protect-rainforest.jpg?auto=format%2Ccompress&q=35&h=800);
    height: 400px;
    border-radius: 0px;
  }

  @media (max-width: 420px) {
    background-image: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgb(0, 0, 0)
      ),
      url(https://projectwren.imgix.net/protect-rainforest.jpg?auto=format%2Ccompress&q=35&h=800);
    height: 400px;
    border-radius: 0px;
  }
  background-image: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.73)
    ),
    url(https://projectwren.imgix.net/protect-rainforest.jpg?auto=format%2Ccompress&q=35&h=800);
  height: 650px;
  border-radius: 4px;
  background-size: cover;
  padding: 0px 110px 46px 46px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  position: relative;
  z-index: 3;

  & h2 {
    @media (max-width: 1000px) {
      display: block;
    }
    @media (max-width: 720px) {
      display: none;
    }
    @media (max-width: 430px) {
      display: none;
    }
    display: block;
    font-size: 37px;
    font-weight: 600;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    line-height: 1;
    color: #ffffff;
  }
  & hr {
    @media (max-width: 720px) {
      display: none;
    }
    @media (max-width: 430) {
      display: none;
    }
    display: block;
    width: 100%;
    height: 5px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  & p {
    @media (max-width: 1000px) {
      display: block;
    }
    @media (max-width: 720px) {
      display: none;
    }
    @media (max-width: 430px) {
      display: none;
    }
    display: block;
    font-size: 22px;
    font-weight: 400;
    font-family: Blanco, serif;
    font-style: italic;
    line-height: 1.3;
    color: #ffffff;
    opacity: 0.8;
    margin-top: 12px;
  }
`
const GoalContentChild = ({ className, children, title, description }) => (
  <div className={className}>
    <h2>{title}</h2>
    <p className="cus_goal_subtitle">{description}</p>
    {children}
  </div>
)
export const GoalContent = styled(GoalContentChild)`
  @media (max-width: 1000px) {
    background-color: inherit;
    color: inherit;
    padding: 0px;
    grid-row: auto / auto;
  }
  @media (max-width: 720px) {
    background-color: black;
    color: white;
    padding: 0px 24px;
    grid-row: 2 / auto;
  }
  @media (max-width: 430px) {
    background-color: black;
    color: white;
    padding: 24px;
    grid-row: 2 / auto;
  }
  z-index: 4;
  position: relative;
  background-color: inherit;
  color: inherit;
  padding: 0px;
  grid-row: auto / auto;

  & h2 {
    @media (max-width: 1000px) {
      font-size: 40px !important;
      line-height: 40px;
    }
    @media (max-width: 720px) {
      font-size: 28px;
      line-height: 35px;
    }
    @media (max-width: 430px) {
      font-size: 28px;
    }
    font-size: 40px !important;
    margin-top: 0px !important;
    font-family: Blanco, serif;
    font-weight: 600;
    line-height: 115% !important;
  }

  & p.cus_goal_subtitle {
    @media (max-width: 720px) {
      color: white;
      color: #999999;
    }
    font-size: 18px;
    line-height: 1.4;
    margin-bottom: 32px;
    margin-top: 16px;
  }
`
const GoalContentItemChild = ({
  className,
  subTitle,
  imgSrc,
  subDescription,
}) => (
  <div className={className}>
    <img src={imgSrc} />
    <div className="cus_sub_title">
      <h4>{subTitle}</h4>
      <p>{subDescription}</p>
    </div>
  </div>
)
export const GoalContentItem = styled(GoalContentItemChild)`
  display: flex;
  align-items: flex-start;
  text-align: left;

  & img {
    flex-shrink: 0;

    @media (max-width: 1000px) {
      fill: #333333;
    }
    @media (max-width: 720px) {
      fill: white;
    }
    @media (max-width: 430px) {
      fill: white;
    }
  }

  & div.cus_sub_title {
    margin-top: 0px;
    margin-bottom: 42px;
    margin-left: 16px;
    & h4 {
      margin-bottom: 6px;
      font-size: 18px;
      font-weight: 600;
    }

    & p {
      @media (min-width: 430px) {
        color: #999999;
        opacity: 1;
      }
      line-height: 1.4;
      color: white;
      opacity: 0.8;
      text-align: left !important;
      font-size: 18px !important;
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif !important;
    }
  }
`

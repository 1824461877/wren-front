import styled from "styled-components"
import { Button } from "primereact/button"
import { Link } from "react-router-dom"

export const ProjectSection = styled.section`
  background-color: white;
  width: 100%;
  margin: 0px;
  position: relative;
  overflow: hidden;
  & > * {
    grid-column: 2 / auto;
  }
`

const ProjectHeaderItemChid = ({ className, text, ids }) => (
  <div className={className}>
    <Link to={ids}>
      <p>{text}</p>
    </Link>
  </div>
)

const ProjectHeaderItem = styled(ProjectHeaderItemChid)`
  @media (max-width: 1000px) {
    padding: 0px 12px;
  }
  padding: 0px 24px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: row;
  & a {
    font-weight: 400;
    text-decoration: none;
    color: #333333;
  }
  & p {
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 400;
    line-height: 1.4;
    font-style: normal;
    font-size: 16px;
    @media (max-width: 1000px) {
      font-size: 12px;
    }
    @media (max-width: 720px) {
      font-size: 10px;
    }
  }
`
const ProjectHeaderChild = ({ className, imgSrc, title, items, ids }) => (
  <header className={className}>
    <img className="cus_approach_header_img1" src={imgSrc} />
    <img className="cus_approach_header_img2" src={imgSrc} />
    <h1>{title}</h1>
    <div className="cus_project_header">
      <div className="cus_project_inner_header">
        <div className="cus_project_header_flex">
          {Object.keys(items).map((key) => (
            <ProjectHeaderItem key={key} text={items[key]} ids={ids[key]} />
          ))}
        </div>
      </div>
    </div>
  </header>
)

const ProjectBannerChild = ({ className, imgSrc, description, title, id }) => (
  <section className={className}>
    <section className="cus_project_banner_img">
      <img src={imgSrc.banner_img} />
    </section>
    <div className="cus_project_banner_img_description">
      <p>↑</p>
      <p>{description}</p>
    </div>
    <div className="cus_project_banner_solution_img" id="project">
      <span>
        <img
          src={imgSrc.solution_type[0][0]}
          className="cus_project_banner_solution_img_back"
        />
        <img
          src={imgSrc.solution_type[0][1]}
          className="cus_project_banner_solution_img_check"
        />
      </span>{" "}
      +
      <span>
        <img
          src={imgSrc.solution_type[1][0]}
          className="cus_project_banner_solution_img_back"
        />
        <img
          src={imgSrc.solution_type[1][1]}
          className="cus_project_banner_solution_img_check"
        />
      </span>{" "}
      +
      <span>
        <img
          src={imgSrc.solution_type[2][0]}
          className="cus_project_banner_solution_img_back"
        />
        <img
          src={imgSrc.solution_type[2][1]}
          className="cus_project_banner_solution_img_check"
        />
      </span>{" "}
      +
      <span>
        <img
          src={imgSrc.solution_type[3][0]}
          className="cus_project_banner_solution_img_back"
        />
        <img
          src={imgSrc.solution_type[3][1]}
          className="cus_project_banner_solution_img_check"
        />
      </span>
    </div>
    <h1>{title}</h1>
    <img className="cus_project_banner_down_arrow" src={imgSrc.down_arrow} />
  </section>
)

const ProjectItemDescriptionChild = ({
  className,
  title,
  description,
  imgSrc,
  tags,
  tagImgSrc,
  btnText,
  btnColor,
}) => (
  <div className={className}>
    <h1>{title}</h1>
    <div className="cus_project_item_sm_img_cotainer">
      <img src={imgSrc} />
    </div>
    <h2>{description}</h2>
    <ProjectItemTagsCotainer>
      {Object.keys(tags).map((key) => (
        <ProjectItemTags tag={tags[key]} imgSrc={tagImgSrc} />
      ))}
    </ProjectItemTagsCotainer>
    <Button label={btnText} severity={btnColor} rounded />
  </div>
)

const ProjectItemDescription = styled(ProjectItemDescriptionChild)`
    width: 60%;
    ${(props) => (props.reverse ? "margin-right: 60px;" : "margin-left: 60px;")}

    @media (max-width: 1000px) {
        width: 50%;
        ${(props) =>
          props.reverse ? "margin-right: 40px;" : "margin-left: 40px;"}
    }
    @media (max-width: 720px) {
        width: 100%;
        margin-left: 0px;
        margin-right: 0px;
    }
    & button {
      color: white!important;
    }
    & h1 {
        @media (max-width: 720px) {
            padding-bottom: 0px;
            border-bottom: 0px;
            margin-bottom: 16px;
        }
        @media (max-width: 1000px) {
            margin-bottom: 24px;
        }
        padding-bottom: 16px;
        border-bottom: 1px solid #cccccc;
        margin-bottom: 14px;
        font-size: 30px;
        font-weight: 600;
        line-height: 1.2;
        font-style: normal;
        font-family: Blanco, serif !important;
    }

    & div.cus_project_item_sm_img_cotainer {
        display: none;
        @media (max-width: 720px) {
            display: block;
        }
        & img {
            
            @media (max-width: 430px) {
                width: 100%;
                height: 185px;
                margin-bottom: 16px;
            }
            @media (max-width: 720px) {
                height: 280px;
                max-width: 700px;
                width: 100%;
                margin-bottom: 24px;
            }
            width: 100px
            max-width: 440px;
            height: 600px;
            margin: auto;
            border-radius: 6px;
            box-shadow: 0 2px 5px 0 hsl(0deg 0% 0% / 15%);
            object-fit: cover;
        }
    }
    & h2 {
        @media (max-width: 720px) {
            font-size: 18px;
        }
        font-size: 20px;
        font-family: Blanco, serif;
        font-weight: 400;
        line-height: 1.4;
        font-style: normal;
        color: rgb(51, 51, 51);
    }
`

const ProjectItemTagsCotainer = styled.div`
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  display: grid;
  gap: 24px;
  margin-bottom: 43px;
  margin-top: 24px;
`

const ProjectItemTagsChild = ({ className, imgSrc, tag }) => (
  <span className={className}>
    <p>
      <span>
        <img className="back" src={imgSrc[0]} />
        <img className="check" src={imgSrc[1]} />
      </span>
      {tag}
    </p>
  </span>
)

const ProjectItemTags = styled(ProjectItemTagsChild)`
  & p {
    @media (max-width: 720px) {
      font-size: 15px;
    }
    font-size: 16px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 400;
    line-height: 1.4;
    font-style: normal;
    color: rgb(51, 51, 51);

    & span {
      box-sizing: border-box;
      display: inline-flex;
      height: 1em;
      -webkit-box-pack: center;
      justify-content: center;
      padding: 0px 0.5em;
      position: relative;
      width: 2em;
      float: left;
      margin-bottom: 12px;
      margin-right: 12px;

      & img.back {
        position: absolute;
        width: 2em;
        height: 2em;
        bottom: -0.625em;
      }
      & img.check {
        height: 1em;
        position: absolute;
        bottom: -0.125em;
      }
    }
  }
`

const ProjectItemHeaderChild = ({ className, imgSrc, title, subTitle }) => (
  <section className={className}>
    <span className="cus_project_item_header_avatar">
      <img src={imgSrc[0]} className="cus_project_item_header_avatar_back" />
      <img src={imgSrc[1]} className="cus_project_item_header_avatar_check" />
    </span>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
  </section>
)

const ProjectItemChild = ({
  className,
  title,
  description,
  tags,
  imgSrc,
  btnText,
  tagImgSrc,
  reverse,
  btnColor,
}) => (
  <div className={className}>
    <div className="cus_project_item_img_container">
      <img src={imgSrc} />
    </div>
    {reverse ? (
      <ProjectItemDescription
        btnColor={btnColor}
        reverse
        title={title}
        description={description}
        imgSrc={imgSrc}
        tags={tags}
        tagImgSrc={tagImgSrc}
        btnText={btnText}
      />
    ) : (
      <ProjectItemDescription
        btnColor={btnColor}
        title={title}
        description={description}
        imgSrc={imgSrc}
        tags={tags}
        tagImgSrc={tagImgSrc}
        btnText={btnText}
      />
    )}
  </div>
)

const ProjectStepImageSectionChild = ({ className, imgSrc, description }) => (
  <div className={className}>
    <section>
      <img src={imgSrc} />
    </section>
    <div className="cus_project_step_img_header_description">
      <p className="cus_project_arrow_up_icon">↑</p>
      <p className="cus_project_img_header_description">{description}</p>
    </div>
  </div>
)
const ProjectChooseContainerChild = ({
  className,
  children,
  title,
  subTitle,
}) => (
  <div className={className}>
    <div className="cus_project_step_img_header">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
    {children}
  </div>
)

const ProjectStepChild = ({
  className,
  title,
  description,
  items,
  index,
  header,
}) => (
  <div className={className}>
    <h1 className="cus_step_title">
      {parseInt(index) + 1}. {title}
    </h1>
    <div className="cus_step_description">
      <p>{description}</p>
    </div>
    <div className="cus_step_method">
      <p>
        <b>{header}</b>
      </p>
      <ol>
        {Object.keys(items).map((key) =>
          title == items[key] ? (
            <li className="cus_active">{items[key]}</li>
          ) : (
            <li>{items[key]}</li>
          ),
        )}
      </ol>
    </div>
  </div>
)

const ProjectDashboardSolutionItemChild = ({ className, imgSrc, subTitle }) => (
  <div className={className}>
    <div>
      <img src={imgSrc} />
    </div>
    <span>{subTitle}</span>
  </div>
)

const ProjectDashboardChild = ({ className, title, imgSrc, children }) => (
  <section className={className}>
    <div className="cus_dashboard_portfolio_summary">
      <img src={imgSrc} />
    </div>
    <div className="cus_dashboard_portfolio_header">
      <h1>
        {title[0]}
        <i>{title[1]}</i>
      </h1>
    </div>
    {children}
  </section>
)

const ProjectDashboardMapChild = ({ className, link }) => (
  <div className={className}>
    <Link to={link}>
      <img src={link} />
    </Link>
  </div>
)

const ProjectDashboardItemChild = ({ className, children, title }) => (
  <div className={className}>
    <h2>{title}</h2>
    <div className="cus_project_dashboard_itemline"></div>
    {children}
  </div>
)

const ProjectDashboardSpentTypeItemChild = ({
  className,
  title,
  imgSrc,
  children,
}) => (
  <div className={className}>
    <Link>
      <span>
        <img className="cus_first" src={imgSrc[0]} />
        <img className="cus_second" src={imgSrc[1]} />
      </span>
      {title}
    </Link>
    {children}
  </div>
)

const ProjectDashboardPercentBarItemChild = ({ className }) => (
  <div className={className}>
    <div></div>
  </div>
)

const ProjectDashboardGraphChild = ({ className, imgSrc }) => (
  <div className={className}>
    <img src={process.env.PUBLIC_URL + imgSrc} />
  </div>
)

const ProjectPortfolioUpdateChild = ({ className, imgSrc, date, content }) => (
  <span className={className}>
    <div className="cus_portfolio_update">
      <img src={imgSrc} />
      <div>
        <cite>{date}</cite>
        <p>{content}</p>
      </div>
    </div>
  </span>
)

const ProjectRecentSupporterItemChid = ({
  className,
  username,
  time,
  amount,
}) => (
  <div className={className}>
    <div className="cus_avatar"></div>
    <div className="cus_suppoter">
      <p className="cus_first">{username}</p>
      <p className="cus_second">{time}</p>
    </div>
    <div className="cus_amount">
      <div>{amount}</div>
    </div>
  </div>
)

const ProjectPartnerOrganizationChild = ({ className, title, imgSrc }) => (
  <section className={className}>
    <div className="cus_partner_organization">
      <h2>{title}</h2>
      <div className="cus_partner_organization_img">
        <img className="cus_img_first" src={imgSrc[0]} />
        <img className="cus_img_second" src={imgSrc[1]} />
      </div>
    </div>
  </section>
)

export const ProjectHeader = styled(ProjectHeaderChild)`
  @media (max-width: 1000px) {
    padding: 120px 50px 50px;
  }
  @media (max-width: 720px) {
    padding: 100px 16px 50px;
  }
  @media (max-width: 430px) {
    padding: 100px 16px 50px;
  }
  padding: 120px 50px 50px;
  text-align: center;

  & img.cus_approach_header_img1 {
    position: absolute;
    top: 50px;
    right: 0px;
    width: 200px;
    transform: rotate(-90deg);
    @media (max-width: 1000px) {
      top: 50px;
      right: 0px;
      width: 150px;
      transform: rotate(-90deg);
    }
    @media (max-width: 720px) {
      top: 100px;
      right: -47px;
      width: 100px;
      transform: rotate(220deg);
    }
    @media (max-width: 430px) {
      top: 100px;
      right: -47px;
      width: 100px;
      transform: rotate(220deg);
    }
  }
  & img.cus_approach_header_img2 {
    position: absolute;
    top: 50px;
    left: 0px;
    width: 250px;
    transform: rotate(90deg);
    @media (max-width: 720px) {
      top: 50px;
      left: 0px;
      width: 150px;
      transform: rotate(90deg);
    }
    @media (max-width: 430px) {
      top: 160px;
      left: -20px;
      width: 70px;
      transform: rotate(45deg);
    }

    @media (max-width: 430px) {
      top: 160px;
      left: -20px;
      width: 70px;
      transform: rotate(45deg);
    }
  }

  & h1 {
    font-family: Blanco, serif;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -1px;
    font-style: normal;
    margin: 24px auto;
    max-width: 700px;
    width: 100%;
    display: block;
    font-size: 45px !important;
  }

  & div.cus_project_header {
    display: flex;
    & div.cus_project_inner_header {
      @media (max-width: 720px) {
        height: 25px;
        display: none;
      }
      height: 54px;
      display: block;
      background-color: #e8fcf0;
      border-radius: 100px;
      margin: 0px auto;
      max-width: 90%;
      overflow: hidden;
      padding: 8px;
      top: 16px;
      z-index: 100;

      & div.cus_project_header_flex {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        flex-direction: row;
        height: 100%;
      }
    }
  }
`

export const ProjectBanner = styled(ProjectBannerChild)`
  display: grid;
  grid-template-columns: 1fr min(1000px, 90%) 1fr;
  margin-bottom: -40px;
  & > * {
    grid-column: 2 / auto;
  }

  & section.cus_project_banner_img {
    & img {
      border-radius: 6px;
      box-shadow: 0 2px 5px 0 rgb(0, 0, 0, 0.15);
      object-fit: cover;
      width: 100%;
      max-height: 522px;
    }
  }

  & div.cus_project_banner_img_description {
    display: flex;
    flex-direction: row;
    color: white;
    margin-top: 16px;
    text-align: left;
    & p {
      @media (max-width: 720px) {
        font-size: 14px;
      }
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      font-weight: 400;
      line-height: 1.4;
      font-style: normal;
      font-size: 16px;
      margin-right: 8px;
      color: #666666;
    }
  }

  & div.cus_project_banner_solution_img {
    @media (max-width: 720px) {
      font-size: 24px;
      gap: 12px;
    }
    color: rgb(204, 204, 204);
    display: flex;
    font-size: 40px;
    gap: 24px;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 144px auto 40px;
    & span {
      box-sizing: border-box;
      display: inline-flex;
      height: 1em;
      -webkit-box-pack: center;
      justify-content: center;
      padding: 0px 0.5em;
      position: relative;
      width: 2em;
      & img.cus_project_banner_solution_img_back {
        position: absolute;
        width: 2em;
        height: 2em;
        bottom: -0.625em;
      }

      & img.cus_project_banner_solution_img_check {
        height: 1em;
        position: absolute;
        bottom: -0.125em;
      }
    }
  }

  & img.cus_project_banner_down_arrow {
    margin: 24px auto 0px;
  }

  & h1 {
    @media (max-width: 720px) {
      font-size: 24px;
    }
    font-family: Blanco, serif;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    font-style: normal;
    text-align: center;
  }
`

export const ProjectItemSection = styled.section`
  display: grid;
  grid-template-columns: 1fr min(1160px, 90%) 1fr;
  & > * {
    grid-column: 2 / auto;
  }
`

export const ProjectItemHeader = styled(ProjectItemHeaderChild)`
  display: grid;
  grid-template-columns: 1fr min(650px, 90%) 1fr;
  margin-top: 94px;
  text-align: center;
  & > * {
    grid-column: 2 / auto;
  }
  & span.cus_project_item_header_avatar {
    box-sizing: border-box;
    display: inline-flex;
    height: 1em;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 0.5em;
    position: relative;
    width: 2em;
    font-size: 40px;
    margin: 24px auto 40px;

    & img.cus_project_item_header_avatar_back {
      width: 2em;
      height: 2em;
      bottom: -0.625em;
      position: absolute;
    }
    & img.cus_project_item_header_avatar_check {
      height: 1em;
      position: absolute;
      bottom: -0.125em;
    }
  }

  & h1 {
    @media (max-width: 720px) {
      font-size: 24px;
    }
    font-family: Blanco, serif;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    font-style: normal;
    width: 100%;
  }

  & h2 {
    @media (max-width: 720px) {
      font-size: 18px;
    }
    width: 100%;
    font-family: Blanco, serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    font-style: normal;
    color: rgb(51, 51, 51);
  }
`

export const ProjectItem = styled(ProjectItemChild)`
  @media (max-width: 720px) {
    margin: 36px 0px;
    flex-direction: column;
  }
  margin: 50px 0px;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  box-sizing: border-box;
  display: flex;
  & div.cus_project_item_img_container {
    display: block;
    @media (max-width: 720px) {
      display: none;
    }
    & img {
      max-width: 440px;
      height: 600px;
      margin: auto;
      border-radius: 6px;
      box-shadow: 0 2px 5px 0 rgb(0, 0, 0, 0.15);
      object-fit: cover;
      width: 100%;
      @media (max-width: 1000px) {
        max-width: 320px;
        height: 420px;
        margin: auto;
      }

      @media (max-width: 720px) {
        max-width: 100%;
        height: 280px;
        margin-bottom: 24px;
      }
      @media (max-width: 430px) {
        max-width: 100%;
        height: 185px;
        margin-bottom: 16px;
      }
    }
  }
`

export const ProjectChooseContainer = styled(ProjectChooseContainerChild)`
  & div.cus_project_step_img_header {
    max-width: 564px;
    margin: 144px auto 40px;
    text-align: center;
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

    & h2 {
      @media (max-width: 720px) {
        font-size: 18px;
      }
      font-family: Blanco, serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 1.4;
      font-style: normal;
    }
  }
`

export const ProjectStepImageSection = styled(ProjectStepImageSectionChild)`
  & section {
    width: 100%;
    grid-column: 1 / 4 !important;

    & img {
      width: 100%;
      max-height: 373px;
      object-fit: cover;
    }
  }

  & div.cus_project_step_img_header_description {
    @media (max-width: 430px) {
      margin-left: 10px;
    }
    display: flex;
    flex-direction: row;
    color: white;
    margin-top: 14px;
    margin-left: 30px;
    text-align: left;
    & p.cus_project_arrow_up_icon {
      @media (max-width: 720px) {
        font-size: 14px;
      }
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      font-weight: 400;
      line-height: 1.4;
      font-style: normal;
      font-size: 16px;
      margin-top: 0;
      margin-right: 8px;
      color: #666666;
    }
    & p.cus_project_img_header_description {
      @media (max-width: 720px) {
        color: rgba(0, 0, 0, 0.7);
        font-size: 14px;
      }
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      font-weight: 400;
      line-height: 1.4;
      font-style: normal;
      color: #666666;
      font-size: 16px;
      margin: 0;
    }
  }
`

export const PorjectStep = styled(ProjectStepChild)`
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  display: grid;
  grid-template-columns: 0.75fr 1fr 0.5fr;
  gap: 60px;
  -webkit-box-align: start;
  align-items: start;
  -webkit-box-pack: start;
  justify-content: start;
  margin: 70px 50px;

  & h1.cus_step_title {
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
    // margin: 20px 15px !important;
    margin-left: 15px;
    margin-top: 20px;
    width: 100%;
    color: black;
  }

  & div.cus_step_description {
    margin: 0px 10px;
    & p {
      line-height: 1.6;
      color: #333333;
      margin-bottom: 12px;
      font-family: Blanco, serif !important;
      font-size: 20px !important;
    }
  }

  & div.cus_step_method {
    width: 100%;
    & p {
      @media (max-width: 720px) {
        font-size: 15px;
      }
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.4;
      font-style: normal;
    }

    & ol {
      margin: 16px 0px 0px;
      padding-left: 23px;

      & li {
        margin: 8px 0px;
        padding: 0px;
        color: #333333;
      }

      & li.cus_active {
        color: #27ae60 !important;
      }
    }
  }
`

export const ProjectDashboardSolutionItem = styled(
  ProjectDashboardSolutionItemChild,
)`
  display: grid;
  gap: 12px;
  justify-items: center;

  & div {
    @media (max-width: 720px) {
      width: 50px;
      height: 50px;
    }
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: row;
    border-radius: 100%;
    background-color: rgb(232, 252, 240);
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    margin: 0px 16px;

    & > * {
      width: 50%;
      height: 50%;
      opacity: 1;
      transition: all 500ms linear 0s;
    }
  }

  & span {
    @media (max-width: 720px) {
      font-size: 12px;
    }
    font-size: 15px;
  }
`

export const ProjectDashboard = styled(ProjectDashboardChild)`
  display: grid;
  grid-template-columns: 100%;
  box-sizing: border-box;
  gap: 64px;
  margin: 64px 0px 0px;
  @media (max-width: 720px) {
    gap: 40px;
    margin: 40px 0px 0px;
  }
  & div.cus_dashboard_portfolio_summary {
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;

    & img {
      @media (max-width: 430px) {
        height: 148.5px;
        width: 313px;
      }
      height: 297px;
      width: 626px;
    }
  }

  & div.cus_dashboard_portfolio_header {
    display: grid;
    gap: 12px;
    text-align: center;

    & h1 {
      @media (max-width: 430px) {
        font-size: 32px;
      }
      font-weight: 600;
      line-height: 1.2;
      font-style: normal;
      font-family: Blanco, serif;
      font-size: 40px;
      max-width: 700px;
      width: 100%;
      margin: auto;
    }
  }
`

export const ProjectDashboardSolutionContainer = styled.div`
  @media (max-width: 430px) {
    margin: 0px;
  }
  display: flex;
  gap: 8px;
  justify-content: space-evenly;
  margin: 0px 10%;
  text-align: center;

  & > * {
    flex-basis: 170px;
  }
`

export const ProjectDashboardItemContainer = styled.div`
  @media (max-width: 720px) {
    gap: 40px;
    grid-template-columns: 1fr;
  }
  @media (max-width: 1000px) {
    gap: 64px;
    grid-template-columns: 1fr;
  }
  gap: 64px;
  grid-template-columns: 3fr 2fr;
  display: grid;
  grid-auto-flow: dense;
`

export const ProjectDashboardItem2 = styled(ProjectDashboardItemChild)`
  & h2 {
    @media (max-width: 720px) {
      font-size: 18px;
    }
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 20px;
    line-height: 1.4;
    font-style: normal;
    font-weight: 600;
  }

  & div.cus_project_dashboard_itemline {
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.15);
    margin-bottom: 24px;
  }
`

export const ProjectDashboardItem1 = styled(ProjectDashboardItemChild)`
  grid-column: 2 / auto;
  @media (max-width: 1000px) {
    grid-column: 1 / auto;
  }

  & h2 {
    @media (max-width: 720px) {
      font-size: 18px;
    }
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 20px;
    line-height: 1.4;
    font-style: normal;
    font-weight: 600;
  }

  & div.cus_project_dashboard_itemline {
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.15);
    margin-bottom: 24px;
  }
`

export const ProjectDashboardAbout = styled.p`
  @media (max-width: 720px) {
    font-size: 15px;
  }
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 400;
  line-height: 1.4;
  font-size: 16px;
  font-style: normal;
`

export const ProjectDashboardSpent = styled.div`
  display: grid;
  grid-template-columns: 50% auto 1fr;
  margin-bottom: -12px;
  width: 100%;

  & div {
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
    padding-bottom: 12px;
    vertical-align: middle;
  }
  & label.cus_first {
    grid-column: 1 / auto;
  }

  & label.cus_second {
    grid-column: 2 / 4;
  }

  & label {
    color: rgb(102, 102, 102);
    font-size: 14px;
    font-weight: normal;
    padding-bottom: 12px;
  }
`

export const ProjectDashboardSpentTypeItem = styled(
  ProjectDashboardSpentTypeItemChild,
)`
  & a {
    text-decoration: none;
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    width: fit-content;
    color: #333333;
    font-weight: 600;

    & span {
      box-sizing: border-box;
      display: inline-flex;
      height: 1em;
      -webkit-box-pack: center;
      justify-content: center;
      padding: 0px 0.5em;
      position: relative;
      width: 2em;
      margin-right: 8px;

      & img.cus_first {
        position: absolute;
        width: 2em;
        height: 2em;
        bottom: -0.625em;
      }
      & img.cus_second {
        height: 1em;
        position: absolute;
        bottom: -0.125em;
      }
    }
  }

  & span.cus_quz_icon {
    padding-right: 0px;
    cursor: pointer;
    display: inline;
    & div {
      text-align: center;
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 16px;
      line-height: 16px;
      font-size: 12px;
      margin: 0px 4px;
      font-weight: 600;
      color: white;
      background-color: rgb(102, 102, 102);
      transition: background-color 200ms ease-in-out 0s;
    }
  }
`

export const ProjectDashboardPercentNumberItem = styled.div`
  text-align: right;
`

export const ProjectDashboardPercentBarItem = styled(
  ProjectDashboardPercentBarItemChild,
)`
  padding-right: 40px;

  & div {
    background-color: rgb(39, 174, 96);
    border-radius: 3px;
    display: inline-block;
    height: 6px;
    margin-left: 8px;
    margin-top: -3px;
    width: ${(props) => props.widthValue}%;
    vertical-align: middle;
  }
`

export const ProjectDashboardGraph = styled(ProjectDashboardGraphChild)`
  height: 100%;
  width: 100%;
  user-select: none;
  pointer-events: none;
  touch-action: none;
  position: relative;

  & img {
    max-width: 566px;
  }
`

export const ProjectDashboardMap = styled(ProjectDashboardMapChild)`
  width: 100%;
  margin-bottom: 20px;

  & a {
    text-decoration: underline;
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    width: fit-content;
    color: #333333;
    font-weight: 600;

    & img {
      width: 100%;
      border-radius: 5px;
      border: 1px solid #cccccc;
    }
  }
`

export const ProjectPortfolioUpdate = styled(ProjectPortfolioUpdateChild)`
  & div.cus_portfolio_update {
    display: flex;
    flex-direction: row;
    padding: 20px 0px;
    & img {
      margin: 8px 24px 0px 0px;
      border: 0.5px solid #999999;
      border-radius: 4px;
      width: 90px;
      height: 90px;
      object-fit: cover;
    }
    & div {
      & cite {
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.3;
        font-style: normal;
        color: #4d4d4d;
      }

      & p {
        @media (max-width: 720px) {
          font-size: 15px;
        }
        width: 100%;
        font-size: 16px;
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        line-height: 1.4;
        font-style: normal;
        margin: 4px 0px;
        font-weight: 700 !important;
      }
    }
  }
`

export const ProjectRecentSupporterContainer = styled.div`
  max-height: 400px;
  overflow-y: scroll;
`

export const ProjectRecentSupporterItem = styled(
  ProjectRecentSupporterItemChid,
)`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  position: relative;
  transition: background-color 0.3s ease-in-out 0s;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  padding: 0px 16px;

  & div.cus_avatar {
    height: 42px;
    width: 42px;
    flex-shrink: 0;
    border-radius: 100%;
    background-color: #fafafa;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-image: url(${(props) => props.imgSrc});
    background-size: cover;
  }

  & div.cus_suppoter {
    margin-left: 16px;
    padding-left: 6px;
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    padding-bottom: 16px;
    padding-top: 16px;
    flex-direction: column;

    & p {
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 10px;
    }
    & p.cus_first {
      color: #333333;
    }
    & p.cus_second {
      color: rgb(0, 0, 0, 0.3);
    }
  }

  & div.cus_amount {
    & div {
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      border-radius: 21px;
      background-color: #e8fcf0;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      color: #00836c;
      font-size: 16px;
      font-weight: 600;
      padding: 0px 10px;
      line-height: 26px;
    }
  }
`

export const ProjectPartnerOrganization = styled(
  ProjectPartnerOrganizationChild,
)`
  width: 100%;
  grid-column: 1 / 4 !important;

  & div.cus_partner_organization {
    @media (max-width: 720px) {
      padding: 0px 20px 65px;
    }
    border-top: 4px solid #cccccc;
    border-bottom: 4px solid #cccccc;
    padding: 45px 20px 65px;
    margin-top: 60px;
    box-sizing: border-box;

    & h2 {
      @media (max-width: 720px) {
        top: -28px;
        font-size: 18px;
      }
      position: relative;
      background-color: white;
      top: -80px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 5;
      padding: 0px 32px;
      display: inline-block;
      text-align: center;
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 1.4;
      font-style: normal;
    }

    & div.cus_partner_organization_img {
      @meida (max-width: 720px) {
        width: 70%;
      }
      width: 100%;
      margin: 0px auto;
      text-align: center;

      & img.cus_img_first {
        @media (max-width: 430px) {
          display: none;
        }
        max-width: 1100px;
        width: 100%;
        margin: auto;
      }
      & img.cus_img_second {
        @media (max-width: 430px) {
          display: block;
        }
        max-width: 1100px;
        width: 100%;
        margin: auto;
        display: none;
      }
    }
  }
`

const ProjectCarbonSkyItemChild = ({
  className,
  iconSrc,
  date,
  activeSentence,
  username,
  readUpdate,
}) => (
  <div className={className}>
    <Link>
      <div className="cus_carbon_sky_item_img">
        <div className="cus_carbon_sky_item_mail_icon">
          <img src={iconSrc} />
        </div>
      </div>
      <div className="cus_carbon_sky_item_content">
        <cite className="cus_carbon_sky_item_content_date">{date}</cite>
        <p className="cus_active_sentence">{activeSentence}</p>
        <div className="cus_active_username_container">
          <div></div>
          <cite>{username}</cite>
        </div>
        <p className="cus_active_read_update">{readUpdate}</p>
      </div>
    </Link>
  </div>
)

const ProjectCarbonSkyChild = ({
  className,
  imgSrc,
  title,
  subTitle,
  children,
}) => (
  <div className={className}>
    <div className="cus_carbon_sky_container">
      <div className="cus_carbon_sky_content">
        <img src={imgSrc} />
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </div>
      <div className="cus_carbon_sky_item_out">
        <div className="cus_carbon_sky_item_inner">{children}</div>
      </div>
    </div>
  </div>
)

export const ProjectCarbonSky = styled(ProjectCarbonSkyChild)`
  & div.cus_carbon_sky_container {
    margin: 32px auto;
    width: 100%;

    & div.cus_carbon_sky_content {
      @media (max-width: 720px) {
        padding: 80px 20px 0px;
      }
      color: #333333;
      max-width: 450px;
      margin: 12px auto auto;
      text-align: center;
      padding: 0px;

      & img {
        margin-bottom: 12px;
      }

      & h1 {
        @media (max-width: 720px) {
          font-size: 24px;
        }
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        font-size: 30px;
        font-weight: 600;
        line-height: 1.2;
        font-style: normal;
      }

      & h2 {
        @media (max-width: 720px) {
          font-size: 16px;
        }
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.4;
        font-style: normal;
        margin-bottom: 32px;
      }
    }

    & div.cus_carbon_sky_item_out {
      width: 100%;
      overflow: hidden;
      & div.cus_carbon_sky_item_inner {
        @media (max-width: 720px) {
          grid-template-columns: 1fr 1fr;
          width: 100%;
          padding: 0px;
        }
        @media (max-width: 430px) {
          grid-template-columns: none;
          padding: 0px 16px;
        }
        -webkit-box-align: stretch;
        align-items: stretch;
        width: auto;
        position: relative;
        display: grid;
        margin-top: 32px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: auto;
        padding: 0px;
      }
    }
  }
`

export const ProjectCarbonSkyItem = styled(ProjectCarbonSkyItemChild)`
  position: relative;
  box-sizing: border-box;
  padding: 0px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0, 0, 0, 0.15);
  width: auto;
  height: auto;
  margin: 12px;
  align-self: stretch;
  transition: all 100ms linear 0s;

  & a {
    text-decoration: none;
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    width: fit-content;
    color: #333333;
    font-weight: 600;

    & div.cus_carbon_sky_item_img {
      background-color: #ebebeb;
      width: auto;
      height: 160px;
      position: relative;
      background-image: url(${(props) => props.imgSrc});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 5px 5px 0px 0px;

      & div.cus_carbon_sky_item_mail_icon {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 25px;
        height: 25px;
        padding: 3px 5px;
        background-color: rgba(7, 47, 16, 0.72);
        border-radius: 27px;
      }
    }

    & div.cus_carbon_sky_item_content {
      margin-bottom: inherit;
      padding: 16px 20px 40px;

      & cite.cus_carbon_sky_item_content_date {
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.3;
        font-style: normal;
        opacity: 0.8;
      }
      & p.cus_active_sentence {
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        font-size: 15px;
        line-height: 1.4;
        font-style: normal;
        margin: 6px 0px 8px;
        font-weight: 600 !important;
      }

      & div.cus_active_username_container {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin: 8px 0px;

        & div {
          background-image: url(${(props) => props.avatar});
          margin-right: 6px;
          background-position: center center;
          background-size: cover;
          width: 24px;
          height: 24px;
          border-radius: 12px;
        }

        & cite {
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.3;
          font-style: normal;
        }
      }

      & p.cus_active_read_update {
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.4;
        font-style: normal;
        position: absolute;
        bottom: 16px;
        color: var(--link-blue);
      }
    }
  }
`

const ProjectStartTodayChild = ({
  className,
  imgSrc,
  title,
  subTitle,
  btnText,
}) => (
  <section className={className}>
    <img src={imgSrc} className="cus_start_first_img" />
    <img src={imgSrc} className="cus_start_second_img" />
    <img src={imgSrc} className="cus_start_third_img" />
    <div className="cus_start_content">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <Button>{btnText}</Button>
    </div>
  </section>
)

export const ProjectStartToday = styled(ProjectStartTodayChild)`
  width: 100%;
  position: relative;
  grid-column: 1 / 4 !important;

  & img.cus_start_first_img {
    @media (max-width: 720px) {
      top: -35px;
    }
    position: absolute;
    top: 150px;
    right: 20px;
    width: 150px;
    transform: rotate(-100deg);
  }

  & img.cus_start_second_img {
    @media (max-width: 720px) {
      top: -20px;
      width: 125px;
      transform: rotate(80deg);
    }
    position: absolute;
    left: 0px;
    top: 50px;
    width: 150px;
    transform: rotate(90deg);
  }

  & img.cus_start_third_img {
    position: absolute;
    top: 250px;
    left: 0px;
    width: 180px;
    transform: rotate(45deg);
  }

  & div.cus_start_content {
    @media (max-width: 720px) {
      padding-top: 100px;
      padding-bottom: 100px;
    }
    max-width: 725px;
    width: 90%;
    margin: 0px auto 60px;
    text-align: center;
    padding-top: 200px;
    padding-bottom: 200px;

    & h1 {
      @meida (max-width: 720px) {
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

    & h2 {
      font-family: Blanco, serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 1.4;
      font-style: normal;
      color: #666666;
      margin: 16px 0px 32px;
      @media (max-width: 720px) {
        font-size: 18px;
      }
    }
  }
`

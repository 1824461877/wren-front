import styled from "styled-components"
import { Button } from "primereact/button"

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

const ProjectHeaderItemChid = ({ className, text }) => (
  <div className={className}>
    <p>{text}</p>
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

const ProjectHeaderChild = ({ className, imgSrc, title, items }) => (
  <header className={className}>
    <img className="cus_approach_header_img1" src={imgSrc} />
    <img className="cus_approach_header_img2" src={imgSrc} />
    <h1>{title}</h1>
    <div className="cus_project_header">
      <div className="cus_project_inner_header">
        <div className="cus_project_header_flex">
          {Object.keys(items).map((key) => (
            <ProjectHeaderItem key={key} text={items[key]} />
          ))}
        </div>
      </div>
    </div>
  </header>
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

export const ProjectItemSection = styled.section`
  display: grid;
  grid-template-columns: 1fr min(1160px, 90%) 1fr;
  & > * {
    grid-column: 2 / auto;
  }
`

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
      box-shadow: 0 2px 5px 0 var(--box-shadow-color);
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

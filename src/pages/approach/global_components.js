import styled from "styled-components"
import { Button } from "primereact/button"

export const ApproachContainer = styled.div`
  background-color: white;
  width: 100%;
  margin: 0px;
  position: relative;
  overflow: hidden;
`

const ApproachHeaderChild = ({ className, imgSrc, title }) => (
  <header className={className}>
    <img className="cus_approach_header_img1" src={imgSrc} />
    <img className="cus_approach_header_img2" src={imgSrc} />
    <h1>{title}</h1>
  </header>
)

export const ApproachHeader = styled(ApproachHeaderChild)`
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
    margin: auto;
    max-width: 700px;
    width: 100%;
    display: block;
    font-size: 45px !important;
  }
`
const ApproachVideoSectionChild = ({ className, poster, videoSrc, imgSrc }) => (
  <section className={className}>
    <video autoPlay loop playsInline poster={poster}>
      <source src={videoSrc} type="video/mp4"></source>
      <img src={imgSrc} />
    </video>
  </section>
)

export const ApproachVideoSection = styled(ApproachVideoSectionChild)`
  grid-template-columns: 1fr min(700px, 90%) 1fr;
  display: grid;
  text-align: center;
  & > * {
    grid-column: 2 / auto;
  }

  & video {
    width: 100%;
  }
`

const ApproachNoSignalSectionChild = ({ className, title, content }) => (
  <section className={className}>
    <div className="cus_approach_nosignal_header">
      <div></div>
      <h1>{title}</h1>
    </div>
    <p>{content[0]}</p>
    <p>{content[1]}</p>
    <p>{content[2]}</p>
  </section>
)
export const ApproachNoSignalSection = styled(ApproachNoSignalSectionChild)`
  display: grid;
  grid-template-columns: 1fr min(600px, 90%) 1fr;
  margin-bottom: 96px;

  & > * {
    grid-column: 2 / auto;
  }

  & div.cus_approach_nosignal_header {
    text-align: center;
    border-bottom: 1px solid rgb(204, 204, 204);
    padding-bottom: 24px;
    margin-bottom: 24px;

    & div {
      margin: 16px auto;
    }

    & h1 {
      @media (max-width: 720px) {
        font-size: 24px;
      }
      font-size: 30px;
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      font-weight: 600;
      line-height: 1.2;
      font-style: normal;
    }
  }

  & p {
    line-height: 1.6;
    color: #333333;
    margin-bottom: 12px;
    font-family: Blanco, serif !important;
    font-size: 20px !important;
  }
`

const ApproachStepSectionChild = ({ className, children, title }) => (
  <section className={className}>
    <h1>{title}</h1>
    {children}
  </section>
)

export const ApproachStepSection = styled(ApproachStepSectionChild)`
  display: grid;
  grid-template-columns: 1fr min(600px, 90%) 1fr;
  margin-bottom: 96px;
  & > * {
    grid-column: 2 / auto;
  }
  & h1 {
    font-size: 30px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    font-style: normal;
    margin: 24px 0px 64px;
    text-align: center;
    @media (max-width) {
      font-size: 24px;
    }
  }
`

const ApproachStepChild = ({ className, imgSrc, title, subtitle, context }) => (
  <div className={className}>
    <div className="cus_approach_step">
      <div className="cus_approach_step_avatar">
        <div>
          <img src={imgSrc} />
        </div>
      </div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
    <p>{context}</p>
  </div>
)

export const ApproachStep = styled(ApproachStepChild)`
  & div.cus_approach_step {
    text-align: center;
    border-bottom: 1px solid rgb(204, 204, 204);
    padding-bottom: 24px;
    margin-bottom: 24px;

    & div.cus_approach_step_avatar {
      width: 105px;
      margin: 16px auto;
      & div {
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        flex-direction: row;
        display: flex;
        border-radius: 100%;
        background-color: ${(props) => props.imgColor};
        width: 105px;
        flex-shrink: 0;
        height: 105px;
        margin: 0px !important;

        & > * {
          height: 50%;
          opacity: 1;
          transition: all 500ms linear 0s;
        }
      }
    }

    & h1 {
      @media (max-width: 1000px) {
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

    & p {
      @media (max-width: 1000px) {
        font-size: 15px;
      }
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.4;
      margin-top: 12px;
      font-style: italic;
      color: rgb(102, 102, 102);
    }
  }
`
const ApproachStepFooterChild = ({ className, imgSrc, subtitle, content }) => (
  <div className={className}>
    <div className="cus_approach_stepfooter_img_container">
      <img src={imgSrc} />
      <div>
        <cite>{subtitle}</cite>
      </div>
    </div>
    <p>{content}</p>
  </div>
)
export const ApproachStepFooter = styled(ApproachStepFooterChild)`
  & div.cus_approach_stepfooter_img_container {
    margin: 40px 0px;
    & img {
      width: 100%;
    }
    & div {
      text-align: center;
      border-bottom: 1px solid rgb(204, 204, 204);
      margin-top: 24px;
      padding-bottom: 24px;
      & cite {
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.3;
        font-style: normal;
        color: rgb(102, 102, 102);
      }
    }

    & p {
      line-height: 1.6;
      color: #333333;
      margin-bottom: 12px;
      font-family: Blanco, serif !important;
      font-size: 20px !important;
    }
  }
`

const ApproachStepMiddleChild = ({ className }) => (
  <div className={className}>
    <div className="cus_step_middle">
      <div className="cus_step_middle_child1">
        <div className="cus_step_hole1">
          <div className="cus_step_hole2">
            <div className="cus_step_hole3"></div>
            <div className="cus_step_hole4">
              <div className="cus_step_hole4_1">
                <div></div>
              </div>
              <div className="cus_step_hole4_1">
                <div></div>
              </div>
              <div className="cus_step_hole4_1">
                <div></div>
              </div>
              <div className="cus_step_hole4_1">
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="cus_step_notify">
          <div className="cus_step_notify_1">
            <img src="approach/notify.svg" />
          </div>
          <div className="cus_step_notify_2">
            <p>You funded 🔥 clean cooking fuel enhanced mineral weathering</p>
          </div>
        </div>
      </div>
      {/* <div className="cus_step_middle_child2"></div> */}
    </div>
  </div>
)

export const ApproachStepMiddle = styled(ApproachStepMiddleChild)`
  margin: 40px 0px;
  & div.cus_step_middle {
    @media (max-width: 1000px) {
      height: 300px !important;
    }
    @media (max-width: 720px) {
      height: 320px !important;
    }
    @media (max-width: 430px) {
      height: 230px !important;
    }

    height: 360px !important;
    position: relative;
    object-fit: cover;
    border: 1px solid #072f10;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
    width: 100% !important;

    & div.cus_step_middle_child1 {
      margin-top: 0px;
      background-color: #ebebeb;
      border-radius: 5px;
      & div.cus_step_hole1 {
        opacity: 1;
        & div.cus_step_hole2 {
          background-image: url(https://projectwren.imgix.net/you-funded-tree-planting.png?auto=format%2Ccompress&q=35);
          background-position: center center;
          background-size: cover;
          position: relative;
          width: 100%;
          border-radius: 5px;
          & div.cus_step_hole3 {
            @media (max-width: 1000px) {
              height: 400px;
            }
            @media (max-width: 720px) {
              height: 350px;
            }
            @media (max-width: 430px) {
              height: 300px;
            }
            height: 400px;
            box-sizing: border-box;
          }
          & div.cus_step_hole4 {
            width: 100%;
            height: 40px;
            margin: 20px 0px 0px 20px;
            text-align: left;
            & div.cus_step_hole4_1 {
              @media (min-width: 430px) {
                max-width: 48px;
                width: 100%;
                margin: auto;
              }
              position: relative;
              height: 20px;
              width: auto;
              margin: 0px 8px;
              box-sizing: border-box;
              display: inline-block;
              cursor: pointer;
              & div {
                width: 12px;
                height: 12px;
                opacity: 0.3;
                background-color: white;
                border-radius: 15px;
                transaction: all 0.5s ease-out 0s;
              }
            }
          }
        }
      }

      & cus_step_notify {
        @media (max-width: 720px) {
          max-width: 300px;
        }
        color: white;
        position: absolute;
        bottom: 36px;
        right: 36px;
        padding: 16px;
        display: flex;
        align-items: flex-start;
        -webkit-box-pack: start;
        justify-content: flex-start;
        width: 100%;
        border-bottom: 10px solid #27ae60;
        box-sizing: border-box;
        max-width: 320px;
        width: 100%;
        margin: auto;
        background-color: white;
        color: rgba(255, 255, 255, 0.7);
        text-align: left;
        border-radius: 5px;

        & div.cus_step_notify_1 {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          flex-direction: row;
          width: 30px;
          height: 30px;
          border-radius: 30px;
          background: #27ae60;
          position: absolute;
          top: -14px;
          left: -14px;
        }

        & div.cus_step_notify_2 {
          p {
            @media (max-width: 1000px) {
              font-size: 16px;
            }
            font-size: 14px;
          }
        }
      }
    }

    & div.cus_step_middle_child2 {
      @media (max-width: 1000px) {
        max-width: 320px;
        color: white;
      }
      @media (max-width: 1000px) {
        max-width: 300px;
        color: rgba(255, 255, 255, 0.7);
      }
      color: white;
      max-width: 320px;
      width: 100%;
      margin: auto;
      position: absolute;
      bottom: 36px;
      right: 36px;
      padding: 16px;
      display: flex;
      align-items: flex-start;
      -webkit-box-pack: start;
      justify-content: flex-start;
      width: 100%;
      border-bottom: 10px solid var(--success-green);
      box-sizing: border-box;
      max-width: 300px;
      background-color: white;
      color: rgba(255, 255, 255, 0.7);
      text-align: left;
      border-radius: 5px;
    }
  }
`

export const ApproachMemberDescription = styled.p`
  line-height: 1.6;
  color: #333333;
  margin-bottom: 12px;
  font-family: Blanco, serif !important;
  font-size: 20px !important;
`
const ApproachThoughtChild = ({
  className,
  title,
  avatar,
  status,
  submitImprove,
  placeHolder,
  btnText,
  isOpenInput,
}) => (
  <section className={className}>
    <div className="cus_approach_thought">
      <div className="cus_approach_thought_content">
        <h3>{title}</h3>
        <div className="cus_row">
          {Object.keys(avatar).map((key) => (
            <ApproachThoughtTicket
              key={key}
              onClick={submitImprove}
              avatar={avatar[key]}
              status={status[key]}
            />
          ))}
        </div>
        <div className="cus_improve">
          <div className="cus_input_improve">
            <textarea placeholder={placeHolder}></textarea>
          </div>
          <Button
            label={btnText}
            severity="success"
            rounded
            icon="pi pi-arrow-right"
            iconPos="right"
          ></Button>
        </div>
      </div>
    </div>
  </section>
)

const ApproachThoughtTicketChild = ({ className, avatar, status, onClick }) => (
  <div className={className}>
    <div onClick={onClick}>{avatar}</div>
    <cite>{status}</cite>
  </div>
)

const ApproachThoughtTicket = styled(ApproachThoughtTicketChild)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  text-align: center;
  & div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: row;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    border: 1px solid #ebebeb;
    font-size: 27px;
    cursor: pointer;
    text-align: center;
  }

  & cite {
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 400;
    line-height: 1.3;
    font-style: normal;
    display: block;
    font-size: 8px;
    margin-top: 6px;
    color: #333333;
    cursor: pointer;
    text-align: center;
  }

  & div:hover {
    border: 1px solid #27ae60;
  }
`

export const ApproachThoughtSection = styled(ApproachThoughtChild)`
  display: grid;
  grid-template-columns: 1fr min(600px, 90%) 1fr;
  margin-bottom: 96px;
  & > * {
    grid-column: 2 / auto;
  }

  & div.cus_approach_thought {
    margin: auto;
    padding-top: 64px;
    text-align: center;

    & div.cus_approach_thought_content {
      border-radius: 6px;
      background: white;
      padding: 20px;
      text-align: center;
      width: 230px;
      & h3 {
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        line-height: 1.4;
        font-style: normal;
        max-width: 95%;
        margin: 4px auto 12px;
        font-size: 16px !important;
        font-weight: 600 !important;
      }

      & div.cus_row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 4px;
      }

      & div.cus_improve {
        display: ${(props) => (props.isOpenInput ? "block" : "none")};
        margin-top: 24px;
        text-align: left;
        & div.cus_input_improve {
          margin-bottom: 10px;
          width: 100%;
          & textarea {
            height: 80px;
            padding: 10px;
            position: relative;
            background-color: rgba(27, 60, 52, 0.08);
            font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serif;
            font-size: 14px;
            border-radius: 3px;
            border: transparent;
            transition: border 300ms ease-in-out 0s;
            width: 100%;
            outline: none;
            display: inline;
            color: rgb(27, 60, 52);
            line-height: 22px;
            margin-bottom: 10px;
            resize: vertical;
            margin-right: 0px;
          }
        }
      }
    }
  }
`

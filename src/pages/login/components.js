import styled from "styled-components"
import { Link } from "react-router-dom"

export const LoginContainer = styled.div`
  @media (max-width: 720px) {
    padding-top: 120px;
    min-height: calc(100vh - 120px);
  }
  width: 100%;
  margin: auto;
  text-align: center;
  background-color: white;
  padding-top: 160px;
  min-height: calc(100vh - 160px);
`

const LoginContainerInnerChild = ({ className, imgSrc, children }) => (
  <div className={className}>
    <img src={imgSrc} />
    {children}
  </div>
)

export const LoginContainerInner = styled(LoginContainerInnerChild)`
  width: 100%;
  max-width: 90%;
  margin: auto;
  padding-bottom: 64px;

  & img {
    width: 180px;
  }
`

const LoginInputHeaderChild = ({ className, title, subTitle, children }) => (
  <div className={className}>
    <h1>
      {title[0]}
      <br />
      {title[1]}
    </h1>
    <p>{subTitle}</p>
    {children}
  </div>
)

export const LoginInputHeader = styled(LoginInputHeaderChild)`
  @media (max-width: 430px) {
    max-width: 95%;
  }
  opacity: 1;
  max-width: 600px;
  margin: auto;
  width: 100%;

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
    margin: auto;
    text-align: center;
    overflow-wrap: break-word;
  }

  & p {
    @meida (max-width: 720px) {
      font-size: 15px;
    }
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    font-style: normal;
    text-align: center;
    margin-bottom: 24px;
  }
`

const LoginInputGroupChild = ({
  className,
  children,
  forgotLink,
  forgotText,
  setKeyDownStatus,
  validationText,
  labelText,
  valueText,
  typeText,
  onChange,
}) => (
  <div className={className}>
    <div className="cus_validation_text">{validationText}</div>
    <form autoComplete="on" noValidate>
      <div>
        <div className="cus_label_group">
          <h4>{labelText}</h4>
          {forgotLink !== "" && (
            <Link to={forgotLink}>
              <h4>{forgotText}</h4>
            </Link>
          )}
        </div>
        <input
          onKeyDown={setKeyDownStatus}
          onChange={onChange}
          type={typeText}
          name={typeText}
          autoComplete={typeText}
          placeholder={typeText}
          value={valueText}
        />
      </div>
      {children}
    </form>
  </div>
)

export const LoginInputGroup = styled(LoginInputGroupChild)`
  @media (max-width: 430px) {
    max-width: 95%;
  }
  margin: auto;
  max-width: 400px;
  width: 100%;

  & div.cus_validation_text {
    border: 1px solid #db3f40;
    color: #db3f40;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 12px;
    padding: 3px 5px;
    border-radius: 4px;
    text-align: center;
    width: fit-content;
    height: fit-content;
    margin: auto auto 20px;
    display: ${(props) =>
      props.validationText == "" || props.isKeyDown ? "none" : "block"};
  }

  & form {
    & div {
      box-sizing: border-box;
      margin-bottom: 10px;
      & div.cus_label_group {
        -webkit-box-pack: justify;
        justify-content: space-between;
        flex-direction: row;
        display: flex;
        & h4 {
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          font-weight: 600;
          font-size: 14px;
          text-align: left;
          padding-left: 5px;
          max-width: 300px;
          width: 100%;
          margin: 0px;
          padding-bottom: 8px;
        }

        & a {
          text-decoration: none;
          color: #3789c7;

          & h4 {
            font-weight: 500;
            font-size: 11pt;
          }
        }
      }
      & input {
        box-sizing: border-box;
        align-self: stretch;
        height: 44px;
        padding: 10px;
        position: relative;
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        font-size: 14px;
        border-radius: 3px;
        width: 100%;
        display: inline;
        margin-right: 0px;
        color: #1a1a1a;
        background-color: white;
        background-clip: padding-box;
        border: 1px solid #cccccc;
        transition: border 200ms ease-in-out 0s;
        outline: none;
        margin-bottom: 0px;
      }
    }
    & button {
      width: 100%;
      background-color: #27ae60 !important;
    }
  }
`

const LoginInputFooterChild = ({ className, helpText, linkURI, linkText }) => (
  <div className={className}>
    <p>{helpText}</p>
    <Link to={linkURI}>{linkText}</Link>
  </div>
)

export const LoginInputFooter = styled(LoginInputFooterChild)`
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
    margin-top: 24px;
    margin-bottom: 4px;
  }
  & a {
    text-decoration: none;
    color: rgb(55, 137, 199);
  }
`

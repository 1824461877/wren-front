import styled from "styled-components"

const RestPasswordContainerChild = ({ className, children, title }) => (
  <div className={className}>
    <h1>{title}</h1>
    {children}
  </div>
)

export const RestPasswordContainer = styled(RestPasswordContainerChild)`
  @media (max-width: 430px) {
    max-width: 90%;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (max-width: 720px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  max-width: 360px;
  width: 100%;
  padding-top: 150px;
  padding-bottom: 150px;
  width: 100%;
  text-align: center;
  margin: auto;

  & h1 {
    margin-bottom: 16px;
  }
`

const RestPasswordFormChild = ({
  className,
  children,
  title,
  valueText,
  validationText,
  onChange,
  setKeyDown,
  isKeyDown,
}) => (
  <form className={className}>
    <div className="cus_reset_input_container">
      <div className="cus_reset_input_inner_container">
        <p>{title}</p>
        <br />
        <div className="cus_reset_input">
          <input
            onKeyDown={setKeyDown}
            onChange={onChange}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="example@email.com"
            value={valueText}
          />
        </div>
        <div className="cus_reset_input_validation">{validationText}</div>
      </div>
    </div>
    <br />
    {children}
  </form>
)
export const RestPasswordForm = styled(RestPasswordFormChild)`
  & div.cus_reset_input_container {
    position: relative;
    box-sizing: border-box;
    margin: auto;
    padding: 0px;
    background-color: white;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    box-shadow: 0 2px 5px 0 grey;
    transition: transform 150ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s,
      box-shadow 80ms ease 0s;

    & div.cus_reset_input_inner_container {
      padding: 20px;
      margin-bottom: inherit;

      & p {
        text-align: center;
        max-width: 300px;
        margin: auto;
        width: 100%;
      }

      & div.cus_reset_input {
        box-sizing: border-box;
        margin-bottom: 10px;

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
          transition: border 200ms ease-in-out 0s;
          outline: none;
          margin-bottom: 0px;
          ${(props) =>
            props.validationText == "" || props.isKeyDown
              ? "border: 1px solid #333333;"
              : "border: 1px solid #db3f40;"}
        }
      }

      & div.cus_reset_input_validation {
        border: 1px solid #db3f40;
        color: #db3f40;
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        font-size: 12px;
        padding: 3px 5px;
        border-radius: 4px;
        text-align: center;
        width: fit-content;
        height: fit-content;
        margin: auto;
        display: ${(props) =>
          props.validationText == "" || props.isKeyDown ? "none" : "block"};
      }
    }
  }

  & button {
    width: 100%;
    color: white !important;
  }
`

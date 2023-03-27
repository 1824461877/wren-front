import styled from "styled-components"
import { Link } from "react-router-dom"

const PaymentContainerChild = ({ className, children, title }) => (
  <div className={className}>
    <h1>{title}</h1>
    {children}
  </div>
)

export const PaymentContainer = styled(PaymentContainerChild)`
  @media (max-width: 430px) {
    max-width: 90%;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (max-width: 720px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  width: 90%;
  padding-top: 150px;
  padding-bottom: 150px;
  text-align: center;
  margin: auto;

  & h1 {
    margin-bottom: 16px;
  }
`

const PaymentCardInfoChild = ({
  className,
  children,
  paymentMethod,
  validation,
  isValid,
}) => (
  <div className={className}>
    <div className="p-inputgroup mt-5">
      {children}
      {paymentMethod != "" && (
        <span className="p-inputgroup-addon">
          <img className="cus_payment_method_img" src={paymentMethod} />
        </span>
      )}
    </div>
    {isValid && <div className="cus_validation">{validation}</div>}
  </div>
)

export const PaymentCardInfo = styled(PaymentCardInfoChild)`
& div.cus_validation 
  margin: 10px 0;
  color: #f44336;
}
& img.cus_payment_method_img {
  height: 25px;
}
`

const PaymentVerificationCodeChild = ({
  className,
  children,
  validation,
  isValid,
}) => (
  <div className={className}>
    {children}
    {isValid && <div className="cus_validation">{validation}</div>}
  </div>
)

export const PaymentVerificationCode = styled(PaymentVerificationCodeChild)`
  & div.cus_validation {
    margin: 10px 7px;
    color: #f44336;
  }
`

const PaymentMethodContainerChild = ({ className, children, title, label }) => (
  <div className={className}>
    <h2>{title}</h2>
    <label>{label}</label>
    {children}
  </div>
)

export const PaymentMethodContainer = styled(PaymentMethodContainerChild)`
  display: ${(props) => (props.isShow ? "block" : "none")};
  position: relative;
  box-sizing: border-box;
  margin: 30px auto;
  padding: 0px;
  background-color: white;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 5px 0 grey;
  text-align: left;
  padding: 10px 20px;
  transition: transform 150ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s,
    box-shadow 80ms ease 0s;
`

const PaymentMethodItemChild = ({ className, title, imgSrc, method }) => (
  <div className={className}>
    <h3>{title}</h3>
    <div className="grid">
      {Object.keys(imgSrc).map((key) => (
        <span key={key} className="col-1">
          <Link onClick={() => method(imgSrc[key])}>
            <img src={imgSrc[key]} />
          </Link>
        </span>
      ))}
    </div>
  </div>
)

export const PaymentMethodItem = styled(PaymentMethodItemChild)`
  padding: 10px 20px;
  & span {
    border: 1px solid grey;
    border-radius: 3px;
    margin-right: 20px;
    margin-bottom: 5px;
    min-width: 70px;
    & img {
      width: 100%;
    }
  }

  & span:hover {
    box-shadow: 0 2px 5px 0 grey;
  }
`

const PaymentMethodInputType2Child = ({ className, label, children }) => (
  <div className={className}>
    <label>{label}</label>
    <div className="grid justify-content-between">{children}</div>
  </div>
)

export const PaymentMethodInputType2 = styled(PaymentMethodInputType2Child)`
  width: 70%;
  & label {
    display: block;
    margin: 20px 0;
  }
`

const PaymentVerificationQuzChild = ({ className, question }) => (
  <span className={"col-5 " + className}>
    <i className="pi pi-info-circle"></i>
    <span className="ml-1">{question}</span>
  </span>
)

export const PaymentVerificationQuz = styled(PaymentVerificationQuzChild)`
  & i {
    padding: 2px;
  }
`

const PaymentDescriptionChild = ({
  className,
  title,
  imgSrc,
  description,
  subTitle,
}) => (
  <div className={className}>
    <div className="flex cus_payment_description_header">
      <span className="flex-initial flex align-items-center justify-content-center">
        {title}
      </span>
      <img
        className="flex-initial flex align-items-center justify-content-center"
        src={imgSrc}
      />
    </div>
    <hr />
    <h2>{subTitle}</h2>
    <p>{description[0]}</p>
    <p>{description[1]}</p>
    <p>{description[2]}</p>
  </div>
)

export const PaymentDescription = styled(PaymentDescriptionChild)`
  margin-top: 20px;
  & div.cus_payment_description_header {
    & img {
      max-height: 50px;
    }
  }

  & p {
    line-height: 1.6;
    color: rgb(51, 51, 51);
    margin-bottom: 12px;
    font-family: Blanco, serif !important;
    font-size: 17px !important;
  }
`

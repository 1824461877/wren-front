import React, { useState } from "react"
import { InputText } from "primereact/inputtext"
import { Dropdown } from "primereact/dropdown"
import {
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodItem,
  PaymentMethodInputType2,
  PaymentVerificationQuz,
  PaymentDescription,
  PaymentCardInfo,
  PaymentVerificationCode,
} from "./components"
import { PAYMENT_UTILS } from "../../utils/paymentUtils"

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("")
  const [isShow, setShow] = useState(false)
  const [validation, setValidation] = useState([
    false,
    false,
    false,
    false,
    false,
  ])
  const [value, setValue] = useState(["", "", "", "", ""])

  const handleClickCard = (img) => {
    setPaymentMethod(img)
    setShow(true)
  }

  const handleChangeInput = (e) => {
    const i =
      e.target.getAttribute == undefined
        ? e.target.name
        : e.target.getAttribute("index")
    let newValidation = validation
    newValidation[parseInt(i)] = false
    setValidation(newValidation)
    let newValues = value.map((item, index) => {
      return parseInt(i) == index ? e.target.value : item
    })
    setValue(newValues)
  }
  const validateInput = (e) => {
    const i =
      e.target.getAttribute == undefined
        ? e.target.name
        : e.target.getAttribute("index")
    let newValidation = validation.map((item, index) => {
      return parseInt(i) == index
        ? e.target.value == "" || e.target.value == undefined
        : item
    })
    setValidation(newValidation)
    console.log(validation)
  }

  return (
    <PaymentContainer title={PAYMENT_UTILS.title}>
      <PaymentMethodContainer isShow={true} title={PAYMENT_UTILS.choose.title}>
        <PaymentMethodItem
          method={handleClickCard}
          title={PAYMENT_UTILS.choose.credit_card.label}
          imgSrc={PAYMENT_UTILS.choose.credit_card.img}
        />
        <PaymentMethodItem
          method={handleClickCard}
          title={PAYMENT_UTILS.choose.others.label}
          imgSrc={PAYMENT_UTILS.choose.others.img}
        />
      </PaymentMethodContainer>
      <PaymentMethodContainer
        label={PAYMENT_UTILS.selected.card_info.label}
        isShow={isShow}
        title={PAYMENT_UTILS.selected.title}
      >
        <PaymentCardInfo
          isValid={validation[0]}
          validation={PAYMENT_UTILS.selected.card_info.number.validation}
          paymentMethod={paymentMethod}
        >
          <InputText
            onChange={(e) => handleChangeInput(e)}
            value={value[0]}
            index={0}
            onBlur={(e) => validateInput(e)}
            className={validation[0] && "p-invalid"}
            placeholder={PAYMENT_UTILS.selected.card_info.number.placeholder}
          />
        </PaymentCardInfo>
        <PaymentCardInfo
          isValid={validation[1]}
          validation={PAYMENT_UTILS.selected.card_info.holder.validation}
          paymentMethod=""
        >
          <InputText
            onChange={(e) => handleChangeInput(e)}
            value={value[1]}
            index={1}
            onBlur={(e) => validateInput(e)}
            className={validation[1] && "p-invalid"}
            placeholder={PAYMENT_UTILS.selected.card_info.number.placeholder}
          />
        </PaymentCardInfo>
        <PaymentMethodInputType2
          label={PAYMENT_UTILS.selected.expiry_date.label}
        >
          <Dropdown
            name={2}
            value={value[2]}
            onChange={(e) => handleChangeInput(e)}
            onBlur={(e) => validateInput(e)}
            options={PAYMENT_UTILS.selected.expiry_date.month.value}
            placeholder={PAYMENT_UTILS.selected.expiry_date.month.placeholder}
            className={validation[2] ? "p-invalid col-5 ml-2" : "col-5 ml-2"}
          />
          <Dropdown
            name={3}
            value={value[3]}
            onChange={(e) => handleChangeInput(e)}
            onBlur={(e) => validateInput(e)}
            options={PAYMENT_UTILS.selected.expiry_date.year.value}
            placeholder={PAYMENT_UTILS.selected.expiry_date.year.placeholder}
            className={validation[3] ? "p-invalid col-5" : "col-5"}
          />
        </PaymentMethodInputType2>
        <PaymentMethodInputType2
          label={PAYMENT_UTILS.selected.verification.label}
        >
          <PaymentVerificationCode
            validation={PAYMENT_UTILS.selected.verification.validation}
            isValid={validation[4]}
          >
            <InputText
              onChange={(e) => handleChangeInput(e)}
              onBlur={(e) => validateInput(e)}
              index={4}
              value={value[4]}
              className={
                validation[4] ? "w-full p-invalid col-5 ml-2" : "col-5 ml-2"
              }
              placeholder="code"
            />
          </PaymentVerificationCode>
          <PaymentVerificationQuz question={PAYMENT_UTILS.selected.quiz} />
        </PaymentMethodInputType2>
        <PaymentDescription
          title={PAYMENT_UTILS.selected.description.title}
          subTitle={PAYMENT_UTILS.selected.description.sub_title}
          imgSrc={paymentMethod}
          description={PAYMENT_UTILS.selected.description.content}
        />
      </PaymentMethodContainer>
    </PaymentContainer>
  )
}

export default Payment

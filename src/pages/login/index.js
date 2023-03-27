import React, { useState } from "react"
import { Button } from "primereact/button"
import {
  LoginContainer,
  LoginContainerInner,
  LoginInputHeader,
  LoginInputGroup,
  LoginInputFooter,
} from "./components.js"
import { LOGIN_UTILS } from "../../utils/loginUtils.js"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validation, setValidation] = useState("")
  const [isKeyDown, setIsKeyDown] = useState(false)
  const [isEmailValidate, setEmailValidationStatus] = useState(false)

  const validatePassword = () => {
    setIsKeyDown(false)
    const PASSWORD_UTIL = LOGIN_UTILS.input_text.password
    if (password.length < 8) {
      setValidation(PASSWORD_UTIL.validation[0])
      return true
    }
    if (password !== PASSWORD_UTIL.tmp_password) {
      setValidation(PASSWORD_UTIL.validation[1])
      return true
    }
    setValidation("")
    return false
  }

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const VALIDATION_TXT = LOGIN_UTILS.input_text.email.validation
    setIsKeyDown(false)
    if (email === "") {
      setValidation(VALIDATION_TXT[0])
      return true
    }
    if (!emailRegex.test(email)) {
      setValidation(VALIDATION_TXT[1])
      return true
    }
    setValidation("")
    return false
  }
  const handleMailClick = (e) => {
    e.preventDefault()
    const isValid = validateEmail()
    if (!isValid) {
      setEmailValidationStatus(true)
    }
  }

  const handlePasswordClick = (e) => {
    e.preventDefault()
    const isValid = validatePassword()
    if (!isValid) {
      alert(`${email} has successfully log in!`)
    }
  }
  return (
    <LoginContainer>
      <LoginContainerInner imgSrc={LOGIN_UTILS.header_img}>
        {!isEmailValidate && (
          <LoginInputHeader
            title={[LOGIN_UTILS.header_title.email]}
            subTitle={LOGIN_UTILS.header_sub_title.email}
          >
            <LoginInputGroup
              setKeyDownStatus={() => setIsKeyDown(true)}
              isKeyDown={isKeyDown}
              onChange={(e) => setEmail(e.target.value)}
              validationText={validation}
              labelText={LOGIN_UTILS.input_text.email.label}
              valueText={email}
              typeText={LOGIN_UTILS.input_text.email.type}
            >
              <Button
                onClick={handleMailClick}
                label={LOGIN_UTILS.input_text.email.btnText}
                severity="success"
              />
            </LoginInputGroup>
            <LoginInputFooter
              helpText={LOGIN_UTILS.input_text.email.help_text}
              linkURI={LOGIN_UTILS.input_text.email.link_uri}
              linkText={LOGIN_UTILS.input_text.email.link_text}
            />
          </LoginInputHeader>
        )}
        {isEmailValidate && (
          <LoginInputHeader
            title={[LOGIN_UTILS.header_title.password, email]}
            subTitle={LOGIN_UTILS.header_sub_title.password}
          >
            <LoginInputGroup
              forgotLink={LOGIN_UTILS.input_text.password.link_uri}
              forgotText={LOGIN_UTILS.input_text.password.forgot_text}
              setKeyDownStatus={() => setIsKeyDown(true)}
              isKeyDown={isKeyDown}
              onChange={(e) => setPassword(e.target.value)}
              validationText={validation}
              labelText={LOGIN_UTILS.input_text.password.label}
              valueText={password}
              typeText={LOGIN_UTILS.input_text.password.type}
            >
              <Button
                onClick={handlePasswordClick}
                label={LOGIN_UTILS.input_text.password.btnText}
                severity="success"
              />
            </LoginInputGroup>
            <LoginInputFooter
              helpText={LOGIN_UTILS.input_text.password.help_text}
              linkURI={LOGIN_UTILS.input_text.password.link_uri}
              linkText={LOGIN_UTILS.input_text.password.link_text}
            />
          </LoginInputHeader>
        )}
      </LoginContainerInner>
    </LoginContainer>
  )
}

export default Login

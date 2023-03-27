import React, { useState } from "react"
import { Button } from "primereact/button"
import { RestPasswordContainer, RestPasswordForm } from "./component"
import { RESET_UTILS } from "../../utils/resetUtils"

function Reset() {
  const [email, setEmail] = useState("")
  const [isKeyDown, setIsKeyDown] = useState(false)
  const [validation, setValidation] = useState("")
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const VALIDATION_TXT = RESET_UTILS.validation
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
      alert("success")
    }
  }
  return (
    <RestPasswordContainer title={RESET_UTILS.title}>
      <RestPasswordForm
        title={RESET_UTILS.sub_title}
        valueText={email}
        onChange={(e) => setEmail(e.target.value)}
        setKeyDown={setIsKeyDown}
        isKeyDown={isKeyDown}
        validationText={validation}
      >
        <Button
          onClick={handleMailClick}
          label={RESET_UTILS.btn_text}
          severity="warning"
        />
      </RestPasswordForm>
    </RestPasswordContainer>
  )
}

export default Reset

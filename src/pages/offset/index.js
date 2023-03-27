import React, { useState } from "react"
import { RadioButton } from "primereact/radiobutton"
import { Dropdown } from "primereact/dropdown"
import { InputNumber } from "primereact/inputnumber"
import { Checkbox } from "primereact/checkbox"
import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"

import {
  OffsetOutContainer,
  OffsetHeader,
  OffsetBannerSection,
  OffsetDescriptionSection,
  OffsetMethodSection,
  OffsetDonationOneTimeSection,
  OffsetValidation,
} from "./components.js"

import { OFFSET_UTILS } from "../../utils/offsetUtils"
import { InputText } from "primereact/inputtext"

function Offset() {
  const [selectedCategory, setSelectedCategory] = useState(
    OFFSET_UTILS.one_time.donation.option.type[0],
  )
  const [checked, setChecked] = useState(false)
  const [input, setInput] = useState("")
  const [inputValidation, setInputValidation] = useState(false)
  const [checkValidation, setCheckValidation] = useState(false)

  const [inputDeparture, setInputDeparture] = useState("")
  const [inputDestination, setInputDestination] = useState("")
  const [despartureValidation, setDepartureValidation] = useState(false)
  const [destinationValidation, setDestinationValidation] = useState(false)
  const [passenger, setPassenger] = useState(
    OFFSET_UTILS.donate_itinerary.dropdown[0][0],
  )
  const [carbin, setCarbin] = useState(
    OFFSET_UTILS.donate_itinerary.dropdown[1][0],
  )
  const [ingredient, setIngredient] = useState(
    OFFSET_UTILS.donate_itinerary.type[0],
  )

  const navigate = useNavigate()
  const handleValidate = () => {
    setInputValidation(input == "")
    setCheckValidation(!checked)
    return !(input == "" || !checked)
  }
  const handleClick = () => {
    const isValid = handleValidate()
    isValid && navigate("/payment")
  }
  const handleInputChange = (value) => {
    setInput(value)
    setInputValidation(false)
  }
  const handleCheckBox = (value) => {
    setChecked(value)
    setCheckValidation(false)
  }

  const handleDesparture = (value) => {
    if (value !== "") {
      setInputDeparture(value)
      setDepartureValidation(false)
    }
  }
  const handleDestination = (value) => {
    if (value !== "") {
      setInputDestination(value)
      setDestinationValidation(false)
    }
  }
  const reset = () => {
    setInputDeparture("")
    setInputDestination("")
    setDepartureValidation(false)
    setDestinationValidation(false)
    setPassenger(OFFSET_UTILS.donate_itinerary.dropdown[0][0])
    setIngredient(OFFSET_UTILS.donate_itinerary.dropdown[1][0])
    setIngredient(OFFSET_UTILS.donate_itinerary.type[0])
  }

  const addNewFlight = () => {
    setDepartureValidation(inputDeparture === "")
    setDestinationValidation(inputDestination === "")
    if (!(inputDeparture === "" || inputDeparture === "")) {
      console.log("Go to flight")
    }
  }

  return (
    <OffsetOutContainer>
      <OffsetHeader
        title={OFFSET_UTILS.header_title}
        imgSrc={OFFSET_UTILS.header_img}
      />
      <OffsetDescriptionSection description={OFFSET_UTILS.description} />
      <OffsetBannerSection imgSrc={OFFSET_UTILS.banner_img} />
      <OffsetMethodSection
        imgSrc={OFFSET_UTILS.one_time.img}
        title={OFFSET_UTILS.one_time.title}
        description={OFFSET_UTILS.one_time.description}
      >
        <OffsetDonationOneTimeSection
          title={OFFSET_UTILS.one_time.donation.title}
        >
          <label className="cus_label">
            {OFFSET_UTILS.one_time.donation.option.label}:{" "}
          </label>
          <span>
            {OFFSET_UTILS.one_time.donation.option.type.map(
              (category, index) => (
                <div key={index} className="flex align-items-center">
                  <RadioButton
                    inputId={index}
                    name="category"
                    value={category}
                    onChange={(e) => setSelectedCategory(e.value)}
                    checked={selectedCategory === category}
                  />
                  <label
                    className="ml-2 cus_onetime_radio_label"
                    htmlFor={index}
                  >
                    {category}
                  </label>
                </div>
              ),
            )}
          </span>
          <label className="cus_label">
            {OFFSET_UTILS.one_time.donation.amount.label}:{" "}
          </label>
          <div>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                {selectedCategory ==
                OFFSET_UTILS.one_time.donation.option.type[0]
                  ? "HKD"
                  : "^"}
              </span>
              <InputNumber
                className={inputValidation && "p-invalid"}
                value={input}
                onChange={(e) => handleInputChange(e.value)}
                placeholder="价格"
              />
              <span className="p-inputgroup-addon">.00</span>
            </div>
            {inputValidation && (
              <OffsetValidation>
                {OFFSET_UTILS.one_time.donation.amount.validation_text}
              </OffsetValidation>
            )}
          </div>
          <div></div>
          <div className="cus_onetime_checkbox">
            <Checkbox
              className={checkValidation && "p-invalid"}
              onChange={(e) => handleCheckBox(e.checked)}
              checked={checked}
            ></Checkbox>
            <label className="ml-2 cus_onetime_checkbox_label">
              {OFFSET_UTILS.one_time.check_text}
            </label>
          </div>
        </OffsetDonationOneTimeSection>
        <Button
          onClick={() => handleClick()}
          label={OFFSET_UTILS.one_time.btn_text}
          severity="success"
        />
      </OffsetMethodSection>

      <OffsetMethodSection
        imgSrc={OFFSET_UTILS.donate_itinerary.img}
        title={OFFSET_UTILS.donate_itinerary.title}
        description={OFFSET_UTILS.donate_itinerary.description}
      >
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="flex align-items-center">
            <RadioButton
              inputId="ingredient1"
              name="pizza"
              value={OFFSET_UTILS.donate_itinerary.type[0]}
              onChange={(e) => setIngredient(e.value)}
              checked={ingredient === OFFSET_UTILS.donate_itinerary.type[0]}
            />
            <label htmlFor="ingredient1" className="ml-2">
              {OFFSET_UTILS.donate_itinerary.type[0]}
            </label>
          </div>
          <div className="flex align-items-center">
            <RadioButton
              inputId="ingredient2"
              name="pizza"
              value={OFFSET_UTILS.donate_itinerary.type[1]}
              onChange={(e) => setIngredient(e.value)}
              checked={ingredient === OFFSET_UTILS.donate_itinerary.type[1]}
            />
            <label htmlFor="ingredient2" className="ml-2">
              {OFFSET_UTILS.donate_itinerary.type[1]}
            </label>
          </div>
        </div>
        <InputText
          className={despartureValidation ? "p-invalid" : "mb-4"}
          value={inputDeparture}
          onChange={(e) => handleDesparture(e.value)}
          placeholder="出发地"
        />
        {despartureValidation && (
          <OffsetValidation>
            {OFFSET_UTILS.donate_itinerary.validation_text}
          </OffsetValidation>
        )}
        <InputText
          className={destinationValidation ? "p-invalid" : "mb-2"}
          value={inputDestination}
          onChange={(e) => handleDestination(e.value)}
          placeholder="目的地"
        />
        {destinationValidation && (
          <OffsetValidation>
            {OFFSET_UTILS.donate_itinerary.validation_text}
          </OffsetValidation>
        )}
        <div className="flex mt-3">
          <Dropdown
            name={0}
            value={passenger}
            onChange={(e) => setPassenger(e.target.value)}
            options={OFFSET_UTILS.donate_itinerary.dropdown[0]}
            placeholder={OFFSET_UTILS.donate_itinerary.placeholder[0]}
            className={
              "w-full mr-1 flex-initial flex align-items-center justify-content-center"
            }
          />
          <Dropdown
            name={1}
            value={carbin}
            onChange={(e) => setCarbin(e.target.value)}
            options={OFFSET_UTILS.donate_itinerary.dropdown[1]}
            placeholder={OFFSET_UTILS.donate_itinerary.placeholder[1]}
            className={
              "w-full ml-1 flex-initial flex align-items-center justify-content-center"
            }
          />
        </div>
        <div className="flex mt-3">
          <Button
            onClick={reset}
            label={OFFSET_UTILS.donate_itinerary.btn_text[0]}
            className="w-full mr-1"
            outlined
          ></Button>
          <Button
            onClick={addNewFlight}
            label={OFFSET_UTILS.donate_itinerary.btn_text[1]}
            className="w-full ml-1"
            severity="secondary"
          ></Button>
        </div>
      </OffsetMethodSection>
    </OffsetOutContainer>
  )
}

export default Offset

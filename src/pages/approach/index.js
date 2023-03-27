import React, { useState } from "react"

import {
  ApproachContainer,
  ApproachHeader,
  ApproachVideoSection,
  ApproachNoSignalSection,
  ApproachStepSection,
  ApproachStep,
  ApproachStepFooter,
  ApproachStepMiddle,
  ApproachMemberDescription,
  ApproachThoughtSection,
} from "./global_components"

import {
  MemberCountryNumberSection,
  MemberCountryNumberContent,
  MembersPictureGroup,
  MainMember,
  ClickMemberFace,
  MembersPicture,
} from "./member_component"

import { MEMBER_UTILS } from "../../utils/dashboardUtils"

import { APPROACH_TEXT } from "../../utils/approachUtils"

function Approach() {
  const [isOpenInput, openInput] = useState(false)
  const [isFocus, focusMember] = useState(() =>
    Array.from({ length: 20 }, () => false),
  )
  const [focusedMemberKey, setfocusMemberKey] = useState(0)
  const MEMBER_DESCRIPTION = process.env.REACT_APP_LANG_CHINESE
    ? MEMBER_UTILS.memberData.description.chinese
    : MEMBER_UTILS.memberData.description.english
  const MEMBER_CLICK = process.env.REACT_APP_LANG_CHINESE
    ? MEMBER_UTILS.memberClick.chinese
    : MEMBER_UTILS.memberClick.english
  function setfocusMember(e) {
    const ele = e.target
    const focusedKey = ele.getAttribute("name")
    let newFocusMember = [...isFocus]
    setfocusMemberKey(focusedKey)
    newFocusMember = newFocusMember.map((item, index) => {
      return (item = parseInt(focusedKey) === index ? true : false)
    })
    focusMember(newFocusMember)
  }
  return (
    <ApproachContainer>
      <ApproachHeader
        imgSrc={APPROACH_TEXT.header.img}
        title={APPROACH_TEXT.header.title}
      />
      <ApproachVideoSection
        poster={APPROACH_TEXT.video.poster}
        videoSrc={APPROACH_TEXT.video.videoSrc}
        imgSrc={APPROACH_TEXT.video.imgSrc}
      />
      <ApproachNoSignalSection
        title={APPROACH_TEXT.no_signal.title}
        content={APPROACH_TEXT.no_signal.content}
      ></ApproachNoSignalSection>
      <ApproachStepSection title={APPROACH_TEXT.step.title}>
        <ApproachStep
          imgSrc={process.env.PUBLIC_URL + APPROACH_TEXT.step.content[0].img}
          title={APPROACH_TEXT.step.content[0].title}
          subtitle={APPROACH_TEXT.step.content[0].sub_title}
          context={APPROACH_TEXT.step.content[0].content}
          imgColor={APPROACH_TEXT.step.content[0].img_color}
        ></ApproachStep>
        <ApproachStepMiddle />
        <ApproachStepFooter
          imgSrc={process.env.PUBLIC_URL + APPROACH_TEXT.step.footer[0].img}
          subtitle={APPROACH_TEXT.step.footer[0].sub_title}
          content={APPROACH_TEXT.step.footer[0].content}
        />
        <ApproachStep
          imgSrc={process.env.PUBLIC_URL + APPROACH_TEXT.step.content[1].img}
          title={APPROACH_TEXT.step.content[1].title}
          subtitle={APPROACH_TEXT.step.content[1].sub_title}
          context={APPROACH_TEXT.step.content[1].content}
          imgColor={APPROACH_TEXT.step.content[1].img_color}
        ></ApproachStep>
        <ApproachStepFooter
          imgSrc={APPROACH_TEXT.step.footer[1].img}
          subtitle={APPROACH_TEXT.step.footer[1].sub_title}
          content={APPROACH_TEXT.step.footer[1].content}
        />
        <ApproachStep
          imgSrc={process.env.PUBLIC_URL + APPROACH_TEXT.step.content[2].img}
          title={APPROACH_TEXT.step.content[2].title}
          subtitle={APPROACH_TEXT.step.content[2].sub_title}
          context={APPROACH_TEXT.step.content[2].content}
          imgColor={APPROACH_TEXT.step.content[2].img_color}
        ></ApproachStep>
        <MemberCountryNumberSection>
          <MemberCountryNumberContent title={APPROACH_TEXT.member.header}>
            <MembersPictureGroup>
              {Object.keys(MEMBER_UTILS.cssData.img).map((key) => (
                <MembersPicture
                  key={key}
                  index={key}
                  onClick={setfocusMember}
                  img={MEMBER_UTILS.cssData.img[key]}
                  left={MEMBER_UTILS.cssData.left[key]}
                  top={MEMBER_UTILS.cssData.top[key]}
                  radius={MEMBER_UTILS.cssData.radius[key]}
                  width={MEMBER_UTILS.cssData.width[key]}
                  height={MEMBER_UTILS.cssData.height[key]}
                  active={isFocus[key]}
                />
              ))}
            </MembersPictureGroup>
            <MainMember
              avartar={MEMBER_UTILS.cssData.img[focusedMemberKey]}
              name={MEMBER_UTILS.memberData.name[focusedMemberKey]}
              username={MEMBER_UTILS.memberData.username[focusedMemberKey]}
              description={MEMBER_DESCRIPTION[focusedMemberKey]}
            />
            <ClickMemberFace>{MEMBER_CLICK}</ClickMemberFace>
          </MemberCountryNumberContent>
        </MemberCountryNumberSection>
        <ApproachMemberDescription>
          {APPROACH_TEXT.member.content}
        </ApproachMemberDescription>
      </ApproachStepSection>
      <ApproachThoughtSection
        isOpenInput={isOpenInput}
        btnText={APPROACH_TEXT.thought.btn_text}
        placeHolder={APPROACH_TEXT.thought.placeholder}
        title={APPROACH_TEXT.thought.title}
        avatar={APPROACH_TEXT.thought.avatar}
        status={APPROACH_TEXT.thought.status}
        submitImprove={() => openInput(true)}
      />
    </ApproachContainer>
  )
}

export default Approach

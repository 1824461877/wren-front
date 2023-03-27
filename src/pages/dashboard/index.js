import React from "react"
import { DashboardSection, DashboardBackground } from "./global_components"

import { BlogSection, BlogInnerSection } from "./blog_comnponent"

import {
  MemberCountryNumberSection,
  MemberCountryNumberContent,
  MembersPictureGroup,
  MainMember,
  ClickMemberFace,
  MembersPicture,
} from "./member_component"

import {
  ClimateNumberContainer,
  ClimateNumber,
  ClimateOutContainer,
} from "./climate_component"

import {
  StepDescription,
  StepVideo,
  StepContainer1,
  StepContainer2,
  StepContainer,
  StepItem,
} from "./step_component"

import {
  StartClimate,
  StartClimateHeader,
  StartClimateBtn,
} from "./startclimate_component"

import {
  GoalSection,
  GoalItem,
  GoalContent,
  GoalContentItem,
  GoalImage,
  GoalHeaderTitle,
  GoalItemContainer,
} from "./goal_components"

import {
  ServiceOutContainer,
  ServiceInnerContainer,
  ServiceItem,
} from "./service_ad_component"

import {
  BannerOutContainer,
  BannerInnerContainer,
  BannerOutOverLayer,
  BannerImage,
  BannerInnerOverLayer,
  BannerMainContent,
} from "./banner_component"

import {
  WorkPartner,
  WorkSection,
  WorkPublicHeader,
  WorkPublicTypeContainer,
  WorkPublicType,
} from "./work_compoenent"

import { FAQHeader, FAQContainer, FAQItem } from "./faq_component"

import { PlaySection } from "./play_componenet"

import {
  BANNER_IMAGE_URI,
  BANNER_TEXT_CHINESE,
  BANNER_TEXT_ENGLISH,
  SERVICE_UTILS,
  CLIMATE_ULTILS,
  STEP_UTILS,
  START_CLIMATE_UTILS,
  MEMBER_UTILS,
  GOAL_UTILS,
  WORK_UTILS,
  FAQ_UTILS,
  PLAY_UTILS,
  BLOG_UTILS,
} from "../../utils/dashboardUtils"
import { useOutletContext } from "react-router-dom"
import { useState } from "react"

function Dashboard(props) {
  const { lang } = useOutletContext()
  const [isFocus, focusMember] = useState(() =>
    Array.from({ length: 20 }, () => false),
  )
  const [focusedMemberKey, setfocusMemberKey] = useState(0)
  const [faqOpen, setFaqOpen] = useState([false, false, false, false])
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
  const openFaqItem = (e) => {
    let newFaqOpenStatus = [...faqOpen]
    const name = e.target.getAttribute("name")
    newFaqOpenStatus = newFaqOpenStatus.map((item, index) => {
      return (item = index === parseInt(name) && !item)
    })
    setFaqOpen(newFaqOpenStatus)
  }
  const PLAY_CONTENT = process.env.REACT_APP_LANG_CHINESE
    ? PLAY_UTILS.chinese
    : PLAY_UTILS.english
  const MEMBER_DESCRIPTION = process.env.REACT_APP_LANG_CHINESE
    ? MEMBER_UTILS.memberData.description.chinese
    : MEMBER_UTILS.memberData.description.english
  const MEMBER_CLICK = process.env.REACT_APP_LANG_CHINESE
    ? MEMBER_UTILS.memberClick.chinese
    : MEMBER_UTILS.memberClick.english
  const START_CLIMATE_TITLE = process.env.REACT_APP_LANG_CHINESE
    ? START_CLIMATE_UTILS.title.chinese
    : START_CLIMATE_UTILS.title.english
  const CLIMATE_DESCRIPTION = process.env.REACT_APP_LANG_CHINESE
    ? CLIMATE_ULTILS.values.description.chinese
    : CLIMATE_ULTILS.values.description.english
  const START_CLIMATE_BUTTON = process.env.REACT_APP_LANG_CHINESE
    ? START_CLIMATE_UTILS.button.chinese
    : START_CLIMATE_UTILS.button.english
  const STEP_TITLE = process.env.REACT_APP_LANG_CHINESE
    ? STEP_UTILS.description.title.chinese
    : STEP_UTILS.description.title.english
  const STEP_DESCRIPTION = process.env.REACT_APP_LANG_CHINESE
    ? STEP_UTILS.description.desc.chinese
    : STEP_UTILS.description.desc.english
  const STEP_REF_TEXT = process.env.REACT_APP_LANG_CHINESE
    ? STEP_UTILS.description.ref_text.chinese
    : STEP_UTILS.description.ref_text.english
  const CLIMATE_TITLE = process.env.REACT_APP_LANG_CHINESE
    ? CLIMATE_ULTILS.title.chinese
    : CLIMATE_ULTILS.title.english
  const GOAL_HEADER_TITLE = process.env.REACT_APP_LANG_CHINESE
    ? GOAL_UTILS.header_title.chinese
    : GOAL_UTILS.header_title.english
  const GOAL_SUB_1 = process.env.REACT_APP_LANG_CHINESE
    ? GOAL_UTILS.sub1.chinese
    : GOAL_UTILS.sub1.english
  const GOAL_SUB_2 = process.env.REACT_APP_LANG_CHINESE
    ? GOAL_UTILS.sub2.chinese
    : GOAL_UTILS.sub2.english
  const GOAL_PICTURE_TITLE = process.env.REACT_APP_LANG_CHINESE
    ? GOAL_UTILS.picture_title.chinese
    : GOAL_UTILS.picture_title.english
  const GOAL_ITEM = process.env.REACT_APP_LANG_CHINESE
    ? GOAL_UTILS.item.chinese
    : GOAL_UTILS.item.english
  const GOAL_ICON1 = GOAL_UTILS.icons1
  const GOAL_ICON2 = GOAL_UTILS.icons1
  const SERVICE_TEXT =
    lang == process.env.REACT_APP_LANG_CHINESE
      ? SERVICE_UTILS.text_chinese
      : SERVICE_UTILS.text_english
  const BANNER_TEXT_LANGAUGE =
    lang == process.env.REACT_APP_LANG_CHINESE
      ? BANNER_TEXT_CHINESE
      : BANNER_TEXT_ENGLISH
  return (
    <DashboardBackground>
      <BannerOutContainer>
        <BannerInnerContainer>
          <BannerOutOverLayer />
          <BannerInnerOverLayer />
          <BannerMainContent title={props.title} text={BANNER_TEXT_LANGAUGE} />
          <BannerImage
            src={process.env.REACT_APP_PUBLIC_URL + BANNER_IMAGE_URI}
          />
        </BannerInnerContainer>
      </BannerOutContainer>
      <DashboardSection>
        <ServiceOutContainer>
          <ServiceInnerContainer className="flex">
            {Object.keys(SERVICE_TEXT).map((key) => {
              return (
                <ServiceItem
                  key={key}
                  className="flex-1 flex align-items-center justify-content-center"
                  index={SERVICE_UTILS.index[key]}
                  max_width={SERVICE_UTILS.max_width[key]}
                  text={SERVICE_TEXT[key]}
                  img={SERVICE_UTILS.img[key]}
                  link={SERVICE_UTILS.link[key]}
                  delay={SERVICE_UTILS.delay[key]}
                  fade={SERVICE_UTILS.fade[key]}
                />
              )
            })}
          </ServiceInnerContainer>
        </ServiceOutContainer>
        <ClimateOutContainer>
          <ClimateNumberContainer header={CLIMATE_TITLE}>
            {Object.keys(CLIMATE_DESCRIPTION).map((key) => (
              <ClimateNumber
                className="flex align-items-center justify-content-center"
                key={key}
                number={CLIMATE_ULTILS.values.numbers[key]}
                description={CLIMATE_DESCRIPTION[key]}
              />
            ))}
          </ClimateNumberContainer>
        </ClimateOutContainer>
        <>
          <StepContainer1>
            <StepVideo poster={STEP_UTILS.videos[0]} />
            <StepDescription
              number={STEP_UTILS.description.number[0]}
              imgSrc={STEP_UTILS.description.bracket}
              title={STEP_TITLE[0]}
              description={STEP_DESCRIPTION[0]}
              refer_text={STEP_REF_TEXT[0]}
              refer_img={STEP_UTILS.description.ref_img[0]}
            />
          </StepContainer1>
          <StepContainer2>
            <StepVideo poster={STEP_UTILS.videos[0]} />
            <StepDescription
              number={STEP_UTILS.description.number[1]}
              imgSrc={STEP_UTILS.description.bracket}
              title={STEP_TITLE[1]}
              description={STEP_DESCRIPTION[1]}
              refer_text={STEP_REF_TEXT[1]}
              refer_img={STEP_UTILS.description.ref_img[1]}
            />
          </StepContainer2>
          <StepContainer1>
            <StepVideo poster={STEP_UTILS.videos[0]} />
            <StepDescription
              number={STEP_UTILS.description.number[2]}
              imgSrc={STEP_UTILS.description.bracket}
              title={STEP_TITLE[2]}
              description={STEP_DESCRIPTION[2]}
              refer_text={STEP_REF_TEXT[2]}
              refer_img={STEP_UTILS.description.ref_img[2]}
            />
          </StepContainer1>
        </>
        <StepContainer className="grid">
          {Object.keys(WORK_UTILS.link).map((key) => (
            <StepItem
              className="md:col-4 col-12"
              key={key}
              linkName={WORK_UTILS.linkName}
              imgSrc={WORK_UTILS.img[key]}
              title={WORK_UTILS.title[key]}
              content={WORK_UTILS.content[key]}
              link={WORK_UTILS.link[key]}
            />
          ))}
        </StepContainer>
        <StartClimate>
          <StartClimateHeader>
            {START_CLIMATE_TITLE[0]} <br /> {START_CLIMATE_TITLE[1]}
          </StartClimateHeader>
          <StartClimateBtn>{START_CLIMATE_BUTTON}</StartClimateBtn>
        </StartClimate>
      </DashboardSection>
      <MemberCountryNumberSection>
        <MemberCountryNumberContent>
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
      <GoalItemContainer>
        <GoalSection>
          <GoalHeaderTitle title={GOAL_HEADER_TITLE}></GoalHeaderTitle>
          <GoalItem>
            <GoalImage
              pictureTitle={GOAL_PICTURE_TITLE.title[0]}
              pictureContent={GOAL_PICTURE_TITLE.description[0]}
            />
            <GoalContent
              title={GOAL_ITEM.title[0]}
              description={GOAL_ITEM.description[0]}
            >
              {Object.keys(GOAL_SUB_1.title).map((key) => (
                <GoalContentItem
                  key={key}
                  subTitle={GOAL_SUB_1.title[key]}
                  subDescription={GOAL_SUB_1.description[key]}
                  imgSrc={GOAL_ICON1[key]}
                ></GoalContentItem>
              ))}
            </GoalContent>
          </GoalItem>
          <GoalItem>
            <GoalContent
              title={GOAL_ITEM.title[1]}
              description={GOAL_ITEM.description[1]}
            >
              {Object.keys(GOAL_SUB_2.title).map((key) => (
                <GoalContentItem
                  key={key}
                  subTitle={GOAL_SUB_2.title[key]}
                  subDescription={GOAL_SUB_2.description[key]}
                  imgSrc={GOAL_ICON2[key]}
                ></GoalContentItem>
              ))}
            </GoalContent>
            <GoalImage
              pictureTitle={GOAL_PICTURE_TITLE.title[1]}
              pictureContent={GOAL_PICTURE_TITLE.description[1]}
            />
          </GoalItem>
        </GoalSection>
      </GoalItemContainer>
      <WorkSection>
        <WorkPartner />
        <WorkPublicHeader>
          <WorkPublicTypeContainer className="grid">
            {Object.keys(WORK_UTILS.link).map((key) => (
              <WorkPublicType
                className="md:col-4 col-12"
                key={key}
                linkName={WORK_UTILS.linkName}
                imgSrc={WORK_UTILS.img[key]}
                title={WORK_UTILS.title[key]}
                content={WORK_UTILS.content[key]}
                link={WORK_UTILS.link[key]}
              />
            ))}
          </WorkPublicTypeContainer>
        </WorkPublicHeader>
      </WorkSection>
      <br />
      <br />
      <br />
      <FAQHeader imgSrc={FAQ_UTILS.header_img}>
        <FAQContainer title={FAQ_UTILS.title}>
          {Object.keys(FAQ_UTILS.quz).map((key) => (
            <FAQItem
              faqOpen={faqOpen[key]}
              key={key}
              quz={FAQ_UTILS.quz[key]}
              answer={FAQ_UTILS.answers[key]}
              onClick={() => openFaqItem(event)}
              index={key}
            />
          ))}
        </FAQContainer>
      </FAQHeader>
      <PlaySection
        context={PLAY_CONTENT.context}
        btnName={PLAY_CONTENT.btnText}
      ></PlaySection>
      <BlogSection>
        <BlogInnerSection imgSrc={BLOG_UTILS.img} />
      </BlogSection>
    </DashboardBackground>
  )
}

export default Dashboard

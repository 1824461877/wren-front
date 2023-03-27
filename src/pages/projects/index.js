import React from "react"

import {
  ProjectHeader,
  ProjectSection,
  ProjectItem,
  ProjectItemSection,
  ProjectChooseContainer,
  ProjectStepImageSection,
  PorjectStep,
  ProjectItemHeader,
} from "./component"
import { PROJECT_UTILS } from "../../utils/projectUtils"

function Project() {
  return (
    <ProjectSection>
      <ProjectHeader
        items={PROJECT_UTILS.header.items}
        imgSrc={PROJECT_UTILS.header.img}
        title={PROJECT_UTILS.header.title}
      />
      <ProjectItemSection>
        <ProjectItemHeader
          imgSrc={PROJECT_UTILS.project_header[0].img}
          title={PROJECT_UTILS.project_header[0].title}
          subTitle={PROJECT_UTILS.project_header[0].description}
        />
        <ProjectItem
          btnColor="danger"
          reverse={false}
          tagImgSrc={PROJECT_UTILS.project[0][0].tagImgSrc}
          title={PROJECT_UTILS.project[0][0].title}
          description={PROJECT_UTILS.project[0][0].description}
          tags={PROJECT_UTILS.project[0][0].tags}
          imgSrc={PROJECT_UTILS.project[0][0].imgSrc}
          btnText={PROJECT_UTILS.project[0][0].btnText}
        />
        <ProjectItem
          btnColor="danger"
          reverse={true}
          tagImgSrc={PROJECT_UTILS.project[0][1].tagImgSrc}
          title={PROJECT_UTILS.project[0][1].title}
          description={PROJECT_UTILS.project[0][1].description}
          tags={PROJECT_UTILS.project[0][1].tags}
          imgSrc={PROJECT_UTILS.project[0][1].imgSrc}
          btnText={PROJECT_UTILS.project[0][1].btnText}
        />
        <ProjectItem
          btnColor="danger"
          reverse={false}
          tagImgSrc={PROJECT_UTILS.project[0][2].tagImgSrc}
          title={PROJECT_UTILS.project[0][2].title}
          description={PROJECT_UTILS.project[0][2].description}
          tags={PROJECT_UTILS.project[0][2].tags}
          imgSrc={PROJECT_UTILS.project[0][2].imgSrc}
          btnText={PROJECT_UTILS.project[0][2].btnText}
        />
        <ProjectItem
          btnColor="danger"
          reverse={true}
          tagImgSrc={PROJECT_UTILS.project[0][3].tagImgSrc}
          title={PROJECT_UTILS.project[0][3].title}
          description={PROJECT_UTILS.project[0][3].description}
          tags={PROJECT_UTILS.project[0][3].tags}
          imgSrc={PROJECT_UTILS.project[0][3].imgSrc}
          btnText={PROJECT_UTILS.project[0][3].btnText}
        />

        <ProjectItemHeader
          imgSrc={PROJECT_UTILS.project_header[1].img}
          title={PROJECT_UTILS.project_header[1].title}
          subTitle={PROJECT_UTILS.project_header[1].description}
        />
        <ProjectItem
          btnColor="success"
          reverse={true}
          tagImgSrc={PROJECT_UTILS.project[1][0].tagImgSrc}
          title={PROJECT_UTILS.project[1][0].title}
          description={PROJECT_UTILS.project[1][0].description}
          tags={PROJECT_UTILS.project[1][0].tags}
          imgSrc={PROJECT_UTILS.project[1][0].imgSrc}
          btnText={PROJECT_UTILS.project[1][0].btnText}
        />

        <ProjectItemHeader
          imgSrc={PROJECT_UTILS.project_header[2].img}
          title={PROJECT_UTILS.project_header[2].title}
          subTitle={PROJECT_UTILS.project_header[2].description}
        />
        <ProjectItem
          btnColor="help"
          reverse={false}
          tagImgSrc={PROJECT_UTILS.project[2][0].tagImgSrc}
          title={PROJECT_UTILS.project[2][0].title}
          description={PROJECT_UTILS.project[2][0].description}
          tags={PROJECT_UTILS.project[2][0].tags}
          imgSrc={PROJECT_UTILS.project[2][0].imgSrc}
          btnText={PROJECT_UTILS.project[2][0].btnText}
        />
        <ProjectItem
          btnColor="help"
          reverse={true}
          tagImgSrc={PROJECT_UTILS.project[2][1].tagImgSrc}
          title={PROJECT_UTILS.project[2][1].title}
          description={PROJECT_UTILS.project[2][1].description}
          tags={PROJECT_UTILS.project[2][1].tags}
          imgSrc={PROJECT_UTILS.project[2][1].imgSrc}
          btnText={PROJECT_UTILS.project[2][1].btnText}
        />

        <ProjectItemHeader
          imgSrc={PROJECT_UTILS.project_header[3].img}
          title={PROJECT_UTILS.project_header[3].title}
          subTitle={PROJECT_UTILS.project_header[3].description}
        />
        <ProjectItem
          btnColor="info"
          reverse={false}
          tagImgSrc={PROJECT_UTILS.project[3][0].tagImgSrc}
          title={PROJECT_UTILS.project[3][0].title}
          description={PROJECT_UTILS.project[3][0].description}
          tags={PROJECT_UTILS.project[3][0].tags}
          imgSrc={PROJECT_UTILS.project[3][0].imgSrc}
          btnText={PROJECT_UTILS.project[3][0].btnText}
        />
      </ProjectItemSection>
      <ProjectChooseContainer
        title={PROJECT_UTILS.img_step.title}
        subTitle={PROJECT_UTILS.img_step.sub_title}
      >
        {Object.keys(PROJECT_UTILS.img_step.imgSrc).map((key) => (
          <div key={key}>
            <ProjectStepImageSection
              imgSrc={PROJECT_UTILS.img_step.imgSrc[key]}
              description={PROJECT_UTILS.img_step.description[key]}
            />
            <PorjectStep
              index={key}
              title={PROJECT_UTILS.how_step.title[key]}
              description={PROJECT_UTILS.how_step.description[key]}
              items={PROJECT_UTILS.how_step.title}
              header={PROJECT_UTILS.img_step.title}
            />
          </div>
        ))}
      </ProjectChooseContainer>
    </ProjectSection>
  )
}

export default Project

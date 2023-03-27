import styled from "styled-components"

export const ClimateOutContainer = styled.div`
  margin-top: 65px;
`

const ClimateNumberContainerChild = ({ className, header, children }) => (
  <div className={className}>
    <h1>
      {header[0]}
      <em>{header[1]}</em>
      {header[2]}
    </h1>
    <div className="flex justify-content-center flex-wrap cus_climate_number">
      {children}
    </div>
  </div>
)

export const ClimateNumberContainer = styled(ClimateNumberContainerChild)`
  @media (min-width: 430px) {
    margin-bottom: 0px;
  }
  text-align: center;
  margin-bottom: 30px;

  & h1 {
    media (min-width: 1000px) {
      max-width: 700px;
      font-size: 40px !important;
    }

    @media (min-width: 720px) {
      max-width: 700px;
      font-size: 40px !important;
    }
    @media (min-width: 430px) {
      max-width: 100%;
      font-size: 26px;
      margin-bottom: 16px;
    }
    @media (min-width: 720px) {
      font-size: 30px;
    }
    font-family: Blanco, serif;
    font-weight: 600;
    line-height: 1.2;
    font-style: normal;
    max-width: 100%;
    font-size: 26px;
    margin-bottom: 16px;
  }
`

export const ClimateNumberChild = ({ className, number, description }) => (
  <div className={className}>
    <div className="cus_climate_inner">
      <h1>{number}</h1>
      <cite>{description}</cite>
    </div>
  </div>
)

export const ClimateNumber = styled(ClimateNumberChild)`
  animation: 0.5s ease 0s 1 normal none running animation-y5rijl;
  & div.cus_climate_inner {
    padding: 16px;
    & h1 {
      @media (min-width: 1000px) {
        font-size: 36px;
      }
      @media (min-width: 720px) {
        font-size: 36px;
      }
      @media (min-width: 430px) {
        font-size: 24px;
      }
      @media (min-width: 720px) {
        font-size: 30px;
      }
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      font-size: 24px;
      font-weight: 800;
      font-style: normal;
      color: #27ae60;
      margin: 0px;
      padding: 0px;
      line-height: 1 !important;
    }
  }
`

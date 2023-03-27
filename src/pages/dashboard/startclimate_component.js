import styled from "styled-components"
import { Link } from "react-router-dom"

export const StartClimate = styled.div`
  margin: 0px 0px 80px;
  text-align: center;
  position: relative;

  @media (min-width: 430px) {
    margin: 100px auto;
  }
`

export const StartClimateHeader = styled.h1`
  media (min-width: 1000px) {
    max-width: 680px;
    font-size: 40px !important;
  }
  @media (min-width: 720px) {
    max-width: 680px;
    font-size: 40px !important;
  }
  @media (min-width: 430px) {
    max-width: 100%;
    font-size: 28px;
  }
  @media (min-width: 720px) {
    font-size: 30px;
  }
  font-family: Blanco, serif;
  font-weight: 600;
  line-height: 1.2;
  font-style: normal;
  max-width: 100%;
  margin-bottom: 24px;
  font-size: 28px;
`
export const StartClimateBtn = styled(Link)`
  @media (min-width: 430px) {
    min-height: unset;
    min-width: unset;
  }
  border-radius: 4px;
  -webkit-box-align: center;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font: 500 22px / 1 Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  gap: 0.8125em;
  -webkit-box-pack: center;
  justify-content: center;
  opacity: 1;
  transition-property: opacity, color, background-color, border-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  min-height: 44px;
  min-width: 44px;
  background-color: rgb(247, 159, 34);
  border-color: rgb(247, 159, 34);
  color: white;
  box-shadow: 0 3px 2px 0 rgb(0, 0, 0, 0.15);
  padding: 13px 36px;
  text-decoration: none !important;
`

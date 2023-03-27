import styled from "styled-components"

const PlaySectionChild = ({ className, context, btnName }) => (
  <div className={className}>
    <img src="https://projectwren.imgix.net/mascot/wren-bird.png?auto=format%2Ccompress&q=35&w=600" />
    <h1>
      {context[0]}
      <br />
      {context[1]}
    </h1>
    <a href="/continue">{btnName}</a>
  </div>
)
export const PlaySection = styled(PlaySectionChild)`
  text-align: center;
  margin: 100px auto;

  & img {
    width: 200px;
  }

  & h1 {
    @media (min-width: 720px) {
      font-size: 30px;
    }
    font-family: Blanco, serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    font-style: normal;
    margin-bottom: 24px;
    width: 100%;
  }

  & a {
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
    box-shadow: 0 3px 2px 0 var(--box-shadow-color);
    padding: 13px 36px;
    text-decoration: none !important;
  }
`

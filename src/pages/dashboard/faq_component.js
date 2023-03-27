import styled from "styled-components"

const FAQHeaderChild = ({ className, children, imgSrc }) => (
  <div className={className}>
    <img src={imgSrc} />
    {children}
  </div>
)

export const FAQHeader = styled(FAQHeaderChild)`
  text-align: center;
  & img {
    width: 40px;
    margin-bottom: 16px;
  }
`

const FAQContainerChild = ({ className, children, title }) => (
  <div className={className}>
    <h1>{title}</h1>
    <br></br>
    {children}
  </div>
)

export const FAQContainer = styled(FAQContainerChild)`
  @media (max-width: 1000px) {
    width: 95%;
  }
  @media (max-width: 720px) {
    width: 90%;
  }
  max-width: 600px;
  width: 90%;
  margin: auto;

  & h1 {
    @media (max-width: 1000px) {
      font-size: 40px !important;
      line-height: 35px;
    }
    @media (max-width: 720px) {
      font-size: 28px;
      line-height: 35px;
    }
    font-family: Blanco, serif;
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 8px;
    line-height: 115% !important;
  }
`

const FAQItemChild = ({ className, quz, answer, onClick, index }) => (
  <div className={className} onClick={onClick}>
    <div>
      <div className="cus_faqitem_title" name={index}>
        <h4>{quz}</h4>
        <div className="symbol">
          <div className="symbol_content1"></div>
          <div className="symbol_content2"></div>
        </div>
      </div>
      <div className="cus_faqitem_answer">
        <div className="cus_faqitem_answer_inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  </div>
)

export const FAQItem = styled(FAQItemChild)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-align: left;

  & div.cus_faqitem_title {
    position: relative;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 16px;
    padding: 15px 0px;
    cursor: pointer;
    outline: none;
    display: flex;
    text-align: left;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    justify-content: space-between;

    & h4 {
      @media (min-width: 720px) {
        font-size: 20px;
        line-height: 28px;
      }
      @media (min-width: 430px) {
        font-size: 16px;
        line-height: 24px;
        padding-right: 8px;
      }
      font-size: 16px;
      line-height: 24px;
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      font-weight: 600;
      padding-right: 16px;
      margin: 0px !important;
    }
    & .symbol {
      position: relative;
      opacity: 0.7;
    }

    & .symbol div {
      position: absolute;
      background-color: #333333;
      width: 2px;
      height: 16px;
      left: 50%;
      margin-left: -2.5px;
      top: 50%;
      margin-top: -8px;
      transition: transform 200ms ease-in-out 0s;
    }

    & .symbol_content1 {
      transform: rotate(${(props) => (props.faqOpen ? "45deg" : "0")});
    }
    & .symbol_content2 {
      transform: rotate(${(props) => (props.faqOpen ? "-45deg" : "-90deg")});
    }
  }

  & div.cus_faqitem_answer {
    display: ${(props) => (props.faqOpen ? "block" : "none")};
    opacity: 1;
    height: 100%;

    & div {
      padding: 0px 15px;
    }
    & p {
      font-size: 20px;
      font-family: Blanco, serif;
      line-height: 1.4;
      padding-bottom: 26px;
    }
  }
`

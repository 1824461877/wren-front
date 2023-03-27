import styled from "styled-components"

export const FooterOutContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  padding-bottom: 16px;
  background-color: #072f10;
  border-top: 12px solid #00836c;

  @media (min-width: 720px) {
    margin-top: 80px;
  }

  @media (min-width: 430px) {
    margin-top: 40px;
  }
`

export const FooterContainer = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1000px;
  position: relative;
`

export const FooterMenuContent = styled.div`
  padding-top: 50px;
  width: 100%;

  & img.cus_footer_logo {
    width: 60px;
    height: 60px;
    margin-right: 6px;
    margin-top: 25px;

    @media (max-width: 941px) {
      display: none;
    }
  }
`

export const FooterNavContent = styled.div`
  margin-top: 45px;
  & a {
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin-top: 26px;
    opacity: 0.8;
    color: white;
  }

  & hr {
    margin-bottom: 16px;
    margin-top: 16px;
    opacity: 0.2;
  }
`

export const FooterMenuContainerChild = ({ className, children, title }) => {
  return className.search("cus_first") == -1 ? (
    <div className={className}>
      <h4>{title}</h4>
      {children}
    </div>
  ) : (
    <div className={className + " grid"}>
      <div className="col-9 cus_container">
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  )
}

export const FooterSocialItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;

  & a {
    text-decoration: none;
    font-weight: 400;
  }

  & img {
    filter: brightness(0) invert(1);
    width: 18px;
    height: 18px;
  }
`

export const FooterMenuContainer = styled(FooterMenuContainerChild)`
  text-align: left;
  font-weight: 600;
  font-size: 16px;
  color: white;
  &.cus_first div.cus_container {
    padding-right: 15px;
    max-width: 200px;
  }

  & a {
    text-decoration: none;
    font-weight: 400;
    border-radius: 3px;
    padding: 3px 7px;
    margin-left: -7px;
    text-align: left;
    color: white;
    font-size: 15px;
    margin-top: 10px;
    cursor: pointer;
    line-height: 1.42857;
    display: block;
    width: fit-content;
  }

  & p {
    opacity: 0.85;
    font-size: 14px;
    margin-top: 5px;
    color: white;
    margin-bottom: 5px;
    text-decoration: none;
    font-weight: 400;
  }
`
export const FooterNavBar = styled.div`
  text-align: left;
  font-size: 15px;
  color: white;

  & a {
    text-decoration: none;
    font-weight: 400;
    opacity: 0.8;
    color: white !important;
  }
`

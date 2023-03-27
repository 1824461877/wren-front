import styled from "styled-components"

export const MemberCountryNumberSection = styled.div`
  width: 100%;
  grid-column: 1 / 4 !important;
`

export const MemberCountryNumberContent = styled.div`
  @media (min-width: 430px) {
    padding: 60px;
  }
  position: relative;
  background: #fafafa;
  padding: 50px 0px;
`

export const MembersPictureGroup = styled.div`
  @media (min-width: 430px) {
    margin-top: 30px;
    margin-bottom: 0px;
  }
  position: relative;
  height: 400px;
  margin-top: -50px;
  margin-bottom: -175px;
  margin-right: 30px;
`

const MembersPictureChild = ({ className, onClick, children, index }) => {
  return (
    <div className={className} onClick={onClick} name={index}>
      {children}
    </div>
  )
}
export const MembersPicture = styled(MembersPictureChild)`
  position: absolute;
  cursor: pointer;
  background-size: cover;
  transition: all 0.2s ease-in-out 0s;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  background-image: url(${(props) => props.img});
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  ${(props) => props.active == true && "box-shadow: #27ae60 0px 0px 15px"};
`

const MainMemberChild = ({ className, name, username, description }) => (
  <div className={className}>
    <div className="cus_member_avatar"></div>
    <p className="cus_member_name">{name}</p>
    <p className="cus_member_username">{username}</p>
    <p className="cus_member_description">
      “<span>{description}</span>”
    </p>
  </div>
)

export const MainMember = styled(MainMemberChild)`
  @media (min-width: 430px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  background-color: white;
  border: 2px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  height: 350px;
  margin: 70px auto 0px;
  max-width: 100%;
  overflow: hidden scroll;
  padding: 25px;
  text-align: center;
  width: 350px;
  position: relative;
  left: 0px;
  top: 0px;
  z-index: 100;

  & div.cus_member_avatar {
    margin: 0px auto 12px;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background-image: url(${(props) => props.avartar});
    background-size: cover;
  }

  & p {
    @media (min-width: 720px) {
      font-size: 16px;
    }
    font-size: 15px;
    font-style: normal;
    line-height: 1.4;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }

  & p.cus_member_name {
    font-weight: 600 !important;
  }
  & p.cus_member_username {
    margin-bottom: 18px;
    opacity: 0.3;
    font-weight: 400 !important;
  }
`

export const ClickMemberFace = styled.p`
  @media (min-width: 720px) {
    font-size: 16px;
  }
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  margin-top: 8px;
  color: #999999;
  font-style: italic !important;
`

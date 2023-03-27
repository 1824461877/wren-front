import styled from "styled-components"

export const BlogSection = styled.div`
  width: 100%;
  grid-column: 1 / 4 !important;
`

const BlogInnerSectionChild = ({ className, imgSrc }) => (
  <div className={className}>
    <img className="cus_blog_img1" src={imgSrc[0]} loading="lazy" />
    <img className="cus_blog_img2" src={imgSrc[1]} loading="lazy" />
  </div>
)

export const BlogInnerSection = styled(BlogInnerSectionChild)`
  padding: 180px 0px;
  background-color: rgb(246, 247, 249);
  margin: 0px auto -80px;
  & img.cus_blog_img1 {
    @media (max-width: 720px) {
      display: none;
    }
    display: block;
    width: 90%;
    margin: 0px auto;
    max-width: 1200px;
  }

  & img.cus_blog_img2 {
    @media (max-width: 720px) {
      display: block;
    }
    margin: 0px auto;
    display: none;
    width: 100%;
  }
`

import styled from "styled-components"

export const DashboardBackground = styled.div`
  background-color: white;
`

export const DashboardSection = styled.div`
  display: grid;
  grid-template-columns: 1fr min(1000px, 90%) 1fr;
  margin-top: 42px;

  & * {
    grid-column: 2 / auto;
  }
`

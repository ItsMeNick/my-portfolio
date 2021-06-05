import styled from 'styled-components'
import { SideNav } from 'carbon-components-react/lib/components/UIShell'

const StyledSideNav = styled(SideNav)`
  background-color:#696969;
  @media (max-width: 640px) {
    display: none;
    
  }
`;

export default StyledSideNav;
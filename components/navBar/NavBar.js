import { Card } from "@mui/material";
import {
  Container,
  NavBarMenuIconWrapper,
  NavItem,
  NavItems,
  Wrapper,
} from "./NavBar.styles";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";

const NavBar = ({ setClick = () => {} }) => {
  return (
    <Wrapper>
      <Container>
        <Card>
          <NavBarMenuIconWrapper>
            <MenuIcon onClick={() => setClick(true)} />
          </NavBarMenuIconWrapper>
          <NavItems>
            <NavItem>
              <NotificationsNoneOutlinedIcon />
            </NavItem>
            <NavItem>
              <AccountBalanceWalletOutlinedIcon />
            </NavItem>
            <NavItem>
              <Person4OutlinedIcon />
            </NavItem>
          </NavItems>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default NavBar;

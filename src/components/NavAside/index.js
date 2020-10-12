import React from "react";
import styled from "styled-components";
import { UiButton } from "..";
import img_logo from "../../assets/images/img_logo.png";
import {icn_heart, icn_stethoscope, icn_message, icn_todo, icn_book, icn_help} from '../../assets/icons'

const NAV = [
  {
    id: 1,
    title: 'Профиль',
    icon: icn_heart,
    active: true
  },
  {
    id: 2,
    title: 'Врачи и клиники',
    icon: icn_stethoscope,
    active: false
  },
  {
    id: 3,
    title: 'Сообщения',
    icon: icn_message,
    active: false
  },
  {
    id: 4,
    title: 'Тестирование',
    icon: icn_todo,
    active: false
  },
  {
    id: 5,
    title: 'Полезно знать',
    icon: icn_book,
    active: false
  },
]

const NavAside = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo>Логотип</Logo>
        <NavList>
        {NAV.map((item, i) => {
          return (<ListItem key={i} className={`${item.active ? "active" : ""}`}>
            <ItemIcon>{item.icon}</ItemIcon>
            <ItemLink>{item.title}</ItemLink>
          </ListItem>)
        })}
        </NavList>
        <Button>
          <UiButton large className="btn">
            Подать заявку
          </UiButton>
        </Button>
      </Nav>
      <Copy>
        <CopyItem>
          <ItemIcon>{icn_help}</ItemIcon>
          <ItemLink>Профиль</ItemLink>
        </CopyItem>
        <CopyLogo src={img_logo} />
      </Copy>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #003b72;
  width: 190px;
  padding: 20px 0 15px;
  box-sizing: border-box;
  height: 100%;
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  margin-top: 18px;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 14px 20px;
  & + & {
    margin-top: 10px;
  }

  &.active {
    background-color: #fff;
    border-left: 3px solid #7761ff;
  }
`;

const CopyItem = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 20px;
`;

const ItemIcon = styled.div`
  .active & {
    path {
      fill: #7761ff;
    }
  }
`;

const ItemLink = styled.p`
  margin: 0 0 0 14px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  .active & {
    color: #7761ff;
  }
`;

const Button = styled.div`
  margin-left: 20px;
`;

const Logo = styled.p`
  margin: 0 0 0 20px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;

const Copy = styled.div``;

const CopyLogo = styled.img`
  margin-left: 20px;
`;

export default NavAside;

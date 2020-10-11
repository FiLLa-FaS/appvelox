import React from "react";
import styled from "styled-components";
import { UiButton } from "..";
// __ в названиях импортов это лишние. Это же не БЭМ. Тут одной черточки достатчно
import img__logo from "../../assets/images/img__logo.png";
import {icn__heart, icn__stethoscope, icn__message, icn__todo, icn__book, icn__help} from '../../assets/icons'

const NavAside = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo>Логотип</Logo>
        <NavList>
          {/* Пункты лучше убрать в массив. и по нему проходиться .map*/}
          <ListItem className="active">
            <ItemIcon>{icn__heart}</ItemIcon>
            <ItemLink>Профиль</ItemLink>
          </ListItem>
          <ListItem>
            <ItemIcon>{icn__stethoscope}</ItemIcon>
            <ItemLink>Врачи и клиники</ItemLink>
          </ListItem>
          <ListItem>
            <ItemIcon>{icn__message}</ItemIcon>
            <ItemLink>Сообщения</ItemLink>
          </ListItem>
          <ListItem>
            <ItemIcon>{icn__todo}</ItemIcon>
            <ItemLink>Тестирование</ItemLink>
          </ListItem>
          <ListItem>
            <ItemIcon>{icn__book}</ItemIcon>
            <ItemLink>Полезно знать</ItemLink>
          </ListItem>
        </NavList>
        <Button>
          <UiButton large className="btn">
            Подать заявку
          </UiButton>
        </Button>
      </Nav>
      <Copy>
        <CopyItem>
          <ItemIcon>{icn__help}</ItemIcon>
          <ItemLink>Профиль</ItemLink>
        </CopyItem>
        <CopyLogo src={img__logo} />
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

const Nav = styled.div``;

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

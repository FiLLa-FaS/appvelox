import React from "react";
import styled from "styled-components";
import img__profile from "../../assets/images/img__profile.png";
import {icn__magnifier, icn__bell, icn__eye, icn__check} from '../../assets/icons'

const Header = () => {
  return (
    <Wrapper>
      <Title>Мой профиль</Title>
      <Info>
        <Nav>
          <Icon>{icn__magnifier}</Icon>
          <Icon>{icn__bell}</Icon>
          <Icon>{icn__eye}</Icon>
        </Nav>
        <Profile>
          <ProfileImg src={img__profile} />
          <ProfileIcon>{icn__check}</ProfileIcon>
        </Profile>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 40px;
  background-color: #50caff;
`;

const Title = styled.h1`
  margin: 0;
  font-family: Rubik;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  color: #ffffff;
`;

const Info = styled.div`
  display: flex;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  & + & {
    margin-left: 20px;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 22px;
`;
const ProfileImg = styled.img`
  width: 45px;
  border-radius: 23px;
  padding: 1px;
  border: 1px solid #ffffff;
`;

const ProfileIcon = styled.div`
  margin-left: 10px;
`;

export default Header;

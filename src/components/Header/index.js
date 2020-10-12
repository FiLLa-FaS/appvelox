import React from "react";
import styled from "styled-components";
import img_profile from "../../assets/images/img_profile.png";
import {icn_magnifier, icn_bell, icn_eye, icn_check} from '../../assets/icons'

const Header = () => {
  return (
    <Wrapper>
      <Title>Мой профиль</Title>
      <Info>
        <Nav>
          <Icon>{icn_magnifier}</Icon>
          <Icon>{icn_bell}</Icon>
          <Icon>{icn_eye}</Icon>
        </Nav>
        <Profile>
          <ProfileImg src={img_profile} />
          <ProfileIcon>{icn_check}</ProfileIcon>
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

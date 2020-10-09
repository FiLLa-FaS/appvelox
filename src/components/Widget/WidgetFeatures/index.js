import React from "react";
import styled from "styled-components";
import { CardFeature } from "../..";
import {icn__info, icn__tubes, icn__file, icn__clock} from '../../../assets/icons'

const features = [
  {
    title: "Информация о пациенте",
    content: ['Ваши личные данные', 'Рекомендации врачей', 'История болезней'],
    icon: icn__info,
    active: true
  },
  {
    title: "Результаты анализов",
    content: ['Вы можете узнать здесь результаты своих анализов'],
    icon: icn__tubes,
    active: false
  },
  {
    title: "Добавить  информацию",
    content: ['Добавляйте в свою электронную медицинскую карту новые данные'],
    icon: icn__file,
    active: false
  },
  {
    title: "История приемов",
    content: ['Вся информация о полученных услугах за все время хранится здесь'],
    icon: icn__clock,
    active: false
  },
]

const WidgetFeatures = () => {
  return (
    <Wrapper>
    {features.map((feature, i) => {
          return <CardFeature key={i} feature={feature} />;
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 60px 0 20px;
  display: grid;
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 1fr);
  gap: 15px;
`;

export default WidgetFeatures;

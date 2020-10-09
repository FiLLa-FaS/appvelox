import React from "react";
import styled from "styled-components";
import { WidgetOrders, WidgetFeatures } from "./components";
import img__doctor from "./assets/images/img__doctor.png";

const orders = [
  {
    date: new Date("2020-10-08 19:00"),
    address:
      'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    doctorName: "Малушко Т. Н.",
    doctorImg: img__doctor,
    doctorCareer: "Хирургия",
  },
  {
    date: new Date("2020-10-08 14:00"),
    address:
      'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    doctorName: "Малушко Т. Н.",
    doctorImg: img__doctor,
    doctorCareer: "Хирургия",
  },
  {
    date: new Date("2020-10-07 16:00"),
    address:
      'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    doctorName: "Малушко Т. Н.",
    doctorImg: img__doctor,
    doctorCareer: "Хирургия",
  },
  {
    date: new Date("2020-10-09 16:00"),
    address:
      'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    doctorName: "Малушко Т. Н.",
    doctorImg: img__doctor,
    doctorCareer: "Хирургия",
  },
];

const sortedOrders = orders.sort(function compare(a, b) {
  var dateA = new Date(a.date);
  var dateB = new Date(b.date);
  return dateA - dateB;
});

function First() {
  return (
    <Wrapper>
      <Row>
        <Title>Записи на прием</Title>
        <WidgetOrders orders={sortedOrders} />
      </Row>
      <Row>
        <Title>Электронная карта</Title>
        <WidgetFeatures />
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Title = styled.h2`
  margin: 0;
  padding: 15px 0 15px 40px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const Row = styled.div`
  & + & {
    margin-top: 20px;
  }
`;

export default First;

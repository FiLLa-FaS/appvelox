import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Calendar, WidgetScroll } from "./components";
import img_doctor from "./assets/images/img_doctor.png";
import img_doctor2 from "./assets/images/img_doctor2.png";
import { icn_arr } from "./assets/icons";

const ORDERS = [
  {
    date: new Date("2020-10-08 19:00"),
    address:
      'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    doctorName: "Малушко Т. Н.",
    doctorImg: img_doctor,
    doctorCareer: "Хирургия",
  },
  {
    date: new Date("2020-10-08 14:00"),
    address:
      'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    doctorName: "Харьков В. С.",
    doctorImg: img_doctor2,
    doctorCareer: "Терапевтическое отделение",
  },
  {
    date: new Date("2020-10-07 16:00"),
    address:
      'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    doctorName: "Малушко Т. Н.",
    doctorImg: img_doctor,
    doctorCareer: "Хирургия",
  },
  {
    date: new Date("2020-10-09 16:00"),
    address:
      'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    doctorName: "Харьков В. С.",
    doctorImg: img_doctor2,
    doctorCareer: "Терапевтическое отделение",
  },
];

const sortedOrders = ORDERS.sort(function compare(a, b) {
  var dateA = new Date(a.date);
  var dateB = new Date(b.date);
  return dateA - dateB;
});



function ViewOrders() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [allOrders, setAllOrders] = useState(false);

  let currentOrders = sortedOrders.filter(
    (order) =>
      (order.date.getDate() === currentDate.getDate()) &
      (order.date.getMonth() === currentDate.getMonth()) &
      (order.date.getFullYear() === currentDate.getFullYear())
  );

  const onSelectDate = (value) => {
    setCurrentDate(value);
    setAllOrders(false);
  };

  const showOrders = () => {
    if(allOrders) {
      return sortedOrders
    } else return currentOrders
  }

  const showLink = () => {
    if(sortedOrders.length !== currentOrders.length) {
      return <OrdersLink onClick={() => setAllOrders(true)}>Показать все записи</OrdersLink>
    }
  }

  return (
    <Wrapper>
      <RowTitle>
        <NavLink to={"/"}>
          <Link>
            {icn_arr}
            <Title>Мои записи</Title>
          </Link>
        </NavLink>
      </RowTitle>
    
      <Grid>
      <ColumnScroll>
      {showLink()}
        <WidgetScroll orders={showOrders()} />
      </ColumnScroll>
      <ColumnCalendar>
        <Calendar onSelectDate={onSelectDate} orders={sortedOrders}/>
      </ColumnCalendar>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - 130px);
`;

const Title = styled.h2`
  margin: 0 0 0 15px;
  padding: 0;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: minmax(min-content, 505px) minmax(min-content, 573px);
  margin: 0 40px 20px 5px;
  gap: 40px;
`;

const ColumnCalendar = styled.div`
  height: 100%;
`;

const ColumnScroll = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrdersLink = styled.a`
align-self: flex-end;
  font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
text-decoration-line: underline;
color: #50CAFF;
cursor: pointer;
margin-bottom: 13px;
`;

const RowTitle = styled.div`
    display: flex;
    padding: 15px 0 15px 40px;

    a {
      text-decoration: none;
    }
`;

const Link = styled.div`
  display: flex;
    align-items: center;
`;

export default ViewOrders;

import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
// Используй date-fns для работы с датами.

const ReactCalendar = ({ orders, onSelectDate  }) => {

    const renderDay = (orders, date) => {

      // Вот это я тебе в аудиозаписи запишу
      const todayTasks = orders.filter(
        (order) =>
          (order.date.getDate() === date.date.getDate()) &
          (order.date.getMonth() === date.date.getMonth()) &
          (order.date.getFullYear() === date.date.getFullYear())).length

    return (<div className={`${todayTasks === 0 ? 'disabled' : ''}`}>
     <div className="cards-count">{todayTasks}</div>
    </div>)
  }

  return (
    <Wrapper>
      <Calendar className="calendar"
       onChange={onSelectDate} 
       tileContent={(date) => renderDay(orders, date)}></Calendar>
    </Wrapper>
  );
};

const Wrapper = styled.div`

.disabled {
  display: none;
}

.cards-count {
  position: absolute;
        bottom: 10px;
        right: 10px;
        width: 22px;
        height: 22px;
        background-color: #50caff;
        border-radius: 11px;
        color: #fff;
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
}
  .calendar {
    background-color: #7761ff;

    & * {
      outline: none;
    }

    .react-calendar__navigation * {
      background-color: transparent;
      border: none;
    }
    .react-calendar__month-view {
      padding: 0 10px 70px;
      background-color: #ebe7ff;
    }
    .react-calendar__month-view * {
      border: none;
    }
    .react-calendar__month-view__days {
      position: relative;

      .react-calendar__tile--active {
        border: 1.5px solid #50caff;
      }
      .react-calendar__tile--now {
        background-color: #ebe7ff;
      }
    }
    .react-calendar__month-view__days__day {
      position: relative;
      background-color: #fff;
      min-height: 63px;
      display: flex;
      padding: 10px 0 0 8px;
      border: 1.5px solid transparent;
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 20px;
      color: #000000;

      /* & abbr::before {
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: 22px;
        height: 22px;
        background-color: #50caff;
        content: "2";
        border-radius: 11px;
        color: #fff;
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
      } */

      &--neighboringMonth {
        background-color: #ebe7ff;
        color: rgba(0, 0, 0, 0.25);

        & abbr {
        display: none;
      }
      }
    }
    .react-calendar__month-view__weekdays {
      background-color: #ebe7ff;
      padding: 10px 0;

      &__weekday abbr {
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        text-decoration: none;
        display: flex;
        justify-content: center;
      }
    }
    .react-calendar__navigation {
      max-width: 155px;
      margin: 0 auto;
      padding: 20px 0;

      .react-calendar__navigation__label {
        pointer-events: none;

        &__labelText {
          font-family: Rubik;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 17px;
          color: #ffffff;
        }
      }

      .react-calendar__navigation__prev-button,
      .react-calendar__navigation__next-button {
        width: 14px;
        height: 14px;
        color: #fff;
      }
      .react-calendar__navigation__next2-button,
      .react-calendar__navigation__prev2-button {
        display: none;
      }
    }
  }
`;

export default ReactCalendar;

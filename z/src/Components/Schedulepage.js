import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";

export const SchedulePage = () => {
  const datafetch = async () => {
    await axios
      .get("http://localhost:8000/Zaiodata")
      .then((res) => {
        localStorage.setItem("studydata", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
  };

  var course = JSON.parse(localStorage.getItem("studydata"));

  datafetch();

  const search = useLocation().search;
  const hours = new URLSearchParams(search).get("Hour");
  const CommitMinute = hours * 60;

  function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
  }

  let database = [];
  let time = 0;
  let t = 1;

  // for loop  for time management

  for (let i = 0; i < course.length; i++) {
    const datee = new Date();
    const newDate = addDays(datee, t);

    let y = newDate.toISOString().split("T")[0];

    time = time + course[i].duration;

    let day = newDate.getDay();

    if (day != 0 && day != 6) {
      let data = {
        title: `${course[i].title}    (${course[i].duration} minute / ${course[i].type}  )`,
        date: y,
      };
      database.push(data);
    }

    if (time >= CommitMinute) {
      t = t + 1;
      time = 0;
    }
  }

  return (
    <div>
      <FullCalendar
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "today prev,next",
        }}
        showNonCurrentDates={false}
        fixedWeekCount={false}
        eventOrder={false}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        dayMaxEvents={4}
        events={database}
      />
    </div>
  );
};

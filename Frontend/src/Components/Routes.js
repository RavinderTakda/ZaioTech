import { Routes, Route } from "react-router-dom";
import { Enroll } from "./Enrollpage";
import { SchedulePage } from "./Schedulepage";

export const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Enroll />}>
        {" "}
      </Route>
      <Route path="/Schedulepage" element={<SchedulePage />}></Route>
    </Routes>
  );
};

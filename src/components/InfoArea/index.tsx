import * as C from "./styles";
import { formatCurrentMonth } from "../../helpers/dateFilter";

type Props = {
  curretMounth: string;
  onMonthChange: (newMonth: string) => void;
};

export const InfoArea = ({ curretMounth, onMonthChange }: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = curretMounth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = curretMounth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>◀️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(curretMounth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>▶️</C.MonthArrow>
        <C.ResumeArea></C.ResumeArea>
      </C.MonthArea>
    </C.Container>
  );
};

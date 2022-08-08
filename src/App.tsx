import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";

const App = () => {
  const [list, setList] = useState(items); //lista geral
  const [filteredList, setFilteredList] = useState<Item[]>([]); //lista filtrada
  const [curretMounth, setCurrentMounth] = useState(getCurrentMonth()); //mês atual
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, curretMounth));
  }, [list, curretMounth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount); 
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMounth(newMonth);
  };
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          curretMounth={curretMounth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* Ärea de inserção  */}

        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;

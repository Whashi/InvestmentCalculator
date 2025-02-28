import { useState } from "react";
import InputField from "./Components/InputField";
import Result from "./Components/Result";
import { calculateInvestmentResults } from "./util/investment";
import Header from "./Components/Header";

function App() {
  const [inputData, setinputData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1,
  });
  const inputIsValid = inputData.duration >= 1;
  const handleChange = (event) => {
    const newKey = Object.keys(event)[0];
    const newVal = event[newKey] ? event[newKey] : 0;
    setinputData((prevState) => ({
      ...prevState,
      // [newKey]: event[newKey]
      [newKey]: newVal,
    }));
  };

  const investmentData = calculateInvestmentResults(inputData);

  return (
    <>
      <Header />
      <InputField inputData={inputData} changeHandler={handleChange} />
      {inputIsValid ? (
        <Result data={investmentData} />
      ) : (
        <p className="center">Please input no less than 1 year for duration</p>
      )}
    </>
  );
}

export default App;

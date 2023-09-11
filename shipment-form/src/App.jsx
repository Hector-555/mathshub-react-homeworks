import React, { useState } from "react";
import "./App.css";
import SendingForm from "./SendingForm";
import PackagesList from "./PackagesList";

function App() {
  const [packList, setPackList] = useState([]);

  const addUserHandler = (
    senderName,
    senderPhone,
    senderAddress,

    addresseeName,
    addresseePhone,
    addresseeAddress,

    length,
    width,
    height,
    weight,

    insurance,
    typeOfSend
  ) => {
    setPackList((prevPackList) => [
      ...prevPackList,
      {
        senderName: senderName,
        senderPhone: senderPhone,
        senderAddress: senderAddress,

        addresseeName: addresseeName,
        addresseePhone: addresseePhone,
        addresseeAddress: addresseeAddress,

        length: length,
        width: width,
        height: height,
        weight: weight,
        insurance: insurance,
        typeOfSend: typeOfSend,

        id: Math.random().toString(),
      },
    ]);
  };

  return (
    <>
      <SendingForm onSendingForm={addUserHandler} />
      <PackagesList packList={packList} />
    </>
  );
}

export default App;

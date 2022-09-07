import { useEffect, useRef, useState } from "react";
import React from "react";

export function CarDetails({ initialData }) {
  const _formRef = useRef();
  const [flagReset, setFlagReset] = useState(true);

  function formSubmitHandler(event) {
    event.preventDefault();

    console.log("Car Model: ",event.target.elements.carModel.value);
    console.log("Year: ",event.target.elements.carYear.value);
    console.log("Color: ",event.target.elements.carColor.value);
  }

  useEffect(() => {
    _formRef.current.carModel.value = initialData.model;
    _formRef.current.carModel.focus();
    _formRef.current.carModel.select();
    _formRef.current.carColor.value = initialData.color;
    _formRef.current.carYear.value = initialData.year;

  }, [initialData]);

  function formDataReset(){
    if(flagReset){
        _formRef.current.carModel.value = "";
        _formRef.current.carColor.value = "#ffffff";
        _formRef.current.carYear.value = 1980;
        setFlagReset(false)
    }
  }

  return (
    <div>
      <form ref={_formRef} onSubmit={formSubmitHandler} onChange={formDataReset}>
        <label for="carModel"> Model: </label>
        <input name="carModel" />
        <label for="carYear"> Year: </label>
        <input name="carYear" type="number" min={1980} max={2022} />
        <label for="carColor"> Color: </label>
        <input name="carColor" type="color" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

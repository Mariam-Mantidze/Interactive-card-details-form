import styled from "styled-components";
import MobileBackground from "/images/bg-main-mobile.png";
import Card from "./Card";

export default function Form() {
  return (
    <FormComponent>
      <div>
        <label htmlFor="">Cardholder Name</label>
        <Input type="text" />
      </div>

      <div>
        <label htmlFor="">Card Number</label>
        <Input type="number" />
      </div>

      <div>
        <div>
          <label htmlFor="">Exp. Date (MM/DD)</label>
          <Input type="date" />
          <Input type="date" />
        </div>

        <div>
          <label htmlFor="">CVC</label>
          <Input type="number" />
        </div>
      </div>

      <button type="submit">Confirm</button>
    </FormComponent>
  );
}

const FormComponent = styled.form`
  margin-top: 110px;
  padding: 0 24px 45px;
  color: rgba(33, 9, 47, 1);
`;

const Input = styled.input``;

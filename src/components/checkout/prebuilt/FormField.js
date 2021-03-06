import styled from "@emotion/styled";
import React from 'react'
const FormFieldContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 15px;

  &:first-of-type {
    border-top: none;
  }
`;

const Label = styled.label`
  width: 20%;
  min-width: 70px;
  padding: 11px 0;
  color: #aaa;
  overflow: hidden;
  font-size: 4vw;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Input = styled.input`
  font-size: 4vw;
  width: 100%;
  padding: 11px 15px 11px 8px;
  color: #fff;
  border: none;
  background-color: transparent;
  animation: 1ms void-animation-out;

  &::placeholder {
    color: #87bbfd;
  }
`;

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <FormFieldContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} required />
    </FormFieldContainer>
  );
};

export default FormField;
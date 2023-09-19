import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 50px;
`;

export const FormGroup = styled.div`
  width: ${props => props.$width || 'auto'};
`;

export const Label = styled.label`
  display: block;
  color: var(--label-color);
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  border-radius: 14px;
  border: none;
  padding: 4px 18px 6px;
  font-size: 18px;
  line-height: 1.12;
  font-weight: 500;
  /* align-items: center; */
  background-color: var(--input-bg-color);
  outline: none;
  height: 48px;
`;

export const Input = styled.input.attrs({ type: 'tel' })`
  display: block;
  width: 100%;
  border-radius: 14px;
  border: none;
  padding: 14px 18px;
  font-size: 18px;
  line-height: calc(20 / 18);
  background-color: var(--input-bg-color);
  outline: none;
  height: 48px;

  + input {
    border-left: 1px solid var(--border-gray);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const MiliageContainer = styled.div`
  display: flex;
  background-color: var(--input-bg-color);
  border-radius: 14px;
`;

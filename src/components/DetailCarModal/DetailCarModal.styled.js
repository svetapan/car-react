import styled from 'styled-components';

export const ModalContainer = styled.div`
  max-width: 541px;
  padding: 40px;
  border-radius: 24px;
  background-color: #fff;
`;

export const CardImg = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 1/ 0.538;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
  background: #3470ff;
`;

export const CardTitle = styled.h3`
  display: flex;
  flex-wrap: wrap;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: #121417;
  margin: 0 0 8px;
  gap: 4px;
`;

export const MarkedText = styled.span`
  color: #3470ff;
`;

export const List = styled.div`
  overflow: hidden;
`;

export const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -7px;
  font-size: 12px;
  color: rgba(18 20 23 / 0.5);
`;

export const Element = styled.span`
  color: #121417;
`;

export const ListItem = styled.li`
  border-left: solid 1px rgba(18 20 23 / 0.1);
  padding: 0 6px;
  margin-bottom: 4px;

  &:last-child {
    border-right: 0;
    padding-right: 0;
  }
`;

export const Description = styled.p`
  font-size: 14px;
`;

export const Title = styled.h4`
  font-size: 14px;
  font-weight: medium;
`;

export const StyledTitle = styled.h4`
  font-size: 14px;
`;
export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #363535;
  gap: 8px;
  margin-bottom: 34px;
`;
export const RentalItem = styled.li`
  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
`;

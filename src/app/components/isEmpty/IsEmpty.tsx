import React from 'react';
import styled from 'styled-components';
import { ReactComponent as TaskListIcon } from '../../../assets/task-list-plain.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 3.5rem auto;
  background: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  padding: 7.375rem 0;
  @media (max-width: 648px) {
    margin: 24px;
  }
  & .title {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 0.889;
    margin-top: 1.375rem;
  }
  .subtitle {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.143;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.grey4};
  }
`;

const IsEmpty = () => {
  return (
    <Container>
      <TaskListIcon />
      <div className="title">Ooops… It’s empty here</div>
      <div className="subtitle">There are no products on the list</div>
    </Container>
  );
};

export default IsEmpty;

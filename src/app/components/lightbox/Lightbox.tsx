import React, { useContext } from 'react';
import styled from 'styled-components';
import { LightboxContext } from '../../../providers/LightboxContextProvider';
import { ReactComponent as CloseIcon } from '../../../assets/close.svg';
import { LightboxProps } from './Lightbox.types';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(26 27 29 / 90%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  & .lightbox {
    position: relative;
    display: grid;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.white};
    margin: 0 1.5rem;
    max-width: 640px;
    & img {
      width: 100%;
      height: auto;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
  }
  & .lightbox__button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.313rem;
    &:hover {
      background: ${({ theme }) => theme.white};
      border-radius: 0.25rem;
    }
  }
  & .lightbox__info {
    padding: 1.5rem 2rem;
  }
  & .lightbox__title {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.67;
    color: ${({ theme }) => theme.grey5};
    margin-bottom: 0.5rem;
  }
  & .lightbox__description {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.333;
    color: ${({ theme }) => theme.grey4};
  }
`;

const Lightbox = ({ setIsOpen }: LightboxProps) => {
  const { img, altAttr, name, description } = useContext(LightboxContext);

  const toggleIsOpen = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <div className="lightbox">
        <CloseIcon className="lightbox__button" onClick={toggleIsOpen} />
        <img src={img} alt={altAttr} />
        <div className="lightbox__info">
          <div className="lightbox__title">{name}</div>
          <div className="lightbox__description">{description}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Lightbox;

import styled from 'styled-components';

const text = '#ff6347'
const lightpink = '#fff0f0';
const pink= '#ffe9e9';
const darkpink= '#f9c4d2';
const pinkborder= '#b18597';
const pinkshadow = '#ffe3e2';

export const StyledBoton = styled.button`
    margin-bottom: 3rem;
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: 600;
    color: ${text};
    text-transform: uppercase;
    padding: 1.25em 2em;
    background: ${lightpink};
    border: 2px solid ${pinkborder};
    border-radius: 0.75em;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${darkpink};
      border-radius: inherit;
      box-shadow: 0 0 0 2px ${pinkborder}, 0 0.625em 0 0 ${pinkshadow};
      transform: translate3d(0, 0.75em, -1em);
      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }
    &:hover {
      background: ${pink};
      transform: translate(0, 0.25em);
      &::before {
        box-shadow: 0 0 0 2px ${pinkborder}, 0 0.5em 0 0 ${pinkshadow};
        transform: translate3d(0, 0.5em, -1em);
      }
    }
    &:active {
      background: ${pink};
      transform: translate(0em, 0.75em);
      &::before {
        box-shadow: 0 0 0 2px ${pinkborder}, 0 0 ${pinkshadow};
        transform: translate3d(0, 0, -1em);
    }
}

`

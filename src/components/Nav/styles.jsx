import styled from 'styled-components';

export default {
  Nav: styled.nav`
    background: #dd88ff;
    display: flex;
    align-items: center;
    height: 60px;

    ul {
      display: flex;
      padding: 0;
      margin: 0;

      li {
        list-style: none;

        a {
          color: #550300;
          text-decoration: none;
          padding: 1em;
          font-weight: bold;

          &:hover {
            color: #f34612;
          }
        }
      }
    }
  `
};
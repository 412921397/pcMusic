import styled from "styled-components";

export const DeatailSongsWrapper = styled.div`
  .songs {
    width: 199px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    margin-bottom: 20px;

    .img {
      width: 40px;
      height: 40px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

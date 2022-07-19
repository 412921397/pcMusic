import styled from "styled-components";

export const SingerMVWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .mvs-box {
    width: 138px;
    display: flex;
    flex-direction: column;
    margin: 15px 10px;

    img {
      width: 100%;
      height: 103px;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .text-nowrap {
      margin-top: 10px;
      color: #333;
    }
  }
`;

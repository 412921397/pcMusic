import styled from "styled-components";

export const DeatailSingerWrapper = styled.div`
  .singer {
    height: 180px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    margin-bottom: 20px;

    .singer-box {
      width: 55px;
      text-align: center;
      .img {
        width: 50px;
        height: 50px;
        &:hover {
          cursor: pointer;
        }
      }
      .singer-name {
        margin-top: 10px;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
`;

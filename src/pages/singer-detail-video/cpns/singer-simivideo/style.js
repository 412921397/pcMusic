import styled from "styled-components";

export const SingerSIMiVideoWrapper = styled.div`
  .introduction {
    display: flex;
    flex-direction: column;
    color: #999;
    font-size: 12px;
    margin-top: -4px;
    padding-bottom: 34px;
  }

  .recommend {
    display: flex;
    flex-direction: column;

    .info-box {
      display: flex;
      margin-bottom: 15px;

      img {
        width: 96px;
        height: 54px;
        &:hover {
          cursor: pointer;
        }
      }

      .info {
        display: flex;
        flex-direction: column;

        .title {
          color: #333;
          width: 30%;
        }

        span {
          width: 50%;
          margin-left: 10px;
          color: #999;
        }
      }
    }
  }
`;

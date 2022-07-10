import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;

  .left {
    display: flex;
    align-items: flex-end;

    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }

    .count {
      margin-bottom: 5px;
      margin-left: 20px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    .link {
      margin-right: 20px;

      i {
        display: inline-block;
        position: relative;
        top: 2px;
        width: 14px;
        height: 15px;
        margin-right: 2px;
        background-position: -34px -863px;
      }
      a {
        color: #4996d1;
      }
    }
    .count {
      color: #c20c0c;
    }
  }
`;

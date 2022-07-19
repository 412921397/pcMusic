import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  padding: 47px 30px 40px 39px;
`;

export const InfoWrapperTop = styled.div`
  margin-top: -20px;
  height: 333px;

  .btm {
    display: flex;
    align-items: flex-end;
    font-size: 24px;
    color: #333;
    h3 {
      margin-left: 10px;
      font-size: 14px;
      color: #999;
      line-height: 40px;
    }
  }

  img {
    width: 640px;
    height: 300px;
    object-fit: cover;
  }
`;

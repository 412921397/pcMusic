import styled from "styled-components";

export const SongsDetailWrapper = styled.div`
  .content {
    background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`;

export const SongsDetailLeft = styled.div`
  width: 710px;
`;

export const SongsDetailRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`;

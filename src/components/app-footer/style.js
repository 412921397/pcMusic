import styled from "styled-components";

export const AppFooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  color: #666;
  border: 1px solid #d3d3d3;

  .content {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;

  .link {
    a {
      color: #999;
    }
    .line {
      color: #999;
      margin: 0 10px;
    }
  }

  .copyright {
    span {
      margin-right: 0 15px;
    }
  }
`;

export const FooterRight = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 33px;
  /* width: 390px; */

  ul {
    display: flex;
    width: 390px;
  }
  .item {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* margin-right: 40px; */
    align-items: flex-start;

    .link {
      display: block;
      width: 50px;
      height: 45px;

      background-image: url(${require("@/assets/img/sprite_footer_02.png")});
      background-size: 110px 450px;
    }
    :nth-child(1) .link {
      background-position: -60px -368.5px;
    }
    :nth-child(2) .link {
      background-position: -60px -78px;
    }
    :nth-child(3) .link {
      background-position: 0 5px;
    }
    :nth-child(4) .link {
      background-position: -60px -37px;
    }
    :nth-child(5) .link {
      background-position: 0 -78px;
    }

    .title {
      margin-top: 5px;
      display: block;
      /* width: 52px; */
      width: 60px;
      height: 10px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png")});
      background-size: 150px 100px;
    }

    :nth-child(1) .title {
      background-position: 0 -77px;
    }
    :nth-child(2) .title {
      background-position: 0 -64px;
      margin-top: 6px;
      transform: translateX(5px);
    }
    :nth-child(3) .title {
      width: 50px;
      transform: translateX(3px);
      background-position: 0 102px;
      margin-top: 6px;
    }

    :nth-child(4) .title {
      background-position: 0 -38px;
      margin-top: 6px;
      transform: translateX(5px);
    }
    :nth-child(5) .title {
      background-position: 0 -150px;
      margin-top: 6px;
      transform: translateX(2px);
    }
  }
`;

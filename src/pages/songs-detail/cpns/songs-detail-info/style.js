import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  padding: 47px 30px 40px 39px;
`;

export const InfoLeft = styled.div`
  width: 206px;

  .image {
    width: 198px;
    height: 198xpx;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      width: 200px;
      height: 200px;
    }
    .cover {
      width: 206px;
      height: 205px;
      top: -4px;
      left: -4px;
      background-position: -140px -580px;
    }
  }
`;

export const InfoRight = styled.div`
  width: 414px;
  margin-left: 20px;

  .header {
    display: flex;
    align-items: center;
    i {
      display: inline-block;
      width: 54px;
      height: 24px;
      background-position: 0 -243px;
    }

    .title {
      font-size: 24px;
      font-weight: 400;
      margin-left: 10px;
    }
  }

  .singer {
    margin: 10px 0;
    display: flex;
    align-items: center;

    &-avatar {
      width: 40px;
      height: 40px;
    }
    &-iconUrl {
      width: 13px;
      height: 13px;
    }
    a {
      color: #0c73c2;
    }
    div {
      margin: 0 20px;
    }
  }

  .dec {
    .dec-info {
      display: flex;
      align-items: center;
      margin-top: 10px;

      span {
        text-align: left;
      }

      .tag {
        width: 70px;
        text-shadow: 0 1px #fdfdfd;
        background-position: right -27px;
        height: 22px;
        line-height: 22px;
        border: 1px solid #d8d8d8;
        margin-left: 20px;
        text-align: center;
        color: #777;
        border-radius: 11px;
        background-color: #f5f5f5;
        &:hover {
          cursor: pointer;
          background-color: #fdfdfd;
          text-decoration: none;
        }
      }
    }
  }
`;

import styled from "styled-components";

export const BannerWrapper = styled.div`
  background: url(${(props) => props.bgImage}) center/6000px;

  .banner {
    height: 270px;
    background-color: #f00;
    display: flex;
    position: relative;
  }

  .ant-carousel .slick-dots li button {
    width: 5px !important;
    height: 5px;
    border-radius: 50% !important;
    &:hover {
      background-color: #f00;
    }
  }
  .ant-carousel .slick-dots li.slick-active button {
    background-color: #f00;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`;

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png")});
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    top: 0;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left,
  .right {
    top: -25px;
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;

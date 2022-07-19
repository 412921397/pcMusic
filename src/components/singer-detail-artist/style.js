import styled from "styled-components";

export const SingerArtistWrapper = styled.div`
  width: ${(props) => props.width + "px"};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .singer-box {
  }

  .album-image {
    position: relative;
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${(props) => props.size + "px"};
      height: ${(props) => props.size + "px"};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${(props) => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${(props) => props.size + "px"};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .artist {
      color: #666;
    }
  }
`;

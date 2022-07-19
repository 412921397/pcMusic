/** 专辑封面播放量 */
export function getCount(count: number) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}

/** 剪切图片尺寸大小 */
export function getSizeImage(imgUrl: string, size?: number, size2?: number) {
  if (size2) {
    return `${imgUrl}?param=${size}y${size2}`;
  }
  return `${imgUrl}?param=${size}*${size}`;
}

/** 播放歌曲 */
export function getPlaySong(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

export function formatDate(time: number, fmt: string) {
  const date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  const o: any = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  let k: any;
  for (k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str: string) {
  return ("00" + str).substr(str.length);
}

export function formatMonthDay(time = 0) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time = 0) {
  return formatDate(time, "mm:ss");
}

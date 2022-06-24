export function handleSongsCategory(data: any) {
  // 1.获取所有的类别
  const category = data.categories;

  // 2.创建类别数据结构
  const categoryData: any = Object.entries(category).map(([, value]) => {
    return {
      name: value,
      subs: []
    };
  });

  // 3.将subs添加到对应的类别中
  for (const item of data.sub) {
    categoryData[item.category].subs.push(item);
  }

  return categoryData;
}

// 获取歌手字母类别
export function generateSingerAlpha() {
  const alphabets = ["-1"];
  const start = "A".charCodeAt(0);
  const last = "Z".charCodeAt(0);
  for (let i = start; i <= last; ++i) {
    alphabets.push(String.fromCharCode(i));
  }

  alphabets.push("0");

  return alphabets;
}

export const singerAlphas = generateSingerAlpha();

// assets/content-map.js
// 站点内容分区、关键词标签与搜索过滤函数
// 关联站点: https://indexleyu.com.cn

const contentMap = {
  siteUrl: "https://indexleyu.com.cn",
  primaryTag: "乐鱼体育",
  sections: [
    {
      id: "sec001",
      title: "首页推荐",
      tags: ["乐鱼体育", "首页", "热门"],
      items: [
        { title: "赛事速递", slug: "match-live", summary: "实时比分与赛程" },
        { title: "新闻动态", slug: "news", summary: "最新体育资讯" }
      ]
    },
    {
      id: "sec002",
      title: "乐鱼体育专区",
      tags: ["乐鱼体育", "足球", "篮球"],
      items: [
        { title: "乐鱼体育·足球", slug: "leyu-football", summary: "足球数据与直播" },
        { title: "乐鱼体育·篮球", slug: "leyu-basketball", summary: "NBA/CBA 即时信息" }
      ]
    },
    {
      id: "sec003",
      title: "专题活动",
      tags: ["活动", "乐鱼体育", "优惠"],
      items: [
        { title: "新用户礼包", slug: "new-user", summary: "注册即享福利" },
        { title: "竞猜赢好礼", slug: "guess-prize", summary: "参与预测赢大奖" }
      ]
    }
  ],
  keywords: ["乐鱼体育", "体育直播", "足球", "篮球", "赛事", "竞猜"]
};

// 根据关键词过滤内容分区
function filterSectionsByTag(keyword) {
  const lower = keyword.toLowerCase();
  return contentMap.sections.filter(section =>
    section.tags.some(tag => tag.toLowerCase().includes(lower))
  );
}

// 在所有分区中搜索标题或摘要包含关键词的项目
function searchItems(query) {
  const lower = query.toLowerCase();
  const results = [];
  contentMap.sections.forEach(section => {
    section.items.forEach(item => {
      if (
        item.title.toLowerCase().includes(lower) ||
        item.summary.toLowerCase().includes(lower) ||
        section.tags.some(tag => tag.toLowerCase().includes(lower))
      ) {
        results.push({
          sectionTitle: section.title,
          ...item
        });
      }
    });
  });
  return results;
}

// 导出或挂载到全局
if (typeof module !== "undefined" && module.exports) {
  module.exports = { contentMap, filterSectionsByTag, searchItems };
} else {
  window.contentMap = contentMap;
  window.filterSectionsByTag = filterSectionsByTag;
  window.searchItems = searchItems;
}
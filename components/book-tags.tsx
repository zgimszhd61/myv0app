'use client'

import React from 'react'
import Link from 'next/link'

interface Tag {
  name: string;
  count: number;
}

interface Category {
  name: string;
  tags: Tag[];
}

const categories: Category[] = [
  {
    name: "文学",
    tags: [
      { name: "小说", count: 7580551 },
      { name: "文学", count: 3110259 },
      { name: "外国文学", count: 2954358 },
      { name: "经典", count: 1841687 },
      { name: "中国文学", count: 1751271 },
      { name: "随笔", count: 1585947 },
      { name: "日本文学", count: 1319778 },
      { name: "散文", count: 949759 },
      { name: "村上春树", count: 536503 },
      { name: "诗歌", count: 522193 },
      { name: "童话", count: 415630 },
      { name: "名著", count: 411542 },
      { name: "儿童文学", count: 408763 },
      { name: "古典文学", count: 368162 },
      { name: "余华", count: 343866 },
      { name: "王小波", count: 302096 },
      { name: "当代文学", count: 285639 },
      { name: "杂文", count: 279594 },
      { name: "张爱玲", count: 236675 },
      { name: "外国名著", count: 170567 },
      { name: "鲁迅", count: 164211 },
      { name: "钱钟书", count: 150852 },
      { name: "诗词", count: 121407 },
      { name: "茨威格", count: 87305 },
      { name: "米兰·昆德拉", count: 67755 },
      { name: "杜拉斯", count: 49039 },
      { name: "港台", count: 11923 },
    ]
  },
  {
    name: "流行",
    tags: [
      { name: "漫画", count: 1766815 },
      { name: "推理", count: 1482352 },
      { name: "绘本", count: 1251007 },
      { name: "悬疑", count: 908915 },
      { name: "科幻", count: 879104 },
      { name: "东野圭吾", count: 874420 },
      { name: "青春", count: 832220 },
      { name: "言情", count: 633654 },
      { name: "推理小说", count: 548946 },
      { name: "奇幻", count: 469567 },
      { name: "日本漫画", count: 412085 },
      { name: "武侠", count: 404232 },
      { name: "耽美", count: 388051 },
      { name: "科幻小说", count: 332307 },
      { name: "网络小说", count: 296822 },
      { name: "三毛", count: 277119 },
      { name: "韩寒", count: 270754 },
      { name: "亦舒", count: 248751 },
      { name: "阿加莎·克里斯蒂", count: 246650 },
      { name: "金庸", count: 205897 },
      { name: "穿越", count: 179384 },
      { name: "安妮宝贝", count: 177772 },
      { name: "轻小说", count: 168930 },
      { name: "魔幻", count: 167072 },
      { name: "郭敬明", count: 159546 },
      { name: "青春文学", count: 154674 },
      { name: "几米", count: 122153 },
      { name: "J.K.罗琳", count: 120487 },
      { name: "幾米", count: 106212 },
      { name: "张小娴", count: 98710 },
      { name: "校园", count: 98827 },
      { name: "古龙", count: 89769 },
      { name: "高木直子", count: 80494 },
      { name: "沧月", count: 69184 },
      { name: "余秋雨", count: 65379 },
      { name: "王朔", count: 58746 },
    ]
  },
  {
    name: "文化",
    tags: [
      { name: "历史", count: 3506770 },
      { name: "心理学", count: 2236701 },
      { name: "哲学", count: 2014447 },
      { name: "社会学", count: 1472140 },
      { name: "传记", count: 1192599 },
      { name: "文化", count: 1143656 },
      { name: "艺术", count: 887628 },
      { name: "社会", count: 852896 },
      { name: "政治", count: 651376 },
      { name: "设计", count: 534548 },
      { name: "政治学", count: 421573 },
      { name: "宗教", count: 374062 },
      { name: "电影", count: 362406 },
      { name: "建筑", count: 360457 },
      { name: "中国历史", count: 359469 },
      { name: "数学", count: 349938 },
      { name: "回忆录", count: 296432 },
      { name: "思想", count: 255717 },
      { name: "人物传记", count: 239530 },
      { name: "艺术史", count: 226952 },
      { name: "国学", count: 214232 },
      { name: "人文", count: 201023 },
      { name: "音乐", count: 179313 },
      { name: "绘画", count: 173014 },
      { name: "戏剧", count: 171808 },
      { name: "西方哲学", count: 170307 },
      { name: "近代史", count: 145843 },
      { name: "二战", count: 136719 },
      { name: "军事", count: 121121 },
      { name: "佛教", count: 111418 },
      { name: "考古", count: 88412 },
      { name: "自由主义", count: 65771 },
      { name: "美术", count: 64380 },
    ]
  }
]

export default function BookTagsComponent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">豆瓣图书标签</h1>
      {categories.map((category) => (
        <div key={category.name} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{category.name}......</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {category.tags.map((tag) => (
              <Link
                key={tag.name}
                href={`/tag/${encodeURIComponent(tag.name)}`}
                className="text-blue-600 hover:underline"
              >
                {tag.name}({tag.count})
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
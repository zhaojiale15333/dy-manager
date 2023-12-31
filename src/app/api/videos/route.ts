import { NextResponse } from 'next/server'
import { writeJSONFile, readJSONFile } from '../../../../utils/store'

let data={
  "userInfo": {
    "school": {
      "name": "中央戏剧学院3",
      "department": null,
      "joinTime": null,
      "education": null,
      "displayType": 1
    },
    "id": "93864497380",
    "unique_id_modify_time": "1630393144",
    "unique_id": "10040050",
    "favoriting_count": 143,
    "avatar": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
    "province": "四川",
    "country": "中国",
    "birthday": "2002-01-01",
    "cover": "https://p3.douyinpic.com/obj/c8510002be9a3a61aad2?from=116350172",
    "following_count": "67",
    "follower_count": 235000,
    "aweme_count": "177000",
    "nickname": "我是小睿耶",
    "phone": "",
    "sex": "",
    "last_login_time": "1630423555",
    "create_time": "1630423555",
    "status": 1,
    "desc": "一个普普通通学表演的\n看到的人都能开开心心~~~~~~~~~~~~~",
    "is_private": 1
  },
  "my": [
    {
      "id": "13b462dd-8d81-4744-93ed-815941f4ed3e",
      "cover": "http://p6.douyinpic.com/img/tos-cn-p-0015/efebaff8e1df46928522e1ac5583d059~c5_300x400.jpeg?from=4257465056_large",
      "dynamic_cover": "http://p29.douyinpic.com/obj/tos-cn-p-0015/efebaff8e1df46928522e1ac5583d059?from=4257465056_large",
      "origin_cover": "http://p3.douyinpic.com/tos-cn-p-0015/d834cf36d4be462f92206543306ff362_1623571220~tplv-dy-360p.jpeg?from=4257465056&s=&se=false&sh=&sc=&l=2021083114303701021217008258017B39&biz_tag=feed_cover",
      "video": "http://api.amemv.com/aweme/v1/play/?video_id=v0300fg10000c32rloe8vall584jaad0&line=1&file_id=d6daaa72874445f5a71c2a671ec9abd4&sign=62621a8cd9f89bab74fb31daa201e148&is_play_url=1&source=PackSourceEnum_PUBLISH",
      "video_data_size": 8569489,
      "duration": 148612,
      "desc": "几分钟看科幻片《徐福》 #我的观影报告  #抖音电影1",
      "allow_download": 1,
      "allow_duet": 0,
      "allow_react": 0,
      "allow_music": 1,
      "allow_douplus": 1,
      "allow_share": 1,
      "digg_count": "567",
      "comment_count": 0,
      "download_count": 0,
      "play_count": 0,
      "share_count": 0,
      "forward_count": 0,
      "collect_count": 0,
      "sort": 24,
      "is_top": 0,
      "city": "350100",
      "musicId": "286f9f80-d497-4914-a5be-65686916e3fe",
      "create_time": "1630391775",
      "creator_id": "54884802577",
      "status": 1,
      "topics": [
        {
          "id": "41821c6d-e14f-47f1-a391-f0b1f42afbe1",
          "name": "抖音电影",
          "creator_id": "54884802577",
          "create_time": "1630391758",
          "status": 1
        },
        {
          "id": "c10178eb-441f-4dc7-93b6-eaae1b6248cc",
          "name": "我的观影报告",
          "creator_id": "54884802577",
          "create_time": "1630391758",
          "status": 1
        }
      ],
      "music": {
        "id": "8ce2cb26-4772-4c7b-91d9-a2580c667c21",
        "cover": "http://p3.douyinpic.com/aweme/100x100/85f000239e43c3c985b5.jpeg?from=116350172",
        "mp3": "http://sf6-cdn-tos.douyinstatic.com/obj/ies-music/6995889105167076132.mp3",
        "title": "@喵嗷污说电影创作的原声",
        "creator_id": "54884802577",
        "create_time": "1630391758",
        "status": 1
      }
    },
    {
      "id": "1f6871da-73ab-40cc-9481-37ad83b63bde",
      "cover": "http://p3.douyinpic.com/img/tos-cn-p-0015/ba34a7304d6e44cfb159b838e1a6c980~c5_300x400.jpeg?from=4257465056_large",
      "dynamic_cover": "http://p3.douyinpic.com/obj/tos-cn-p-0015/ba34a7304d6e44cfb159b838e1a6c980?from=4257465056_large",
      "origin_cover": "http://p26.douyinpic.com/tos-cn-p-0015/25898d01cf9c44c2ae63874546d75640_1623570870~tplv-dy-360p.jpeg?from=4257465056&s=&se=false&sh=&sc=&l=2021083114303701021217008258017B39&biz_tag=feed_cover",
      "video": "http://api.amemv.com/aweme/v1/play/?video_id=v0d00fg10000c32rhslhtod769sv81r0&line=1&file_id=b16315d063594519a6b9102905da92a7&sign=eef97e748e50854547d9cd10b29e2ead&is_play_url=1&source=PackSourceEnum_PUBLISH",
      "video_data_size": 10901859,
      "duration": 188250,
      "desc": "科学家为永生改造人类基因，结果创造出能力逆天的新物种完虐人类 #我的观影报告",
      "allow_download": 1,
      "allow_duet": 0,
      "allow_react": 0,
      "allow_music": 1,
      "allow_douplus": 1,
      "allow_share": 1,
      "digg_count": 24,
      "comment_count": 0,
      "download_count": 0,
      "play_count": 0,
      "share_count": 0,
      "forward_count": 0,
      "collect_count": 0,
      "sort": 25,
      "is_top": 0,
      "city": "350100",
      "musicId": "5ce6dd54-62eb-46d4-8d71-40b3776bee50",
      "create_time": "1630391775",
      "creator_id": "54884802577",
      "status": 1,
      "topics": [
        {
          "id": "c10178eb-441f-4dc7-93b6-eaae1b6248cc",
          "name": "我的观影报告",
          "creator_id": "54884802577",
          "create_time": "1630391758",
          "status": 1
        }
      ],
      "music": {
        "id": "8ce2cb26-4772-4c7b-91d9-a2580c667c21",
        "cover": "http://p3.douyinpic.com/aweme/100x100/85f000239e43c3c985b5.jpeg?from=116350172",
        "mp3": "http://sf6-cdn-tos.douyinstatic.com/obj/ies-music/6995889105167076132.mp3",
        "title": "@喵嗷污说电影创作的原声",
        "creator_id": "54884802577",
        "create_time": "1630391758",
        "status": 1
      }
    },
    {
      "id": "f7657f21-5fee-4f1f-9d88-ec8411ea009b",
      "cover": "http://p3.douyinpic.com/img/tos-cn-p-0015/ef15ae6839104e80871f521447a97b0a~c5_300x400.jpeg?from=4257465056_large",
      "dynamic_cover": "http://p11.douyinpic.com/obj/tos-cn-p-0015/ef15ae6839104e80871f521447a97b0a?from=4257465056_large",
      "origin_cover": "http://p5-ipv6.douyinpic.com/tos-cn-p-0015/70f6b5f352d4425e8944c038b932c8fd_1623570188~tplv-dy-360p.jpeg?from=4257465056&s=&se=false&sh=&sc=&l=2021083114303701021217008258017B39&biz_tag=feed_cover",
      "video": "http://api.amemv.com/aweme/v1/play/?video_id=v0d00fg10000c32rdevdoca093n6gtn0&line=1&file_id=6bd8e6e959b44d83b5ebbd486134aafc&sign=f592f3089c2a3ddae2042ff85bf9ec6f&is_play_url=1&source=PackSourceEnum_PUBLISH",
      "video_data_size": 19324714,
      "duration": 300655,
      "desc": "科学家为永生改造人类基因，结果创造出能力逆天的新物种完虐人类 #我的观影报告",
      "allow_download": 0,
      "allow_duet": 0,
      "allow_react": 0,
      "allow_music": 1,
      "allow_douplus": 1,
      "allow_share": 1,
      "digg_count": 19,
      "comment_count": 1,
      "download_count": 0,
      "play_count": 0,
      "share_count": 0,
      "forward_count": 0,
      "collect_count": 0,
      "sort": 26,
      "is_top": 0,
      "city": "350100",
      "musicId": "8170be64-2950-425d-aa7f-b8b6100ed51b",
      "create_time": "1630391775",
      "creator_id": "54884802577",
      "status": 1,
      "topics": [
        {
          "id": "c10178eb-441f-4dc7-93b6-eaae1b6248cc",
          "name": "我的观影报告",
          "creator_id": "54884802577",
          "create_time": "1630391758",
          "status": 1
        }
      ],
      "music": {
        "id": "8ce2cb26-4772-4c7b-91d9-a2580c667c21",
        "cover": "http://p3.douyinpic.com/aweme/100x100/85f000239e43c3c985b5.jpeg?from=116350172",
        "mp3": "http://sf6-cdn-tos.douyinstatic.com/obj/ies-music/6995889105167076132.mp3",
        "title": "@喵嗷污说电影创作的原声",
        "creator_id": "54884802577",
        "create_time": "1630391758",
        "status": 1
      }
    }
  ],
  "video": {
    "isAttention": true,
    "id": "0423ff88-ea37-40f6-ab88-0a90759b12ab",
    "video": "http://douyin.ttentau.top/1.mp4",
    "video_data_size": 6038796,
    "duration": 90927,
    "desc": "2只要速度够快，小姐姐就追不上...",
    "allow_download": 1,
    "allow_duet": 0,
    "allow_react": 0,
    "allow_music": 1,
    "allow_douplus": 1,
    "allow_share": 1,
    "digg_count": "300",
    "comment_count": 247,
    "download_count": 0,
    "play_count": 0,
    "share_count": 315,
    "forward_count": 1,
    "collect_count": 0,
    "sort": 48,
    "is_top": 0,
    "city": "成都市",
    "address": "宝山卡丁车俱乐部",
    "musicId": "f1e564f2-8461-48c1-824b-06bb4d3c5d82",
    "create_time": "1630392647",
    "creator_id": "54884802577",
    "status": 1,
    "topics": [
      {
        "id": "c10178eb-441f-4dc7-93b6-eaae1b6248cc",
        "name": "发现美好宝山",
        "creator_id": "54884802577",
        "create_time": "1630391758",
        "status": 1
      },
      {
        "id": "41821c6d-e14f-47f1-a391-f0b1f42afbe1",
        "name": "成都周边游",
        "creator_id": "54884802577",
        "create_time": "1630391758",
        "status": 1
      },
      {
        "id": "41821c6d-e14f-47f1-a391-f0b1f42afbe1",
        "name": "卡丁车漂移",
        "creator_id": "54884802577",
        "create_time": "1630391758",
        "status": 1
      }
    ],
    "music": {
      "id": "8ce2cb26-4772-4c7b-91d9-a2580c667c21",
      "cover": "http://p3.douyinpic.com/aweme/100x100/85f000239e43c3c985b5.jpeg?from=116350172",
      "mp3": "http://sf6-cdn-tos.douyinstatic.com/obj/ies-music/6995889105167076132.mp3",
      "title": "@南辞+泽亦龙-QQ飞车唢呐摇（DJ版）",
      "creator_id": "54884802577",
      "create_time": "1630391758",
      "status": 1
    },
    "author": {
      "school": {
        "name": "",
        "department": "",
        "joinTime": "",
        "education": "",
        "displayType": ""
      },
      "id": "2",
      "unique_id_modify_time": "1630393144",
      "unique_id": "2",
      "favoriting_count": 143,
      "avatar": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
      "city": "",
      "province": "",
      "country": "",
      "birthday": "",
      "cover": "http://p3.douyinpic.com/obj/c8510002be9a3a61aad2?from=116350172",
      "following_count": 66,
      "follower_count": 235000,
      "aweme_count": 1796000,
      "nickname": "宝山旅游景区",
      "certification": "四川宝山旅游有限责任公司官方账号",
      "phone": "",
      "sex": "",
      "last_login_time": "1630423555",
      "create_time": "1630423555",
      "status": 1,
      "desc": "四川彭州宝山旅游景区\n太阳湾云上餐厅，体验峡谷蹦极、高空滑索、丛林穿越、戏猴...",
      "is_private": 1
    }
  }
}




export async function POST(req: any) {
  const params = await req.json()
  data=params
  return NextResponse.json({ code: 200 })
}

export async function GET() {
  return NextResponse.json({ data })
}


// export async function POST(req: any) {
//   const data = await req.json()
//   writeJSONFile(data, 'data.json')
//   return NextResponse.json({ code: 200 })
// }

// export async function GET() {
//   const jsonData = await readJSONFile('data.json')

//   return NextResponse.json({ data: jsonData })
// }

import courses_data from './mamiyoga-course.js'
export default [
    {
        title: '骨盆矯正',
        id:'combination_1_pelvis_strech',
        duration: '7分鐘',
        poses: [
            {
                pose_brief:courses_data[12].poses[2].pose_brief,
                pose_video:courses_data[12].poses[2].B,
                ai_preview_img:courses_data[12].poses[2].ai_preview_img,
                pose_ai: courses_data[12].poses[2].pose_ai,
                pose_id: courses_data[12].poses[2].input_id,
                pose_tags: courses_data[12].poses[2].remind_tags,
                inhale: courses_data[12].poses[2].inhale,
                exhale: courses_data[12].poses[2].exhale
            },
            {
                pose_brief: 'break',
                duration: 5, //該數值除10=5秒
            },
            {
                pose_brief:courses_data[0].poses[1].pose_brief,
                pose_video:courses_data[0].poses[1].B,
                ai_preview_img:courses_data[0].poses[1].ai_preview_img,
                pose_ai: courses_data[0].poses[1].pose_ai,
                pose_id: courses_data[0].poses[1].input_id,
                inhale: courses_data[0].poses[1].inhale,
                exhale: courses_data[0].poses[1].exhale
            },
            {
                pose_brief: 'break',
                duration: 5,
            },
            {
                pose_brief:courses_data[0].poses[2].pose_brief,
                pose_video:courses_data[0].poses[2].B,
                ai_preview_img:courses_data[0].poses[2].ai_preview_img,
                pose_ai: courses_data[0].poses[2].pose_ai,
                pose_id: courses_data[0].poses[2].input_id,
                inhale: courses_data[0].poses[2].inhale,
                exhale: courses_data[0].poses[2].exhale
            },
        ],
    },
    {
        title: '骨盆矯正',
        id:"yoga_27",
        duration: '7分鐘',
        poses:[
            {
                pose_brief:courses_data[12].poses[2].pose_brief,
                pose_video:courses_data[12].poses[2].B,
                ai_preview_img:courses_data[12].poses[2].ai_preview_img,
                pose_ai: courses_data[12].poses[2].pose_ai,
                pose_id: courses_data[12].poses[2].input_id,
                pose_tags: courses_data[12].poses[2].remind_tags,
                inhale: courses_data[12].poses[2].inhale,
                exhale: courses_data[12].poses[2].exhale
            },
            {
                pose_brief:courses_data[12].poses[2].pose_brief,
                pose_video:courses_data[12].poses[2].C,
                ai_preview_img:courses_data[12].poses[2].ai_preview_img,
                pose_ai: false,
                pose_id: '',
                pose_tags: courses_data[12].poses[2].remind_tags,
                inhale: [],
                exhale: [],
            }
        ]
    },
    {
        title: 'Nathon_stretch_1',
        id:'nathon_stretch_1',
        duration: '5分鐘',
        poses:[
            {
                pose_brief:"無",
                pose_video:"https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/practice-video/nathon_stretch_1_A.mp4",
                pose_ai: false,
                pose_id: "nathon_stretch_1",
                pose_tags: ['做得很好'],
                inhale: [],
                exhale: [],
            },
            {
                pose_brief:"無",
                pose_video:"https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/practice-video/nathon_stretch_1_B.mp4",
                pose_ai: true,
                pose_id: "99",
                pose_tags: ['做得很好','雙腳距離太寬','坐下時太快'],
                inhale: [],
                exhale: [],
            },
            {
                pose_brief:"無",
                pose_video:"https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/practice-video/nathon_stretch_1_C.mp4",
                pose_ai: false,
                pose_id: '',
                inhale: [],
                exhale: [],
            }
        ]
    },
    {   //第2課動作1
        title: '減緩腰部疼痛',
        id:"yoga_6",
        duration: '7分鐘',
        poses:[
            {
                pose_brief:courses_data[1].poses[0].pose_brief,
                pose_video:courses_data[1].poses[0].B,
                ai_preview_img:courses_data[1].poses[0].ai_preview_img,
                pose_ai: courses_data[1].poses[0].pose_ai,
                pose_id: courses_data[1].poses[0].input_id,
                pose_tags: courses_data[1].poses[0].remind_tags,
                inhale: [],
                exhale: []
            },
            {
                pose_brief:courses_data[1].poses[0].pose_brief,
                pose_video:courses_data[1].poses[0].C,
                ai_preview_img:courses_data[1].poses[0].ai_preview_img,
                pose_ai: false,
                pose_id: '',
                pose_tags: courses_data[1].poses[0].remind_tags,
                inhale: [],
                exhale: [],
            }
        ]
    },
    {   //第3課動作1
        title: '用空氣啟動身體',
        id:"yoga_8",
        duration: '7分鐘',
        poses:[
            {
                pose_brief:courses_data[2].poses[0].pose_brief,
                pose_video:courses_data[2].poses[0].B,
                ai_preview_img:courses_data[2].poses[0].ai_preview_img,
                pose_ai: courses_data[2].poses[0].pose_ai,
                pose_id: courses_data[2].poses[0].input_id,
                pose_tags: courses_data[2].poses[0].remind_tags,
                inhale: [],
                exhale: []
            },
            {
                pose_brief:courses_data[2].poses[0].pose_brief,
                pose_video:courses_data[2].poses[0].C,
                ai_preview_img:courses_data[2].poses[0].ai_preview_img,
                pose_ai: false,
                pose_id: '',
                pose_tags: courses_data[2].poses[0].remind_tags,
                inhale: [],
                exhale: [],
            }
        ]
    },
    {   //第5課動作1
        title: '新的一天！新的開始！',
        id:"yoga_10",
        duration: '7分鐘',
        poses:[
            {
                pose_brief:courses_data[4].poses[0].pose_brief,
                pose_video:courses_data[4].poses[0].B,
                ai_preview_img:courses_data[4].poses[0].ai_preview_img,
                pose_ai: courses_data[4].poses[0].pose_ai,
                pose_id: courses_data[4].poses[0].input_id,
                pose_tags: courses_data[4].poses[0].remind_tags,
                inhale: [],
                exhale: []
            },
            {
                pose_brief:courses_data[4].poses[0].pose_brief,
                pose_video:courses_data[4].poses[0].C,
                ai_preview_img:courses_data[4].poses[0].ai_preview_img,
                pose_ai: false,
                pose_id: '',
                pose_tags: courses_data[4].poses[0].remind_tags,
                inhale: [],
                exhale: [],
            }
        ]
    },
    {   //第5課動作2
        title: '改善背部與肩部僵硬',
        id:"yoga_11",
        duration: '7分鐘',
        poses:[
            {
                pose_brief:courses_data[4].poses[1].pose_brief,
                pose_video:courses_data[4].poses[1].B,
                ai_preview_img:courses_data[4].poses[1].ai_preview_img,
                pose_ai: courses_data[4].poses[1].pose_ai,
                pose_id: courses_data[4].poses[1].input_id,
                pose_tags: courses_data[4].poses[1].remind_tags,
                inhale: [],
                exhale: []
            },
            {
                pose_brief:courses_data[4].poses[1].pose_brief,
                pose_video:courses_data[4].poses[1].C,
                ai_preview_img:courses_data[4].poses[1].ai_preview_img,
                pose_ai: false,
                pose_id: '',
                pose_tags: courses_data[4].poses[1].remind_tags,
                inhale: [],
                exhale: [],
            }
        ],
    },
    {   //第6課動作1
        title: '啟動核心肌群',
        id:"yoga_13",
        duration: '7分鐘',
        poses:[
            {
                pose_brief:courses_data[5].poses[0].pose_brief,
                pose_video:courses_data[5].poses[0].B,
                ai_preview_img:courses_data[5].poses[0].ai_preview_img,
                pose_ai: courses_data[5].poses[0].pose_ai,
                pose_id: courses_data[5].poses[0].input_id,
                pose_tags: courses_data[5].poses[0].remind_tags,
                inhale: [],
                exhale: []
            },
            {
                pose_brief:courses_data[5].poses[0].pose_brief,
                pose_video:courses_data[5].poses[0].C,
                ai_preview_img:courses_data[5].poses[0].ai_preview_img,
                pose_ai: false,
                pose_id: '',
                pose_tags: courses_data[5].poses[0].remind_tags,
                inhale: [],
                exhale: [],
            }
        ],
    },
    {   //第6課動作2
        title: '加強骨頭密度',
        id:"yoga_14",
        duration: '7分鐘',
        poses:[
            {
                pose_brief:courses_data[5].poses[1].pose_brief,
                pose_video:courses_data[5].poses[1].B,
                ai_preview_img:courses_data[5].poses[1].ai_preview_img,
                pose_ai: courses_data[5].poses[1].pose_ai,
                pose_id: courses_data[5].poses[1].input_id,
                pose_tags: courses_data[5].poses[1].remind_tags,
                inhale: [],
                exhale: []
            },
            {
                pose_brief:courses_data[5].poses[1].pose_brief,
                pose_video:courses_data[5].poses[1].C,
                ai_preview_img:courses_data[5].poses[1].ai_preview_img,
                pose_ai: false,
                pose_id: '',
                pose_tags: courses_data[5].poses[1].remind_tags,
                inhale: [],
                exhale: [],
            }
        ],
    },
    {   //第7課動作1
        title: '讓肚子變得更緊實',
        id:"yoga_15",
        duration: '7分鐘',
        poses:[
            {
                pose_brief:courses_data[6].poses[0].pose_brief,
                pose_video:courses_data[6].poses[0].B,
                ai_preview_img:courses_data[6].poses[0].ai_preview_img,
                pose_ai: courses_data[6].poses[0].pose_ai,
                pose_id: courses_data[6].poses[0].input_id,
                pose_tags: courses_data[6].poses[0].remind_tags,
                inhale: [],
                exhale: []
            },
            {
                pose_brief:courses_data[6].poses[0].pose_brief,
                pose_video:courses_data[6].poses[0].C,
                ai_preview_img:courses_data[6].poses[0].ai_preview_img,
                pose_ai: false,
                pose_id: '',
                pose_tags: courses_data[6].poses[0].remind_tags,
                inhale: [],
                exhale: [],
            }
        ],
    },
    {   //第7課動作3
        title: '收緊骨盆，告別大屁股',
        id:"yoga_17",
        duration: '7分鐘',
        poses:[
            {
                pose_brief:courses_data[6].poses[2].pose_brief,
                pose_video:courses_data[6].poses[2].B,
                ai_preview_img:courses_data[6].poses[2].ai_preview_img,
                pose_ai: courses_data[6].poses[2].pose_ai,
                pose_id: courses_data[6].poses[2].input_id,
                pose_tags: courses_data[6].poses[2].remind_tags,
                inhale: [],
                exhale: []
            },
            {
                pose_brief:courses_data[6].poses[2].pose_brief,
                pose_video:courses_data[6].poses[2].C,
                ai_preview_img:courses_data[6].poses[2].ai_preview_img,
                pose_ai: false,
                pose_id: '',
                pose_tags: courses_data[6].poses[2].remind_tags,
                inhale: [],
                exhale: [],
            }
        ],
    },
    {   //第8課動作2
        title: '雕塑容易遺忘的部位',
        id:"yoga_22",
        duration: '7分鐘',
        poses:[
            {
                pose_brief:courses_data[7].poses[1].pose_brief,
                pose_video:courses_data[7].poses[1].B,
                ai_preview_img:courses_data[7].poses[1].ai_preview_img,
                pose_ai: courses_data[7].poses[1].pose_ai,
                pose_id: courses_data[7].poses[1].input_id,
                pose_tags: courses_data[7].poses[1].remind_tags,
                inhale: [],
                exhale: []
            },
            {
                pose_brief:courses_data[7].poses[1].pose_brief,
                pose_video:courses_data[7].poses[1].C,
                ai_preview_img:courses_data[7].poses[1].ai_preview_img,
                pose_ai: false,
                pose_id: '',
                pose_tags: courses_data[7].poses[1].remind_tags,
                inhale: [],
                exhale: [],
            }
        ],
    },
    {   //第9課動作3
        title: '鍛鍊產後腹肌',
        id:"yoga_19",
        duration: '7分鐘',
        poses:[
            {
                pose_brief:courses_data[8].poses[2].pose_brief,
                pose_video:courses_data[8].poses[2].B,
                ai_preview_img:courses_data[8].poses[2].ai_preview_img,
                pose_ai: courses_data[8].poses[2].pose_ai,
                pose_id: courses_data[8].poses[2].input_id,
                pose_tags: courses_data[8].poses[2].remind_tags,
                inhale: [],
                exhale: []
            },
            {
                pose_brief:courses_data[8].poses[2].pose_brief,
                pose_video:courses_data[8].poses[2].C,
                ai_preview_img:courses_data[8].poses[2].ai_preview_img,
                pose_ai: false,
                pose_id: '',
                pose_tags: courses_data[8].poses[2].remind_tags,
                inhale: [],
                exhale: [],
            }
        ],
    },
    {   //第10課動作1
        title: '同時照顧上半身與下半身',
        id:"yoga_20",
        duration: '7分鐘',
        poses:[
            {
                pose_brief:courses_data[9].poses[0].pose_brief,
                pose_video:courses_data[9].poses[0].B,
                ai_preview_img:courses_data[9].poses[0].ai_preview_img,
                pose_ai: courses_data[9].poses[0].pose_ai,
                pose_id: courses_data[9].poses[0].input_id,
                pose_tags: courses_data[9].poses[0].remind_tags,
                inhale: [],
                exhale: []
            },
            {
                pose_brief:courses_data[9].poses[0].pose_brief,
                pose_video:courses_data[9].poses[0].C,
                ai_preview_img:courses_data[9].poses[0].ai_preview_img,
                pose_ai: false,
                pose_id: '',
                pose_tags: courses_data[9].poses[0].remind_tags,
                inhale: [],
                exhale: [],
            }
        ],
    },
]
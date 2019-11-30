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
    }
]
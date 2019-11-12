import courses_data from './mamiyoga-course-jp.js'
export default [
    {
        title: '骨盤矯正',
        duration: '7分',
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
                duration: 5,
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
        title: '骨盤矯正',
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
    }
]
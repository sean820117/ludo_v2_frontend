import courses_data from './mamiyoga-course.js'
export default [
    {
        title: '骨盆矯正',
        duration: '7分鐘',
        poses: [
            {
                pose_brief:courses_data[12].poses[2].pose_brief,
                pose_video:courses_data[12].poses[2].B,
                ai_preview_img:courses_data[12].poses[2].ai_preview_img,
                pose_ai: courses_data[12].poses[2].pose_ai,
                inhale: courses_data[12].poses[2].inhale,
                exhale: courses_data[12].poses[2].exhale
            },
            {
                pose_brief: 'break',
                duration: 30,
            },
            {
                pose_brief:courses_data[0].poses[1].pose_brief,
                pose_video:courses_data[0].poses[1].B,
                ai_preview_img:courses_data[0].poses[1].ai_preview_img,
                pose_ai: courses_data[0].poses[1].pose_ai,
                inhale: courses_data[0].poses[1].inhale,
                exhale: courses_data[0].poses[1].exhale
            },
            {
                pose_brief: 'break',
                duration: 30,
            },
            {
                pose_brief:courses_data[0].poses[2].pose_brief,
                pose_video:courses_data[0].poses[2].B,
                ai_preview_img:courses_data[0].poses[2].ai_preview_img,
                pose_ai: courses_data[0].poses[2].pose_ai,
                inhale: courses_data[0].poses[2].inhale,
                exhale: courses_data[0].poses[2].exhale
            },
        ],
    },
]
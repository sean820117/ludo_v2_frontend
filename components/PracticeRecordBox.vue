<template>
    <div class="course-practice-record-single">
        <div class="single-box1">{{ date }}</div>
        <div class="single-box2">{{ rank }}</div>
        <div class="single-box1-svg">
            <img class="single-box1-svg-item" :src="eye" alt="">
        </div>
    </div>
</template>

<script>
import eye from 'static/eye.svg'
export default {
    data:() => ({
        eye: eye,
    }),
    props: {
        rank: String,
        date: String,
    },
}
</script>

<style>
.course-practice-record-single{
	/*text-decoration: none;*/
	display: flex;
	text-align: center;
	line-height: 33px;
	/*background-color: white;*/
	
	margin-left: 3px;
	margin-right: 3px;
	padding: 5px;
	padding-top: 8px;

	width: 200px;
	height: 50px;
	font-size: 18px;
	line-height: 50px;
	color: white;
	background-color: #324D5B;
	/*border: 2px solid grey;*/
	border-radius: 10px;

	transition: all 0.2s;
	transition-timing-function: ease;
}
.single-box1{
	text-align: center;
	line-height: 15px;
	float: left;
  	width: 20%;
  	height: 20%;

  	color: white;
  	font-size: 10px;

  	padding-left: 5px;
}
.single-box1-svg{
	align-items: center;
	line-height: 36px;
	float: left;
  	width: 20%;
  	height: 100%;

  	/*background-color: #fff;*/
}
.single-box1-svg-item{
	display: flex;
	margin-top: 7px;
}
.single-box2{
	align-items: center;
	line-height: 36px;
	float: left;
  	width: 60%;
  	height: 20%;

  	text-align: center;
  	font-size: 40px;
  	font-weight: 50;
  	color: white;
  	font-size: 30px;
}
</style>

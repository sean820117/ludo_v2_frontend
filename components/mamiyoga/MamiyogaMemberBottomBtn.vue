<template>
    <div class="member-bottom-btn">
        <div class="member-big-btn" style="background:#97A8AF;" @click="$router.push('/menu')">回到課程</div>
        <div class="member-big-btn member-big-btn-center" style="margin-top:1vh;" @click="$router.push('/member')">學員中心</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.member-bottom-btn {
    width: 100%;
    position: fixed;
    bottom: 5vh;
}
.member-big-btn {
    width: 60%;
    height: 45px;
    color: #F8F7F8;
    margin: 15px auto;
    background: #24798F;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    border-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.member-big-btn-center {
    border: #24798F 2px solid !important;
    background: #fff !important;
    color: #24798F !important;
}
@media (min-width: 769px) {
    .member-bottom-btn {
        max-width: 450px;
    }
}
</style>
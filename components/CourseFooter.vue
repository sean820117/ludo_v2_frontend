<template>
    <!-- footer -->
    <div class="footer">
        <div class="footer-wrapper">
            <!-- <div class="footer-container">
                <div class="footer-container-title">PRODUCT</div>
                <a href=""  class="footer-container-content">Templates</a>
                <a href=""  class="footer-container-content">Explore</a>
                <a href=""  class="footer-container-content">Features</a>
                <a href=""  class="footer-container-content">Webside Builder</a>
                <a href=""  class="footer-container-content">LUDO Code</a>
                <a href=""  class="footer-container-content">My Sites</a>
                <a href=""  class="footer-container-content">Premium Plans</a>
                <a href=""  class="footer-container-content">AI Store</a>
                <a href=""  class="footer-container-content">Developers</a>
            </div> -->
            <!-- <div class="footer-container">
                <div class="footer-container-title">COMPANY</div>
                <a href=""  class="footer-container-content">About LUDO</a>
                <a href=""  class="footer-container-content">Investor Relations</a>
                <a href=""  class="footer-container-content">Wix Jobs</a>
                <a href=""  class="footer-container-content">Design Assets</a>
                <a href=""  class="footer-container-content">Terms of Use</a>
                <a href=""  class="footer-container-content">Privacy Policy</a>
                <a href=""  class="footer-container-content">App Market Terms</a>
                <a href=""  class="footer-container-content">Contact Us</a>
                <a href=""  class="footer-container-content">Updates & Releases</a>
            </div> -->
            <!-- <div class="footer-container">
                <div class="footer-container-title">COMMUNITY</div>
                <a href=""  class="footer-container-content">LUDO Blog</a>
                <a href=""  class="footer-container-content">LUDO Stories</a>
                <a href=""  class="footer-container-content">LUDO Arena</a>
                <a href=""  class="footer-container-content">Facebook</a>
                <a href=""  class="footer-container-content">Google+</a>
                <a href=""  class="footer-container-content">Pinterest</a>
                <a href=""  class="footer-container-content">Youtube</a>
                <a href=""  class="footer-container-content">Linkedin</a>
                <a href=""  class="footer-container-content">Instagram</a>
            </div> -->
			<div class="footer-container">
                <div class="footer-container-title">COMPANY</div>
                <a href="https://www.flyingcrazyer.com" class="footer-container-content">​​讓狂人飛教育股份有限公司</a>
            </div>
			<div class="footer-container">
                <div class="footer-container-title">SOCIAL</div>
                <a href="https://www.facebook.com/Go2UniversityNow/"  class="footer-container-content">讓備審飛</a>
				<a href="https://www.flyingcrazyer.com"  class="footer-container-content">讓狂人飛</a>
            </div>
            <div class="footer-container-info">
                <div class="footer-container-title">INFORMATION</div>
				<div class="footer-container-item">FlyingCrazyer.Inc</div>
				<div class="footer-container-content">contact@flyingcrazyer.com</div>
                <div class="footer-container-item">LUDO Inc.</div>
                <!-- <div class="footer-container-content">5th Floor, No. 297, Section 3, Roosevelt Road, University of Daan District, Taipei City, TAIWAN</div> -->
				<div class="footer-container-content">contacts@ludonow.com</div>
            </div>
			<div class="footer-container">
                <div class="footer-container-title">SUPPORT</div>
                <a href="https://m.me/2018930911516278?ref=9aB25EjxH"  class="footer-container-content">Support Center</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@media (min-width:900px) {
	/*footer*/
	.footer{
		position: relative;
		/*display: inline-block;*/
		width: 100vw;
		/*height: 300px;*/
		background-color: white;
		align-items: center;
		
		/*垂直*/
		display: inline-flex;
		justify-content: center;
		flex-direction: column;
		align-items: left;
		/*垂直*/

	}
	.footer-wrapper{
		position: relative;
		display: block;
		margin-bottom: 30px;
	}
	.footer-container{
		position: relative;
		/*display: inline-block;*/
		width: 200px;
		/*align-items: top;*/
		/*background-color: lightgrey;*/
		margin:20px;

		/*垂直*/
		display: inline-flex;
		/*justify-content: center;*/
		flex-direction: column;
		align-items: left;
		/*垂直*/

		vertical-align: top;
	}
	.footer-container-title{
		position: relative;
		display: inline-block;
		font-size: 15px;
		color: black;

		margin-bottom: 20px;
	}
	.footer-container-item{
		position: relative;
		display: inline-block;
		font-size: 16px;
		color: grey;

		margin-bottom: 16px;
	}
	.footer-container-content{
		position: relative;
		display: inline-block;
		font-size: 12px;
		color: grey;
		text-align: justify;
		text-decoration: none;

		margin-bottom: 18px;

		transition: all 0.2s;
		transition-timing-function: ease;
	}
	.footer-container-content:hover{
		color: orange;
	}
	.footer-container-detail{
		position: relative;
		display: inline-block;
		font-size: 12px;
		color: grey;
		text-align: justify;

		margin-bottom: 14px;
	}
	.footer-container-info{
		position: relative;
		display: inline-block;
		width: 200px;
		align-items: top;
		/*background-color: lightgrey;*/
		margin:20px;

		/*垂直*/
		display: inline-flex;
		justify-content: center;
		flex-direction: column;
		align-items: left;
		/*垂直*/

		vertical-align: top;
	}
}
@media (max-width:899px) {
	/*footer*/
	.footer{
		position: relative;
		/*display: inline-block;*/
		width: 100vw;
		/*height: 300px;*/
		background-color: white;
		align-items: center;
		
		/*垂直*/
		display: inline-flex;
		justify-content: center;
		flex-direction: column;
		align-items: left;
		/*垂直*/

	}
	.footer-wrapper{
		position: relative;
		display: block;
		width: 90%;
		margin-bottom: 30px;
	}
	.footer-container{
		position: relative;
		/*display: inline-block;*/
		width: 200px;
		/*align-items: top;*/
		/*background-color: lightgrey;*/
		margin:20px;

		/*垂直*/
		display: inline-flex;
		/*justify-content: center;*/
		flex-direction: column;
		align-items: left;
		/*垂直*/

		vertical-align: top;
	}
	.footer-container-title{
		position: relative;
		display: inline-block;
		font-size: 15px;
		color: black;

		margin-bottom: 20px;
	}
	.footer-container-item{
		position: relative;
		display: inline-block;
		font-size: 16px;
		color: grey;

		margin-bottom: 16px;
	}
	.footer-container-content{
		position: relative;
		display: inline-block;
		font-size: 12px;
		color: grey;
		text-align: justify;
		text-decoration: none;

		margin-bottom: 18px;

		transition: all 0.2s;
		transition-timing-function: ease;
	}
	.footer-container-content:hover{
		color: orange;
	}
	.footer-container-detail{
		position: relative;
		display: inline-block;
		font-size: 12px;
		color: grey;
		text-align: justify;

		margin-bottom: 14px;
	}
	.footer-container-info{
		position: relative;
		display: inline-block;
		width: 200px;
		align-items: top;
		/*background-color: lightgrey;*/
		margin:20px;

		/*垂直*/
		display: inline-flex;
		justify-content: center;
		flex-direction: column;
		align-items: left;
		/*垂直*/

		vertical-align: top;
	}
}
</style>

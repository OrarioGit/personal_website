class collection_website_show_profile_page extends action_listener
{
    constructor(module, action, position)
    {
        super(module, action);
        this.position = position;
    }
    
    prepareArgs()
    {
        this.to_ajax = false;
    }
    
    showContent()
    {
        var info =  `<div class="person_box">
        				<div class="picture_box2">
        					<img src="images/personal.jpg" class="img-responsive center-block">
        				</div>
        				
        				<div class="intro_box">
        					<h1 class="intro_title text-center">呂秉濂 Orario</h1>
        				
        					<p class="intro_content  text-center">Try not to become a man of success but rather try to become a man of value. -Albert Einstein</p>
        				</div>
        
        				<div class="foot_pic"></div>
        			</div>`;
        			
        $("#info_box").html(info);
        
        var content = `<!-- persenal profile -->
            			<div class="container-fluid shadow floating">
            				<div class="col-xs-12">
            					<h2 class="text_title text-center">Profile</h2>
            				</div>
            
            				<div class="col-xs-6">
            					<h3>性別</h3>
            					<p>男性</p>
            				</div>
            
            				<div class="col-xs-6">
            					<h3>生日</h3>
            					<p>1997/07/23</p>
            				</div>
            
            				<div class="col-xs-6">
            					<h3>信箱</h3>
            					<p>1104137112@nkuas.edu.tw</p>
            				</div>
            
            				<div class="col-xs-6">
            					<h3>電話</h3>
            					<p>0925028998</p>
            				</div>
            
            				<div class="col-xs-12">
            					<h3>地址</h3>
            					<p>高雄市燕巢區深中路62號</p>
            				</div>
            			</div>
            			
            			<!-- skill bar -->
            			<div class="container-fluid shadow floating">
            				<div class="col-xs-12">
            
            					<h2 class="text_title text-center">Skill</h2>
            					
            					<h3>Java</h3>
            					<div class="progress">
            					  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60"
            					  aria-valuemin="0" aria-valuemax="100" style="width:60%">
            					    60%
            					  </div>
            					</div>
            
            					<h3>Front-End</h3>
            					<div class="progress">
            					  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70"
            					  aria-valuemin="0" aria-valuemax="100" style="width:70%">
            					    70%
            					  </div>
            					</div>
            
            					<h3>Back-End</h3>
            					<div class="progress">
            					  <div class="progress-bar" role="progressbar" aria-valuenow="50"
            					  aria-valuemin="0" aria-valuemax="100" style="width:50%">
            					    50%
            					  </div>
            					</div>
            
            					<h3>SQL</h3>
            					<div class="progress">
            					  	<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="75"
            					  aria-valuemin="0" aria-valuemax="100" style="width:75%">
            					    75%
            					 	</div>
            					</div>
            				</div>
            			</div>
            			
            			<!-- Education -->
            			<div class="container-fluid shadow floating">
            				<div class="col-xs-12">
            					<h2 class="text_title text-center">Education</h2>
            					
            					<h3>國立高雄科技大學</h3>
            					<p>資訊管理系</p>
            					<p>2015 - present</p>
            				
            				</div>
            			</div>`;
            			
        
        this.loadCSS('collection_website','show_profile_page');
        
        $("#"+this.position).html(content);
    }
}
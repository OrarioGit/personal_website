class collection_website_show_home_page extends action_listener
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
        $("#info_box").html('<img id="app-img" class="img-responsive img_box">')
        
        var content =  `<!-- 右邊block -->
                		<div class="hovereffect">
            		        <img class="img-responsive" src="images/program.jpg" alt="">
            		            <div class="overlay">
            		                <h2>作品集</h2>
            						<p>
            							<a onclick="(new collection_website_show_list_page('collection_website','show_list_page', 'app-right')).run()">View Page</a>
            						</p>
            		            </div>
            		    </div>
            
            		    <div class="hovereffect">
            		        <img class="img-responsive" src="images/computer_2.jpg" alt="">
            		            <div class="overlay">
            		                <h2>About me</h2>
            						<p>
            							<a onclick="(new collection_website_show_profile_page('collection_website','show_profile_page','app-right')).run()">View Page</a>
            						</p>
            		            </div>
            		    </div>
            
            		    <div class="hovereffect">
            		        <img class="img-responsive" src="images/Contact.jpg" alt="">
            		            <div class="overlay">
            		                <h2>Contact Me</h2>
            						<p>
            							<a onclick="(new collection_website_show_contact_page('collection_website','show_contact_page','app-right')).run()">View Page</a>
            						</p>
            		            </div>
            		    </div>`;
        
        this.loadCSS('collection_website','show_home_page');
        
        $("#"+this.position).html(content);
        
        $("#app-img").attr("src","images/homepage3.jpg");
    }
}
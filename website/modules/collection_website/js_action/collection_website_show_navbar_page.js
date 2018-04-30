class collection_website_show_navbar_page extends action_listener
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
        var content =  `<!-- 左邊block -->
                		<div class="app-left">
                			<nav class="navbar navbar-default">
                				<div class="navbar-header">
                					<button class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                						<span class="icon-bar"></span>
                						<span class="icon-bar"></span>
                						<span class="icon-bar"></span>
                					</button>
                
                					<a class="navbar-brand" href=""><i class="fas fa-home"></i>&ensp;Home</a>
                				</div>
                				<div class="collapse navbar-collapse" id="myNavbar">
                					<ul class="nav navbar-nav">
                						<li><a onclick="(new collection_website_show_list_page('collection_website','show_list_page', 'app-right')).run()"><i class="fas fa-folder"></i>&ensp;作品集</a></li>
                						<li><a onclick="(new collection_website_show_profile_page('collection_website','show_profile_page','app-right')).run()"><i class="fas fa-info-circle"></i>&ensp;About me</a></li>
                						<li><a onclick="(new collection_website_show_contact_page('collection_website','show_contact_page','app-right')).run()"><i class="fas fa-envelope"></i>&ensp;Contact me</a></li>
                					</ul>
                				</div>
                			</nav>
                
                			<!-- 首頁圖片 -->
                			<div id="info_box"></div>
                			
                		</div>
                        
                        <div class="app-right" id="app-right"></div>
                		`;
                		
        this.loadScript('collection_website','show_list_page');
        this.loadScript('collection_website','show_profile_page');
        this.loadScript('collection_website','show_contact_page');
        
        $("#"+this.position).html(content);
    }
}
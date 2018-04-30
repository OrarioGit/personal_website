class collection_website_show_list_page extends action_listener
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
        $("#info_box").html('<img id="app-img" class="img-responsive img_box">');
        var content =  `<!-- 搜尋列 -->
            			<div class="row search_row">
            				<div class="input-group col-sm-6">
            				    <input type="text" class="form-control" placeholder="請輸入欲查詢名稱" id="src_bar" style="display: none;">
            				    <div class="input-group-btn">
            				      	<button class="btn btn-default" type="submit" id="src_btn">
            				        	<i class="fas fa-search" id="btn_icon"></i>
            				      	</button>
            				    </div>
            				</div>
            			</div>
            
                        <div id="collection_list"></div>
            			
            			
            			<script>

                        	// 當搜尋按鈕點擊時，input做淡入淡出的特效
                        	$(function(){
                        		$("#src_btn").click(function(){
                        			$("#src_bar").fadeToggle();
                        			$("#btn_icon").toggleClass("fa-search");
                        			$("#btn_icon").toggleClass("fa-arrow-left");
                        		});
                        		
                        		$("#src_bar").keyup(function(){
                        		    (new collection_website_do_srcArticleList_action("collection_website","do_srcArticleList_action","collection_list")).run();
                        		});
                        	});
                        </script>`;
        
        $("#"+this.position).html(content);
        
        $("#app-img").attr("src","images/program.jpg");
        
        // 執行查詢動作
        this.loadScript("collection_website","do_srcArticleList_action");
        
        var srcArticleList = new collection_website_do_srcArticleList_action("collection_website","do_srcArticleList_action","collection_list");            
        srcArticleList.run();
        
        this.loadCSS('collection_website','show_list_page');
        
        
        
    }
}
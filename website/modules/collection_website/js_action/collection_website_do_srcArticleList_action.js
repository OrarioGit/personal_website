class collection_website_do_srcArticleList_action extends action_listener
{
    constructor(module, action, position)
    {
        super(module, action);
        this.position = position;
    }
    
    prepareArgs()
    {
        this.to_ajax = true;
        
        var post_data = 
        {
            "src_value": $("#src_bar").val()
        };
        
        this.addArgs(post_data);
        
    }
    
    addArgs(post_data)
    {
        console.log(post_data);
        this.args = post_data;
    }
    
    ajax_success(data)
    {
        var data_obj = JSON.parse(data);
        
        var content = `<!-- collection list -->`;
        
        for(var key in data_obj['result'])
        {
            var result = data_obj['result'][key];
            
            var title = result['title'];
            var date = result['date'];
            var img = result['image'];
            
            content += `<div class="row item_row" onclick="location.href='collection.html'">
            				<div class="col-sm-offset-1 col-sm-3">
            					<img src="images/` + img + `" alt="" id="collection_img" class="img-circle center-block">
            				</div>
            				<div class="col-sm-8 center_item">
            					<h3 class="title">Name：` + title + `</h3>
            					<span class="Date">Date：` + date + `</span>
            				</div>
            			</div>`
        }
        
        $("#" + this.position).html(content);
        
    }
}
class action_listener
{
    constructor(module, action)
    {
        this.module = module;
        this.js_action = action;
        this.php_action = action;
        this.args = null;
        this.to_ajax = true;
    }
    
    run()
    {
        this.prepareArgs();
        
        if(!this.to_ajax)
        {
            this.showContent();
            return;
        }
        
        var self = this;
        $.ajax({
            url:"module_dispacher.php?module=" + this.module + "&action=" + this.php_action,
            type:"POST",
            data:this.args,
            success:function(data){
                self.ajax_success(data);
            }
        });
    }
    
    loadScript(module, action)
    {
        var id = module + "_" + action;
        var src = "modules/" + module + "/js_action/" + id + ".js";
        
        this.addScript(id, src);
    }
    
    addScript(id, src)
    {
        var script = document.getElementById(id);
        
        if(script === null)
        {
            script = document.createElement("script");
            script.id = id;
            script.src = src;
            
            $("head").append(script);
        }
    }
    
    loadCSS(module, action)
    {
        var id = "page_css";
        var href = "css/" + module + "_" + action + ".css";
        
        this.addCSS(id, href);
    }
    
    addCSS(id, href)
    {
        if($('#' + id).length)
        {
            $('#' + id).remove();
        }
        
        var link = document.createElement("link");
        link.id = id;
        link.href = href;
        link.rel = 'stylesheet';
        $("head").append(link);
        
    }
}
class collection_website_show_contact_page extends action_listener
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
        
        var content =  `<div class="container-fluid">
				
            				<i class="material-icons fab fa-facebook-square type_1"></i>
            				<i class="material-icons fab fa-line type_2"></i>
            				<i class="material-icons fab fa-twitter type_3"></i>
            			</div>
            
            			<div class="container-fluid">
            				<div class="row col-sm-offset-1 col-sm-10" id="form_box">
            					
            				  	<h1 class="title">Contact Me</h1>
            				    <form id="form" class="form" action="#" method="get">
            				        <ul>
            				            <li>
            				                <label for="name">Your Name:</label>
            				                <input type="text" placeholder="Your Name" id="name" name="name" tabindex="1"/>
            				            </li>
            				            <li>
            				                <label for="email">Your Email:</label>
            				                <input type="email" placeholder="Your Email" id="email" name="email" tabindex="2"/>
            				            </li>
            				            <li>
            				                <label for="message">Message:</label>
            				                <textarea placeholder="Message…" id="message" name="message" tabindex="3"></textarea>
            				            </li>
            				        </ul>
            				        <input type="submit" value="Send Message" id="submit"/>
            				    </form>
            				</div>
            			  	
            			</div>
            			
            			<script>
                        	$(document).ready(function()
                        	{
                          
                        	  //隱藏label
                        	  $('form li').each(function()
                        	  {
                        	    $(this).addClass('js-hide-label');
                        	  });
                        	  
                        	  //當有事件觸發時，做動畫
                        	  $('form li').find('input,textarea').on('keyup blur focus',function(e) 
                        	  {
                        	    
                        	      var $this = $(this),
                        	          $parent = $this.parent();
                        	      
                        	      if(e.type=='keyup') 
                        	      {
                        	          if($this.val()=='')
                        	          {
                        	            $parent.addClass('js-hide-label');
                        	          }
                        	          else
                        	          {
                        	            $parent.removeClass('js-hide-label') ;
                        	          }
                        	      }
                        	    else if(e.type=='blur')
                        	    {
                        	      if($this.val()=='')
                        	      {
                        	        $parent.addClass('js-hide-label');
                        	      }
                        	      else
                        	      {
                        	        $parent.removeClass('js-hide-label , js-highlight-label').addClass('js-unhighlight-label');
                        	      }
                        	    }
                        	    
                        	      else if(e.type=='focus')
                        	      {
                        	        
                        	        if($this.val()==''){
                        	          $parent.addClass('js-hide-label');
                        	        }
                        	        else{
                        	        $parent.addClass('js-highlight-label');
                        	        }
                        	        
                        	      }
                        	    
                        	  });
                        	  
                        	});
                        </script>`;
                		
        this.loadCSS("collection_website","show_contact_page");
        
        $("#"+this.position).html(content);
        
        $("#app-img").attr("src","images/Contact.jpg");
    }
}
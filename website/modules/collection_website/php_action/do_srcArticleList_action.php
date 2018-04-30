<?php
    require_once(__ROOT__."/modules/collection_website/php_action/collection_website_model.php");

    class do_srcArticleList_action
    {
        public function showPerform($event_message)
        {
            $POST = $event_message->getPost();
            
            $user_model = new collection_website_model();
            $result = $user_model->srcArticleList($POST['src_value']);
        
            return json_encode($result);
        }
    }
?>
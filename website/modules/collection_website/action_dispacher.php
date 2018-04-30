<?php
    class action_dispacher
    {
        public function Action($event_message)
        {
            $GET = $event_message->getGET();
            
            if(isset($GET['action']))
            {
                $action = $GET['action'];
                
                require_once "php_action/".$action.".php";
                $action_obj = new $action();
                
                $body = $action_obj->showPerform($event_message);
                return $body;
            }
        }
    }
?>
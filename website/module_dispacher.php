<?php
    define('__ROOT__',dirname(__FILE__));
    
    require_once(__ROOT__."/include/php/db_link.php");
    require_once(__ROOT__."/include/php/event_message.php");
    
    $body = (new Main())->run();
    echo $body;
    
    class Main
    {
        public function __construct()
        {
            $json = file_get_contents("config.json");
            $config = json_decode($json, true);
            
            db_link::$db_host = $config['db']['db_host'];
            db_link::$db_name = $config['db']['db_name'];
            db_link::$username = $config['db']['username'];
            db_link::$password = $config['db']['password'];
        }
        
        public function run()
        {
            if(isset($_GET['module']))
            {
                $module = $_GET['module'];
                
                require_once(__ROOT__."/modules/".$module."/action_dispacher.php");
                $module_obj = new action_dispacher();
                
                $event_message = new event_message($_GET, $_POST);
                $body = $module_obj->Action($event_message);
                
                return $body;
            }
        }
    }
?>
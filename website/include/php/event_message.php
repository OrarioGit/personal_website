<?php
    class event_message
    {
        private $get  = null;
        private $post = null;
        
        public function __construct($GET, $POST)
        {
            $this->get  = $GET;
            $this->post = $POST;
        }
        
        public function getGET()
        {
            return $this->get;
        }
        
        public function getPOST()
        {
            return $this->post;
        }
    }
?>
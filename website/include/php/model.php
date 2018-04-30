<?php
    require_once(__ROOT__."/include/php/db_link.php");

    abstract class model
    {
        protected $db = null;
        
        public function __construct()
        {
            $this->db = db_link::getConnect();
        }
    }
?>
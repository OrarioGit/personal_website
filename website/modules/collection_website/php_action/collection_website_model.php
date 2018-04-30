<?php
    require_once(__ROOT__."/include/php/model.php");

    class collection_website_model extends model
    {
        public function __construct()
        {
            parent::__construct();
        }
        
        //搜尋文章列表
        public function srcArticleList($src_value)
        {
            $SQL = "Select pw_atricle.title, pw_atricle.date, pw_atricle.image
                    From pw_atricle
                    Where pw_atricle.title Like ?";
                    
            $Query = $this->db->prepare($SQL);
            
            $src_value = '%'.$src_value.'%';
            
            $stat = $Query->execute(array($src_value));
            
            if($stat)
            {
                $result['stat'] = "Query Success!!";
                $result['stat_flag'] = true;
                $result['result'] = $Query->fetchAll(); 
            }
            else
            {
                $result['stat'] = "Query Error";
                $result['stat_flag'] = false;
                $result['error'] = $Query->errorInfo();
            }
            
            return $result;
        }
        
        
    }
?>
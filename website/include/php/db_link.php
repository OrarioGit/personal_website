<?php
    class db_link
    {
        static $db_host;
        static $db_name;
        static $username;
        static $password;
        
        static function getConnect()
        {
            $dsn = sprintf("mysql:host=%s;dbname=%s;charset=utf8", self::$db_host, self::$db_name);
            
            try 
            {
                $db = new PDO($dsn, self::$username, self::$password);
                return $db;
            } 
            catch (PDOException $e ) 
            {
                echo $e->getMessage();
            }
        }
    }
?>
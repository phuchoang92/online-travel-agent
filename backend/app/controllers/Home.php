<?php
class Home extends Controller{

    public $model_home;

    public function __construct(){
        $this->model_home = $this->model('HomeModel');
        var_dump($this->model_home);
    }

    public function index(){
        
        $data = $this->model_home->getList();
        // echo '<pre>';
        // print_r($data);
        // echo '<pre>';

        // $detail = $this->model_home->getDetail(0);
        // print_r($detail);
    }

    public function detail($id='', $slug=''){
        echo 'id sp'.$id.'<br/>';
    }

    public function search(){
        $keyword = $_GET['keyword'];
        echo 'Tu khoa can tim: '.$keyword;
    }
}
<?php
class ProductModel{
    public function getProductList(){
        return [
            'sp 1',
            'sp 2',
            'sp 3'
        ];
    }

    public function getDetail($id){
        $data = [
            'sp 1',
            'sp 2',
            'sp 3'
        ];

        return $data[$id];
    }
}
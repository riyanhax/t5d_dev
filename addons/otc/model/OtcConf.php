<?php

namespace addons\otc\model;
/**
 * Created by PhpStorm.
 * User: mr_z
 * Date: 2018/7/6
 * Time: 下午2:51
 */
class OtcConf extends \web\common\model\BaseModel{

    public function _initialize()
    {
        parent::_initialize(); // TODO: Change the autogenerated stub
        $this->tableName = "transaction_conf";
    }

    public function getConf(){
        $data =$this->find(1);
        return $data;
    }

    /*
     * 订单金额校验
     * @param $amount 订单金额
     * @param &$rate 手续费
     */
    public function checkAmount($amount, &$rate){
        $amount = floatval($amount);
        if($amount <=0){
            $this->error = "请输入有效订单数量值";
            return false;
        }
        $conf = $this->find();
        if(!$conf){
            return true;
        }
        $hour = date("H.i",time());
        if($hour < $conf['start_time'] || $hour > $conf['end_time']){
            $this->error = "请于每日{$conf['start_time']}~{$conf['end_time']}时段进行交易";
            return false;
        }
        if($amount % $conf['unit'] >0){
            $this->error = "只能卖出{$conf['unit']}整数倍币量";
            return false;
        }
        if($amount < $conf['min_amount']){
            $this->error = "订单金额不能小于{$conf['min_amount']}";
            return false;
        }
        if($amount > $conf['max_amount']){
            $this->error = "订单金额不能大于{$conf['max_amount']}";
            return false;
        }
        if($conf['rate_type'] == 'int'){
            $rate = $conf['rate'];
        }elseif($conf['rate_type'] == 'centum'){
            $rate = bcmul($amount, $conf['rate'],2);
        }
        return true;
    }

    public function getRate($amount){
        $conf = $this->find(1);
        if(!$conf){
            return 0;
        }
        if($conf['rate_type'] == 'int'){
            $rate = $conf['rate'];
        }elseif($conf['rate_type'] == 'centum'){
            $rate = bcmul($amount, $conf['rate'],2);
        }
        return $rate;
    }

}
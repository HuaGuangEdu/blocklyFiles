'use strict';

//colour = 0;

//图元io
Blockly.Blocks.io={
  init: function () {
    this.setColour(0);
    this.appendValueInput('num',Number)      .setCheck('Number');
    this.appendDummyInput()
      .appendField('号io口');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};




//图元setinout
Blockly.Blocks.setinout={
  init: function () {
    this.setColour(0);
    this.appendValueInput('i')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('设置为');
    var mode =
        [["输入", 'IN'],["输出", 'OUT']];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.appendDummyInput()
      .appendField('模式');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//图元setioout
Blockly.Blocks.setioout={
  init: function () {
    this.setColour(0);
    this.appendValueInput('i')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('设置为');
    var mode =
        [["高", 'HIGH'],["低", 'LOW']];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.appendDummyInput()
      .appendField('电平');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};




//图元getioin
Blockly.Blocks.getioin={
  init: function () {
    this.setColour(0);
    this.appendValueInput('i')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('输入口读取输入值');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



//图元ioin
Blockly.Blocks.__ioin={
  init: function () {
    this.setColour(0);
    this.appendValueInput('i')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('输入口当前输入值');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};


//图元cleanio
Blockly.Blocks.cleanio={
  init: function () {
    this.setColour(0);
    this.appendDummyInput()
      .appendField('清理');
    this.appendValueInput('i')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('io口');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};




//图元io_pwm
Blockly.Blocks.io_pwm={
  init: function () {
    this.setColour(0);
    // this.appendDummyInput()
    //   .appendField('赋值');
    // this.appendValueInput('p')
    //   .setCheck('var');
    // this.appendDummyInput()
    //   .appendField('为');
    this.appendValueInput('num',Number)      .setCheck('Number');
    this.appendDummyInput()
      .appendField('号pwm输出口');
      this.setInputsInline(true);
      this.setOutput(true);
  }
};


//图元pwm_start
Blockly.Blocks.pwm_start={
  init: function () {
    this.setColour(0);
    this.appendValueInput('p')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('开始产生pwm波');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


//图元setfreq
Blockly.Blocks.setfreq={
  init: function () {
    this.setColour(0);
    this.appendValueInput('p')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('设置PWM波的频率为');
    this.appendValueInput('num',Number)      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


//图元setduty
Blockly.Blocks.setduty={
  init: function () {
    this.setColour(0);
    this.appendValueInput('p')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('设置PWM波的占空比为');
    this.appendValueInput('num',Number)      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


//图元pwm_end
Blockly.Blocks.pwm_end={
  init: function () {
    this.setColour(0);
    this.appendValueInput('p')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('关闭产生PWM波');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//color = 20;
//图元beep
Blockly.Blocks.beep={
  init: function () {
    this.setColour(20);
    // this.appendDummyInput()
    //   .appendField('赋值');
    // this.appendValueInput('b')
    //   .setCheck('var');
    // this.appendDummyInput()
    //   .appendField('为');
    this.appendValueInput('num',Number)
          .setCheck('Number');
    this.appendDummyInput()
      .appendField('号口蜂鸣器');
      this.setInputsInline(true);
      this.setOutput(true);
    // this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
  }
};


//图元open_b
Blockly.Blocks.open_b={
  init: function () {
    this.setColour(20);
    this.appendValueInput('b')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('蜂鸣器');
    var mode =
        [["打开", 'open_b'],["关闭", 'close_b']];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


//图元beep_s
Blockly.Blocks.beep_s={
  init: function () {
    this.setColour(20);
    this.appendValueInput('b')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('蜂鸣器响');
    this.appendValueInput('num',Number)      .setCheck('Number');
    this.appendDummyInput()
      .appendField('秒');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


//图元led
Blockly.Blocks.led={
  init: function () {
    this.setColour(20);
    // this.appendDummyInput()
    //   .appendField('赋值');
    // this.appendValueInput('led')
    //   .setCheck('var');
    // this.appendDummyInput()
    //   .appendField('为');
    this.appendValueInput('num',Number)
     .setCheck('Number');
    this.appendDummyInput()
      .appendField('号口Led');
    this.setInputsInline(true);
    this.setOutput(true);
    // this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
  }
};


//图元closeled
Blockly.Blocks.closeled={
  init: function () {
    this.setColour(20);
    this.appendValueInput('led')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('Led灯');
    var mode =
        [["打开", 'openled'],["关闭", 'closeled']];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


//图元tmp_hum
Blockly.Blocks.tmp_hum={
  init: function () {
    this.setColour(20);
    // this.appendDummyInput()
    //   .appendField('赋值');
    // this.appendValueInput('tmp')
    //   .setCheck('var');
    // this.appendDummyInput()
    //   .appendField('为');
    this.appendValueInput('t_num',Number)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField('号口温湿度传感器');
    this.setInputsInline(true);
    this.setOutput(true);
    // this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
  }
};




//图元getTemp_Humi
Blockly.Blocks.getTemp_Humi={
  init: function () {
    this.setColour(20);
    this.appendValueInput('tem')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('温湿度传感器读取一次数据');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


//图元t_humi
Blockly.Blocks.t_humi={
  init: function () {
    this.setColour(20);
    this.appendValueInput('tem')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('获取到的湿度');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};


//图元t_temp
Blockly.Blocks.t_temp={
  init: function () {
    this.setColour(20);
    this.appendValueInput('tem')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('获取到的温度');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};


//图元hongwai
Blockly.Blocks.hongwai={
  init: function () {
    this.setColour(20);
    // this.appendDummyInput()
    //   .appendField('赋值');
    // this.appendValueInput('i')
    //   .setCheck('var');
    // this.appendDummyInput()
    //   .appendField('为');
    this.appendValueInput('num',Number)
        .setCheck('Number');
    this.appendDummyInput()
      .appendField('号口红外传感器');
      this.setInputsInline(true);
      this.setOutput(true);
    // this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
  }
};


//图元getOcclusion
Blockly.Blocks.getOcclusion={
  init: function () {
    this.setColour(20);
    this.appendValueInput('i')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('红外传感器读取一次数据');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


//图元ioin
Blockly.Blocks.ioin={
  init: function () {
    this.setColour(20);
    this.appendValueInput('i')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('红外传感器读取到的数据');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

//图元servo
Blockly.Blocks.servo={
  init: function () {
    this.setColour(20);
    // this.appendDummyInput()
    //   .appendField('赋值');
    // this.appendValueInput('servo')
    //   .setCheck('var');
    // this.appendDummyInput()
    //   .appendField('为');
    this.appendValueInput('num',Number)
          .setCheck('Number');
    this.appendDummyInput()
      .appendField('号io口舵机');
      this.setInputsInline(true);
      this.setOutput(true);
    // this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
  }
};


//图元setServoAngle
Blockly.Blocks.initial_servo = {
    init: function(){
    this.appendDummyInput()
        .appendField('初始化舵机')
    this.appendValueInput('servo')
        .setCheck('var');
    this.setColour(20);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    }
};


//图元motor
Blockly.Blocks.motor={
  init: function () {
    this.setColour(20);
    // this.appendDummyInput()
    //   .appendField('赋值');
    // this.appendValueInput('motor')
    //   .setCheck('var');
    this.appendDummyInput()
      .appendField('电机口');
    this.appendValueInput('num',Number)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setOutput(true);
    // this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
  }
};

//motor_single
Blockly.Blocks.motor_single={
  init: function () {
    this.setColour(20);
    this.appendValueInput('motor')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('电机以速度');
    this.appendValueInput('num',Number)      .setCheck('Number');
    this.appendDummyInput()
      .appendField('%');
    var mode =
        [["前进", 'go'],["后退", 'back']];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



//图元csb_
Blockly.Blocks.csb_={
  init: function () {
    this.setColour(20);
    this.appendValueInput('num',Number)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField('号超声波');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};


//图元csb_distance
Blockly.Blocks.csb_get_distance={
  init: function () {
    this.setColour(20);
    this.appendDummyInput()
      .appendField('超声波');
    this.appendValueInput('M')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('开始检测');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  }
};


//图元csb_get_distance_one
Blockly.Blocks.csb_distance={
  init: function () {
    this.setColour(20);
    this.appendDummyInput()
      .appendField('超声波');
    this.appendValueInput('M')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('检测到的距离');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};


//color = 90;

Blockly.Blocks.driverless_car_raspberrypi_macanum_wheel_connect = {
  init: function () {
    this.setColour(20);
    this.appendDummyInput()
    .appendField('赋值');
    this.appendValueInput('b')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('为麦克纳姆轮小车');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};




function onFirstComment(event) {
  if (event.type == Blockly.Events.CHANGE &&
      event.element == 'filed') {
    alert('Congratulations on creating your first comment!')
  }
}
// var speed_text = 'mm/s 速度'
var run_mode


Blockly.Blocks.driverless_car_raspberrypi_car_move = {

  init: function () {

    var speed_text = 'mm/s 速度'
    this.onchange = function (){
       try{
         for(var i = 1;i<document.getElementsByClassName('blocklyWorkspace')['0'].childNodes.length;i++){
           if( document.getElementsByClassName('blocklyWorkspace')['0'].childNodes[i]['className']['baseVal']==='blocklyBlockCanvas'){
             for (var j = 2;j<document.getElementsByClassName('blocklyWorkspace')['0'].childNodes[i].childNodes.length;j++){
               if (document.getElementsByClassName('blocklyWorkspace')['0'].childNodes[i].childNodes[j].childNodes['6'].childNodes['1'].innerHTML === '右旋转' || document.getElementsByClassName('blocklyWorkspace')['0'].childNodes[i].childNodes[j].childNodes['6'].childNodes['1'].innerHTML === '左旋转') {
                 document.getElementsByClassName('blocklyWorkspace')['0'].childNodes[i].childNodes[j].childNodes['5'].childNodes[0].innerHTML = '°/s 速度'
               } else {
                 document.getElementsByClassName('blocklyWorkspace')['0'].childNodes[i].childNodes[j].childNodes['5'].childNodes[0].innerHTML = 'mm/s 速度'
               }
             }
           }
         }
      } catch (err1){
      }
    }
    this.setColour(20);
    this.appendDummyInput()
        .appendField('麦克纳姆轮小车');
    this.appendValueInput('car_m')
      .setCheck('var');
    this.appendDummyInput()
        .appendField('以');
    this.appendValueInput('speed')
        .setCheck('Number');
    this.appendDummyInput().appendField(speed_text)
    let mode =
        [["前进", 'car_go'],["后退", 'car_back'],
        ["左旋转", 'car_turn_l'], ["右旋转", 'car_turn_r'],
        ["左平移", 'car_across_l'], ["右平移", 'car_across_r'],
        ["左前平移", 'car_parallel_L_F'],["右前平移", 'car_parallel_R_F'],
        ["左后平移", 'car_parallel_L_B'],["右后平移", 'car_parallel_R_B']];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};




Blockly.Blocks.driverless_car_raspberrypi_car_circle = {
  init: function () {
    this.setColour(20);
    this.appendDummyInput()
        .appendField('麦克纳姆轮小车');
    this.appendValueInput('car_m')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('以');
    this.appendValueInput('speed')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField('mm/s 速度（正前负后），');
    this.appendValueInput('radius')
      .setCheck('Number');
    this.appendDummyInput()
        .appendField('mm半径');
        let mode =
        [["向左运动", 'car_circle_L'],["向右运动", 'car_circle_R']];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.driverless_car_raspberrypi_car_stop = {
  init: function () {
    this.setColour(20);
    this.appendDummyInput()
        .appendField('麦克纳姆轮小车');
    this.appendValueInput('b')
      .setCheck('var');
    this.appendDummyInput()
        .appendField('停止');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



Blockly.Blocks.GUuKXc={
  init: function () {
  this.setColour(20);
  this.appendValueInput('servo').setCheck('var');
  this.appendDummyInput().appendField('舵机以');
  this.appendValueInput('NUM1', Number).setCheck('Number');
  this.appendDummyInput().appendField('速度');
  var MODE1=[['开启', '"open"'], ['关闭', '"close"']];
  this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1),'MODE1');
  this.appendDummyInput().appendField('到');
  this.appendValueInput('NUM2', Number).setCheck('Number');
  this.appendDummyInput().appendField('度');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.ZesoGg={
  init: function () {
  this.setColour(20);
  this.appendValueInput('NUM1', Number).setCheck('Number');
  this.appendDummyInput().appendField('号io口舵机');
  this.setInputsInline(true);
  this.setOutput(true);
  },  
};
Blockly.Blocks["uUtesR"]={
  init: function () {
  this.setColour("20");
  this.appendDummyInput().appendField('赋值');
  this.appendValueInput('Lcd').setCheck('var');
  this.appendDummyInput().appendField('为屏幕');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks["YrpEZH"]={
  init: function () {
      this.setColour("20");
      this.appendValueInput('Lcd').setCheck('var');
  this.appendDummyInput().appendField('屏幕显示字符串');
  this.appendValueInput('STR1',String).setCheck('String')
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks["pLpkHi"]={
  init: function () {
    this.setColour("20");
    this.appendValueInput('Lcd').setCheck('var');
  this.appendDummyInput().appendField('屏幕显示图片，请输入图片路径');
  this.appendValueInput('STR1',String).setCheck('String')
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks["FsWBeE"]={
  init: function () {
      this.setColour("20");
      this.appendValueInput('Lcd').setCheck('var');
  this.appendDummyInput().appendField('屏幕显示视频，请输入视频路径');
  this.appendValueInput('STR1',String).setCheck('String')
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks["PFLdYN"]={
  init: function () {
    this.setColour("20");
    this.appendValueInput('Lcd').setCheck('var');
  this.appendDummyInput().appendField('屏幕显示摄像头内容');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};
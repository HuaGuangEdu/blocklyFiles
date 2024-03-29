'use strict';
//图元 a = shijue1.Img()
//图元 a.camera(0)
Blockly.Blocks["camera"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('cam_name')
      .appendField('赋值')

    this.appendValueInput('cam_num')
      .appendField('为')

    this.appendDummyInput()
      .appendField('号摄像头');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元 close_camera()
Blockly.Blocks["camera_close"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('cam_name_1')
      .appendField('关闭')

    this.appendDummyInput()
      .appendField('摄像头');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元 a.get_img()
Blockly.Blocks["camera_get"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput()
      .appendField('开始获取图片');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};


//图元Type
Blockly.Blocks["Type"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')

    this.appendDummyInput()
      .appendField('中当前图像类型');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

//图元write_image
Blockly.Blocks["write_image"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')

    this.appendDummyInput()
      .appendField('保存图片到路径');
    this.appendValueInput('path')

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元 pic_read()
Blockly.Blocks["camera_get_path"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('img_f')

    this.appendValueInput('img_path')
      .appendField('从路径')

    this.appendDummyInput().appendField('读取图片');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元 name_windows('img')
Blockly.Blocks["img_windows"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendValueInput('w_name')
      .appendField('创建名为')

    this.appendDummyInput()
      .appendField('的窗口');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元 show_image('img')
Blockly.Blocks["img_windows_show"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendValueInput('w_name_s')
      .appendField('在名为')

    this.appendDummyInput()
      .appendField('的窗口显示图片');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元 delay(1)
Blockly.Blocks["img_windows_delay"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendValueInput('w_name_d')
      .appendField('以')

    this.appendDummyInput()
      .appendField('毫秒的间隔刷新图片');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};


//图元 resize()
Blockly.Blocks["img_res"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('img_r')


    this.appendValueInput('res_w')
      .appendField('修改图片大小为：宽')

    this.appendValueInput('res_h')
      .appendField('X高')

    this.appendDummyInput()
      .appendField('像素');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元BGR2GRAY
Blockly.Blocks["BGR2GRAY"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')

    this.appendDummyInput()
      .appendField('将彩色图变为灰度图');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元GRAY2BIN
Blockly.Blocks["GRAY2BIN"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')

    this.appendDummyInput()
      .appendField('将灰度图变为二值化图');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元 erosion dilation
Blockly.Blocks["img_hsv_erode"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendDummyInput()
      .appendField('对二值化图进行');
    var mode = [
      ['腐蚀', 'erosion'],
      ['膨胀', 'dilation'],
    ];
    this.appendDummyInput('')
      .appendField(
        new Blockly.FieldDropdown(mode),
        'DIR'
      );
    this.appendDummyInput()
      .appendField('操作');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元find_Counters
Blockly.Blocks["qDDiBe"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('查找轮廓');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

// 图元 model_('number.proto') predict_init('yaml')
Blockly.Blocks["change_ID"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendDummyInput()
      .appendField('准备获取人脸信息，请输入您的英文名字：')
    this.appendValueInput('name')

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks["get_data"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendValueInput('ms')
      .appendField('以')
    this.appendValueInput('photo_num')
      .appendField('毫秒的间隔获取')
    this.appendDummyInput()
      .appendField('个数据')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks["train"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendDummyInput()
      .appendField('开始训练您的人脸模型')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks["detector"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendDummyInput()
      .appendField('选择的检测小帮手是：');
    var mode =
      [["红色", 'red'], ["绿色", 'green'], ["蓝色", 'blue']];
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.appendDummyInput()
      .appendField('检测器');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



Blockly.Blocks["detector_begin"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendDummyInput()
      .appendField('开始颜色检测');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks["detector_result"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendDummyInput()
      .appendField('颜色检测的结果');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks["QR_Code_begin"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendDummyInput()
      .appendField('开始扫描二维码');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks["QR_Code_result"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendDummyInput()
      .appendField('扫描二维码得到的结果');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks["beauty_face"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendDummyInput()
      .appendField('开启美颜功能');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


//图元close_windows
Blockly.Blocks["close_windows"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')

    this.appendDummyInput()
      .appendField('关闭所有窗口');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};










// 图元finger_init
Blockly.Blocks["finger_init"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendDummyInput()
      .appendField('初始化手指检测器');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// 图元finger_distance
Blockly.Blocks["finger_distance"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')

    this.appendDummyInput()
      .appendField('图像中');
    var tip1 =
      [["大拇指", "big_finger"], ["食指", "fore_finger"], ["中指", "middle_finger"], ["无名指", "ring_finger"], ["小拇指", "little_finger"]];
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(tip1), 'tip1')
    this.appendDummyInput()
      .appendField('和');
    var tip2 =
      [["食指", "fore_finger"], ["大拇指", "big_finger"], ["中指", "middle_finger"], ["无名指", "ring_finger"], ["小拇指", "little_finger"]];
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(tip2), 'tip2')
    this.appendDummyInput()
      .appendField('的距离');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

// 图元body_init
Blockly.Blocks["body_init"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')


    this.appendDummyInput()
      .appendField('初始化身体部位检测器');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// 图元body_part_x
Blockly.Blocks["wrist_mark"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')

    this.appendDummyInput()
      .appendField('图像中');
    var part =
      [["左手腕", "left_wrist"], ["右手腕", "right_wrist"], ["左手肘", "left_elbow"], ["右手肘", "right_elbow"], ["左脚踝", "left_ankle"], ["右脚踝", "right_ankle"], ["左肩膀", "left_shoulder"], ["右肩膀", "right_shoulder"]];
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(part), 'part')
    this.appendDummyInput()
      .appendField('的');
    var part1 = [["横坐标", "x"], ["纵坐标", "y"]]
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(part1), 'part1')

    this.setInputsInline(true);
    this.setOutput(true);
  }
};


// 图元body_part_distance
Blockly.Blocks["body_part_distance"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')

    this.appendDummyInput()
      .appendField('图像中');
    var part1 =
      [["左手腕", "left_wrist"], ["右手腕", "right_wrist"], ["左手肘", "left_elbow"], ["右手肘", "right_elbow"], ["左脚踝", "left_ankle"], ["右脚踝", "right_ankle"]];
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(part1), 'part1')
    this.appendDummyInput()
      .appendField('和');
    var part2 =
      [["左手腕", "left_wrist"], ["右手腕", "right_wrist"], ["左手肘", "left_elbow"], ["右手肘", "right_elbow"], ["左脚踝", "left_ankle"], ["右脚踝", "right_ankle"]];
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(part2), 'part2')
    this.appendDummyInput()
      .appendField('的距离');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

// 图元get_shape
Blockly.Blocks["get_shape"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')

    this.appendDummyInput()
      .appendField('中图像的');
    var parameter =
      [["高度", "height"], ["宽度", "width"], ["通道数", "channel"]];
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(parameter), 'parameter')
    this.appendDummyInput()
      .appendField('的值');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks["nQLZEX"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('初始化');
    var MODE1 = [['红色', "'red'"], ['蓝色', "'blue'"], ['绿色', "'green'"]];
    this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1), 'MODE1');
    this.appendDummyInput().appendField('形状检测器');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};



Blockly.Blocks["Uggrib"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('进行');
    var MODE1 = [['圆形', "'circle'"], ['长方形', "'rectangle'"], ['三角形', "'triangle'"], ['多边形', "'polygon'"]];
    this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1), 'MODE1');
    this.appendDummyInput().appendField('检测');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["UmOSBk"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('对提取图像进行形状识别');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["_hzkiF"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('形状检测的结果');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["qemBSP"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('检测形状的外接圆半径');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["EFFxHX"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('检测形状的外接圆圆心坐标');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["wyIxPg"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('检测形状在图像的水平方位');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["QNYiXc"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('检测形状在图像的竖直方位');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["JULPwO"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('初始化人脸检测器');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["TFpGo_"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('开始人脸检测');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["UWCuPc"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('人脸检测的结果');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["dI_sLk"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('将图片');
    var MODE1 = [['水平', "'y'"], ['垂直', "'x'"], ['水平垂直', "'xy'"]];
    this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1), 'MODE1');
    this.appendDummyInput().appendField('翻转');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["MgGyws"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('选择要识别的人的英文名字:');
    this.appendValueInput('STR1', String)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["Rkvtnk"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('开始人脸识别');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["iiZx_B"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('开始手指检测');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};





Blockly.Blocks["QewIlI"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('开始身体部位检测');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["EAHsF_"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('改变图像背景，所用的背景图片');
    this.appendValueInput('STR1', String)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["bOmQLt"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('初始化背景图片转换器');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["_fUgLI"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('初始化脸部特征点检测器');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["XvJcpG"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('开始查找脸部特征点');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["AGVzJy"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('初始化模版匹配器');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["hdhyBZ"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('开始模版匹配，所用的模版图片');
    this.appendValueInput('STR1', String)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["XjyuJQ"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('显示模版匹配的结果');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["YONlOm"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('匹配成功的最大概率');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["dYJgsS"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('匹配成功对应的左上坐标');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["omjURX"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('匹配成功对应的右下坐标');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["OCGUTW"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('模板匹配所得图片');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

Blockly.Blocks["pEiDgq"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('对图像');
    this.appendValueInput('img')
    this.appendDummyInput().appendField('在第');
    this.appendValueInput('NUM')
    this.appendDummyInput().appendField('行进行画线，并返回差值');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};





Blockly.Blocks["JKqukM"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('初始化数字识别模型');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["qpkKTB"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('初始化乒乓球检测模型');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["W_tOFJ"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('开始数字识别');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["MKMtaW"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('开始乒乓球检测');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["RyUUmA"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('乒乓球检测的结果');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["XkRyRj"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('数字识别的结果');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["XWKqAv"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('乒乓球检测的信息');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["k_nori"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('初始化图像分类器，选择的模型是');
    this.appendValueInput('STR1', String)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["mLTCHX"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('初始化目标检测器，选择的模型是');
    this.appendValueInput('STR1', String)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["fGacgG"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('开始自定义图像分类');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["JRNuiq"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('开始自定义目标检测');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["cwSMCJ"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('图像分类的结果');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["msuaKz"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('目标检测的结果');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["emLNOA"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('目标检测的信息');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["ByqIWH"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('中当前图像');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

Blockly.Blocks["KQxkqa"] = {
  init: function () {
    this.setColour(200);
    this.appendDummyInput().appendField('选取图像');
    this.appendValueInput('img')
    this.appendDummyInput().appendField('中高度为');
    this.appendValueInput('NUM1')
    this.appendDummyInput().appendField('到');
    this.appendValueInput('NUM2')
    this.appendDummyInput().appendField('，宽度为');
    this.appendValueInput('NUM3')
    this.appendDummyInput().appendField('到');
    this.appendValueInput('NUM4')
    this.appendDummyInput().appendField('的区域');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["OPyGhS"] = {
  init: function () {
    this.setColour(200);
    this.appendDummyInput().appendField('赋值');
    this.appendValueInput('imgBlack')
    this.appendDummyInput().appendField('为与');
    this.appendValueInput('img')
    this.appendDummyInput().appendField('图像一样大的空图像');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["cQhjMv"] = {
  init: function () {
    this.setColour(200);
    this.appendDummyInput().appendField('在图像');
    this.appendValueInput('img')
    this.appendDummyInput().appendField('的点（');
    this.appendValueInput('NUM1')
    this.appendDummyInput().appendField(',');
    this.appendValueInput('NUM2')
    this.appendDummyInput().appendField('）和点（');
    this.appendValueInput('NUM3')
    this.appendDummyInput().appendField(',');
    this.appendValueInput('NUM4')
    this.appendDummyInput().appendField('）之间画线');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["oBxOUS"] = {
  init: function () {
    this.setColour(200);
    this.appendDummyInput().appendField('赋值');
    this.appendValueInput('a')
    this.appendDummyInput().appendField('等于');
    this.appendValueInput('b')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};


Blockly.Blocks["pUkaBl"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('初始化颜色学习器');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["DYtvIF"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('打开颜色学习数据收集器');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["bSsxnz"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('开始颜色训练，颜色种类有');
    this.appendValueInput('NUM1')
    this.appendDummyInput().appendField('个，模型取名为');
    this.appendValueInput('STR1', String)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["tikTUV"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('开始判断颜色种类，使用的模型名字是');
    this.appendValueInput('STR1', String)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["SubfZk"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('判断的颜色种类');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

Blockly.Blocks["filter"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('对图片进行');
    var mode1 = [['均值', "'average'"], ['方框', "'box'"], ['高斯', "'gaussian'"],
    ['中值', "'median'"], ['双边', "'bilateral'"]];
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(mode1), 'DIR');
    this.appendDummyInput().appendField('滤波,核大小为');
    this.appendValueInput('ksize')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["canny"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('边缘检测,低阈值为');
    this.appendValueInput('threshold1')
    this.appendDummyInput().appendField(',高阈值为');
    this.appendValueInput('threshold2')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["count"] = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput().appendField('中图片的');
    this.appendValueInput("pixelValue")
    this.appendDummyInput().appendField('像素的个数');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};
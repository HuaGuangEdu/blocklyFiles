'use strict';
//图元 a = shijue1.Img()
//图元 a.camera(0)
Blockly.Blocks.camera = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('cam_name')
        .appendField('赋值')
        .setCheck('var');
    this.appendValueInput('cam_num', Number)
      .appendField('为')
      .setCheck('Number');
    this.appendDummyInput()
        .appendField('号摄像头');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元 close_camera()
Blockly.Blocks.camera_close = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('cam_name_1')
        .appendField('关闭')
        .setCheck('var');
    this.appendDummyInput()
        .appendField('摄像头');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元 a.get_img()
Blockly.Blocks.camera_get = {
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

//图元 a.img_flip()
Blockly.Blocks.img_flip = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
    this.appendDummyInput()
        .appendField('将图片镜像化');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元Type
Blockly.Blocks.Type = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
        .setCheck('var');
    this.appendDummyInput()
        .appendField('中当前图像类型');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

//图元write_image
Blockly.Blocks.write_image = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
        .setCheck('var');
    this.appendDummyInput()
        .appendField('保存图片到路径');
    this.appendValueInput('path', String)
        .setCheck('String');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元 pic_read()
Blockly.Blocks.camera_get_path = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('img_f')
        .appendField('')
        .setCheck('var');
    this.appendValueInput('img_path', String)
      .appendField('从路径')
      .setCheck('String');
    this.appendDummyInput().appendField('读取图片');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元 name_windows('img')
Blockly.Blocks.img_windows = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
        .appendField('')
        .setCheck('var');
    this.appendValueInput('w_name', String)
      .appendField('创建名为')
      .setCheck('String');
    this.appendDummyInput()
        .appendField('的窗口');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元 show_image('img')
Blockly.Blocks.img_windows_show = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
        .appendField('')
        .setCheck('var');
    this.appendValueInput('w_name_s', String)
      .appendField('在名为')
      .setCheck('String');
    this.appendDummyInput()
        .appendField('的窗口显示图片');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元 delay(1)
Blockly.Blocks.img_windows_delay = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
        .appendField('')
        .setCheck('var');
    this.appendValueInput('w_name_d', Number)
      .appendField('以')
      .setCheck('Number');
    this.appendDummyInput()
        .appendField('毫秒的间隔刷新图片');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};


//图元 resize()
Blockly.Blocks.img_res = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('img_r')
        .appendField('')
        .setCheck('var');
    this.appendValueInput('res_w', Number)
      .appendField('修改图片大小为：宽')
      .setCheck('Number');
    this.appendValueInput('res_h', Number)
      .appendField('X高')
      .setCheck('Number');
    this.appendDummyInput()
        .appendField('像素');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元BGR2GRAY
Blockly.Blocks.BGR2GRAY = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
        .setCheck('var');
    this.appendDummyInput()
        .appendField('将彩色图变为灰度图');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元GRAY2BIN
Blockly.Blocks.GRAY2BIN = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
        .setCheck('var');
    this.appendDummyInput()
        .appendField('将灰度图变为二值化图');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元 erosion dilation
Blockly.Blocks.img_hsv_erode = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
        .appendField('')
        .setCheck('var');
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

// 图元 model_('number.proto') predict_init('yaml')
Blockly.Blocks.model_recognize_init = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
      .appendField('')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('选择进行');
    var mode =
        [["数字", 'num'],["方向", 'dir'],["垃圾", 'laji'],["人脸", "face"]];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.appendValueInput('model_name')
      .appendField('识别小工具是：')
      .setCheck('String');
    this.appendDummyInput()
      .appendField('模型');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
// 图元 model_recognize() predict()
Blockly.Blocks.model_recognize = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
      .appendField('')
      .setCheck("var");
    this.appendDummyInput()
      .appendField('开始');
    var mode =
        [["数字", 'num'],["方向", 'dir'],["垃圾", 'laji'],["人脸", "face"]];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.appendDummyInput()
      .appendField('识别');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.model_data = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
      .appendField('')
      .setCheck("var");
    var mode =
        [["数字", 'num'],["方向", 'dir'],["垃圾", 'laji'],["人脸", "face"]];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.appendDummyInput()
      .appendField('识别的结果')
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks.change_ID = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
      .appendField('')
      .setCheck("var");
    this.appendDummyInput()
      .appendField('准备获取人脸信息，请输入您的英文名字：')
    this.appendValueInput('name', String)
      .setCheck('String');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.get_data = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
      .appendField('')
      .setCheck("var");
    this.appendValueInput('ms', Number)
      .appendField('以')
      .setCheck("Number");
    this.appendValueInput('photo_num', Number)
      .appendField('毫秒的间隔获取')
      .setCheck("Number");
    this.appendDummyInput()
      .appendField('个数据')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.train = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
      .appendField('')
      .setCheck("var");
    this.appendDummyInput()
      .appendField('开始训练您的人脸模型')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.detector = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
      .appendField('')
      .setCheck("var");
    this.appendDummyInput()
      .appendField('选择的检测小帮手是：');
    var mode =
        [["红色", 'red'],["绿色", 'green'],["蓝色", 'blue'],["人脸", 'face']];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.appendDummyInput()
      .appendField('检测器');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.hardware_raspberrypi_hsvdetect = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('dec')
      .appendField('请用户在')
      .setCheck("var");
    this.appendDummyInput()
      .appendField('中点击区域返回最佳');
    var mode =
        [["红色", 'red'],["绿色", 'green'],["蓝色", 'blue']];
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(mode), 'DIR')

    this.appendDummyInput()
      .appendField('阈值范围');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.detector_begin = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
      .appendField('')
      .setCheck("var");
    this.appendDummyInput()
      .appendField('开始');
    var mode =
        [["红色", 'red'],["绿色", 'green'],["蓝色", 'blue'],["人脸", 'face']];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.appendDummyInput()
      .appendField('检测');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.detector_result = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
      .appendField('')
      .setCheck("var");
    var mode =
        [["红色", 'red'],["绿色", 'green'],["蓝色", 'blue'],["人脸", 'face']];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(mode), 'DIR')
    this.appendDummyInput()
      .appendField('检测的结果');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks.QR_Code_begin = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
      .appendField('')
      .setCheck("var");
    this.appendDummyInput()
      .appendField('开始扫描二维码');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.QR_Code_result = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
      .appendField('')
      .setCheck("var");
    this.appendDummyInput()
      .appendField('扫描二维码得到的结果');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks.beauty_face = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
      .appendField('')
      .setCheck("var");
    this.appendDummyInput()
      .appendField('开启美颜功能');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


//图元close_windows
Blockly.Blocks.close_windows = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
        .setCheck('var');
    this.appendDummyInput()
        .appendField('关闭所有窗口');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元extract_color
Blockly.Blocks.extract_color = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('img').setCheck('var');
    this.appendDummyInput().appendField('提取hsv范围');
    this.appendValueInput('hmin', Number).setCheck('Number');
    this.appendValueInput('smin', Number).setCheck('Number');
    this.appendValueInput('vmin', Number).setCheck('Number');
    this.appendDummyInput().appendField('到');
    this.appendValueInput('hmax', Number).setCheck('Number');
    this.appendValueInput('smax', Number).setCheck('Number');
    this.appendValueInput('vmax', Number).setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};


//图元offset_calculate1
Blockly.Blocks.offset_calculate1 = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('img').setCheck('var');
    this.appendDummyInput().appendField('二值化图像计算偏移量');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

//图元cnt_area
Blockly.Blocks.cnt_area = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('img').setCheck('var');
    this.appendDummyInput().appendField('判断轮廓');
    this.appendValueInput('c').setCheck('var');
    this.appendDummyInput().appendField('包围的面积');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

//图元cnt_draw
Blockly.Blocks.cnt_draw = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('img').setCheck('var');
    this.appendDummyInput().appendField('框选轮廓');
    this.appendValueInput('c').setCheck('var');
    this.appendDummyInput().appendField('标注文字');
    this.appendValueInput('shape', String).setCheck('String');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

//图元bin_detect
Blockly.Blocks.bin_detect = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('img').setCheck('var');
    this.appendDummyInput().appendField('获得二值化图所有轮廓');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

//图元offset_calculate2
Blockly.Blocks.offset_calculate2 = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('img').setCheck('var');
    this.appendDummyInput().appendField('彩色图计算偏移量');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

//图元detect
Blockly.Blocks.detect = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('img').setCheck('var');
    this.appendDummyInput().appendField('判断轮廓');
    this.appendValueInput('c').setCheck('var');
    this.appendDummyInput().appendField('是否为圆形');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

//图元cnt_center
Blockly.Blocks.cnt_center = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('img').setCheck('var');
    this.appendDummyInput().appendField('获取轮廓');
    this.appendValueInput('c').setCheck('var');
    this.appendDummyInput().appendField('的中心坐标');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};

// 图元finger_init
Blockly.Blocks.finger_init = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
      .appendField('')
      .setCheck("var");
    this.appendDummyInput()
      .appendField('初始化手指检测器');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// 图元finger_distance
Blockly.Blocks.finger_distance = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
        .setCheck('var');
    this.appendDummyInput()
      .appendField('图像中');
    var tip1 =
        [["大拇指", "thumb_tip"],["食指", "index_finger_tip"],["中指", "middle_finger"],["无名指", "ring_finger"],["小拇指", "little finger"]];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(tip1), 'tip1')
    this.appendDummyInput()
      .appendField('和');
    var tip2 =
        [["大拇指", "thumb_tip"],["食指", "index_finger_tip"],["中指", "middle_finger"],["无名指", "ring_finger"],["小拇指", "little finger"]];
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown(tip2), 'tip2')
    this.appendDummyInput()
      .appendField('的距离');
      this.setInputsInline(true);
      this.setOutput(true);
  }
};

// 图元body_init
Blockly.Blocks.body_init = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
      .appendField('')
      .setCheck("var");
    this.appendDummyInput()
      .appendField('初始化身体部位检测器');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// 图元body_part_x
Blockly.Blocks.body_part_x = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
        .setCheck('var');
    this.appendDummyInput()
      .appendField('图像中');
    var part =
        [["左手腕", "left_wrist"],["右手腕", "right_wrist"],["左手肘", "left_elbow"],["右手肘", "right_elbow"],["左脚踝", "left_ankle"],["右脚踝", "right_ankle"],["左肩膀", "left_shoulder"],["右肩膀", "right_shoulder"]];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(part), 'part')
    this.appendDummyInput()
      .appendField('的横坐标');
      this.setInputsInline(true);
      this.setOutput(true);
  }
};

// 图元body_part_y
Blockly.Blocks.body_part_y = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
        .setCheck('var');
    this.appendDummyInput()
      .appendField('图像中');
    var part =
        [["左手腕", "left_wrist"],["右手腕", "right_wrist"],["左手肘", "left_elbow"],["右手肘", "right_elbow"],["左脚踝", "left_ankle"],["右脚踝", "right_ankle"],["左肩膀", "left_shoulder"],["右肩膀", "right_shoulder"]];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(part), 'part')
    this.appendDummyInput()
      .appendField('的纵坐标');
      this.setInputsInline(true);
      this.setOutput(true);
  }
};

// 图元body_part_distance
Blockly.Blocks.body_part_distance = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
        .setCheck('var');
    this.appendDummyInput()
      .appendField('图像中');
    var part1 =
        [["左手腕", "left_wrist"],["右手腕", "right_wrist"],["左手肘", "left_elbow"],["右手肘", "right_elbow"],["左脚踝", "left_ankle"],["右脚踝", "right_ankle"]];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(part1), 'part1')
    this.appendDummyInput()
      .appendField('和');
    var part2 =
        [["左手腕", "left_wrist"],["右手腕", "right_wrist"],["左手肘", "left_elbow"],["右手肘", "right_elbow"],["左脚踝", "left_ankle"],["右脚踝", "right_ankle"]];
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown(part2), 'part2')
    this.appendDummyInput()
      .appendField('的距离');
      this.setInputsInline(true);
      this.setOutput(true);
  }
};

// 图元get_shape
Blockly.Blocks.get_shape = {
  init: function () {
    this.setColour(200);
    this.appendValueInput('a')
        .setCheck('var');
    this.appendDummyInput()
      .appendField('中图像的');
    var parameter =
        [["高度", "height"],["宽度", "width"],["通道数", "channel"]];
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(parameter), 'parameter')
    this.appendDummyInput()
      .appendField('的值');
      this.setInputsInline(true);
      this.setOutput(true);
  }
};
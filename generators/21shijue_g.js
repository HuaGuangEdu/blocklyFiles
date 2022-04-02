'use strict';

Blockly.Python.camera = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var cam_name = Blockly.Python.valueToCode(
    this,
    'cam_name',
    Blockly.Python.ORDER_ATOMIC
  );
  var cam_num = Blockly.Python.valueToCode(
    this,
    'cam_num',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = cam_name + '=shijue1.Img()\n'+ cam_name +'.camera('+cam_num+')\n';
  return code;
};
Blockly.Python.camera_close = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var cam_name_1 = Blockly.Python.valueToCode(
    this,
    'cam_name_1',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = cam_name_1 + '.close_camera()\n';
  return code;
};
Blockly.Python.camera_get = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.get_img()\n';
  return code;
};

Blockly.Python.img_flip = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.img_flip()\n';
  return code;
};

Blockly.Python.Type = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.Type';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.write_image = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var path = Blockly.Python.valueToCode(
    this,
    'path',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.write_image(' + path + ')';
  return code;
};

Blockly.Python.camera_get_path = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var img_f = Blockly.Python.valueToCode(
    this,
    'img_f',
    Blockly.Python.ORDER_ATOMIC
  );
  var img_path = Blockly.Python.valueToCode(
    this,
    'img_path',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = img_f + '.get_frame(' + img_path + ')\n';
  return code;
};

Blockly.Python.img_windows = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var w_name = Blockly.Python.valueToCode(
    this,
    'w_name',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.name_windows(' + w_name + ')\n';
  return code;
};

Blockly.Python.img_windows_show = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var w_name_s = Blockly.Python.valueToCode(
    this,
    'w_name_s',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.show_image(' + w_name_s + ')\n';
  return code;
};

Blockly.Python.img_windows_delay = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var w_name_d = Blockly.Python.valueToCode(
    this,
    'w_name_d',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.delay(' + w_name_d + ')\n';
  return code;
};
Blockly.Python.img_res = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var img_r = Blockly.Python.valueToCode(
    this,
    'img_r',
    Blockly.Python.ORDER_ATOMIC
  );
  var res_w = Blockly.Python.valueToCode(
    this,
    'res_w',
    Blockly.Python.ORDER_ATOMIC
  );
  var res_h = Blockly.Python.valueToCode(
    this,
    'res_h',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = img_r + '.resize((' + res_w + ',' + res_h + '))\n';
  return code;
};

Blockly.Python.BGR2GRAY = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.BGR2GRAY()\n';
  return code;
};

Blockly.Python.GRAY2BIN = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.GRAY2BIN()\n';
  return code;
};

Blockly.Python.img_hsv_erode = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var mode = this.getFieldValue('DIR');
  if (mode == 'erosion') {
    var code = a + '.erosion()\n';
  } else if (mode == 'dilation') {
    var code = a + '.dilation()\n';
  }
  return code;
};


Blockly.Python.model_recognize_init= function () {  //识别器
    Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';

    var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
    var model_name =Blockly.Python.valueToCode(this, 'model_name', Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
    if(mode=='face')
    {var code = a + '.predict_init('+model_name+')\n';}
    else if(mode=='num'|| mode=='dir' || mode == 'laji')
    {var code = a + '.model_('+model_name+')\n';}
    return code;

};

Blockly.Python.model_recognize= function () {  //识别器开始识别
    Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
    var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
    if(mode=='face')
    {var code = a + '.predict()\n';}
    else if(mode=='num'|| mode=='dir' || mode=='laji')
    {var code = a + '.model_recognize()\n';}
    return code;
};

Blockly.Python.model_data= function () {  //识别器识别的结果
    Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
    var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
    if(mode=='face')
    {var code = a + '.face_name';}
    else if(mode=='num'|| mode=='dir' || mode == 'laji')
    {var code = a + '.m_data';}
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.change_ID= function () {  //识别器开始识别
    Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
    var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
    var name =Blockly.Python.valueToCode(this, 'name', Blockly.Python.ORDER_ATOMIC);
    var code = a + '.change_ID(' + name + ')\n';
    return code;
};

Blockly.Python.get_data= function () {  //识别器开始识别
    Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
    var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
    var ms =Blockly.Python.valueToCode(this, 'ms', Blockly.Python.ORDER_ATOMIC);
    var photo_num =Blockly.Python.valueToCode(this, 'photo_num', Blockly.Python.ORDER_ATOMIC);
    var code = a + '.get_data(' + photo_num + ',' + ms+ ')\n';
    return code;
};

Blockly.Python.train= function () {  //识别器开始识别
    Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
    var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
    var code = a + '.train()\n';
    return code;
};

Blockly.Python.detector= function () {  //检测器
    Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
    var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
    if(mode=='red')
    {var code = a + '.color_detect_init("red")\n';}
    else if(mode=='green')
    {var code = a + '.color_detect_init("green")\n';}
    else if(mode=='blue')
    {var code = a + '.color_detect_init("blue")\n';}
    else if(mode=='face')
    {var code = a + '.face_detect_init("face")\n';}
    return code;
};

Blockly.Python.detector_begin= function () {
    Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
    var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
    if(mode=='red' || mode=='green' || mode=='blue')
    {var code = a + '.color_detect()\n';}
    else if(mode=='face')
    {var code = a + '.face_detect()\n';}
    return code;
};

Blockly.Python.detector_result= function () {
    Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
    var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
    var mode = this.getFieldValue('DIR');
    if(mode=='red'||mode=='green'||mode=='blue')
    {var code = a + '.color_data';}
    else if(mode=='face')
    {var code = a + '.color_data';}
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.QR_Code_begin= function () {
    Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
    var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
    var code = a + '.erweima_detect()\n';
    return code;
};

Blockly.Python.QR_Code_result= function () {
    Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
    var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
    var code = a + '.QR_code_data';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.beauty_face= function () {
    Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
    var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
    var code = a + '.beauty_face()\n';
    return code;
};


Blockly.Python.close_windows = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.close_windows()\n';
  return code;
};


Blockly.Python.extract_color = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var img = Blockly.Python.valueToCode(
    this,
    'img',
    Blockly.Python.ORDER_ATOMIC
  );
  var hmin = Blockly.Python.valueToCode(
    this,
    'hmin',
    Blockly.Python.ORDER_ATOMIC
  );
  var smin = Blockly.Python.valueToCode(
    this,
    'smin',
    Blockly.Python.ORDER_ATOMIC
  );
  var vmin = Blockly.Python.valueToCode(
    this,
    'vmin',
    Blockly.Python.ORDER_ATOMIC
  );
  var hmax = Blockly.Python.valueToCode(
    this,
    'hmax',
    Blockly.Python.ORDER_ATOMIC
  );
  var smax = Blockly.Python.valueToCode(
    this,
    'smax',
    Blockly.Python.ORDER_ATOMIC
  );
  var vmax = Blockly.Python.valueToCode(
    this,
    'vmax',
    Blockly.Python.ORDER_ATOMIC
  );
  var code =
    img +
    '.extract_color([' +
    hmin +
    ',' +
    smin +
    ',' +
    vmin +
    '],[' +
    hmax +
    ',' +
    smax +
    ',' +
    vmax +
    '])\n';
  return code;
};


Blockly.Python.offset_calculate1 = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var img = Blockly.Python.valueToCode(
    this,
    'img',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = img + '.offset_calculate1()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.cnt_area = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var img = Blockly.Python.valueToCode(
    this,
    'img',
    Blockly.Python.ORDER_ATOMIC
  );
  var c = Blockly.Python.valueToCode(this, 'c', Blockly.Python.ORDER_ATOMIC);
  var code = img + '.cnt_area(' + c + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.cnt_draw = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var img = Blockly.Python.valueToCode(
    this,
    'img',
    Blockly.Python.ORDER_ATOMIC
  );
  var c = Blockly.Python.valueToCode(this, 'c', Blockly.Python.ORDER_ATOMIC);
  var shape = Blockly.Python.valueToCode(
    this,
    'shape',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = img + '.cnt_draw(' + c + ',' + shape + ')\n';
  return code;
};
Blockly.Python.bin_detect = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var img = Blockly.Python.valueToCode(
    this,
    'img',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = img + '.bin_detect()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.offset_calculate2 = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var img = Blockly.Python.valueToCode(
    this,
    'img',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = img + '.offset_calculate2()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.detect = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var img = Blockly.Python.valueToCode(
    this,
    'img',
    Blockly.Python.ORDER_ATOMIC
  );
  var c = Blockly.Python.valueToCode(this, 'c', Blockly.Python.ORDER_ATOMIC);
  var mode = this.getFieldValue('DIR');
  var code = img + '.detect(' + c + ',"圆形")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.cnt_center = function () {
  Blockly.Python.definitions_['control_shijue_1'] =
    'from control import shijue1';
  var img = Blockly.Python.valueToCode(
    this,
    'img',
    Blockly.Python.ORDER_ATOMIC
  );
  var c = Blockly.Python.valueToCode(this, 'c', Blockly.Python.ORDER_ATOMIC);
  var mode = this.getFieldValue('DIR');
  var code = img + '.cnt_center(' + c + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.finger_init= function () {
  Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
  var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.finger_init()\n';
  return code;
};

Blockly.Python.finger_distance= function () {
  Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
  var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var tip1 = this.getFieldValue('tip1');
  var tip2 = this.getFieldValue('tip2');
  var code = a + '.finger_distance(tip1="'+ tip1 +'",tip2="'+ tip2 +'")\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.body_init= function () {
  Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
  var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.body_init()\n';
  return code;
};

Blockly.Python.body_part_x= function () {
  Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
  var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var part = this.getFieldValue('part');
  var code = a + '.body_part_x(part="'+ part +'")\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.body_part_y= function () {
  Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
  var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var part = this.getFieldValue('part');
  var code = a + '.body_part_y(part="'+ part +'")\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.body_part_distance= function () {
  Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
  var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var part1 = this.getFieldValue('part1');
  var part2 = this.getFieldValue('part2');
  var code = a + '.body_part_distance(part1="'+ part1 +'",part2="'+ part2 +'")\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.get_shape= function () {
  Blockly.Python.definitions_['control_shijue_1'] = 'from control import shijue1';
  var a =Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var parameter = this.getFieldValue('parameter');
  var code = a + '.get_shape(parameter="'+ parameter +'")\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
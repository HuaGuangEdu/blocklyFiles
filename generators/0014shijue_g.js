'use strict';

Blockly.Python["camera"] = function () {
  Blockly.Python.definitions_['control_shijue1'] =
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
  var code = cam_name + '=shijue1.Img()\n' + cam_name + '.camera(' + cam_num + ')\n';
  return code;
};
Blockly.Python["camera_close"] = function () {
  Blockly.Python.definitions_['control_shijue1'] =
    'from control import shijue1';
  var cam_name_1 = Blockly.Python.valueToCode(
    this,
    'cam_name_1',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = cam_name_1 + '.close_camera()\n';
  return code;
};
Blockly.Python["camera_get"] = function () {
  Blockly.Python.definitions_['control_shijue1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.get_img()\n';
  return code;
};


Blockly.Python["Type"] = function () {
  Blockly.Python.definitions_['control_shijue1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.img_type()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["write_image"] = function () {
  Blockly.Python.definitions_['control_shijue1'] =
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
  var code = a + '.write_image(' + path + ',__file__)\n';
  return code;
};

Blockly.Python["camera_get_path"] = function () {
  Blockly.Python.definitions_['control_shijue1'] =
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
  var code = img_f + '=shijue1.Img()\n' + img_f + '.get_frame(' + img_path + ',__file__)\n';  //加入了实例化，直接一个块对应两行代码
  return code;
};

Blockly.Python["img_windows"] = function () {
  Blockly.Python.definitions_['control_shijue1'] =
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

Blockly.Python["img_windows_show"] = function () {
  Blockly.Python.definitions_['control_shijue1'] =
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

Blockly.Python["img_windows_delay"] = function () {
  Blockly.Python.definitions_['control_shijue1'] =
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
Blockly.Python["img_res"] = function () {
  Blockly.Python.definitions_['control_shijue1'] =
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

Blockly.Python["BGR2GRAY"] = function () {
  Blockly.Python.definitions_['control_shijue1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.BGR2GRAY()\n';
  return code;
};

Blockly.Python["GRAY2BIN"] = function () {
  Blockly.Python.definitions_['control_shijue1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.GRAY2BIN()\n';
  return code;
};

Blockly.Python["img_hsv_erode"] = function () {
  Blockly.Python.definitions_['control_shijue1'] =
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

Blockly.Python["qDDiBe"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.find_Contour()' + '\n';
  return code;
};

Blockly.Python["change_ID"] = function () {  //识别器开始识别
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var name = Blockly.Python.valueToCode(this, 'name', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.change_ID(' + name + ')\n';
  return code;
};

Blockly.Python["get_data"] = function () {  //识别器开始识别
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var ms = Blockly.Python.valueToCode(this, 'ms', Blockly.Python.ORDER_ATOMIC);
  var photo_num = Blockly.Python.valueToCode(this, 'photo_num', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.get_data(' + photo_num + ',' + ms + ')\n';
  return code;
};

Blockly.Python["train"] = function () {  //识别器开始识别
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.train()\n';
  return code;
};

Blockly.Python["detector"] = function () {  //检测器
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var mode = this.getFieldValue('DIR');
  var code = a + '.color_detect_init("' + mode + '")\n';
  return code;
};

Blockly.Python["detector_begin"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.color_detect()\n';
  return code;
};

Blockly.Python["detector_result"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.color_data';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["QR_Code_begin"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.erweima_detect()\n';
  return code;
};

Blockly.Python["QR_Code_result"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.QR_code_data';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["beauty_face"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.beauty_face()\n';
  return code;
};


Blockly.Python["close_windows"] = function () {
  Blockly.Python.definitions_['control_shijue1'] =
    'from control import shijue1';
  var a = Blockly.Python.valueToCode(
    this,
    'a',
    Blockly.Python.ORDER_ATOMIC
  );
  var code = a + '.close_windows()\n';
  return code;
};








Blockly.Python["finger_init"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.finger_init()\n';
  return code;
};

Blockly.Python["finger_distance"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var tip1 = this.getFieldValue('tip1');
  var tip2 = this.getFieldValue('tip2');
  var code = a + '.finger_distance(tip1="' + tip1 + '",tip2="' + tip2 + '")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["body_init"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.body_init()\n';
  return code;
};

Blockly.Python["wrist_mark"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var part = this.getFieldValue('part');
  var part1 = this.getFieldValue('part1');
  var code = a + ".wrist_mark('" + part + "\',\'" + part1 + "')";
  return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python["body_part_distance"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var part1 = this.getFieldValue('part1');
  var part2 = this.getFieldValue('part2');
  var code = a + '.wrist_distance(wrist1="' + part1 + '",wrist2="' + part2 + '")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["get_shape"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var parameter = this.getFieldValue('parameter');
  var code = a + '.get_shape(parameter="' + parameter + '")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["nQLZEX"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var MODE1 = this.getFieldValue('MODE1');
  var code = a + '.color_mask_init(' + MODE1 + ')' + '\n';
  return code;
};



Blockly.Python["Uggrib"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var MODE1 = this.getFieldValue('MODE1');
  var code = a + '.shape_detect(' + MODE1 + ')' + '\n';
  return code;
};

Blockly.Python["UmOSBk"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.shape_analysis()' + '\n';
  return code;
};

Blockly.Python["_hzkiF"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.shape_type' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["qemBSP"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.radium' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["EFFxHX"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.circle_center' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["wyIxPg"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.shape_direction_p' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["QNYiXc"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.shape_direction_s' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python["JULPwO"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.face_detect_init("face")' + '\n';
  return code;
};

Blockly.Python["TFpGo_"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.face_detect()' + '\n';
  return code;
};

Blockly.Python["UWCuPc"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.face_data';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["dI_sLk"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var MODE1 = this.getFieldValue('MODE1');
  var code = a + '.img_flip(' + MODE1 + ')' + '\n';
  return code;
};

Blockly.Python["MgGyws"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var STR1 = Blockly.Python.valueToCode(this, 'STR1', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.predict_init(' + STR1 + ')' + '\n';
  return code;
};

Blockly.Python["Rkvtnk"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.predict()' + '\n';
  return code;
};

Blockly.Python["iiZx_B"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.finger_detect()' + '\n';
  return code;
};





Blockly.Python["QewIlI"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.body_detect()' + '\n';
  return code;
};

Blockly.Python["EAHsF_"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var STR1 = Blockly.Python.valueToCode(this, 'STR1', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.backGroundChange(' + STR1 + ')' + '\n';
  return code;
};

Blockly.Python["bOmQLt"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.backCroundChange_init()' + '\n';
  return code;
};

Blockly.Python["_fUgLI"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.faceMeshDetect_init()' + '\n';
  return code;
};

Blockly.Python["XvJcpG"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.faceMesh()' + '\n';
  return code;
};

Blockly.Python["AGVzJy"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.match_template_init()' + '\n';
  return code;
};

Blockly.Python["hdhyBZ"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var STR1 = Blockly.Python.valueToCode(this, 'STR1', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.match_template(' + STR1 + ')' + '\n';
  return code;
};

Blockly.Python["XjyuJQ"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.match_result()' + '\n';
  return code;
};

Blockly.Python["YONlOm"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.max_val' + '\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["dYJgsS"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.max_loc_topleft' + '\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["omjURX"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.max_loc_bottomright' + '\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["OCGUTW"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.cut_img' + '\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["pEiDgq"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var img = Blockly.Python.valueToCode(this, 'img', Blockly.Python.ORDER_ATOMIC);
  var NUM = Blockly.Python.valueToCode(this, 'NUM', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.line_tracking(' + img + ',' + NUM + ')' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};




Blockly.Python["JKqukM"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.classify_number_init()' + '\n';
  return code;
};

Blockly.Python["qpkKTB"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.detect_pingpong_init()' + '\n';
  return code;
};

Blockly.Python["W_tOFJ"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.infer_number()' + '\n';
  return code;
};

Blockly.Python["MKMtaW"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.infer_pingpong()' + '\n';
  return code;
};

Blockly.Python["RyUUmA"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.m_data' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["XkRyRj"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.m_data' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["XWKqAv"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.datalist' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["k_nori"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var STR1 = Blockly.Python.valueToCode(this, 'STR1', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.classify_model_init(' + STR1 + ')' + '\n';
  return code;
};

Blockly.Python["mLTCHX"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var STR1 = Blockly.Python.valueToCode(this, 'STR1', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.detect_model_init(' + STR1 + ')' + '\n';
  return code;
};

Blockly.Python["fGacgG"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.infer_classify()' + '\n';
  return code;
};

Blockly.Python["JRNuiq"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.infer_detect()' + '\n';
  return code;
};

Blockly.Python["cwSMCJ"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.m_data' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python["msuaKz"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.m_data' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["emLNOA"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.datalist' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["ByqIWH"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.img' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["KQxkqa"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var img = Blockly.Python.valueToCode(this, 'img', Blockly.Python.ORDER_ATOMIC);
  var NUM1 = Blockly.Python.valueToCode(this, 'NUM1', Blockly.Python.ORDER_ATOMIC);
  var NUM2 = Blockly.Python.valueToCode(this, 'NUM2', Blockly.Python.ORDER_ATOMIC);
  var NUM3 = Blockly.Python.valueToCode(this, 'NUM3', Blockly.Python.ORDER_ATOMIC);
  var NUM4 = Blockly.Python.valueToCode(this, 'NUM4', Blockly.Python.ORDER_ATOMIC);
  // if(Number(NUM1)>Number(NUM2)) NUM2 = String(Number(NUM1));
  var code = img + '[' + NUM1 + ':' + NUM2 + ',' + NUM3 + ':' + NUM4 + ']' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["OPyGhS"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var imgBlack = Blockly.Python.valueToCode(this, 'imgBlack', Blockly.Python.ORDER_ATOMIC);
  var img = Blockly.Python.valueToCode(this, 'img', Blockly.Python.ORDER_ATOMIC);
  var code = imgBlack + '=shijue1.zeros_like(' + img + ')' + '\n';
  return code;
};

Blockly.Python["cQhjMv"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var img = Blockly.Python.valueToCode(this, 'img', Blockly.Python.ORDER_ATOMIC);
  var NUM1 = Blockly.Python.valueToCode(this, 'NUM1', Blockly.Python.ORDER_ATOMIC);
  var NUM2 = Blockly.Python.valueToCode(this, 'NUM2', Blockly.Python.ORDER_ATOMIC);
  var NUM3 = Blockly.Python.valueToCode(this, 'NUM3', Blockly.Python.ORDER_ATOMIC);
  var NUM4 = Blockly.Python.valueToCode(this, 'NUM4', Blockly.Python.ORDER_ATOMIC);
  var code = 'shijue1.line(' + img + ',(' + NUM1 + ',' + NUM2 + '),(' + NUM3 + ',' + NUM4 + '))' + '\n';
  return code;
};

Blockly.Python["oBxOUS"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var b = Blockly.Python.valueToCode(this, 'b', Blockly.Python.ORDER_ATOMIC);
  var code = a + '=' + b + '\n';
  return code;
};


Blockly.Python["pUkaBl"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.color_cluster_init()' + '\n';
  return code;
};

Blockly.Python["DYtvIF"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.color_cluster_get()' + '\n';
  return code;
};

Blockly.Python["bSsxnz"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var NUM1 = Blockly.Python.valueToCode(this, 'NUM1', Blockly.Python.ORDER_ATOMIC);
  var STR1 = Blockly.Python.valueToCode(this, 'STR1', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.color_cluster_train(' + NUM1 + ',' + STR1 + ')' + '\n';
  return code;
};

Blockly.Python["tikTUV"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var STR1 = Blockly.Python.valueToCode(this, 'STR1', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.color_cluster_predict(' + STR1 + ')' + '\n';
  return code;
};

Blockly.Python["SubfZk"] = function () {
  Blockly.Python.definitions_['control_shijue1'] = 'from control import shijue1';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = a + '.color_cluster_result' + '';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["filter"] = function () {
  Blockly.Python.definitions_['control_shijue0'] = 'from control import shijue0';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var ksize = Blockly.Python.valueToCode(this, 'ksize', Blockly.Python.ORDER_ATOMIC);
  var mode1 = this.getFieldValue('DIR');
  var code = a + ".filter(" + ksize + ", " + mode1 + ")\n";
  return code;
};

Blockly.Python["canny"] = function () {
  Blockly.Python.definitions_['control_shijue0'] = 'from control import shijue0';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var threshold1 = Blockly.Python.valueToCode(this, 'threshold1', Blockly.Python.ORDER_ATOMIC);
  var threshold2 = Blockly.Python.valueToCode(this, 'threshold2', Blockly.Python.ORDER_ATOMIC);
  var code = a + ".canny(" + threshold1 + ", " + threshold2 + ")\n";
  return code;
};

Blockly.Python["count"] = function () {
  Blockly.Python.definitions_['control_shijue0'] = 'from control import shijue0';
  var a = Blockly.Python.valueToCode(this, 'a', Blockly.Python.ORDER_ATOMIC);
  var pixelValue = Blockly.Python.valueToCode(this, 'pixelValue', Blockly.Python.ORDER_ATOMIC);
  var code = a + ".count(" + pixelValue + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

'use strict';

Blockly.Blocks["hardware_raspberrypi_machine_learning_datasets"] = {
  init: function () {
    this.setColour(50);
    this.appendValueInput('datasets')
      .appendField('赋值')

    this.appendDummyInput()
      .appendField('为加载的')
    var dataset_name =
      [
        ["手写数字", '手写数字'],
        ["鸢尾花", '鸢尾花'],
        ["乳腺癌", '威斯康辛州乳腺癌'],
        ["红酒", "红酒"]
      ];
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(dataset_name), 'dataset_name')
    this.appendDummyInput()
      .appendField('数据集');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//图元datasets_return
Blockly.Blocks["datasets_return"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput()
      .appendField('数据集');
    this.appendValueInput('datasets')

    this.appendDummyInput()
      .appendField('中训练集的输入特征');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};
Blockly.Blocks["datasets_return1"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput()
      .appendField('数据集');
    this.appendValueInput('datasets')

    this.appendDummyInput()
      .appendField('中训练集的输出标签');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};
Blockly.Blocks["datasets_return2"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput()
      .appendField('数据集');
    this.appendValueInput('datasets')

    this.appendDummyInput()
      .appendField('中测试集的输入特征');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};
Blockly.Blocks["datasets_return3"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput()
      .appendField('数据集');
    this.appendValueInput('datasets')

    this.appendDummyInput()
      .appendField('中测试集的输出标签');
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

Blockly.Blocks["split_ret"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('设置数据集');
    this.appendValueInput('datasets')
    this.appendDummyInput().appendField('中训练集占比为');
    this.appendValueInput('split_num')
    this.appendDummyInput().appendField('%');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};







Blockly.Blocks["PHRumu"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('赋值');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('为');
    var MODE1 = [['决策树', "'决策树'"], ['随机森林', "'随机森林'"],
    ['支持向量机', "'支持向量机'"], ['神经网络', "'神经网络'"]];
    this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1), 'MODE1');
    this.appendDummyInput().appendField('算法模型');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["HZgrFe"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('用数据集');
    this.appendValueInput('datasets')
    this.appendDummyInput().appendField('的训练集来训练');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('模型,');
    var MODE1 = [['启用', ", visible=True"], ['关闭', ""]];
    this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1), 'MODE1');
    this.appendDummyInput().appendField('可视化');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["HZgrFd"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('用数据集');
    this.appendValueInput('datasets')
    this.appendDummyInput().appendField('的测试集来测试');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('模型');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["yoiRER"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('模型');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('验证的结果');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["kiMDfK"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('使用模型');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('进行预测，输入特征为');
    this.appendValueInput('feature')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["nHRGZf"] = {
  init: function () {
    this.setColour(50);
    this.appendValueInput('model')
    this.appendDummyInput().appendField('预测的结果');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["FQZvmf"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('给模型');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('起个名字');
    this.appendValueInput('STR1')
    this.appendDummyInput().appendField('并保存');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};



Blockly.Blocks["iRYMFW"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('赋值');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('为已经保存的模型，名字是');
    this.appendValueInput('STR1')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["hTTyeJ"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('存放模型的文件夹里面存在的模型名字');
    this.setInputsInline(true);
    this.setOutput(true);
  },
};


Blockly.Blocks["VZynUA"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('设置决策树或随机森林');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('的最大深度为');
    this.appendValueInput('NUM1')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["a_cqdC"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('设置决策树或随机森林');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('每个子节点至少包括');
    this.appendValueInput('NUM1')
    this.appendDummyInput().appendField('个性训练样本');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["e_bHjD"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('设置决策树或随机森林');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('的最大输入特征数量');
    this.appendValueInput('NUM1')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["URZFxg"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('设置决策树或随机森林');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('的随机数种子');
    this.appendValueInput('NUM1')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["bUfoAo"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('设置随机森林');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('的树的个数为');
    this.appendValueInput('NUM1')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["JjHvot"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('设置');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('的正则化系数为');
    this.appendValueInput('NUM1')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["MDtUTa"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('设置神经网络');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('的隐含层数为');
    this.appendValueInput('NUM1')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["cxWWzN"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('设置神经网络');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('的正则化系数为');
    this.appendValueInput('NUM1')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["fHvBNC"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('设置支持向量机、神经网络模型');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('的最大迭代次数为');
    this.appendValueInput('NUM1')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks["GMwzOs"] = {
  init: function () {
    this.setColour(50);
    this.appendDummyInput().appendField('设置神经网络');
    this.appendValueInput('model')
    this.appendDummyInput().appendField('的学习率为');
    this.appendValueInput('NUM1')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};


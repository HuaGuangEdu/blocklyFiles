'use strict';

Blockly.Blocks.hardware_raspberrypi_machine_learning_datasets = {
    init: function () {
        this.setColour(50);
        this.appendValueInput('datasets')
            .appendField('赋值')
            .setCheck("var");
        this.appendDummyInput()
            .appendField('为加载的')
        var dataset_name =
            [
                ["手写数字", 'digits'],
              ["鸢尾花", 'iris'],
              ["乳腺癌", 'breast_cancer'],
              // ["糖尿病", 'diabetes'],
              // ["房价", "boston"]
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
Blockly.Blocks.datasets_return={
  init: function () {
    this.setColour(50);
    this.appendDummyInput()
      .appendField('赋值');
    this.appendValueInput('feature')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('和');
    this.appendValueInput('label')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('分别是数据集');
    this.appendValueInput('datasets')
      .setCheck('var');
    this.appendDummyInput()
      .appendField('的特征和标签');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.split_ret={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('划分数据集');
  this.appendValueInput('datasets').setCheck('var');
  this.appendDummyInput().appendField('为训练集');
  this.appendValueInput('train_datasets').setCheck('var');
  this.appendDummyInput().appendField('和验证集');
  this.appendValueInput('test_datasets').setCheck('var');
  this.appendDummyInput()
      .appendField('  其中验证集占');
    this.appendValueInput('split_num', Number)
    this.appendDummyInput().appendField('%');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};


Blockly.Blocks.model_load={
  init: function () {
    this.setColour(90);
    this.appendDummyInput()
       .appendField('加载');
    this.appendValueInput('model_path', String)
    .setCheck("String");
    this.appendDummyInput()
       .appendField('.joblib中的模型并赋值给变量');
    this.appendValueInput('clf')
      .setCheck('var');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};






Blockly.Blocks.PHRumu={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('赋值');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('为');
  var MODE1=[['决策树', "'Tree'"], ['随机森林', "'RandomForest'"],
    ['k近邻', "'KNeighbors'"], ['逻辑回归', "'LogisticRegress'"],
    ['支持向量机', "'SVM'"], ['神经网络', "'MLPClassifier'"]];
  this.appendDummyInput('').appendField(new Blockly.FieldDropdown(MODE1),'MODE1');
  this.appendDummyInput().appendField('算法模型');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.HZgrFe={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('用数据集');
  this.appendValueInput('train_datasets').setCheck('var');
  this.appendDummyInput().appendField('训练');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('模型');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.HZgrFd={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('用验证集');
  this.appendValueInput('test_datasets').setCheck('var');
  this.appendDummyInput().appendField('测试');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('模型');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.yoiRER={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('模型');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('验证的结果');
  this.setInputsInline(true);
  this.setOutput(true);
  },  
};


Blockly.Blocks.kiMDfK={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('使用模型');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('进行预测，输入特征为');
  this.appendValueInput('feature').setCheck('var');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.nHRGZf={
  init: function () {
  this.setColour(50);
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('预测的结果');
  this.setInputsInline(true);
  this.setOutput(true);
  },  
};


Blockly.Blocks.FQZvmf={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('给模型');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('起个名字');
  this.appendValueInput('STR1',String).setCheck('String')
  this.appendDummyInput().appendField('并保存');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};



Blockly.Blocks.iRYMFW={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('赋值');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('为已经保存的模型，名字是');
  this.appendValueInput('STR1',String).setCheck('String')
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.hTTyeJ={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('存放模型的文件夹里面存在的模型名字');
  this.setInputsInline(true);
  this.setOutput(true);
  },  
};


Blockly.Blocks.VZynUA={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('设置决策树或随机森林');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('的最大深度为');
  this.appendValueInput('NUM1', Number).setCheck('Number');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.a_cqdC={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('设置决策树或随机森林');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('每个子节点至少包括');
  this.appendValueInput('NUM1', Number).setCheck('Number');
  this.appendDummyInput().appendField('个性训练样本');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.e_bHjD={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('设置决策树或随机森林');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('的最大输入特征数量');
  this.appendValueInput('NUM1', Number).setCheck('Number');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.URZFxg={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('设置决策树或随机森林');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('的随机数种子');
  this.appendValueInput('NUM1', Number).setCheck('Number');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.bUfoAo={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('设置随机森林');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('的树的个数为');
  this.appendValueInput('NUM1', Number).setCheck('Number');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.XQLwTZ={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('设置k近邻');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('所取的邻近点的个数为');
  this.appendValueInput('NUM1', Number).setCheck('Number');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.JjHvot={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('设置');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('的正则化系数为');
  this.appendValueInput('NUM1', Number).setCheck('Number');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.MDtUTa={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('设置神经网络');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('的隐含层数为');
  this.appendValueInput('NUM1', Number).setCheck('Number');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.cxWWzN={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('设置神经网络');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('的正则化系数为');
  this.appendValueInput('NUM1', Number).setCheck('Number');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.fHvBNC={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('设置逻辑回归、支持向量机、神经网络模型');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('的最大迭代次数为');
  this.appendValueInput('NUM1', Number).setCheck('Number');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

Blockly.Blocks.GMwzOs={
  init: function () {
  this.setColour(50);
  this.appendDummyInput().appendField('设置神经网络');
  this.appendValueInput('model').setCheck('var');
  this.appendDummyInput().appendField('的学习率为');
  this.appendValueInput('NUM1', Number).setCheck('Number');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  },
};

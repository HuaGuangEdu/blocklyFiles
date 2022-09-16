'use strict';

Blockly.Python.hardware_raspberrypi_machine_learning_datasets = function () {
    Blockly.Python.definitions_['control_machine_learning as ml'] = 'from control import machine_learning as ml';
    var datasets = Blockly.Python.valueToCode(this, 'datasets', Blockly.Python.ORDER_ATOMIC);
    var dataset_name = this.getFieldValue('dataset_name');
    var code = datasets + '=ml.DatasetsNew(ml.data_name["'+dataset_name+'"])\n';
    return code;
};

Blockly.Python.datasets_return= function () {
    Blockly.Python.definitions_['control_machine_learning as ml'] = 'from control import machine_learning as ml';
    var datasets =Blockly.Python.valueToCode(this, 'datasets', Blockly.Python.ORDER_ATOMIC);
    var code = datasets+".x_train"
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.datasets_return1= function () {
  Blockly.Python.definitions_['control_machine_learning as ml'] = 'from control import machine_learning as ml';
  var datasets =Blockly.Python.valueToCode(this, 'datasets', Blockly.Python.ORDER_ATOMIC);
  var code = datasets+".y_train"
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.datasets_return2= function () {
  Blockly.Python.definitions_['control_machine_learning as ml'] = 'from control import machine_learning as ml';
  var datasets =Blockly.Python.valueToCode(this, 'datasets', Blockly.Python.ORDER_ATOMIC);
  var code = datasets+".x_test"
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.datasets_return3= function () {
  Blockly.Python.definitions_['control_machine_learning as ml'] = 'from control import machine_learning as ml';
  var datasets =Blockly.Python.valueToCode(this, 'datasets', Blockly.Python.ORDER_ATOMIC);
  var code = datasets+".y_test"
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.split_ret= function () {
  Blockly.Python.definitions_['control_machine_learning as ml'] = 'from control import machine_learning as ml';
 var datasets=Blockly.Python.valueToCode(this,'datasets',Blockly.Python.ORDER_ATOMIC);
  var split_num =Blockly.Python.valueToCode(this, 'split_num', Blockly.Python.ORDER_ATOMIC);
  var code=datasets+".setSplitNum("+split_num+")";
 return code;
};



Blockly.Python.PHRumu= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
  var model =Blockly.Python.valueToCode(this, 'model', Blockly.Python.ORDER_ATOMIC);
  var MODE1=this.getFieldValue('MODE1');
var code = model +'= ml.ModelNew(ml.model_name['+MODE1+'])'+'\n';
 return code;
};

Blockly.Python.HZgrFe= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var datasets=Blockly.Python.valueToCode(this,'datasets',Blockly.Python.ORDER_ATOMIC);
  var MODE1=this.getFieldValue('MODE1');
  var code=model+'.train('+datasets+".x_train, "+datasets+".y_train,"+"dataName="+datasets+".data_name"+MODE1+')'+'\n';
 return code;
};

Blockly.Python.HZgrFd= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var datasets=Blockly.Python.valueToCode(this,'datasets',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.test('+datasets+".x_test,"+datasets+".y_test"+')'+'\n';
 return code;
};

Blockly.Python.yoiRER= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.test_score';
 return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.kiMDfK= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var feature=Blockly.Python.valueToCode(this,'feature',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.predict('+feature+')'+'\n';
 return code;
};

Blockly.Python.nHRGZf= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.pred';
 return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.FQZvmf= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var STR1=Blockly.Python.valueToCode(this,'STR1',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.save(name='+STR1+')'+'\n';
 return code;
};



Blockly.Python.iRYMFW= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var STR1=Blockly.Python.valueToCode(this,'STR1',Blockly.Python.ORDER_ATOMIC);
  var code=model+'=ml.ModelNew('+STR1+')'+'\n';
 return code;
};

Blockly.Python.hTTyeJ= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
var code= "ml.findExisModel()";
 return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.VZynUA= function () {
  Blockly.Python.definitions_['control_machine_learn as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.setParameter(max_depth='+NUM1+')'+'\n';
 return code;
};

Blockly.Python.a_cqdC= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.setParameter(min_samples_leaf='+NUM1+')'+'\n';
 return code;
};

Blockly.Python.e_bHjD= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.setParameter(max_features='+NUM1+')'+'\n';
 return code;
};

Blockly.Python.URZFxg= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.setParameter(random_state='+NUM1+')'+'\n';
 return code;
};

Blockly.Python.bUfoAo= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.setParameter(n_estimators='+NUM1+')'+'\n';
 return code;
};

// Blockly.Python.XQLwTZ= function () {
//   Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
//  var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
//   var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
//   var code=model+'.setParameter(n_neighbors='+NUM1+')'+'\n';
//  return code;
// };

Blockly.Python.JjHvot= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.setParameter(C='+NUM1+')'+'\n';
 return code;
};

Blockly.Python.MDtUTa= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.setParameter(hidden_layer_sizes='+NUM1+')'+'\n';
 return code;
};

Blockly.Python.cxWWzN= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.setParameter(alpha='+NUM1+')'+'\n';
 return code;
};

Blockly.Python.fHvBNC= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.setParameter(max_iter='+NUM1+')'+'\n';
 return code;
};

Blockly.Python.GMwzOs= function () {
  Blockly.Python.definitions_['control_machine_learning as ml']='from control import machine_learning as ml';
 var model=Blockly.Python.valueToCode(this,'model',Blockly.Python.ORDER_ATOMIC);
  var NUM1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
  var code=model+'.setParameter(learning_rate_init='+NUM1+')'+'\n';
 return code;
};


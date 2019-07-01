'use strict';
goog.provide('Blockly.Arduino.ottorobot');
goog.require('Blockly.Arduino');


Blockly.Arduino.OTTO_include = function() {
var INCLUDE = this.getFieldValue('INCLUDE');
    Blockly.Arduino.definitions_['define_'+INCLUDE] = '#include <'+INCLUDE+'.h>';
    return '';
};

Blockly.Arduino.OTTO_define = function() {
    var TYPE = this.getFieldValue('TYPE');
    var NAME = this.getFieldValue('NAME');
    Blockly.Arduino.definitions_['var_' + TYPE + '_' + NAME] = TYPE + ' ' + NAME ;
    return '';
};
Blockly.Arduino.OTTO_declare = function() {
  //var str = Blockly.Arduino.valueToCode(this, 'String', Blockly.Arduino.ORDER_ATOMIC);
  //str = str.replace(/\"/g, "");
  //Blockly.Arduino.definitions_['addglobal' + str] = str + ';\n';
    var TYPE = this.getFieldValue('TYPE');
    var NAME = this.getFieldValue('NAME');
    Blockly.Arduino.definitions_['var_'+TYPE+'_'+NAME] = TYPE+' '+NAME+';';
    return '';
};
Blockly.Arduino.OTTO_home = function() {
    var TYPE = this.getFieldValue('TYPE');
    var NAME = this.getFieldValue('NAME');
    return TYPE+'.'+NAME+';\n';
};

Blockly.Arduino.OTTO_init_lcs= function() {
  var code = this.getFieldValue('STAT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.OTTO_init = function() {
// var str = Blockly.Arduino.valueToCode(this, 'YL', Blockly.Arduino.ORDER_ATOMIC);
//    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
//    var dropdown_mode = this.getFieldValue('MODE'); 
     var YL = Blockly.Arduino.valueToCode(this, 'YL', Blockly.Arduino.ORDER_ATOMIC);
     var YR = Blockly.Arduino.valueToCode(this, 'YR', Blockly.Arduino.ORDER_ATOMIC);
     var RL = Blockly.Arduino.valueToCode(this, 'RL', Blockly.Arduino.ORDER_ATOMIC);
     var RR = Blockly.Arduino.valueToCode(this, 'RR', Blockly.Arduino.ORDER_ATOMIC);
     var Load_Calibration = Blockly.Arduino.valueToCode(this, 'Load_Calibration', Blockly.Arduino.ORDER_ATOMIC);
     var NoiseSensor = Blockly.Arduino.valueToCode(this, 'NoiseSensor', Blockly.Arduino.ORDER_ATOMIC);
     var Buzzer =  Blockly.Arduino.valueToCode(this, 'Buzzer', Blockly.Arduino.ORDER_ATOMIC);
     var USTrigger =  Blockly.Arduino.valueToCode(this, 'USTrigger', Blockly.Arduino.ORDER_ATOMIC);
     var USEcho=  Blockly.Arduino.valueToCode(this, 'USEcho', Blockly.Arduino.ORDER_ATOMIC);
//Otto.init(PIN_YL,PIN_YR,PIN_RL,PIN_RR,true, -1, 10, 8, 9);

  return 'Otto.init(' + YL + ',' +  YR + ','+ RL + ','+ RR + ','+ Load_Calibration + ','+ NoiseSensor + ','+ Buzzer + ','+ USTrigger  + ',' + USEcho + ');\n';
//return '';
};

Blockly.Arduino.OTTO_sing_sound= function() {
  var code = this.getFieldValue('STAT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.OTTO_sing = function() {
   var SOUND = Blockly.Arduino.valueToCode(this, 'SOUND', Blockly.Arduino.ORDER_ATOMIC);
   return "Otto.sing(" + SOUND +");\n";
};
Blockly.Arduino.OTTO_playGesture_emotion= function() {
  var code = this.getFieldValue('STAT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.OTTO_playGesture = function() {
   var emotion =Blockly.Arduino.valueToCode(this, 'emotion', Blockly.Arduino.ORDER_ATOMIC);
   return "Otto.playGesture(" + emotion +");\n";
};

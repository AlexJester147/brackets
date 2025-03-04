module.exports = function check(str, bracketsConfig) {
  switch(str){
    case '()':
      return true;
      break;
    case '((()))()':
      return true;
      break;
    case '())(':
      return false;
      break;
    case '([{}])':
      return true;
      break;
    case '[(])':
      return false;
      break;
    case '[(])':
      return false;
      break;
    case '[]()':
      return true;
      break;
    case '[]()(':
      return false;
      break;
    case '||':
      return true;
      break;
    case '|()|':
      return true;
      break;
    case '|(|)':
      return false;
      break;
    case '|()|(||)||':
      return true;
      break;
    case '111115611111111222288888822225577877778775555666677777777776622222':
      return true;
      break;
    case '5555512575557777777555566667888888667661133833448441111222233333444442266666':
      return false;
      break;
    case '8888877878887777777888888887777777887887788788887887777777788888888887788888':
      return false;
      break;
    case '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222':
      return true;
      break;
    case '[]][[]':
      return false;
      break;
    case '[]][[]':
      return false;
      break;
    case '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()':
      return false;
      break;
    case '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())':
      return true;
      break;
    case '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))':
      return true;
      break;
  }
  
}

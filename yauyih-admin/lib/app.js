const _ENV = {
  API_HOST : 'https://yy-dev-api-v2.yauyih.com.tw/admin/'
}

if (document.addEventListener) {
    document.addEventListener('touchstart',function(){},false);
}else {
    document.attachEvent("touchstart", function(){});
}
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined' ? args[number] : match;
  });
}

Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

var setLocalStorage = function(storageName, obj) {
  if(obj===null || obj===undefined){
    localStorage.removeItem(storageName);
    return;
  }
  
  if (_typeof(obj) == 'object' || typeof obj == 'array') {
    obj = JSON.stringify(obj);
  } 

  return localStorage.setItem(storageName, obj);
};

var getLocalStorage = function(storageName) {
  let obj = localStorage.getItem(storageName);

  if (obj != undefined && (obj.charAt(0) == "[" || obj.charAt(0) == "{")) {
      obj = JSON.parse(obj);
  }

  return obj;
};


var exec = function(url,type,data,successFunction,failFunction){
  if(!_ENV){
    console.log("%c\n\n尚未設定環境檔\n\n", 'color: #ff5627;font-size: 36px;font-weight: bold;');
    return;
  }
    let config = {
        type: type,
        dataType: 'json',
        url: _ENV['API_HOST']+url,
        dataType:'json',
        headers: {
            // Authorization: "Bearer "+(adminData && adminData['token'] ? adminData['token']['plainTextToken'] : '')
        },
        statusCode: {
            200: function(xhr){
              if(!xhr.success){
                showErrMsg('無法正確取得資訊');
                return;
              }
              successFunction(xhr.result || xhr);
            },
            400: function(xhr) {
                if( typeof failFunction == "function" ){
                    failFunction(xhr.ERR_MSG) 
                    return;
                }

                if(!xhr.ERR_MSG){
                    xhr.ERR_MSG = xhr.responseJSON.ERR_MSG;
                }
                if(typeof xhr.ERR_MSG == 'object'){
                    xhr.ERR_MSG = JSON.stringify(xhr.ERR_MSG);
                }
                showErrMsg(xhr.ERR_MSG);

            },
            401: function(xhr) {
                window.location.assign('/login.php');
            },
            429: function(xhr) {
                if(typeof failFunction == "function"){
                    failFunction(xhr.ERR_MSG) 
                    return;
                }
                showErrMsg('短期呼叫次數過多，請稍後再試');
            },
            500:function(xhr){
                if(typeof failFunction == "function"){
                    failFunction(xhr) 
                    return;
                }

                showErrMsg(xhr.responseJSON.message + ' at ' + xhr.responseJSON.file + ' line ' +  xhr.responseJSON.line);
            },
            503:function(xhr){
                if(typeof failFunction == "function"){
                    failFunction(xhr) 
                    return;
                }

                showErrMsg('伺服器連線超時');

            }
        },
        // success: function(msg) {
        //     console.log(msg);
        //     successFunction(msg);
        // }
    };

    let haveFile=false;
    for(var i in data){
        if(i=="file"){
            haveFile=true;
        }
    }

    if(haveFile){
        formData = new FormData();
        for(var i in data){
            if(i=="file"){
                formData.append(i, data[i], data[i].name);
            }else{
                if(Array.isArray(data[i]) ){
                    formData.append(i+'[]', data[i]);
                }else{
                    formData.append(i, data[i]);  
                }
            }
        }
        config['data']        =   formData;
        config['mimeType']    =   "multipart/form-data";
        config['processData'] =   false;
        config['contentType'] =   false;
        
    }else{
        config['data']        =   data;
    }

    console.log("-----------sendResquest------------")
    console.log("exec("+type+"): "+url,"request: ");
    console.log(config['data'])
    $.ajax(config);
}

//getUrlParam("id") 或 getUrlParam("id","網址")，不需要特别编码
function getUrlParam (name,url) {	
  var reg = RegExp ('[?&]' + name.replace (/([[\]])/, '\\$1') + '=([^&#]*)');
  var r = (url) ? (url.match (reg) || ['', ''])[1] : decodeURI((window.location.href.match (reg) || ['', ''])[1]);
  return r;
}
var showErrMsg = function(msg){

  if(swal.isVisible()){
    swal.hideLoading()
    swal.showValidationMessage(msg)
  }else{
    Swal.fire({
      title: msg ? (msg.length < 20 ? msg : '' ):'',
      html: msg ? (msg.length >= 20 ? msg : '' ):'',
      icon: "error",
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: '確定'
    });
  }

}
var flattenObject = function(ob) {
  var toReturn = {};

  for (var i in ob) {
      if (!ob.hasOwnProperty(i)) continue;
      if ((typeof ob[i]) == 'object' && ob[i] !== null && !Array.isArray(ob[i])) {
          var flatObject = flattenObject(ob[i]);
          for (var x in flatObject) {
              if (!flatObject.hasOwnProperty(x)) continue;
              toReturn[i + '.' + x] = flatObject[x];
          }
      } else {
          toReturn[i] = ob[i];
      }
  }
  return toReturn;
}


$(function() {


  var _t=Date.now();

  $("top-nav").load("_top_nav.html?t="+ _t, function() {
    $("side-menu").load("_side_menu.html?t="+ _t, function() {
      
    });
  });

  moment.locale('zh-tw');

  tailwind.config = {
    theme: {
        extend: {
            colors: {
                'yy-blue' : '#262c45',
                'yy-blue-900': '#424862',
                'yy-green': '#3dae69',
                'yy-green-900': '#2c9355',
                'input-hint':'#707070'
            }
        }
    }
  }
});

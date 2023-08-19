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
                window.location.assign('login.html');
            },
            403: function(xhr) {
                window.location.assign('login.html');
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
                showErrMsg('伺服器錯誤');
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
        if(typeof data[i] === 'object' && data[i] !== null && data[i]['blob'] instanceof Blob){
            haveFile=true;
        }
    }

    if(haveFile){
        formData = new FormData();
        for(var i in data){
            if(typeof data[i] === 'object' && data[i] !== null && data[i]['blob'] instanceof Blob){
                formData.append(i, data[i]['blob'], data[i]['name']);
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

//擷取出Yuotube網址的ID
function getVideoIdFromYoutubeUrl(url) {
  const regex = /(?:\/|%3D|v=|vi=)([0-9A-Za-z_-]{11})(?:[%#?&]|$)/;
  const match = url.match(regex);
  
  if (match && match[1]) {
    return match[1];
  }
  
  return null;
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
function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

function setFormValue (form,data){
  for(var i in data){
    form.find("[name="+replaceAll(i,".","\\.")+"]").each(function( index ) {
        if($(this).is('input') || $(this).is('select') || $(this).is('textarea') ){
            $(this).val(data[i]);
        }else if($(this).is('span') || $(this).is('div') ){
            $(this).text(data[i]);
        }else{
            $(this).attr('value',data[i]);
        }
    });
  }
}

var loadFileDataURI = function(event,callBackFun) {
    
    var reader = new FileReader();

    reader.onload = function(e){
      callBackFun({
        dataURI:e.target.result,
        blob:dataURItoBlob(e.target.result),
        name:e.target.fileName,
      });
    };
    console.log(event)
    reader.readAsDataURL(event.target.files[0]);
    
};

function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]); // separate out the mime component

    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to a typed array

    var ia = new Uint8Array(byteString.length);

    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {
        type: mimeString
    });
}

function initImageFileDom(dom){
  dom.find('[name=file_btn]').on('click',function(){
    dom.find('[name=file_input]').click();
  });

  dom.find('[name=file_input]').on('change',function(e){
      Swal.fire({
          title: '上傳中，請稍後...',
          allowOutsideClick:false,
          didOpen: function() {
              Swal.showLoading();
          }
      });
      
      loadFileDataURI(e,function(file){
          console.log(file);
          exec('image/upload','POST',{
              image:file,
          },function(data){
              console.log(data)
              Swal.close();
              dom.find('[name=file_img]').attr('src','https://drive.google.com/uc?id='+data['image']);
              dom.find('[name=file_img]').attr('value',data['image']);
          },true);
      });

  });

}

function getVideoIdFromYoutubeUrl(url) {
  const regex = /(?:\/|%3D|v=|vi=)([0-9A-Za-z_-]{11})(?:[%#?&]|$)/;
  const match = url.match(regex);
  
  if (match && match[1]) {
    return match[1];
  }
  
  return null;
}

$(function() {


  var _t=Date.now();

  $("top-nav").load("top_nav.html?t="+ _t, function() {
    $("side-menu").load("side_menu.html?t="+ _t, function() {
      
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

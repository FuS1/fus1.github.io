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
        headers: {
            Authorization: "Bearer "+(getLocalStorage('BearerToken') || '')
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
              if( typeof failFunction == "function" ){
                  failFunction(xhr.responseJSON) 
                  return;
              }
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
    reader.fileName = event.target.files[0].name; 
    reader.onload = function(e){
      callBackFun({
        dataURI:e.target.result,
        blob:dataURItoBlob(e.target.result),
        name:e.target.fileName,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
    
};

function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
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
  if(!url || url==""){
    return null;
  }
  const regex = /(?:\/|%3D|v=|vi=)([0-9A-Za-z_-]{11})(?:[%#?&]|$)/;
  const match = url.match(regex);
  
  if (match && match[1]) {
    return match[1];
  }
  
  return null;
}

function initAttribute(attributes=[]){
            
  exec('attribute/list','GET',{

  },function(data){
      _dom_attrs = data['attribute'].map(function(attr){
          return '<option value="'+attr['attributeId']+'">'+attr['name']+'</option>';
      }).join('');

      attributes.forEach(function(attribute) {
          addAttributeSelector(attribute);
      }); 
  });
}

function addAttributeSelector(attribute){
  let _dom = $(  `<div class="flex my-1 attribute-item">
                      <div class="w-64 h-10">
                          <select class="selector-with-filter" name="attribute">
                              <option value="">　</option>
                              `+_dom_attrs+`
                          </select>
                      </div>
                      <div>
                          <input type="input" name="attribute-value" class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="請輸入屬性內容">
                      </div>
                      <span class="btn hover:text-red-900 cursor-pointer level-remove ml-2 pt-2" title="刪除"><i class="fa-solid fa-trash-can"></i></span>
                  </div>`
              );
  if(attribute){
      _dom.attr("is-new","false");
      _dom.find('[name=attribute-value]').val(attribute['value']);
  }else{
      _dom.attr("is-new","true");
  }
  $('attributes').append(_dom)
  _dom.find('.fa-trash-can').on('click',function(){

      //若為本次新增的，非DB原有的，則直接刪除
      if($(this).closest('.attribute-item').attr("is-new")=="true" ){
          $(this).closest('.attribute-item').remove();
      }else{
          $(this).closest('.attribute-item').addClass('hidden').attr('remove',true);
      }

  });
  _dom.find('.selector-with-filter').select2({
      width: '100%',
      height: '200px',
      containerCssClass : "bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 !h-full !bg-transparent",
      placeholder: "請選擇屬性",
      value:10
  }).on('select2:open', function () {
      let a = $(this).data('select2');

      let _dom_result = a.$results.parents('.select2-results');
      if(_dom_result.find('.create-new-attribute-button').length <= 0){
          _dom_result.append('<div href="#" class="p-3 text-sm text-center font-medium text-yy-blue border-t border-gray-200 rounded-b-lg bg-gray-50 hover:bg-gray-100 cursor-pointer create-new-attribute-button"><i class="fa-solid fa-circle-plus"></i>　增加自訂屬性</div>')
          .on('click', function (b) {
              Swal.fire({
                  title: '請輸入新屬性名稱',
                  input: 'text',
                  inputAttributes: {
                      autocapitalize: 'off'
                  },
                  allowOutsideClick: false,
                  showCancelButton: true,
                  confirmButtonText: '儲存',
                  cancelButtonText: '取消',
                  showLoaderOnConfirm: true,
                  reverseButtons:true,
                  preConfirm: function(input) {
                      exec('attribute/new','POST',{
                          name: input,
                      },function(data){
                          $("attributes .selector-with-filter").append('<option value="'+data['attribute']['attributeId']+'">'+data['attribute']['name']+'</option>').trigger('change');
                      });
                  }
              });
          });
      }
  });

  if(attribute){
      _dom.find('.selector-with-filter').val(attribute['attributeId']).trigger('change');
  }
}

//取得目前的Attribute設定
function getAttribute(){
  return $(".attribute-item").map(function(){
      return {
          attributeId: Number($(this).find('[name=attribute]').val()),
          value: $(this).find('[name=attribute-value]').val(),
          del: $(this).attr('remove') == "true" ? true:false
      }
  })
  .toArray()
  .filter(function(item){
      return item['attributeId'] !== 0;
  });
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

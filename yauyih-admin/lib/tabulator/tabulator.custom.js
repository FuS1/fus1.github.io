const tabulator_config = {
    autoColumns: false,
    columnDefaults:{
        width:100,
        minWidth: 100,
        hozAlign: "center",
        headerFilterLiveFilter:false,
        headerSortTristate:true
    },
    resizable: true,
    pagination: true,
    paginationSize: 10,
    paginationSizeSelector: [10,20,50,100,true],
    paginationCounter: function(pageSize, currentRow, currentPage, totalRows, totalPages){
        return "共 "+ totalRows + " 筆資料";
    },
    layout: "fitColumns",
    responsiveLayout: "collapse",
    sortMode: "remote", 
    columnHeaderSortMulti: true,
    paginationMode: "remote",
    filterMode: "remote",
    ajaxConfig:{
        method:"get",
        headers: {
            // Authorization: "Bearer "+(getLocalStorage('adminData') && getLocalStorage('adminData')['token'] ? getLocalStorage('adminData')['token']['plainTextToken'] : ''),
        },
    },
    placeholder: "查無資料",
    locale: true,
    langs: {
        "zh-tw":{
            "data":{
                "loading":"讀取中", 
                "error":"資料異常", 
            },
            "pagination":{
                "page_size":"每頁筆數", 
                "first":"第一頁", 
                "last":"最後一頁",
                "prev":"前一頁",
                "next":"下一頁",
                "all":"全部",
            },
            "headerFilters":{
                "default":"",
            }
        }
    },
    dataSendParams: {
        page: "page"
    },
    dataReceiveParams: {
        last_row: "total"
    }
}

var minMaxFilterEditorDate = function(cell, onRendered, success, cancel, editorParams){
    var container = document.createElement("span");
    //create and style inputs
    var start = document.createElement("input");
    start.setAttribute("type", "date");
    start.setAttribute("placeholder", "Min");
    start.style.padding = "4px";
    start.style.margin = "1px 0";
    start.style.width = "90px";
    start.style.boxSizing = "border-box";
    var end = start.cloneNode();
    if(editorParams){
        start.value = editorParams.start;
        end.value = editorParams.end;
    }

    function buildValues(){
        if(start.value=='' && end.value==''){
            success();
        }else{
            success({
                start: start.value=='' ? '1800-01-01 23:59:59' : start.value+' 00:00:00',
                end: end.value=='' ? '9999-12-31 23:59:59' : end.value+' 23:59:59',
            });
        }
                
    }
    
    function keypress(e){
        if(e.keyCode == 13){
            buildValues();
        }
        if(e.keyCode == 27){
            cancel();
        }
    }
    
    end.setAttribute("placeholder", "Max");
    
    start.addEventListener("change", buildValues);
    start.addEventListener("blur", buildValues);
    start.addEventListener("keydown", keypress);
    
    end.addEventListener("change", buildValues);
    end.addEventListener("blur", buildValues);
    end.addEventListener("keydown", keypress);
    
    
    container.appendChild(start);
    container.appendChild(document.createElement("br"));
    container.appendChild(end);
    
    return container;
}

const tabulator_link_cell = function(cell, formatterParams){
    console.log(cell.getColumn(),formatterParams);
    return '<span class="tabulator_link">'+(cell.getValue()||'未設定')+'</span>';
}

const initTabulator = function(tableId, customConfig){
    let table = new Tabulator(tableId,Object.assign(JSON.parse(JSON.stringify(tabulator_config)), customConfig));
    table.on("dataLoadError", function(error){
        if(error['status']==401){
            window.location.assign('/login.php');
        }
    });
    return table;
}

//custom max min filter function
function minMaxFilterFunctionDate(headerValue, rowValue, rowData, filterParams){

    // if(headerValue.start != ""){
    //     headerValue.start = new Date(headerValue.start);
    // } 
    // if(headerValue.end != ""){
    //     headerValue.end = new Date(headerValue.end);
    // }
    //         console.log('rowValue===='+rowValue);
    //     console.log('headerValue.start===='+headerValue.start);
    //     console.log('headerValue.end===='+headerValue.end);
    // //compare dates
    // if(rowValue){

    //     rowValue = new Date(rowValue);


        
    //     if(headerValue.start != ""){
    //         if(headerValue.end != ""){
    //             return rowValue >= headerValue.start && rowValue <= headerValue.end;
    //         }else{
    //             return rowValue >= headerValue.start;
    //         }
    //     }else{
    //         if(headerValue.end != ""){
    //             return rowValue <= headerValue.end;
    //         }
    //     }
    // }

    return true; //must return a boolean, true if it passes the filter.
}
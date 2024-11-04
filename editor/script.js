document.addEventListener("DOMContentLoaded", () => {
    const templates = document.querySelectorAll(".template");
    const editor = document.getElementById("editor");
    const editorContainer = document.querySelector(".editor-container");
    const propertyPanel = document.getElementById("property-panel");
    const editorFields = document.getElementById("editor-fields");
    let selectedEditorItem = null;

    templates.forEach(template => {
        template.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("template-type", e.target.dataset.templateType);
        });
    });

    editor.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    editor.addEventListener("drop", (e) => {
        e.preventDefault();
        const templateType = e.dataTransfer.getData("template-type");

        let newElement;
        if (templateType === "text-image") {
            newElement = createEditorItem("文字 + 圖片", "text-image");
        } else if (templateType === "image-image") {
            newElement = createEditorItem("圖片 + 圖片", "image-image");
        } else if (templateType === "table") {
            newElement = createEditorItem("表格", "table");
        }

        if (newElement) editor.appendChild(newElement);
    });

    // 當點擊中間欄的項目時，設置為當前選中的項目
    editor.addEventListener("click", (e) => {
        if (e.target.classList.contains("editor-item")) {
            selectedEditorItem = e.target;
            selectedEditorItem.classList.add("selected-item");
        }
    });

    // 點擊表格樣板時顯示設置
    document.querySelectorAll(".template").forEach(template => {
        template.addEventListener("click", () => {
            const templateType = template.dataset.templateType;
            showProperties(templateType);
        });
    })

    function createEditorItem(text, type) {
        const item = document.createElement("div");
        item.classList.add("editor-item");
        item.dataset.type = type;
        item.innerText = text;

        item.addEventListener("click", () => showProperties(type));
        return item;
    }

    function showProperties(type) {
        editorFields.innerHTML = "";
        
        if (type === "text-image") {
            editorFields.innerHTML = `
                <h3>文字 + 圖片編輯</h3>
                <label>文字內容: <textarea id="textContent"></textarea></label><br>
                <label>圖片URL: <input type="text" id="imageURL"></label><br>
                <button onclick="uploadImage()">上傳圖片</button>
            `;
            tinymce.init({ selector: '#textContent' });
        } else if (type === "image-image") {
            editorFields.innerHTML = `
                <h3>圖片 + 圖片編輯</h3>
                <label>圖片1 URL: <input type="text" id="image1URL"></label><br>
                <button onclick="uploadImage()">上傳圖片</button><br>
                <label>圖片2 URL: <input type="text" id="image2URL"></label><br>
                <button onclick="uploadImage()">上傳圖片</button>
            `;
        } else if (type === "table") {
            editorFields.innerHTML = `
                <h3>表格設定</h3>
                <div class="table-settings">
                    <label>表格標題: <input type="text" id="tableTitle" placeholder="輸入表格標題"></label>
                    <label>行數: <input type="number" id="tableRows" min="1" value="3"> 列數: <input type="number" id="tableCols" min="1" value="3"></label>
                    <label>首欄背景色: <input type="color" id="tableHeaderBgColor" value="#cccccc"></label>
                    <label>首欄字體粗細: 
                        <select id="tableHeaderFontWeight">
                            <option value="normal">正常</option>
                            <option value="bold">粗體</option>
                        </select>
                    </label>
                    <button onclick="generateTable()">產生表格</button>
                </div>
            `;
        }
    }

    // 生成表格並插入中間欄位
    window.generateTable = function() {
        if (!selectedEditorItem) {
            alert("請先選擇一個項目來插入表格！");
            return;
        }

        const rows = parseInt(document.getElementById("tableRows").value);
        const cols = parseInt(document.getElementById("tableCols").value);
        const headerBgColor = document.getElementById("tableHeaderBgColor").value;
        const headerFontWeight = document.getElementById("tableHeaderFontWeight").value;
        const tableTitle = document.getElementById("tableTitle").value;

        // 清空選中項目內原有的內容並插入新表格
        selectedEditorItem.innerHTML = `<h3>${tableTitle}</h3>`;

        // 創建表格
        const table = document.createElement("table");
        table.classList.add("editable-table");

        for (let i = 0; i < rows; i++) {
            const row = table.insertRow();
            for (let j = 0; j < cols; j++) {
                const cell = row.insertCell();
                cell.contentEditable = true;
                cell.innerText = `R${i+1} C${j+1}`;

                // 設定首列樣式
                if (i === 0) {
                    cell.style.backgroundColor = headerBgColor;
                    cell.style.fontWeight = headerFontWeight;
                }
            }
        }

        selectedEditorItem.appendChild(table);
    };

    
});

function setDevice(device) {
    const editor = document.getElementById("editor");
    const editorContainer = document.querySelector(".editor-container");
    if (device === 'desktop') {
        editor.style.maxWidth = "100%";
    } else if (device === 'tablet') {
        editor.style.maxWidth = "768px";
    } else if (device === 'mobile') {
        editor.style.maxWidth = "375px";
    }
    editorContainer.style.padding = "0 10px"; // Center the editor with gray padding
}

function uploadImage() {
    alert("開啟圖片上傳功能！");
}

const dropArea = document.querySelector('.drop-section');
const listSection = document.querySelector('.list-section');
const listContainer = document.querySelector('.list');
const fileSelector = document.querySelector('.file-selector');
const fileSelectorInput = document.querySelector('.file-selector-input');

// Upload files with browse button

fileSelector.onclick = () => fileSelectorInput.click();
fileSelectorInput.onchange = () => {
    [...fileSelectorInput.files].forEach((file) => {
        if(typeValidation(file.type)){
            uploadFile(file);
        }
    });
}

// When the upload is drag and drop area

dropArea.ondragover = (e) => {
    e.preventDefault();
    [...e.dataTransfer.items].forEach((item) => {
        if(typeValidation(item.type)){
            dropArea.classList.add('drag-over-effect');
        }
    });
}

// when the file leave drag area

dropArea.ondragleave = () => {
    dropArea.classList.remove('drag-over-effect');
}

// when file drop on the drag area

dropArea.ondrop = (e) => {
    e.preventDefault();
    dropArea.classList.remove('drag-over-effect');
    if(e.dataTransfer.items){
        [...e.dataTransfer.items].forEach((item) => {
            if(item.kind == 'file'){
                const file = item.getAsFile();
                if(typeValidation(file.type)){
                    uploadFile(file);
                }
            }
        })
    }else{
        [...e.dataTransfer.files].forEach((file => {
            if(typeValidation(file.type)){

            }
        }))
    }
}

// check the file type

function typeValidation(type){
    var splitType = type.split('/')[0];
    if(type == 'application/pdf' || splitType == 'image'){
        return true;
    }
}

// upload file function

function uploadFile(file){
    listSection.style.display = 'block';
    var li = document.createElement('li');
    li.classList.add('in-prog');
    li.innerHTML = `
        <div class="col">
            <i class="fa-solid fa-file-image file-img"></i>
        </div>
        <div class="col">
            <div class="file name">
                <div class="name">${file.name}</div>
                <span>0%</span>
            </div>
            <div class="file-progress">
                <span></span>
            </div>
            <div class="file-size">${(file.size/(1024*1024)).toFixed(2)} MB</div>
        </div>
        <div class="col">
            <i class="fa-solid fa-xmark cross"></i>
            <i class="fa-solid fa-check tick"></i>
        </div>
    `;
    listContainer.prepend(li);
    var http = new XMLHttpRequest();
    var data = new FormData();
    data.append('file', file);
    http.onload = () => {
        li.classList.add('complete');
        li.classList.remove('in-prog');
    }
    http.upload.onprogress = (e) => {
        var percent_complete = (e.loaded / e.total)*100;
        li.querySelectorAll('span')[0].innerHTML = Math.round(percent_complete) + '%';
        li.querySelectorAll('span')[1].style.width = percent_complete + '%';
    }
    http.open('POST', 'sender.php', true);
    http.send(data);
    li.querySelector('.cross').onclick = () => http.abort();
    http.onabort = () => li.remove();
}

// find icon for file

function iconSelector(type){
    var splitType = (type.split('/')[0] == 'application') ? type.split('/')[1] : type.split('/')[0];
    return splitType + '.png'
}
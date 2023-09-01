let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fas fa-check"></i> Successfully submitted';
let errorMsg = '<i class="fas fa-times-circle"></i> Fix the error!';
let failedMsg = '<i class="fas fa-exclamation-triangle"></i> Failed, check again!';

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('error')){
        toast.classList.add('error');
    }
    else if(msg.includes('Failed')){
        toast.classList.add('failed');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000)
}


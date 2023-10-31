window.onload = function() {
    var boxes = document.querySelectorAll('.rounded-box');
    var maxHeight = 0;

    boxes.forEach(function(box) {
        maxHeight = Math.max(maxHeight, box.scrollHeight);
    });

    boxes.forEach(function(box) {
        box.style.height = maxHeight + 'px';
    });
};




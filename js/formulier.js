document.querySelector("input[value='project']").onclick = function() {
    document.getElementById('project').style.display = 'block';
     document.getElementById('stage').style.display = 'none';
}

document.querySelector("input[value='stage']").onclick = function() {
    document.getElementById('stage').style.display = 'block';
    document.getElementById('project').style.display = 'none';
}

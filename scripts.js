document.getElementById('dropdown').onchange = function(){
    document.getElementById('banner').className = this.value + " jumbotron jumbotron-fluid";
};
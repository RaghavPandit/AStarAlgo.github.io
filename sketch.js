var cols = 5;
var rows = 5;
var grid = new Array();
var openSet = [];
var closedSet = [];
var start;
var end;


function setup() {
    createCanvas(400, 400);
    for (var i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
    }
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < cols; j++) {
            grid[i] = new Array(rows);
        }
    }
    console.log(grid);
}

function draw() {
    background(0);
}
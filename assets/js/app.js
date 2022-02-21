let grid = [
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
];

let player = 1;

let time = 0;

function rand(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
}

function reset() {
	grid = [
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
	];
	player = 1;
	time = 0;
}

function getValidIndexs(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (grid[i][j] === 0) {
				newArr.push({i, j});
			}
		}
	}
	return newArr;
}

function displayGrid() {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 1) {
				document.getElementById('c' + i + j).textContent = 'O';
				document.getElementById('c' + i + j).style.color = 'yellow';
			} else if (grid[i][j] === 2) {
				document.getElementById('c' + i + j).textContent = 'O';
				document.getElementById('c' + i + j).style.color = 'red';
			} else {
				document.getElementById('c' + i + j).textContent = '';
			}
		}
	}
}

function winTest() {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			// for player 1
			try {
				if (grid[i  ][j  ] === 1 &&
					grid[i  ][j+1] === 1 &&
					grid[i  ][j+2] === 1 &&
					grid[i  ][j+3] === 1) {
						document.getElementById('result').innerHTML = '<span style="color: yellow">Player 1</span> win !';
						reset();
				}
			} catch (error) {}
			try {
				if (grid[i  ][j  ] === 1 &&
					grid[i+1][j  ] === 1 &&
					grid[i+2][j  ] === 1 &&
					grid[i+3][j  ] === 1) {
						document.getElementById('result').innerHTML = '<span style="color: yellow">Player 1</span> win !';
						reset();
				}
			} catch (error) {}
			try {
				if (grid[i  ][j  ] === 1 &&
					grid[i+1][j+1] === 1 &&
					grid[i+2][j+2] === 1 &&
					grid[i+3][j+3] === 1) {
						document.getElementById('result').innerHTML = '<span style="color: yellow">Player 1</span> win !';
						reset();
				}
			} catch (error) {}
			try {
				if (grid[i  ][j  ] === 1 &&
					grid[i+1][j-1] === 1 &&
					grid[i+2][j-2] === 1 &&
					grid[i+3][j-3] === 1) {
						document.getElementById('result').innerHTML = '<span style="color: yellow">Player 1</span> win !';
						reset();
				}
			} catch (error) {}
			// for player 2
			try {
				if (grid[i  ][j  ] === 2 &&
					grid[i  ][j+1] === 2 &&
					grid[i  ][j+2] === 2 &&
					grid[i  ][j+3] === 2) {
						document.getElementById('result').innerHTML = '<span style="color: red">Player 2</span> win !';
						reset();
				}
			} catch (error) {}
			try {
				if (grid[i  ][j  ] === 2 &&
					grid[i+1][j  ] === 2 &&
					grid[i+2][j  ] === 2 &&
					grid[i+3][j  ] === 2) {
						document.getElementById('result').innerHTML = '<span style="color: red">Player 2</span> win !';
						reset();
				}
			} catch (error) {}
			try {
				if (grid[i  ][j  ] === 2 &&
					grid[i+1][j+1] === 2 &&
					grid[i+2][j+2] === 2 &&
					grid[i+3][j+3] === 2) {
						document.getElementById('result').innerHTML = '<span style="color: red">Player 2</span> win !';
						reset();
				}
			} catch (error) {}
			try {
				if (grid[i  ][j  ] === 2 &&
					grid[i+1][j-1] === 2 &&
					grid[i+2][j-2] === 2 &&
					grid[i+3][j-3] === 2) {
						document.getElementById('result').innerHTML = '<span style="color: red">Player 2</span> win !';
						reset();
				}
			} catch (error) {}
		}
	}
}

for (let i = 0; i < grid.length; i++) {
	for (let j = 0; j < grid[i].length; j++) {
		document.getElementById('c' + i + j).addEventListener('click', e => {
			document.getElementById('result').textContent = '';
			if (grid[i][j] === 0) {
				grid[i][j] = 1;
				let arrBuff = getValidIndexs(grid);
				let indexs = arrBuff[rand(0, arrBuff.length - 1)];
				grid[indexs.i][indexs.j] = 2;
				displayGrid();
				winTest();
			}
		});
	}
}
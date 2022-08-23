<script>
function isSafe(board, row, col, num)
{
	for(let d = 0; d < board.length; d++)
	{
		if (board[row][d] == num)
		{
			return false;
		}
	}

	for(let r = 0; r < board.length; r++)
	{
		if (board[r][col] == num)
		{
			return false;
		}
	}

	let sqrt = Math.floor(Math.sqrt(board.length));
	let boxRowStart = row - row % sqrt;
	let boxColStart = col - col % sqrt;

	for(let r = boxRowStart;
			r < boxRowStart + sqrt; r++)
	{
		for(let d = boxColStart;
				d < boxColStart + sqrt; d++)
		{
			if (board[r][d] == num)
			{
				return false;
			}
		}
	}

	return true;
}

function solveSudoku(board, n)
{
	let row = -1;
	let col = -1;
	let isEmpty = true;
	for(let i = 0; i < n; i++)
	{
		for(let j = 0; j < n; j++)
		{
			if (board[i][j] == 0)
			{
				row = i;
				col = j;
        
				isEmpty = false;
				break;
			}
		}
		if (!isEmpty)
		{
			break;
		}
	}

	if (isEmpty)
	{
		return true;
	}

	for(let num = 1; num <= n; num++)
	{
		if (isSafe(board, row, col, num))
		{
			board[row][col] = num;
			if (solveSudoku(board, n))
			{
				return true;
			}
			else
			{
				board[row][col] = 0;
			}
		}
	}
	return false;
}

function print(board, N)
{
	for(let r = 0; r < N; r++)
	{
		for(let d = 0; d < N; d++)
		{
			document.write(board[r][d]);
			document.write(" ");
		}
		document.write("<br>");

		if ((r + 1) % Math.floor(Math.sqrt(N)) == 0)
		{
			document.write("");
		}
	}
}

let board = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
			[ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
			[ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
			[ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
			[ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
			[ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
			[ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ];
		
let N = board.length;

if (solveSudoku(board, N))
{
	print(board, N);
}
else
{
	document.write("No solution");
}

</script>

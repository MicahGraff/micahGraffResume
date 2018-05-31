$(document).ready(function() {

$("#tictactoe-board div").click(playerMove);
$("#restart-game").click(gameReset);
$("#easy-mode").click(changeDifficultyEasy);
$("#hard-mode").click(changeDifficultyHard);

var easy = true;
var win = false;
var moveFirst = false;
var moveArr = ["","","","","","","","",""];

function playerMove()
{
	//PLAYER MOVES FIRST
	if (isBoardFull())
	{
		alert("Sorry, we seem to have broken.");
	}
	else 
	{
		if ($(this).children("img:first").hasClass("hide") && $(this).children("img:last").hasClass("hide"))
		{
			$(this).children("img:first").removeClass("hide");
			moveFirst = true;
			checkWin();
			if (easy && !win)
			{
				compMoveEasy();
			}
			else if (!win)
			{
				compMoveHard();
			}
		}
		else
		{
			alert("That is an invalid move.");
		}
	}
	checkWin();
}

function compMoveEasy() {
	//CHECK TO SEE IF PLAYER MOVED FIRST
	if (moveFirst)
	{
		var compMove;
		var done = true;
		while (done) {
			compMove = Math.round(Math.random() * (10 - 1) + 1);
			var checkOne = $("#tictactoe-board div:nth-child(" + compMove + ")").children("img:first").hasClass("hide");
			var checkTwo = $("#tictactoe-board div:nth-child(" + compMove + ")").children("img:last").hasClass("hide");
			if (checkOne && checkTwo)
			{
				$("#tictactoe-board div:nth-child(" + compMove + ")").children("img:last").removeClass("hide");
				done = false;
			}
		}
	}
	moveFirst = false;
}

function compMoveHard() {
	var moved = false;
	//CHECK TO SEE THAT PLAYER MOVED FIRST
	if (moveFirst)
	{
		//CHECK TO SEE IF IT CAN WIN
		//ROW 1 CHECKS
		if (!moved)
		{
			if (moveArr[0] === "O" && moveArr[1] === "O" && moveArr[2] === "E")
			{
				$("#tictactoe-board div:nth-child(3)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "O" && moveArr[1] === "E" && moveArr[2] === "O")
			{
				$("#tictactoe-board div:nth-child(2)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "E" && moveArr[1] === "O" && moveArr[2] === "O")
			{
				$("#tictactoe-board div:nth-child(1)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//ROW 2 CHECKS
		if (!moved)
		{
			if (moveArr[3] === "O" && moveArr[4] === "O" && moveArr[5] === "E")
			{
				$("#tictactoe-board div:nth-child(6)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[3] === "O" && moveArr[4] === "E" && moveArr[5] === "O")
			{
				$("#tictactoe-board div:nth-child(5)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[3] === "E" && moveArr[4] === "O" && moveArr[5] === "O")
			{
				$("#tictactoe-board div:nth-child(4)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//ROW 3 CHECKS
		if (!moved)
		{
			if (moveArr[6] === "O" && moveArr[7] === "O" && moveArr[8] === "E")
			{
				$("#tictactoe-board div:nth-child(9)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[6] === "O" && moveArr[7] === "E" && moveArr[8] === "O")
			{
				$("#tictactoe-board div:nth-child(8)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[6] === "E" && moveArr[7] === "O" && moveArr[8] === "O")
			{
				$("#tictactoe-board div:nth-child(7)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//COL 1 CHECKS
		if (!moved)
		{	
			if (moveArr[0] === "O" && moveArr[3] === "O" && moveArr[6] === "E")
			{
				$("#tictactoe-board div:nth-child(7)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "O" && moveArr[3] === "E" && moveArr[6] === "O")
			{
				$("#tictactoe-board div:nth-child(4)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "E" && moveArr[3] === "O" && moveArr[6] === "O")
			{
				$("#tictactoe-board div:nth-child(1)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//COL 2 CHECKS
		if (!moved)
		{
			if (moveArr[1] === "O" && moveArr[4] === "O" && moveArr[7] === "E")
			{
				$("#tictactoe-board div:nth-child(8)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[1] === "O" && moveArr[4] === "E" && moveArr[7] === "O")
			{
				$("#tictactoe-board div:nth-child(5)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[1] === "E" && moveArr[4] === "O" && moveArr[7] === "O")
			{
				$("#tictactoe-board div:nth-child(2)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//COL 3 CHECKS
		if (!moved)
		{
			if (moveArr[2] === "O" && moveArr[5] === "O" && moveArr[8] === "E")
			{
				$("#tictactoe-board div:nth-child(9)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "O" && moveArr[5] === "E" && moveArr[8] === "O")
			{
				$("#tictactoe-board div:nth-child(6)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "E" && moveArr[5] === "O" && moveArr[8] === "O")
			{
				$("#tictactoe-board div:nth-child(3)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//DIAGONAL 1 CHECKS
		if (!moved)
		{
			if (moveArr[0] === "O" && moveArr[4] === "O" && moveArr[8] === "E")
			{
				$("#tictactoe-board div:nth-child(9)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "O" && moveArr[4] === "E" && moveArr[8] === "O")
			{
				$("#tictactoe-board div:nth-child(5)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "E" && moveArr[4] === "O" && moveArr[8] === "O")
			{
				$("#tictactoe-board div:nth-child(1)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//DIAGONAL 2 CHECKS
		if (!moved)
		{
			if (moveArr[2] === "O" && moveArr[4] === "O" && moveArr[6] === "E")
			{
				$("#tictactoe-board div:nth-child(7)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "O" && moveArr[4] === "E" && moveArr[6] === "O")
			{
				$("#tictactoe-board div:nth-child(5)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "E" && moveArr[4] === "O" && moveArr[6] === "O")
			{
				$("#tictactoe-board div:nth-child(3)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//CHECK TO SEE IF IT CAN BLOCK
		//ROW 1 CHECKS
		if (!moved)
		{
			if (moveArr[0] === "X" && moveArr[1] === "X" && moveArr[2] === "E")
			{
				$("#tictactoe-board div:nth-child(3)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "X" && moveArr[1] === "E" && moveArr[2] === "X")
			{
				$("#tictactoe-board div:nth-child(2)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "E" && moveArr[1] === "X" && moveArr[2] === "X")
			{
				$("#tictactoe-board div:nth-child(1)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//ROW 2 CHECKS
		if (!moved)
		{
			if (moveArr[3] === "X" && moveArr[4] === "X" && moveArr[5] === "E")
			{
				$("#tictactoe-board div:nth-child(6)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[3] === "X" && moveArr[4] === "E" && moveArr[5] === "X")
			{
				$("#tictactoe-board div:nth-child(5)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[3] === "E" && moveArr[4] === "X" && moveArr[5] === "X")
			{
				$("#tictactoe-board div:nth-child(4)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//ROW 3 CHECKS
		if (!moved)
		{
			if (moveArr[6] === "X" && moveArr[7] === "X" && moveArr[8] === "E")
			{
				$("#tictactoe-board div:nth-child(9)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[6] === "X" && moveArr[7] === "E" && moveArr[8] === "X")
			{
				$("#tictactoe-board div:nth-child(8)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[6] === "E" && moveArr[7] === "X" && moveArr[8] === "X")
			{
				$("#tictactoe-board div:nth-child(7)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//COL 1 CHECKS
		if (!moved)
		{
			if (moveArr[0] === "X" && moveArr[3] === "X" && moveArr[6] === "E")
			{
				$("#tictactoe-board div:nth-child(7)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "X" && moveArr[3] === "E" && moveArr[6] === "X")
			{
				$("#tictactoe-board div:nth-child(4)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "E" && moveArr[3] === "X" && moveArr[6] === "X")
			{
				$("#tictactoe-board div:nth-child(1)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//COL 2 CHECKS
		if (!moved)
		{
			if (moveArr[1] === "X" && moveArr[4] === "X" && moveArr[7] === "E")
			{
				$("#tictactoe-board div:nth-child(8)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[1] === "X" && moveArr[4] === "E" && moveArr[7] === "X")
			{
				$("#tictactoe-board div:nth-child(5)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[1] === "E" && moveArr[4] === "X" && moveArr[7] === "X")
			{
				$("#tictactoe-board div:nth-child(2)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//COL 3 CHECKS
		if (!moved)
		{
			if (moveArr[2] === "X" && moveArr[5] === "X" && moveArr[8] === "E")
			{
				$("#tictactoe-board div:nth-child(9)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "X" && moveArr[5] === "E" && moveArr[8] === "X")
			{
				$("#tictactoe-board div:nth-child(6)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "E" && moveArr[5] === "X" && moveArr[8] === "X")
			{
				$("#tictactoe-board div:nth-child(3)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//DIAGONAL 1 CHECKS
		if (!moved)
		{
			if (moveArr[0] === "X" && moveArr[4] === "X" && moveArr[8] === "E")
			{
				$("#tictactoe-board div:nth-child(9)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "X" && moveArr[4] === "E" && moveArr[8] === "X")
			{
				$("#tictactoe-board div:nth-child(5)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "E" && moveArr[4] === "X" && moveArr[8] === "X")
			{
				$("#tictactoe-board div:nth-child(1)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//DIAGONAL 2 CHECKS
		if (!moved)
		{
			if (moveArr[2] === "X" && moveArr[4] === "X" && moveArr[6] === "E")
			{
				$("#tictactoe-board div:nth-child(7)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "X" && moveArr[4] === "E" && moveArr[6] === "X")
			{
				$("#tictactoe-board div:nth-child(5)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "E" && moveArr[4] === "X" && moveArr[6] === "X")
			{
				$("#tictactoe-board div:nth-child(3)").children("img:last").removeClass("hide");
				moved = true;
			}
		}

		//IF IT HAD NO WIN OR BLOCK MOVE
		if (!moved)
		{
			if (moveArr[4] == "E")
			{
				$("#tictactoe-board div:nth-child(5)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "X" && moveArr[8] === "X" && moveArr[5] === "E")
			{
				$("#tictactoe-board div:nth-child(6)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "X" && moveArr[8] === "X" && moveArr[3] === "E")
			{
				$("#tictactoe-board div:nth-child(4)").children("img:last").removeClass("hide");
				moved = true;
			}
			
			else if (moveArr[0] === "X" && moveArr[8] === "X" && moveArr[1] === "E")
			{
				$("#tictactoe-board div:nth-child(2)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "X" && moveArr[8] === "X" && moveArr[7] === "E")
			{
				$("#tictactoe-board div:nth-child(8)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "X" && moveArr[6] === "X" && moveArr[3] === "E")
			{
				$("#tictactoe-board div:nth-child(4)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "X" && moveArr[6] === "X" && moveArr[5] === "E")
			{
				$("#tictactoe-board div:nth-child(6)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "X" && moveArr[6] === "X" && moveArr[1] === "E")
			{
				$("#tictactoe-board div:nth-child(2)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "X" && moveArr[6] === "X" && moveArr[7] === "E")
			{
				$("#tictactoe-board div:nth-child(8)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "X" && moveArr[8] === "E")
			{
				$("#tictactoe-board div:nth-child(9)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "X" && moveArr[6] === "E")
			{
				$("#tictactoe-board div:nth-child(7)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[6] === "X" && moveArr[2] === "E")
			{
				$("#tictactoe-board div:nth-child(3)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[8] === "X" && moveArr[0] === "E")
			{
				$("#tictactoe-board div:nth-child(1)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "E" && moveArr[2] === "E" && moveArr[6] === "E" && moveArr[8] == "E")
			{
				$("#tictactoe-board div:nth-child(1)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "E" && moveArr[2] === "O" && moveArr[6] === "O")
			{
				$("#tictactoe-board div:nth-child(1)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[8] === "E" && moveArr[2] === "O" && moveArr[6] === "O")
			{
				$("#tictactoe-board div:nth-child(9)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "E" && moveArr[0] === "O" && moveArr[8] === "O")
			{
				$("#tictactoe-board div:nth-child(3)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[6] === "E" && moveArr[0] === "O" && moveArr[8] === "O")
			{
				$("#tictactoe-board div:nth-child(7)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[0] === "E" && moveArr[2] == "X" && moveArr[6] == "X")
			{
				$("#tictactoe-board div:nth-child(1)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[8] === "E" && moveArr[2] == "X" && moveArr[6] == "X")
			{
				$("#tictactoe-board div:nth-child(9)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[6] === "E" && moveArr[0] == "X" && moveArr[8] == "X")
			{
				$("#tictactoe-board div:nth-child(7)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "E" && moveArr[0] == "X" && moveArr[8] == "X")
			{
				$("#tictactoe-board div:nth-child(3)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[2] === "E")
			{
				$("#tictactoe-board div:nth-child(3)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[8] === "E")
			{
				$("#tictactoe-board div:nth-child(9)").children("img:last").removeClass("hide");
				moved = true;
			}
			else if (moveArr[6] === "E")
			{
				$("#tictactoe-board div:nth-child(7)").children("img:last").removeClass("hide");
				moved = true;
			}
			else
			{
				compMoveEasy();
				moved = true;
			}
		}
	}
	moveFirst = false;
	moved = false;
}

function clearBoard() {
	$("#tictactoe-board div img").addClass("hide");
}

function changeDifficultyEasy()
{
	easy = true;
	gameReset();
	$("#easy-mode").addClass("selected");
	$("#hard-mode").removeClass("selected");
}

function changeDifficultyHard()
{
	easy = false;
	gameReset();
	$("#hard-mode").addClass("selected");
	$("#easy-mode").removeClass("selected");
}

function isBoardFull()
{
	var count = 0;
	for (i = 1; i < 10; i++)
	{
		var firstCheck = $("#tictactoe-board div:nth-child(" + i + ")").children("img:first").hasClass("hide");
		var secondCheck = $("#tictactoe-board div:nth-child(" + i + ")").children("img:last").hasClass("hide");
		if (!(firstCheck && secondCheck))
		{
			count++;
		}
	}
	if (count == 9)
	{
		return true;
	}
	return false;
}

function checkWin()
{
	var moveArrIndex = [1,2,3,4,5,6,7,8,9];
	moveArrIndex.forEach(function(element, index) {
		var xMove = $("#tictactoe-board div:nth-child(" + element + ")").children("img:first").hasClass("hide");
		var oMove = $("#tictactoe-board div:nth-child(" + element + ")").children("img:last").hasClass("hide");
		if (xMove && oMove)
		{
			moveArr[index] = "E";
		}
		else if (xMove)
		{
			moveArr[index] = "O";
		}
		else if (oMove)
		{
			moveArr[index] = "X";
		}
		else
		{
			moveArr[index] = "F";
		}
	});

	//Checking for Horizontal Wins - X
	if (moveArr[0] === "X" && moveArr[1] === "X" && moveArr[2] === "X")
	{
		alert("YOU WIN");
		win = true;
	}
	else if (moveArr[3] === "X" && moveArr[4] === "X" && moveArr[5] === "X")
	{
		alert("YOU WIN");
		win = true;
	}
	else if (moveArr[6] === "X" && moveArr[7] === "X" && moveArr[8] === "X")
	{
		alert("YOU WIN");
		win = true;
	}

	//Checking for Vertical Wins - X
	if (moveArr[0] === "X" && moveArr[3] === "X" && moveArr[6] === "X")
	{
		alert("YOU WIN");
		win = true;
	}
	else if (moveArr[1] === "X" && moveArr[4] === "X" && moveArr[7] === "X")
	{
		alert("YOU WIN");
		win = true;
	}
	else if (moveArr[2] === "X" && moveArr[5] === "X" && moveArr[8] === "X")
	{
		alert("YOU WIN");
		win = true;
	}

	//Checking for Diagonal Wins - X
	if (moveArr[0] === "X" && moveArr[4] === "X" && moveArr[8] === "X")
	{
		alert("YOU WIN");
		win = true;
	}
	else if (moveArr[2] === "X" && moveArr[4] === "X" && moveArr[6] === "X")
	{
		alert("YOU WIN");
		win = true;
	}


	//Checking for Horizontal Wins - O
	if (moveArr[0] === "O" && moveArr[1] === "O" && moveArr[2] === "O")
	{
		alert("YOU LOSE");
		win = true;
	}
	else if (moveArr[3] === "O" && moveArr[4] === "O" && moveArr[5] === "O")
	{
		alert("YOU LOSE");
		win = true;
	}
	else if (moveArr[6] === "O" && moveArr[7] === "O" && moveArr[8] === "O")
	{
		alert("YOU LOSE");
		win = true;
	}

	//Checking for Vertical Wins - O
	if (moveArr[0] === "O" && moveArr[3] === "O" && moveArr[6] === "O")
	{
		alert("YOU LOSE");
		win = true;
	}
	else if (moveArr[1] === "O" && moveArr[4] === "O" && moveArr[7] === "O")
	{
		alert("YOU LOSE");
		win = true;
	}
	else if (moveArr[2] === "O" && moveArr[5] === "O" && moveArr[8] === "O")
	{
		alert("YOU LOSE");
		win = true;
	}

	//Checking for Diagonal Wins - O
	if (moveArr[0] === "O" && moveArr[4] === "O" && moveArr[8] === "O")
	{
		alert("YOU LOSE");
		win = true;
	}
	else if (moveArr[2] === "O" && moveArr[4] === "O" && moveArr[6] === "O")
	{
		alert("YOU LOSE");
		win = true;
	}
	
	//Check for tie
	if (isBoardFull() && !win)
	{
		alert("YOU TIED");
		win = true;
	}

	//If we won we need to clear the board
	if (win)
	{
		gameReset();
	}
}

function gameReset()
{
	win = false;
	clearBoard();
}

function inProgress()
{
	alert("Sorry, but this function is still under construction.");
}

});
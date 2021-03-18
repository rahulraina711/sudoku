var sudoku= [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0 , 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0]];   


function sudokusolver(sudoku){     
	 var alreadyAvailableNumbers={},notAvailableNumbers,emptySpaces=81;
	while(emptySpaces<=81)
	{
		emptySpaces=0
    for(var column=0;column <sudoku.length;column++)
    {
        for(var row=0;row <sudoku.length;row++) 
        {
		alreadyAvailableNumbers={};
            if(sudoku[row][column]=== 0) 
		{
                      
			for(var k=0;k <sudoku.length;k++)
			{
            
                           if(sudoku[row][k]>0) 
                      {
                    alreadyAvailableNumbers[sudoku[row][k]]='true'
	        	}
                           if(sudoku[k][column]>0)
		    {
                    alreadyAvailableNumbers[sudoku[k][column]]='true'
                    }
            }
	      for(var columnbox=(Math.floor(column/3))*3;columnbox<=((Math.floor(column/3))*3)+2;columnbox++)  
	         {
                for(var rowbox=(Math.floor(row/3))*3;rowbox<=((Math.floor(row/3))*3)+2;rowbox++)
                {
                    if(sudoku[rowbox][columnbox]>0)
                    {
                        alreadyAvailableNumbers[sudoku[rowbox][columnbox]]='true'
                    }
                }
            }  

			console.log(alreadyAvailableNumbers);
			notAvailableNumbers=Object.keys(alreadyAvailableNumbers);
			if(notAvailableNumbers.length===(sudoku.length-1))
                             
 
			{
		                for(var i=1;i<=sudoku.length;i++)
                {
                    if(notAvailableNumbers.indexOf(i.toString())<0)			{
			
			console.log([row],[column])
                        sudoku[row][column]=i;
                    }
                }
            }
			else{
				emptySpaces++;
		           }
        }
    
		}
    }
	}
    
		return sudoku;
}
console.log(sudokusolver(sudoku));
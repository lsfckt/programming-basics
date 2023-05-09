function streamOfLetters(input){

    let index = 0;
    let command = input[index];
    index++;
    
    let isC = false;
    let isO = false;
    let isN = false;

    let word = '';
    let firstC = 0;
    let firstO = 0;
    let firstN = 0;
    let result = '';

    while(command != 'End'){
        if(
            !((command >= 'A' && command <= 'Z') || (command >= 'a' && command <= 'z'))
            ){
           command = input[index];
           index++;
           continue;
        }

        switch(command){
            case 'c':
                if(isC == true){
                    word += command;
                }  
                isC = true;
                break;
            case 'o':
                if(isO == true){
                    word += command;
                }  
                isO = true;
                break;
            case 'n':
                if(isN == true){
                    word += command;
                }  
                isN = true;
                break;
                default:
                    word += command;
                    break;
            }
    
        if(isC && isO && isN){
            word += ' ';
            result = word;
            isC = false;
            isO = false;
            isN = false;
        }

        command = input[index];
        index++;

    }

    if(command === 'End'){
        console.log(result);
    }
  
  }
  streamOfLetters([
    'o',
    'S',
    '%',
    'o',
    'l',
    '^',
    'v',
    'e',
    'c',
    'n',
    '&',
    'm',
    'e',
    'c',
    'o',
    'n',
    'End'
  ])
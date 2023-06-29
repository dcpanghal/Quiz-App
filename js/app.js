const questions = [
    {
        'que' :' Which of the following is a markup language?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'Java',
        'd' : 'PHP',
        'correct' : 'a'
    },
    {
        'que' :' When was JavaScript launched?',
        'a' : '1996',
        'b' : '1995',
        'c' : '1994',
        'd' : 'None of the above',
        'correct' : 'b'
    },
    {
        'que' :' What does CSS stands for?',
        'a' : 'Code Styles Sheet',
        'b' : 'Cascading Styles Sheet',
        'c' : 'Code Structures Sheet',
        'd' : 'Cascading Structures Sheet',
        'correct' : 'b'
    },
]

let index=0;
let total=questions.length;
let right=0,wrong=0;
const qbox=document.getElementById("quesbox");
const optionsinputs=document.querySelectorAll('.options');

function loadquestion(){
    if(index===total)
    {
       return endquiz();
    }
    reset();
    const data=questions[index];
    qbox.innerText=`${index+1}) ${data.que}`;
    // remember the above syntax.
    optionsinputs[0].nextElementSibling.innerText=data.a;
    optionsinputs[1].nextElementSibling.innerText=data.b;
    optionsinputs[2].nextElementSibling.innerText=data.c;
    optionsinputs[3].nextElementSibling.innerText=data.d;

}

const submitquiz = () => {
    const data=questions[index];
    const ans=getans();
    if(ans=== data.correct){
          right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getans = () => {
    let answer;
    optionsinputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    //always return value here not inside (input) loop.
    return answer;
}

const reset =()=>{
    optionsinputs.forEach(
        (input) => {
                input.checked=false;
        }
    )
}

const endquiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align : center"> 
    
      <h3> Thank you for playing the quiz </h3>
      <h2> ${right}/ ${total} are correct </h2>
      </div>
    `;
}

//initial call
loadquestion();



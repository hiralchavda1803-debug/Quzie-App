const quizQuestions = [
    {
        question: "What is JavaScript?",
        options: [
            "Programming Language",
            "Database",
            "Browser",
            "Operating System"
        ],
        answer: "Programming Language"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "let",
            "print",
            "echo",
            "define"
        ],
        answer: "let"
    },
    {
        question: "Which company developed JavaScript?",
        options: [
            "Microsoft",
            "Netscape",
            "Google",
            "Apple"
        ],
        answer: "Netscape"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
            "//",
            "/* */",
            "#",
            "."
        ],
        answer: "//"
    },
    {
        question: "Which method is used to display a message in the browser?",
        options: [
            "alert()",
            "print()",
            "display()",
            "show()"
        ],
        answer: "alert()"
    },
    {
        question: "Which operator is used for strict equality?",
        options: [
            "===",
            "==",
            "=",
            "!="
        ],
        answer: "==="
    },
    {
        question: "Which loop is guaranteed to execute at least once?",
        options: [
            "do...while",
            "while",
            "for",
            "for...in"
        ],
        answer: "do...while"
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        answer: "push()"
    },
    {
        question: "Which function converts a string to an integer?",
        options: [
            "parseInt()",
            "toString()",
            "NumberToString()",
            "charAt()"
        ],
        answer: "parseInt()"
    },
    {
        question: "Which event occurs when a button is clicked?",
        options: [
            "click",
            "mouseover",
            "keydown",
            "load"
        ],
        answer: "click"
    }
];


var index = 0;

document.querySelector('.wrapper').style.display = "none";
document.querySelector('h3').onclick = function () {
    document.querySelector('.wrapper').style.display = "block";
    document.querySelector('h3').style.display = "none";
    Quiz(index);
}


var id;
var second;
let score = 0;

function Timer(t1, t2) {
    setTimeout(() => {
        document.querySelectorAll('.timer span')[0].innerHTML = "00";
        second = document.querySelectorAll('.timer span')[1].innerText = "59";
    }, t1)

    id = setInterval(() => {
        document.querySelectorAll('.timer span')[1].innerText = second--;
    }, t2)
}


function Quiz(index) {

    if (index != 0) {
        document.querySelector('.pre').classList.remove("no-cursor")
        document.querySelector('.pre').disabled = false;
        Timer(1000, 1000);
    }


    if (index == 9) {
        document.querySelector('.next').classList.add("no-cursor");
        document.querySelector('.next').disabled = true;
    }


    if (index == 0) {
        document.querySelector('.pre').classList.add("no-cursor");
        document.querySelector('.pre').disabled = true;
        Timer(1000, 1000);

    }


    if (index != 9) {
        document.querySelector('.next').classList.remove("no-cursor")
        document.querySelector('.next').disabled = false;
    }


    document.querySelector('.question').innerHTML = `
    <div class="">
        <h2>${quizQuestions[index].question}</h2><br>
            <div class="option">
                <aside><input name="R" form = "Myform" value = "${quizQuestions[index].options[0]}" type="radio" id = "id1"><label>  ${quizQuestions[index].options[0]} </label></aside>
                <aside><input name="R" form = "Myform" value = "${quizQuestions[index].options[0]}" type="radio"  id = "id1"><label> ${quizQuestions[index].options[1]} </label></aside>
                <aside><input name="R" form = "Myform" value = "${quizQuestions[index].options[0]}" type="radio" id = "id1"><label>  ${quizQuestions[index].options[2]} </label></aside>
                <aside><input name="R" form = "Myform" value = "${quizQuestions[index].options[0]}" type="radio"  id = "id1"><label> ${quizQuestions[index].options[3]} </label></aside>
            </div>
        </div>`
}


document.querySelector('.next').onclick = function (e) {
    clearInterval(id);
    Quiz(++index);
    e.preventDefault();
}


document.querySelector('.pre').onclick = function (e) 
{
    e.preventDefault();
    Quiz(--index);

}


document.querySelector('form').onsubmit = function(e)
{
    e.preventDefault();

    for (let i = 0; i < quizQuestions[i].options.length; i++) 
    {
       if (e.target[i].checked) 
       {
            if (e.target[i].value == quizQuestions[index].answer) 
            {
                console.log("right");
                score++;
            }
       }
    }
clearInterval(id);
Quiz(++index);
}


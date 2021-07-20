let questions = [
    {
      id: 1,
      question: "What is the full form of RAM ?",
      answer: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "What is the full form of CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    },
    {
      id: 4,
      question: "What is the full form of CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 5,
      question: "What is the full form of E-mail",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 6,
      question: "What is the full form of RAM ?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 7,
      question: "What is the full form of E-mail",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    }
  ];
  
  let question_count = 0;
  let points = 0;

  let arr=new Array(questions.length).fill(0);
  
  window.onload = function() {
    show(question_count);
  
  };

  function result(){
    var total=0;
    for(let i=0;i<arr.length;i++){
      total+=arr[i];
    }
    window.sessionStorage.setItem("points", total);
  }
  
  function next() {
  
    let user_answer = fetchIndex();
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      /*sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";*/
      if (questions[question_count].options[user_answer] == questions[question_count].answer) {
        //points += 4;
        arr[question_count]=4;
        //sessionStorage.setItem("points", points);
      }
      else{
        arr[question_count]=0;
      }
      question_count--;
      var x=confirm("Do you want to submit it?");
      if(x==true){
        result();
        location.href = "end.html";
      }
    }
    else{
  
      // check if the answer is right or wrong
      if (questions[question_count].options[user_answer] == questions[question_count].answer) {
        //points += 4;
        arr[question_count]=4;
        //sessionStorage.setItem("points", points);
      }
      else{
        arr[question_count]=0;
      }
    }
    console.log(arr);
  
    question_count++;
    show(question_count,0);
  }

  function prev() {
  
    let user_answer = fetchIndex();
    // if the question is last then redirect to final page
    if (question_count == 0) {
      ///sessionStorage.setItem("time", time);
      /*clearInterval(mytime);
      location.href = "end.html";*/
      alert("This is the first question");
      if (questions[question_count].options[user_answer] == questions[question_count].answer) {
        //points += 4;
        arr[question_count]=4;
        //console.log(points);
        sessionStorage.setItem("points", points);
      }
      else{
        arr[question_count]=0;
      }
      question_count++;
    }
  
    else{
        // check if the answer is right or wrong
      if (questions[question_count].options[user_answer] == questions[question_count].answer) {
        //points += 4;
        arr[question_count]=4;
        //console.log(points);
        sessionStorage.setItem("points", points);
      }
      else{
        arr[question_count]=0;
      }
    }
    console.log(arr);
  
    question_count--;
    show(question_count,0);
  }
  
  function show(count,inp) {
    if(inp==1){
        question_count=count;
    }
    let question = document.getElementById("questions");
    let answer = document.getElementById("answers");
    let [first, second, third, fourth] = questions[count].options;

    question.innerHTML = `
    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 35rem;">
    <img src="https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook" height=400 class="card-img-top" alt="200x200">
    <div class="card-body">
      <p class="card-text">Q${count + 1}. ${questions[count].question}</p>
    </div>
  </div>
    `;
  
    answer.innerHTML = `
    <div class="card shadow-sm p-3 mb-3 bg-body rounded" name="quest" id="que" style="width: 25rem;">
    <!--<img src="https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook" class="card-img-top" alt="200x200">-->
    <div class="card-body">
      <p class="card-text">${first}</p>
    </div>
  </div>
  <div class="card shadow-sm p-3 mb-3 bg-body rounded" name="quest" id="que" style="width: 25rem;">
    <!--img src="https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook" class="card-img-top" alt="200x200">-->
    <div class="card-body">
      <p class="card-text">${second}</p>
    </div>
  </div>
  <div class="card shadow-sm p-3 mb-3 bg-body rounded" name="quest" id="que" style="width: 25rem;">
    <!--img src="https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook" class="card-img-top" alt="200x200">-->
    <div class="card-body">
      <p class="card-text">${third}</p>
    </div>
  </div>
  <div class="card shadow-sm p-3 mb-3 bg-body rounded" name="quest" id="que" style="width: 25rem;">
    <!--img src="https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook" class="card-img-top" alt="200x200">-->
    <div class="card-body">
      <p class="card-text">${fourth}</p>
    </div>
  </div>
    `;
    toggleActive();
  }

  function index(){
      let ind=document.getElementById("indx");
      var i;
      var p;
      var btngr='<div class="btn-group me-2" role="group" style="padding: 2px;">';
      var str="";
      for(i=1;i<=questions.length;i++){
          if(i<9){
              p=leftPad(i,2);
          }
          if(i%5==1){
            str = str+btngr+`
            <button type="button" class="btn btn-secondary" onclick="show(${i-1},1)">${p}</button>
            `;
            console.log(i);
          }
          else if(i%5==0){
            str += `
            <button type="button" class="btn btn-secondary"  onclick="show(${i-1},1)">${p}</button>
            </div>
            `;
          }
          else if(i==questions.length){
            str = str+`
            <button type="button" class="btn btn-secondary"  onclick="show(${i-1},1)">${p}</button>
            </div>
            `;
          }
          else{
            str += `
            <button type="button" class="btn btn-secondary"  onclick="show(${i-1},1)">${p}</button>
            `;
          }
      }
      console.log(str);
      ind.innerHTML=str;
      document.getElementById("brand").innerHTML="Welcome! "+window.sessionStorage.getItem("name");
  }

  function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    console.log(output);
    return output;
}
  
  function toggleActive() {
    let option = document.getElementsByName('quest');
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  //data-bs-toggle="collapse" data-bs-target="#indx" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" 
  function fetchIndex(){
    var correct;
    let option = document.getElementsByName('quest');
    for (let i = 0; i < option.length; i++) {
      if (option[i].classList.contains("active")) {
        correct=i;
        break;
      }
    }
    return correct;

  }
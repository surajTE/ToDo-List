var task_list = " ";
var doTask = " ";
var data = [];

function add() {
    var doTask = document.querySelector("#task").value;

    data.push({
        Task: doTask
    });

  getdata()
}

function getdata() {
    var str = "";
    data.map(i => {
        str += "<p class='task_list'>" + i.Task + "</p>";
    })

    // for (var i of data) {
    //     str += i.Task + "<br/>";
    //     console.log(i.Task);
    // }


    document.querySelector(".list").innerHTML = str;
    console.log(data);
}


var app = angular.module("myApp",[])
app.controller("myCtrl", function($scope){
    $scope.loginStatus = true;
    $scope.studentInfoStatus = false;
    $scope.studentListStatus = false;
    $scope.listClass=[];
    $scope.listStudent = [
        {
            "name": "Nguyen Văn A",
            "date": "20/10/1998",
            "gender": "Nam",
            "subjects": [ "Vietnamese, ","English"],
            "class": "C1608L"
        },
        {
            "name": "Nguyen Văn B",
            "date": "20/10/2001",
            "gender": "Nam",
            "subjects": [ "Vietnamese, ","English"],
            "class": "C1608L"
        }
    ];
    $scope.login = function(){
        if($scope.txtuser == "admin" && $scope.txtpassword == "123456"){
            $scope.studentInfoStatus = true;
            $scope.studentListStatus = true;
            $scope.loginStatus = false;
            alert("Login success \nRedirecting to next page...","This page says");
        }
        else{
            alert("Login failed! \n Incorrect username or password!","This page says");
        }
    }

    $scope.addStudent = function(){
        var radioButton = document.getElementsByName("txtGender");
        var gender = '';
        for(var i = 0; i < radioButton.length; i++){
            if(radioButton[i].checked){
                gender = radioButton[i].value;
            }
        }
        var listSubjects = [];
        var subjects = document.getElementsByName("Subject");
        for(var i = 0; i < subjects.length; i++){
            if(subjects[i].checked){
                if(listSubjects.length > 0){
                    listSubjects.push(", "+subjects[i].value);
                }
                else{
                    listSubjects.push(subjects[i].value);
                }
            }
        }
        
        if($scope.txtnameStudent &&  $scope.txtdate && gender && listSubjects!=null &&  $scope.class){
            var Student = {
                "name" : $scope.txtnameStudent,
                "date" : $scope.txtdate,
                "gender" : gender,
                "subjects" : listSubjects,
                "class" : $scope.class
            }
            $scope.listStudent.push(Student);
            alert("new student added successfully");
        }
        else{
            alert("Missing user input data!!")
        }
    }
        $scope.confirmDelete = function(index) {
            if (confirm("Are you sure you want to delete this student?")) {
                $scope.listStudent.splice(index, 1);
            } else {
              // Do something if user clicks "No"
            }
          };
    
    
    $scope.addClass = function(){
        var className = window.prompt("enter class name");
        if(className) {
             $scope.listClass.push(className);
            alert("new class added successfully!");    
        }
    }
})
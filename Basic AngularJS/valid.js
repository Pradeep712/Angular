
var app = angular.module("myapp", []);
// app.factory('messages', function(){
//   var messages = {};

//   messages.list = [];

//   messages.send= function(message){
//     messages.list.push({id: messages.list.length, text: message});
//   }

//   return messages;


// });


app.controller("myCtrl", function ($scope , $http) {
//$scope.DOB="28-08-2018"
//alert($scope.DOB)
// $scope.DOB = {
//          value: new Date(2018, 8, 27)
//        };
$scope.names = [{
"genderid": 1,
"type": "Male"
}, {
"genderid": 2,
"type": "Female"
}];
$scope.qua=[{
  "quaid":1,
  "qualification":"BCA"
},{
  "quaid":2,
  "qualification":"BSC"
},{
  "quaid":3,
  "qualification":"MSC"
},
{
"quaid":4,
  "qualification":"MCA"
}
];

  $scope.today=new Date();
  $scope.year=$scope.today.getFullYear();
  $scope.month=$scope.today.getMonth()+1;
  $scope.day=$scope.today.getDate();
  if($scope.day<10)
    $scope.dd='0'+$scope.day;
  else
      $scope.dd=$scope.day;
    
  if($scope.month<10)
    $scope.mm='0'+$scope.month;
  else
       $scope.mm=$scope.month;

  

  $scope.maxdate=$scope.year+'-'+$scope.mm+'-'+$scope.dd;
  $scope.mindate="1970-01-01";

  	 $scope.unames=[];
     $scope.errorform=false;
     $scope.user={};
  
  	$scope.send=function(formst){
      // console.log(formst.$valid)
     

   var pusharray = {name: $scope.uname, mail: $scope.mail, gender:$scope.selectedPerson, 
        qualification: $scope.degree, dob: $scope.DOB.toISOString().split('T')[0], comments: $scope.comments };
       
      
              $scope.unames.push(pusharray);
              


     

      
  	 /*$scope.unames.push($scope.uname,),

      $scope.unames.push($scope.mail),
       $scope.unames.push($scope.selectedPerson),
     $scope.unames.push($scope.option.degree),
     $scope.unames.push($scope.DOB),
     $scope.unames.push($scope.comments);
*/
   //  $scope.user=$scope.uname;
   //  $scope.email=$scope.mail;
   // $scope.gen= $scope.selectedPerson;
   // $scope.edu=$scope.degree;
   //  $scope.dob=$scope.DOB;
   //  $scope.cmnt=$scope.comments;

}
   $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.unames.splice(x, 1);
    }
});

(function () {
var app=angular.module("module1App", []);
app.controller("Controller", ['$scope', Controller]);
function Controller($scope){
    $scope.list="";
    $scope.Answer="";
    $scope.total;
    $scope.Result=[];
    $scope.Validate=function(){
        $scope.total=0;
        var name=$scope.list;
        if(name =="")
        {
            $scope.total=0;
        }
        else {
            $scope.Separate();
        }
        if(($scope.total>0)&&($scope.total<=3))
        {
            $scope.Answer="Enjoy!";
        }
        else if($scope.total==0)
        {
            $scope.Answer="Please enter data first";
        }
        else if($scope.total>3)
        {
            $scope.Answer="Too much!";
        }
    };

    $scope.Separate=function(){
        $scope.Result = $scope.list.split(',');
        for(var i=0; i<$scope.Result.length; i++)
        {
            if(($scope.Result[i]!=" ")&&($scope.Result[i]!=""))
            {
                $scope.total=$scope.total+1;
            }

        }
    };
}

})();
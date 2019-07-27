 
 
var arr= [
{email: "test@test0", message: "testtesttesttesttest", date: "2019/7/27 下午9:17:26", id: 0},
 {email: "test@test1", message: "testtesttesttesttest", date: "2019/7/27 下午9:17:27", id: 1},
 {email: "test@test2", message: "testtesttesttesttest", date: "2019/7/27 下午9:17:28", id: 2},
 {email: "test@test3", message: "testtesttesttesttest", date: "2019/7/27 下午9:17:29", id: 3},
 {email: "test@test4", message: "testtesttesttesttest", date: "2019/7/27 下午9:17:29", id: 4}
 ]



  let that = ["4","3"];
        let removeSelected = arr.filter(function (s) {
			
			
			//console.log( s.id , that.indexOf(  s.id.toString() ) ) 
			
			
			
            if (  that.indexOf(  s.id.toString()  )>= 0 ) {
                return false ;
            } else {
                return  s  ;
            }
 


        });
		console.log(removeSelected)
		
		



 










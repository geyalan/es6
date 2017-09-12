// 修饰器是一个函数修改类的行为
// 打补丁
// npm install babel-plugin-transform-decotators-legacy --save-dev
// 
{
	let readonly=function(target,name,descriptor){
		descriptor.writable=false;
		return descriptor;
	}

	class Test{
		@readonly
		time(){
			return '2017-9-11'
		}
	}

	let test=new Test();
	console.log(test.time());
}
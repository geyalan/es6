// 引入yargs，yargs 模块能够解决如何处理命令行参数
import yargs from 'yargs';
// 区分是线上环境还是开发环境
const args = yargs
	  	.option('production',{
			boolean:true,
			default:false,
			describe:'min all scripts'
		})
//是否自动编译
	  	.option('watch',{
	  		boolen:true,
	  		default:false,
	  		describe:'watch all files'
	  	})
//是否输出日志
	  	.option('verbose',{
	  		boolean:true,
	  		default:false,
	  		describe:'log'
	  	})
//sourcemap
	  	.option('sourcemaps',{
	  		describe:'force the creation of sourcemaps'
	  	})

	  	.option('port',{
	  		string:true,
	  		default:'8080',
	  		describe:'server port'
	  	})
//对输入的内容以字符串作为解析	  	
	  	.argv

export default args;
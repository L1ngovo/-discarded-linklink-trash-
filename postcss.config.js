module.exports = {
    plugins:{
        autoprefixer:{}, // 用来给不同的浏览器自动添加相应前缀
        'postcss-px-to-viewport':{
            unitToConvert:'px', // 需要转换的单位，默认为“px”
            viewportWidth:1920, //  设计稿的视口宽度
            unitPrecision:5, // 单位转换后保留的精度
            propList:['*'], // 指定转换的CSS属性的单位，*代表全部CSS属性的单位都进行转换
            viewportUnit:'vw', // 希望使用的视口单位
            fontViewPortUnit:'vw', // 字体使用的视口单位
            selectorBlackList:["wrap"], // 需要忽略的css选择器，即指定不转换为视窗单位的类名
            minPixeValue:1, // 最小的转换数值，小于或等于1px则不转换
            MediaQuery:false, // 媒体查询里的单位是否需要转换单位
            replace:true, // 是否直接更换属性值，而不添加备用属性
            exclude:[/node_modules /], // 忽略某些文件夹下的文件或特定文件
            include:undefined, // 
            landscape:false, // 是否处理横屏情况
            landscaperUnit:'vw' //横屏的视窗单位
        }
    }
}
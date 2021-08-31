const { override,fixBabelImports} = require('customize-cra');
 // 重写,按需加载引入组件
 module.exports = override(
     fixBabelImports('import',{
        libraryName: 'antd',
        libraryDirectory: 'es',// es导入
        style: 'css',
     })
 )
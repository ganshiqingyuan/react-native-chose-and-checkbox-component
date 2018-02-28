# react-native-chose-and-checkbox-component
一个react native 的单选和多选组件，，

本组件适合使用react-navigation的项目，，在根StackNavigator中注册 chose.js页面，，，
再需要用到单选的地方跳转到chose 界面，单机选择并回退到之前界面，，触发选择界面的函数保存选择的值
![img](https://github.com/chosecode/react-native-chose-and-checkbox-component/blob/master/5%24Q5MOYP80RDJNL%5D9_2JJL8.png)
注意传值 data 为字符串数组，，传什么选择界面就会显示什么，，，后来触发的save函数传回来的也是字符串，，，你选择的字符串

![img1](https://github.com/chosecode/react-native-chose-and-checkbox-component/blob/master/1.png)
  单击请选择
![img2](https://github.com/chosecode/react-native-chose-and-checkbox-component/blob/master/2.png)
  跳到选择页面，，单击正定
![img3](https://github.com/chosecode/react-native-chose-and-checkbox-component/blob/master/3.png)
  跳回请选择界面，，把传过来的值放入选择结果框中
  
  本例  传值data为 ['婚纱'正定','测试']...还有后面 那些值，，，，传回来的数据为 字符串 '正定'
  
  
  checkbox 组件，
  checkbox.js ![img2](https://github.com/chosecode/react-native-chose-and-checkbox-component/blob/master/box4.png)
  ![img2](https://github.com/chosecode/react-native-chose-and-checkbox-component/blob/master/box5.png)
  这是主要代码 ，图片放到合适位置，，Image指向图片位置，
  效果
  ![img2](https://github.com/chosecode/react-native-chose-and-checkbox-component/blob/master/box1.png)
  ![img2](https://github.com/chosecode/react-native-chose-and-checkbox-component/blob/master/box2.png)
  ![img2](https://github.com/chosecode/react-native-chose-and-checkbox-component/blob/master/box3.png)

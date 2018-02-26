import React,{Component} from 'react'

import{
    View,
    Text,
    StyleSheet,
    FlatList,
    CheckBox,
    Image,
    Button,
    TextInput,
    TouchableNativeFeedback,
    Dimensions
}from 'react-native'


const { width, height } = Dimensions.get('window');

const styles=StyleSheet.create({
    warp:{
        flex:1,
    },
    item:{
        width:'100%',
        height:50,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'white'
    }

})

export default class CheckBoxx extends Component{
    static navigationOptions={
        title:'',
        headerTitleStyle: {
        alignSelf:'center'
      },
    };

    state={
        checklist:[
            {
                isChecked:false,
                id:"5bddb041685e465a8b48209e8db5c921",
                name:'下单员'
            },
            {
                isChecked:false,
                id:"7d0a720bbecc40dca7c5a4a52a5d9d73",
                name:'退单员'
            },
            {
                isChecked:false,
                id:"9018b759f4744827bf3e3e503eb806e1",
                name:' 老板'
            }
        ]
    }
    
    render(){
        return(
            <View style={styles.warp}>
            <FlatList
            data={this.state.checklist}
            ItemSeparatorComponent={()=>{
                return(
                    <View style={{width:'100%',height:0.5,backgroundColor:'rgba(150,150,150,0.2)'}}/>
                )
            }}
            keyExtractor={(item1, index2) => index2}
            renderItem={
                (item)=>{
                    return(
                        <TouchableNativeFeedback
                        onPress={()=>{
                            var data=this.state.checklist
                            data[item.index].isChecked=!data[item.index].isChecked
                            this.setState({
                                checklist:data
                            })
                        }}
                        >
                        <View style={styles.item}>
                        <Text style={{width:100}}>{item.item.name}</Text>
                        <Image source={item.item.isChecked?require("../img/checked.png"):require("../img/check.png")} style={styles.checkImage}/>
                        </View>
                        </TouchableNativeFeedback>
                    )
                }
            }
            />
            <View style={{marginBottom:40}}>
            <Button
                    onPress={()=>{
                        var arr=[]
                        for(var i=0;i<this.state.checklist.length;i++){
                            if(this.state.checklist[i].isChecked){
                                arr.push(i)
                            }
                        }
                        this.props.navigation.state.params.save(arr);
                        this.props.navigation.goBack()
                    }}
                    title="确定"
                    style={{padding:20}}
                    color="#841584"
            />
            </View>
            </View>
        )
    }
}
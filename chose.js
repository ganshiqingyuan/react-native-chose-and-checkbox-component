import React,{Component} from 'react'

import{
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableNativeFeedback,
    Dimensions
}from 'react-native'


const { width, height } = Dimensions.get('window');

const styles=StyleSheet.create({
    warp:{
        width:width,
        height:height-80
    },
    item:{
        width:'100%',
        height:56,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    }

})

export default class Chose extends Component{
    static navigationOptions={
        title:'',
        headerTitleStyle: {
        alignSelf:'center'
      },
    };

    
    render(){
        return(
            <View style={styles.warp}>
            <FlatList
            data={this.props.navigation.state.params.data}
            ItemSeparatorComponent={()=>{
                return(
                    <View style={{width:'100%',height:0.5,backgroundColor:'rgba(150,150,150,0.2)'}}/>
                )
            }}
            keyExtractor={(item1, index2) => index2}
            renderItem={
                ({item})=>{
                    return(
                        <TouchableNativeFeedback
                        onPress={()=>{
                            this.props.navigation.state.params.save(item)
                            this.props.navigation.goBack()
                        }}
                        >
                        <View style={styles.item}>
                        <Text style={{color:'black',}}>{item}</Text>
                        </View>
                        </TouchableNativeFeedback>
                    )
                }
            }
            />
            </View>
        )
    }
}
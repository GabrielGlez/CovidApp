import React, { Component} from 'react'
import axios from 'axios'
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator, Image, FlatList
  } from 'react-native';
  import { Col, Row, Grid } from "react-native-easy-grid";
  import ImageBackground  from 'react-native';
  import Gradient from 'react-native-css-gradient';
class CovidPantalla extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios({
            "method":"GET",
            "url":"https://covid-19-data.p.rapidapi.com/country",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
            "x-rapidapi-key":"44c9aee670mshcd7773b9197f900p17732fjsn0ad53654e7ec",
            "useQueryString":true
            },"params":{
            "format":"json",
            "name":"mexico"
            }
            })
            .then((response)=>{
              console.log(response)
              this.setState({posts:response.data[0]})
            })
            .catch((error)=>{
              console.log(error)
            })
    }

    render() {
        const {posts} = this.state
        return (
            <View >
                <View style={styles.content}>
                    
                <View  style={styles.content} >

                    <Text style={ styles.itemTitulo }>Casos de COVID-19 en Mexico</Text>
                </View>

                <Grid >
                    <Col style={styles.contentText}>
                        <Row style={ styles.itemText}>
                            <Text style={ styles.texto}>Pais: </Text>
                            <Text style={ styles.itemss }> {posts.country}</Text>
                        </Row>
                        <Row style={ styles.itemText2 }>
                            <Text style={ styles.texto }>Confirmados: </Text>
                            <Text style={ styles.itemss }>  {posts.confirmed}</Text>
                        </Row>
                    </Col>
                    <Col style={styles.contentText}>
                        <Row style={ styles.itemText3}>
                            <Text style={ styles.texto }>Criticos: </Text>
                            <Text style={ styles.itemss }> {posts.critical} </Text>
                        </Row>
                        <Row style={ styles.itemText4}>
                            <Text style={ styles.texto }>Recuperados: </Text>
                            <Text style={ styles.itemss }> {posts.recovered} </Text>
                        </Row>

                    </Col>
                    <Col style={styles.contentText}>
                        <Row style={ styles.itemText5}>
                            <Text style={ styles.texto }>Muertes: </Text>
                            <Text style={ styles.itemss }> {posts.deaths} </Text>
                        </Row>
                        

                    </Col>
                </Grid>

            </View>
            </View>
        )
    }
}
const styles= StyleSheet.create({   

    content: {
        height:'100%',
        paddingTop:'10%',
        paddingBottom:'30%',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    itemImage: {
        marginBottom:100,
        paddingBottom:100,
        width: '100%',
        height: '50%',
        borderWidth: 4,
    },
    itemText: {
        flex: 1,
        paddingVertical: '75%',
        alignItems: 'center',
        backgroundColor: '#F28A1C',
        flexDirection: 'column',
        width: '100%',
        borderWidth: 2,
        
        borderColor: '#ddd',
        borderBottomWidth: 3,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,

    },
    texto: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    contentImg: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        alignItems: 'center',
        height: '100%',


    },
    contentText: {
        backgroundColor: 'white',
        alignItems: 'center',
    },
    itemTitulo: {
        fontSize: 40,
        textAlign: 'center',
        marginVertical: 10,
        color: 'black'
    },
    itemTitulo2: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
        color: 'black'
    },
    itemss: {
        flex: 1,
        width: 100,
        height: 90,
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 15,
    },
    itemText2: {
        flex: 1,
        paddingVertical: '75%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F6362A',
        width: '100%',
        borderWidth: 2,
        borderColor: '#ddd',
        borderBottomWidth: 3,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,

    },
    itemText3: {
        flex: 1,
        paddingVertical: '75%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#c1d90d',
        width: '100%',
        borderWidth: 2,
        borderColor: '#ddd',
        borderBottomWidth: 3,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,

    },
    itemText4: {
        flex: 1,
        paddingVertical: '75%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#57E411',
        width: '100%',
        borderWidth: 2,
        borderColor: '#ddd',
        borderBottomWidth: 3,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,

    },
    itemText5: {
        flex: 1,
        paddingVertical: '154%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#333732',
        width: '100%',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 3,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,

    },
});

export default CovidPantalla
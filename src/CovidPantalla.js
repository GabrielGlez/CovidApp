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
                    </Col>
                    <Col style={styles.contentText}>
                    <Row style={ styles.itemText}>

                            <Text style={ styles.texto }>Confirmados: </Text>
                            <Text style={ styles.itemss }>  {posts.confirmed}</Text>
                    </Row>
                    </Col>
                    <Col style={styles.contentText}>
                    <Row style={ styles.itemText}>
                            <Text style={ styles.texto }>Criticos: </Text>
                            <Text style={ styles.itemss }> {posts.critical} </Text>
                    </Row>
                    </Col>
                    <Col style={styles.contentText}>
                    <Row style={ styles.itemText}>
                            <Text style={ styles.texto }>Recuperados: </Text>
                            <Text style={ styles.itemss }> {posts.recovered} </Text>
                    </Row>
                    </Col>

                    
                    <Col style={styles.contentText}>
                        <Row style={ styles.itemText}>
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
        height:'200%',
        paddingTop:'10%',
        paddingBottom:'30%',
        flex: 1,
        alignItems: 'center',
    },
   
    itemText: {
        flex: 1,
        paddingVertical: '75%',
        alignItems: 'center',
        backgroundColor: '#F28A1C',
        flexDirection: 'column',
        width: '100%',
        borderWidth: 2,
        height: '100%',
        borderColor: '#ddd',
        borderBottomWidth: 3,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom : 5,
    },
    texto: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    contentText: {
        backgroundColor: 'white',
        alignItems: 'center',
        height:'100%',
    },
    itemTitulo: {
        fontSize: 40,
        textAlign: 'center',
        marginVertical: 10,
        color: 'black'
    },
    itemss: {
        flex: 1,
        width: 100,
        height: 90,
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        paddingVertical: 15,
        paddingBottom: 20,
    },
   
});

export default CovidPantalla
import * as React from "react";
import { StyleSheet, View, Button, Alert, Text, ScrollView, ImageBackground } from "react-native";
import { Dropdown, Container, Row, Col, Image} from "react-bootstrap";
import axios from "axios";
import Coruscant from '../img/Coruscant.jpg' 
import Tatooine from  '../img/tatooine.jpg'
import Bespin from  '../img/bespin.png'
import Dagobah from  '../img/dagobah.jpg'
import Endor from  '../img/Endor.jpg'
import Kashyyyk from  '../img/Kashyyyk.jpg'

export default class User extends React.Component {
  state = {
    characters: null,
    background: Coruscant
  };

  static navigationOptions = {
    tabBarLabel: "All Characters"
  };



  componentDidMount = () => {
    axios.get(("https://swapi.dev/api/people/?format=json")).then(res =>
      this.setState({
        characters: res.data.results
      })
    );
    const bgNumber = Math.ceil(Math.random() * 7)
    switch (bgNumber) {
      case 1 : this.setState({background: Coruscant}); break;
      case 2 : this.setState({background: Bespin}); break;
      case 3 : this.setState({background: Dagobah}); break;
      case 4 : this.setState({background: Kashyyyk}); break;
      case 5 : this.setState({background: Tatooine}); break;
      case 6 : this.setState({background: Endor}); break;
    }
  };
  
   componentDidUpdate = () => {
    const bgNumber = Math.ceil(Math.random() * 7)
        switch (bgNumber) {
          case 1 : this.setState({background: Coruscant}); break;
          case 2 : this.setState({background: Bespin}); break;
          case 3 : this.setState({background: Dagobah}); break;
          case 4 : this.setState({background: Kashyyyk}); break;
          case 5 : this.setState({background: Tatooine}); break;
          case 6 : this.setState({background: Endor}); break;
        }
   }

  render() {
      
    return (
      <ImageBackground source={this.state.background} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <Text style={[styles.textCenter, styles.text]}>🚀Star-Wars characters (Click on any character to view details)</Text>
          <br/>

          {this.state.characters !== null ? (
            this.state.characters.map((chara, key) => (
              <View style={styles.characterSheet} key={key}>
                
                         
                         
                       
    
  
 



                        <Dropdown>
  <Dropdown.Toggle style={{backgroundColor: "black" , border: "none", alignItems: "center"}} id="dropdown-basic">
  <Container>
  <Row>
  <Col xs={6} md={4}>
      <Image style={{width: "10%"}} src={Endor} roundedCircle />
    </Col>
  <Text style={styles.header}>{chara.name}</Text>
  </Row>
</Container>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">
    <Text style={styles.text}>Heigh : {chara.height}</Text>
    </Dropdown.Item>
    <br />
    <Dropdown.Item href="#/action-2"> 
    <Text style={styles.text}>Gender : {(chara.gender === 'n/a') ? 'Droid' : chara.gender}</Text>
    </Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
              </View>
            ))
          ) : (
            <Text style={[styles.textCenter, styles.text]}>Loading…</Text>
          )}
        </ScrollView>
      </View>
      </ImageBackground>
    );
  }
}

  
    
 



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: 50,
    minHeight: '100%', 
    

  },
  scroll: {
    width: "100%",
    margin: "auto",
    marginTop: 5,
    
  },
  textCenter: {
    textAlign: "center",
  },
  text: {
    color: '#fff',
  },
  header:{
    fontWeight: "bold",
    color: '#fff',
    marginBottom: "20px"
  },
  characterSheet: {
    backgroundColor:"#000",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    padding: 40,
    marginBottom: 5,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10%"
  },
  
});

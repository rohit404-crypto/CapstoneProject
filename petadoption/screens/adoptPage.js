import React ,{ useState,useEffect } from 'react';
import {View, StyleSheet, ScrollView,Image,TextInput} from 'react-native';
import AdoptCard from '../components/adoptCard';
import { Icon } from "react-native-vector-icons"
import { Feather } from '@expo/vector-icons';



const AdoptPage = ({onSearch}) => {
    const [pet,setPet]=useState([])
    const [searchText, setSearchText] = useState('');
      
        const handleSearch = () => {
            onSearch(searchText);
        };

    useEffect(()=>{
        fetch(`http://192.168.1.9:4000/adoptpets`)
        .then((res)=>res.json())
        .then((data)=>setPet(data))
    },[])

    console.log(pet)

    return (
        <ScrollView style={{backgroundColor:'#2525',}}>
        <View style={styles.container}>
        <View style={styles.search}>
        <TextInput
        style={styles.input}
        placeholder="Search by Location"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch}
      />
       <Feather name="search" size={20} color="green" style={styles.icon} />
        </View>
       

        {pet.map((item)=>(
            
            <AdoptCard 
                key={item._id}
                image={item.image}
                name={item.name}
                breed={item.breed}
                guardian={item.guardianname}
                phone={item.phonenumber}
            />  
        ))}
        
            
        </View>
        
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
      },
      input: {
        height:40,
        width:"80%",
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius:5,
        backgroundColor:"#fff"
      },
      icon:{
        borderWidth:0.5,
        height:35,
        width:35,
        borderRadius:35,
        padding:7,
        backgroundColor:"aliceblue",
        

      },
      search:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:9,
        
      }
      
})

export default AdoptPage;

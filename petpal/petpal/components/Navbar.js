import { View, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { Icon } from '@rneui/themed';
const Navbar = ({ allProducts , navigation,setSearch ,handleSearch}) => {
    const [searchval, setSearchval] = useState('');
    // const [oldData, setOldData] = useState([]);
    // const [data, setData] = useState([])
    // const searchRef = useRef();

    // useEffect(() => {
    //     setOldData(allProducts);
    //     setData(allProducts);
    // }, [])

    // const onSearch = (search) => {
    //     if (search === "") {
    //         setData(oldData);
    //     } else {
    //         let tempList = data.filter(item => {
    //             return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
    //         });
    //         setData(tempList);
    //     }
    // }
    // console.log(data);
    return (
        <View style={{ width: '100%', height: 90, flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <Icon name="menu" type='material'
                containerStyle={{ backgroundColor: 'transparent', width: 60, height: 22 }}
            />
            <View style={{ width: '62%', height: 40, borderRadius: 5, borderWidth: 0.2, flexDirection: 'row', alignItems: 'center', backgroundColor: 'aliceblue', marginRight: 20 }}>
                <Icon name="search" type='material' onPress={handleSearch} containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', width: 25, height: 25, marginLeft: 10, marginTop: 0, marginRight: 5, marginBottom: 0 }} />
                <TextInput placeholder="Type Here..."
                    style={{ width: '50%', height: 50 }}
                    value={searchval}
                    onChangeText={text => {
                        setSearchval(text)
                        setSearch(text);
                    }} />
                {searchval === "" ? null : (
                    <TouchableOpacity style={{}} >
                        <Icon name="close" type='material' onPress={() => {
                        // searchRef.current.clear();
                        // onSearch('');
                        setSearchval('')
                        setSearch('');
                    }} containerStyle={{ opacity: 0.5, right: -50, width: 25, height: 25 }} />
                    </TouchableOpacity>
                )} 

            </View>
            <Icon name="heart" type='octicon' containerStyle={{ left: -6, width: 25, height: 25 }} />
            <Icon name="shopping-cart" type='material' containerStyle={{ right: -5, width: 25, height: 25 }} onPress={() => navigation.navigate('Cart')} />
        </View>
    )
}

export default Navbar;
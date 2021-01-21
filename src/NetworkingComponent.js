import { Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';

//const URL = "https://reactnative.dev/movies.json"
const URL = "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:APOTHEKEOGD&srsName=EPSG:4326&outputFormat=jsonhttps://reactnative.dev/movies.json";

export default function NetworkingComponent({ name = 'keine Namensangabe', age, }) {


    useEffect(() => {
        loadData()
    }, [])


    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState()
    const [error, setError] = useState()


    const loadData = () => {
        setIsLoading(true)
        setData(undefined)
        setError(undefined)
        fetch(URL)
            .then(result => result.json())
            .then(json => {
                setData(json)
            })
            .catch(error => setError(error))
            .finally(() => setIsLoading(false))
    }


    console.log("Now Rendering");

    return (
        <View>
            {data && !isLoading && <Text>{data.description}</Text>}
            {isLoading && <Text>Loading Data...</Text>}
            {error && <ErrorView message={error.message} onRetry={loadData} />}
        </View>
    )
}

function ErrorView({ message, onRetry }) {

    return (
        <View>
            <Text>{message}</Text>
            <Button title={"try again"} onPress={onRetry} />
        </View>
    )
}



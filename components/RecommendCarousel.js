import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";

const { width: windowWidth, heigth: windowHeight} = Dimensions.get("window");

const slideList = Array.from({ length: 30 }).map((_, i) => {
    return {
        id: i,
        image: `https://picsum.photos/1440/2482random=${i}`,
        title: `This is the title! ${i + 1}!`,
        subtitle: `This is the subtitle ${i + 1}`,
    };
});

function slide({data}) {
    return (
        <View
            style={{
                height: windowHeight,
                width: windowWidth,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Image
                source={{ uri: data.image }}
                style={{ width: windowWidth * 0.9, height: windowHeight * 0.9 }}
            />
            <Text style={{ fontSize: 24}}>{data.title}</Text>
            <Text style={{ fontsize: 18 }}>{data.subtitle}</Text>
        </View>
    )   
}

function Carousel() {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        // Prevent one pixel triggering setIndex in the middle of the transition.
        // With this we have to scroll a bit more to trigger the index change.
        const isNoMandsLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMandsLand) {
            setIndex(roundIndex);
        }
    }, []);

    return (
        <FlatList
            data={slideList}
            style={{ flex: 1}}
            renderItem={({item}) => {
                return <Slide data={item}/>
            }}
            pagingEnabledhorizontal
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}

        />
    )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
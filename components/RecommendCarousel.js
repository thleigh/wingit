import React, { useCallback, memo, useRef, useState, } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
} from "react-native";

import Recommendations from "../model/RecommendData";

const windowWidth = Dimensions.get("window").width; //full width
const windowHeight = Dimensions.get("window").height; //full height

const slideList = Array.from({ length: 30 }).map((_, i) => {
    return {
      id: i,
      image: require("../assets/jennie.png"),
      title: `Jennie Kim`,
      time: `2h ago`,
      subtitle: `Hi, I'm new to LA, I'm looking for some new girl friends and maybe even a new boyfriend ;).`,
    };
  });
  const Slide = memo(function Slide({ data }) {
    return (
      <View style={styles.slide}>
        <View style={{flexDirection: "row"}}>
            <Text style={styles.time}>{data.time}</Text>
            <Image source={data.image} style={styles.slideImage}></Image>
            <View style={styles.body}>
                <Text> 
                    <Text style={styles.slideName}>{data.title} </Text>
                    <Text style={styles.slideSubtitle}>"{data.subtitle}"</Text>
                </Text>
            </View>
        </View>
      </View>
    );
  });
  function Pagination({ index }) {
    return (
      <View style={styles.pagination} pointerEvents="none">
        {slideList.map((_, i) => {
          return (
            <View
              key={i}
              style={[
                styles.paginationDot,
                index === i
                  ? styles.paginationDotActive
                  : styles.paginationDotInactive,
              ]}
            />
          );
        })}
      </View>
    );
  }
  export default function RecommendCarousel() {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const onScroll = useCallback((event) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);
      const distance = Math.abs(roundIndex - index);
      // Prevent one pixel triggering setIndex in the middle
      // of the transition. With this we have to scroll a bit
      // more to trigger the index change.
      const isNoMansLand = 0.4 < distance;
      if (roundIndex !== indexRef.current && !isNoMansLand) {
        setIndex(roundIndex);
      }
    }, []);
    const flatListOptimizationProps = {
      initialNumToRender: 0,
      maxToRenderPerBatch: 1,
      removeClippedSubviews: true,
      scrollEventThrottle: 16,
      windowSize: 2,
      keyExtractor: useCallback(s => String(s.id), []),
      getItemLayout: useCallback(
        (_, index) => ({
          index,
          length: windowWidth,
          offset: index * windowWidth,
        }),
        []
      ),
    };
    const renderItem = useCallback(function renderItem({ item }) {
      return <Slide data={item} />;
    }, []);
    return (
      <>
        <FlatList
          data={slideList}
          style={styles.carousel}
          renderItem={renderItem}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={onScroll}
          {...flatListOptimizationProps}
        />
        <Pagination index={index}></Pagination>
      </>
    );
  }

const styles = StyleSheet.create({
    slide: {
      height: windowHeight,
      width: windowWidth,  
    top: 20,
      alignItems: "center",
    },
    slideImage: { 
        width: 80, 
        height: 80,
    },
    body: {
        marginLeft: 10,
        width: 200,
    },
    slideName: { 
        fontSize: 16,
        fontWeight: "bold",
    },
    slideSubtitle: { 
        fontSize: 15,
    },
    time: {
        color: "lightgrey",
        position: "absolute",
        marginTop: -20,
        marginLeft: 15,
    },
    pagination: {
      position: "absolute",
      bottom: 8,
      width: "100%",
      justifyContent: "center",
      flexDirection: "row",
    },
    paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 2,
    },
    paginationDotActive: { 
        backgroundColor: "lightblue" 
    },
    paginationDotInactive: { 
        backgroundColor: "gray" 
    },
    carousel: { 
        flex: 1 
    },
  });
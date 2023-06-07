import React, { useState, useEffect } from "react";
import {
  Container,
  NavBar,
  Text,
  GradientBlock,
  IconButton,
  Carousel,
} from "components";
import { StyleSheet, View, ScrollView } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { getCategories } from "mocks/categories";
import PropTypes from "prop-types";
import DailyDiscover from "./Section/DailyDiscover";
import Categories from "./Section/Categories";
import FlashSale from "./Section/FlashSale";
import SearchBar from "./Section/SearchBar";
import Popular from "./Section/Popular";
import links from "../../../constants/ImageUrl";
import {
  getHomeData,
  IMAGE_BASE_URL,
  getHotSaleItems,
} from "../../api/index-old";

const Home = ({ navigation }) => {
  // console.log('first')
  const [homeData, setHomeData] = useState([""]);
  const [hotsaledata, setHotsaledata] = useState([""]);
  const banners = [];
  const categories = [];
  const HotItems = [];
  async function getHome() {
    const hm = await getHomeData();
    setHomeData(hm);
  }

  if (homeData == "") {
    getHome();
  } else {
    homeData.data.banners.map((item) => {
      banners.push(`${links.bannerss}${item.image}`);
    });

    // }

    homeData.data["top-categories"].map((item) => {
      let top_category = {
        id: item.id,
        name: item.name,
        image: `${links.Categoriess}thumbnails/${item.image}`,
      };
      categories.push(top_category);
    });

    // homeData.data.deals_of_the_day.data.map((item) => {
    //   let deals = {
    //     id: item.id,
    //     name: item.name,
    //   };
    //   todays_deals.push(item);
    // });
  }
  const getHot = async () => {
    const result = await getHotSaleItems();
    setHotsaledata(result);
  };
  if (hotsaledata == "") {
    getHot();
  } else {
    hotsaledata.data.products.data.map((item) => {
      let deals = {
        id: item.id,
        name: item.name,
        type: item.type,
        title: item.title,
        price: item.price,
        image: `${links.product.thumbnail}${item.image}`,
        sold: item.sold,
        numberofReviews: 30,
        beforeDiscount: item.beforeDiscount,
        rating: item.rating,
      };
      HotItems.push(deals);
    });
  }

  return (
    <Container>
      <NavBar
        variant="gradient"
        renderLeftComponent={() => <SearchBar navigation={navigation} />}
        renderRightComponent={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              color="white"
              icon="message-square"
              size={22}
              style={{ paddingLeft: scale(14) }}
              badge={2}
              onPress={() => navigation.navigate("Chat")}
            />
            <IconButton
              color="white"
              icon="bell"
              size={22}
              style={{ paddingLeft: scale(14) }}
              badge={8}
              onPress={() => navigation.navigate("Notification")}
            />
          </View>
        )}
      />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <GradientBlock style={styles.block}>
          <Text weight="medium" color="white">
            Popular:{" "}
          </Text>
          <Popular navigation={navigation} />
        </GradientBlock>
        <Carousel images={banners} />
        <Categories categories={categories} navigation={navigation} />
        <FlashSale navigation={navigation} HotItems={HotItems} />
        <DailyDiscover navigation={navigation} HotItems={HotItems} />
      </ScrollView>
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  card: {
    height: verticalScale(80),
    marginTop: verticalScale(-40),
    marginHorizontal: scale(20),
  },
  block: {
    paddingHorizontal: scale(14),
    paddingVertical: scale(10),
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Home;

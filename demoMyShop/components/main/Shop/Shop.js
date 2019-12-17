/* eslint-disable space-before-blocks */
/* eslint-disable react/sort-comp */
/* eslint-disable no-undef */
import * as React from 'react';
import {
  View, Text, StyleSheet, Dimensions, I18nManager

} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  // SceneRendererProps,
} from 'react-native-tab-view';
import { Ionicons, } from '@expo/vector-icons';

import initData from '../../../api/initData';
import saveCart from '../../../api/saveCart';
import getCart from '../../../api/getCart';

import global from '../../global';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';
import Header from './header';


position = new Animated.Value(0);
const { height } = Dimensions.get('window');
//
type Route = {
  key: string;
  icon: string;
  title: string,
  color: [number, number, number];
};

type State = NavigationState<Route>;


export default class Shop extends React.Component< {}, State> {
constructor(props) {
    super(props);
    global.addProductToCart = this.addProductToCart.bind(this);
    global.incrQuantity = this.incrQuantity.bind(this);
    global.decrQuantity = this.decrQuantity.bind(this);
    global.removeCart = this.removeCart.bind(this);
    global.gotoSearch = this.gotoSearch.bind(this);
}
 
  static title = 'Custom indicator';
  static backgroundColor = '#263238';
  static appbarElevation = 4;

  state: State = {
    types: [],
    topProducts: [],
    carts: [],
    index: 0,
    routes: [
      {
        key: 'home',
        title: 'Trang chủ',
        icon: 'ios-home',
        color: [0, 132, 255],

      },
      {
        key: 'contacts',
        title: 'Liên hệ',
        icon: 'ios-people',
        color: [0, 132, 255],
      },
      {
        key: 'cart',
        title: 'Giỏ hàng',
        icon: 'ios-cart',
        color: [0, 132, 255],
      },
      {
        //[76, 175, 80]
        key: 'search',
        title: 'Tìm kiếm',
        icon: 'ios-search',
        color: [0, 132, 255],
      },
    ],
  };

  componentDidMount() {
    initData()
      .then(resJson => {
        const { type, product } = resJson;
        this.setState({
          types: type,
          topProducts: product
        },
        );
      })
      .catch((e) => {
        console.log(e);
      });
    getCart()
      .then(carts => this.setState({ carts }));
  }
  addProductToCart(product) {
    // chua lm neu them 1 sp 2 lan
    this.setState({
      carts: this.state.carts.concat({ product, quantity: 1 })
    },
      () => saveCart(this.state.carts));
  }

  incrQuantity(productId) {
    const newCart = this.state.carts.map(e => {
      if (e.product.id !== productId) return e;
      return { product: e.product, quantity: e.quantity + 1 };
    });
    this.setState({ carts: newCart }, () => saveCart(this.state.carts));
  }

  decrQuantity(productId) {
    const newCart = this.state.carts.map(e => { 
      if (e.product.id !== productId) return e;
      return { product: e.product, quantity: e.quantity - 1 };

    });
    this.setState({ carts: newCart }, () => saveCart(this.state.carts));
  }

  removeCart(productId) {
    const newCart = this.state.carts.filter(e => e.product.id !== productId);
    this.setState({ carts: newCart },
      () => saveCart(this.state.carts));
}

  gotoSearch (index: number){
    this.setState({
      index,
      routes: [
        {
          key: 'search',
          title: 'Tìm kiếm',
          icon: 'ios-search',
          color: [0, 132, 255],
        },
      ]
    });
    global.gotoSearch();
}

  handleIndexChange = (index: number) =>
    this.setState({
      index,
});

  renderIndicator = (
  props: SceneRendererProps & {
    navigationState: State;
    getTabWidth: (i: number) => number;
  }
  ) => {
    const { position, navigationState, getTabWidth } = props;
    const inputRange = [
      0,
      0.48,
      0.49,
      0.51,
      0.52,
      1,
      1.48,
      1.49,
      1.51,
      1.52,
      2,
      3,
    ];

    const scale = Animated.interpolate(position, {
      inputRange,
      outputRange: inputRange.map(x => (Math.trunc(x) === x ? 2 : 0.1)),
    });

    const opacity = Animated.interpolate(position, {
      inputRange,
      outputRange: inputRange.map(x => {
        const d = x - Math.trunc(x);
        return d === 0.49 || d === 0.51 ? 0 : 1;
      }),
    });

    const translateX = Animated.interpolate(position, {
      // eslint-disable-next-line object-shorthand
      inputRange: inputRange,
      outputRange: inputRange.map(x => {
        const i = Math.round(x);
        return i * getTabWidth(i) * (I18nManager.isRTL ? -1 : 1);
      }),
    });

    const backgroundColor = Animated.interpolate(position, {
      inputRange,
      outputRange: inputRange.map(x =>
        Animated.color(...navigationState.routes[Math.round(x)].color)
      ),
    });

    return (
      <Animated.View
        style={[
          styles.container,
          {
            width: `${100 / navigationState.routes.length}%`,
            transform: [{ translateX }],
          },
        ]}
      >
        <Animated.View
          style={[
            styles.indicator,
            { opacity, backgroundColor, transform: [{ scale }] },
          ]}
        />

      </Animated.View>
    );
  };


  renderIcon = ({ route }: { route: Route, }) => (
    <Ionicons name={route.icon} size={20} style={styles.icon} />

  );

  renderBadge = ({ route }: { route: Route }) => {
    const { carts } = this.state;
    if (route.key === 'cart' && carts.length > 0) {
      return (
        <View style={styles.badge}>
          <Text style={styles.count}>{carts.length}</Text>
        </View>
      );
    }
    return null;
  };

  renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
      <TabBar
        labelStyle={styles.label}
        {...props}
        renderIcon={this.renderIcon}
        renderBadge={this.renderBadge}
        renderIndicator={this.renderIndicator}
        style={styles.tabbar}
      />
    );

  oPenMenu() {
    const { open } = this.props;
    open();
  }

  render() {
    //const { name, badgeCount, color, size } = this.props;
    const { types, topProducts, carts } = this.state;
    return (
      <View style={styles.wapper}>
        <Header onOpen={this.oPenMenu.bind(this)} />
        <View style={{ flex: 1, elevation: 5 }}>
          <TabView
            title
            navigationState={this.state}
            renderScene={SceneMap({
              home: () => <Home types={types} topProducts={topProducts} />,
              contacts: Contact,
              cart: () => <Cart carts={carts} />,
              search: Search,
            })}
            renderTabBar={this.renderTabBar}
            tabBarPosition="bottom"
            onIndexChange={this.handleIndexChange}
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  wapper: {
    flex: 1,

  },
  scene: {
    flex: 1,
  },

  tabbar: {
    backgroundColor: '#FE2EC8',
    overflow: 'hidden',
    elevation: 3,

  },
  icon: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10
  },
  indicator: {
    width: 48,
    height: 48,
    borderRadius: 24,
    margin: 6,
  },
  badge: {
    marginTop: 4,
    marginRight: 32,
    backgroundColor: 'red',
    height: 10,
    width: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -2,
  },

  label: {
    fontSize: 10,
    marginTop: 2,
    marginBottom: 1.5,
    backgroundColor: 'transparent',
    color: '#FFFFFF'
  },
});


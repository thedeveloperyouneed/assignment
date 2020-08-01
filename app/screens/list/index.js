import React, { Component } from 'react'
import { Text, View, Image, TextInput, FlatList, Modal, TouchableOpacity, } from 'react-native'
import MusicCard from '../../components/card'
import { Images, Colors } from '../../themes';
import { Icon, } from 'native-base';
import { styles } from './styles'
import { connect } from 'react-redux';
import * as action from "./actions"
import colors from '../../themes/colors';

class Assignment extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      musicDetail: null,
      search:''
    };
  }

  componentDidMount() {
    this.props.list()
      .then((res) => {
        console.log('PRODUCTS RES ', res);
      })
  }

  detail(index, item) {
    this.setState({ visible: true })
    this.setState({ musicDetail: item })
  }

  renderItem = ({ item, index }) => {
    return (
      <MusicCard
        onPress={() => this.detail(index, item)}
        image={item["im:image"][2]["label"]}
        title={item.title.label}
      />
    )
  }
  _onSearchTextChange(text) {
    this.setState({ search: text },
      this.searchKeyWord(text)
    )
  }

  searchKeyWord(text) {
    let list = this.props.getList.filter(item => {
      return item['im:name']['label'].toLowerCase().includes(text.toLowerCase())
    })
    this.setState({ searchedList: list })
  }

  getList() {
    let { getList } = this.props
    let data = this.state.search == '' ? this.props.getList : this.state.searchedList
    if (getList) {
      return (
        <FlatList
          numColumns={2}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
          contentContainerStyle={{ paddingBottom: 22, }}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )
    } else {
      return null
    }
  }
  onCloseMessage() {
    this.setState({ visible: false })
  }

  _messageBox = () => {
    let { musicDetail } = this.state
    if (musicDetail) {
      return (
        <View style={styles.msg_view}>
          <Image style={styles.image} source={{ uri: musicDetail["im:image"][2]["label"] }} resizeMode={'cover'} />
          <View style={styles.labelView}>
            <Text style={styles.label}>Album: </Text>
            <Text style={[styles.discription, { marginRight: 50 }]} numberOfLines={2}>{musicDetail['im:name']['label']}</Text>
          </View>
          <View style={styles.labelView}>
            <Text style={styles.label}>Total Songs: </Text>
            <Text style={styles.discription} numberOfLines={2}>{musicDetail['im:itemCount']['label']}</Text>
          </View>
          <View style={styles.labelView}>
            <Text style={styles.label}>Price: </Text>
            <Text style={styles.discription} numberOfLines={2}>{musicDetail['im:price']['label']}</Text>
          </View>
          <View style={styles.labelView}>
            <Text style={styles.label}>ReleaseDate: </Text>
            <Text style={styles.discription} numberOfLines={2}>{musicDetail['im:releaseDate']['attributes']['label']}</Text>
          </View>
          <View style={[styles.labelView, { flexWrap: 'wrap' }]}>
            <Text style={styles.label}>CopyRight: </Text>
            <Text style={styles.discription} numberOfLines={10}>{musicDetail.rights.label}</Text>
          </View>
          <TouchableOpacity style={[styles.labelView, { flexWrap: 'wrap', backgroundColor: colors.themeColour, marginTop: 10,justifyContent: "center", height: 40, alignContent: 'center', paddingTop: 0, borderRadius: 10 }]}>
            <Text style={[styles.label, {color: colors.white, alignSelf: 'center'}]}>Buy Now </Text>
            {/* <Text style={styles.discription} numberOfLines={10}>{musicDetail.rights.label}</Text> */}
          </TouchableOpacity>
        </View>
      );
    }


  }

  detailModal = () => {
    return (
      <View>
        <Modal animationType="slide" transparent={true} visible={this.state.visible}>
          <View style={styles.mainContainer}>
            <View style={styles.icon_view}>
              <TouchableOpacity style={styles.nav_view} onPress={() => this.onCloseMessage()}>
                <Icon name='close' type='AntDesign' style={styles.icon} />
              </TouchableOpacity>
            </View>
            <View style={styles.outer_view}>
              <View style={styles.modelView}>
                {this._messageBox()}
                <View style={styles.button_view}>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.commentView}>
          <TextInput placeholder="search…" placeholderTextColor={Colors.lightBlack} value={this.state.search} onChangeText={(text) => this._onSearchTextChange(text)} style={styles.commentInput}></TextInput>
          <TouchableOpacity  activeOpacity={0.5}>
            <Image style={styles.sendIcon} resizeMode={'contain'} source={Images.search} />
          </TouchableOpacity>
        </View>
        {this.getList()}
        {this.detailModal()}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  getList: state.lists.list
});

const mapDispatchToProps = (dispatch) => ({
  list: () => dispatch(action.list()),
});

const Conatiner = connect(mapStateToProps, mapDispatchToProps)(Assignment)

export default Conatiner;
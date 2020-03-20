// components/goods/goods.js
Component({
  /**
   * 组件的属性列表
   * 设计一个组件，我们要从他的这个properties入手，我该传什么怎么用，明确一下，我们的需求，
   * 我们这里需要一个goodInfo来接收一个具体的数据，需要一个属性来接收我要展示的东西是哪一种
   *    */
  properties: {
    goodInfo: {
      type: Object,
      value: null
    },
    goodtype:{
      type:String,
      value:'order'    // 默认list类型，对应首页的那种样式，collect对应收藏，order对应订单
    }
    // 开始我们的样式了哈
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickOn(e) {
      // console.log(e)
      console.log(this.data.goodInfo)
      var myEventDetail = this.data.goodInfo;
      var myEventOption = {};
      this.triggerEvent('click', myEventDetail, myEventOption)
    }
  },
  options: {
    multipleSlots: true
  }
})

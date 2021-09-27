import {Dimensions} from 'react-native'
// 将px转为dp
// 设计稿的宽度 / 元素的宽度 = 手机屏幕 / 手机中元素的宽度
// 手机中元素的宽度 = 手机屏幕 * 元素宽度 / 设计稿的宽度 375

export const screenWith = Dimensions.get("window").width // 屏幕宽度
export const screenHeight = Dimensions.get("window").height // 屏幕高度
// px转dp
export const pxToDp = (elePx) => {
    return screenWith * elePx / 375
}
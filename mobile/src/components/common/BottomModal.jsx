import React, { useEffect, useRef } from 'react'
import {Animated, Dimensions, Modal, PanResponder, StyleSheet, TouchableWithoutFeedback, View} from 'react-native'

export default function BottomModal({ onDismiss, visible, children, stick = false, overlay = true }) {
    const { height } = Dimensions.get('screen')
    const panY = useRef(new Animated.Value(height)).current

    const resetPositionAnim = Animated.timing(panY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
    })

    const closeAnim = Animated.timing(panY, {
        toValue: height,
        duration: 200,
        useNativeDriver: true,
    })

    const translateY = panY.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, 0, 1],
    })

    const handleDismiss = () => closeAnim.start(onDismiss)

    useEffect(() => {
        resetPositionAnim.start()
    }, [resetPositionAnim])

    const panResponders = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => false,
            onPanResponderMove: Animated.event([null, { dy: panY }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: (_, gs) => {
                if (gs.dy > 0 && gs.vy > 1) {
                    return handleDismiss()
                }
                return resetPositionAnim.start()
            },
        }),
    ).current

    return (
        <Modal
            animated
            animationType="slide"
            visible={visible}
            overlay={false}
            transparent
            onRequestClose={handleDismiss}>
            <View style={[styles.overlay, overlay]}>
                <TouchableWithoutFeedback onPress={onDismiss}>
                    <View style={{ flex: 1 }} />
                </TouchableWithoutFeedback>

                <Animated.View
                    style={{
                        ...styles.container,
                        transform: [{ translateY }],
                    }}>
                    <View style={styles.sliderIndicatorRow}
                        {...panResponders.panHandlers}>
                        {stick && <View style={styles.sliderIndicator} />}
                        {children}
                    </View>
                </Animated.View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    container: {
        backgroundColor: '#FFFFFF',
        minHeight: 200,
        elevation: 10,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
    },
    sliderIndicatorRow: {
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 280,
    },
    sliderIndicator: {
        backgroundColor: '#CECECE',
        height: 5,
        width: 45,
        borderRadius: 3,
        alignSelf: 'center',
        marginBottom: 6,
    },
})

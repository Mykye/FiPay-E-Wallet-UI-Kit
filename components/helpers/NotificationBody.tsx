type Props = {
    image: ImageSourcePropType,
    text: string,
    time: string,
    button?: boolean,
    onPress?: (event: GestureResponderEvent) => void
}

import React from 'react';
import {
    GestureResponderEvent,
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import RNGestureHandlerButton from "react-native-gesture-handler/lib/typescript/components/GestureHandlerButton";

const NotificationBody = (props: Props) => {
    const {onPress} = props;
    const {image} = props;
    const {text} = props;
    const {time} = props;
    const {button} = props;

    return (
        <View>
            <View style={styles.container}>
                <Image source={image} />
                <View style={{maxWidth: 220, paddingHorizontal: 10}}>
                    <Text style={{color: '#2C3A4B'}}>{text}</Text>
                    <Text style={{fontSize: 11,lineHeight: 16, color: '#6D7580', marginTop: 4}}>{time}</Text>
                </View>
                {button
                    ?
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.buttonText}>{'Pay'}</Text>
                    </TouchableOpacity>
                    :
                    null
                }
            </View>
            <View style={styles.line}></View>
        </View>
    );
};

export default NotificationBody;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        paddingVertical: 24,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        backgroundColor: '#6D5FFD',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 21
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'grey',
        opacity: 0.4
    }
})

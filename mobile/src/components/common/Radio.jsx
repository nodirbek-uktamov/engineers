import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Field } from 'formik'
import { Check } from 'react-native-feather'

export default function Radio({ name, style, items, onPress = () => {} }) {
    return (
        <Field name={name}>
            {({ form }) => (
                <View style={styles.container}>
                    {items.map((item) => (
                        <TouchableOpacity
                            key={item.value}
                            style={{ ...styles.block, ...style }}
                            activeOpacity={0.5}
                            onPress={() => {
                                form.setFieldValue(name, item.value)
                                onPress(item.value)
                            }}>
                            <View style={styles.button}>
                                {form.values[name] === item.value ? (
                                    <View style={styles.buttonActive}>
                                        <Check color="white" width="20" />
                                    </View>
                                ) : null}
                            </View>

                            <View>
                                <Text style={styles.buttonText}>{item.name}</Text>
                                <Text style={{ ...styles.buttonText, fontWeight: 'bold' }}>{item.subtitle}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </Field>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        width: '100%',
    },
    block: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 26,
        height: 26,
        backgroundColor: '#F0F0F0',
        borderRadius: 50,
    },
    buttonActive: {
        width: 16,
        height: 16,
        borderStyle: 'solid',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 13,
        borderColor: '#03758E',
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 16,
        marginLeft: 9,
    },
})

import React from 'react'
import { Field } from 'formik'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { Check } from 'react-native-feather'

export default function CheckBox({ label, name, onChange }) {
    return (
        <Field name={name}>
            {({ field, form }) => (
                <View style={styles.wrapper}>
                    <TouchableOpacity
                        style={[styles.checkBox, field.value ? styles.checked : '']}
                        onPress={() => {
                            form.setFieldValue(name, !field.value)
                            if (typeof onChange === 'function') onChange(!field.value)
                        }}>
                        {field.value ? <Check width={20} height={20} color="white" /> : <View />}
                    </TouchableOpacity>

                    <Text style={styles.label}>{label}</Text>
                </View>
            )}
        </Field>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    checkBox: {
        borderRadius: 6,
        marginRight: 7,
        width: 25,
        height: 25,
        borderColor: '#BEC0CF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 2,
        borderWidth: 1.1,
    },
    checked: {
        backgroundColor: '#E52032',
        borderWidth: 0,
    },
    label: {
        fontWeight: '500',
    },
})

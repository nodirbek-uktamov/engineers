import React, { useRef, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { Field } from 'formik'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Clear } from './Svgs'

export default function TextArea({
    onLayout,
    placeholder,
    height = 200,
    onFocus,
    onBlur,
    name,
    validate,
    label,
    labelIcon,
}) {
    const [textAreaSettings, setTextAreaSettings] = useState({ focus: false, disabled: false })
    const inputRef = useRef()

    function handleFocus() {
        setTextAreaSettings({ ...textAreaSettings, focus: true })
        if (typeof onFocus === 'function') onFocus()
    }

    function handleBlur() {
        if (typeof onBlur === 'function') onBlur()
        setTextAreaSettings({ ...textAreaSettings, focus: false })
    }

    return (
        <Field name={name} validate={validate}>
            {({ field, form }) => (
                <View onLayout={onLayout}>
                    <View style={styles.textAreaInfo}>
                        <TouchableWithoutFeedback onPress={() => inputRef.current.focus()}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                {labelIcon ? (
                                    <View style={styles.labelIcon}>
                                        {labelIcon}
                                    </View>
                                ) : null}

                                <Text
                                    style={{ color: textAreaSettings.focus ? '#000000' : '#BDBECD' }}>
                                    {label}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableOpacity onPress={() => form.setFieldValue(name, '')} style={styles.clearButton}><Clear /></TouchableOpacity>
                    </View>

                    <TextInput
                        ref={inputRef}
                        style={[styles.textArea, { height }]}
                        underlineColorAndroid="transparent"
                        placeholder={placeholder}
                        placeholderTextColor="grey"
                        onChangeText={(text) => form.setFieldValue(name, text)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={field.value}
                        multiline />
                </View>
            )}
        </Field>
    )
}

const styles = StyleSheet.create({
    labelIcon: {
        marginRight: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textArea: {
        backgroundColor: '#ffffff',
        minHeight: 40,
        maxHeight: 300,
        borderRadius: 10,
        marginTop: 20,
        color: '#000',
        padding: 14,
        paddingTop: 45,
        textAlignVertical: 'top',
    },
    textAreaInfo: {
        position: 'absolute',
        flexDirection: 'row',
        right: 29,
        left: 15,
        top: 31,
        zIndex: 100,
        justifyContent: 'space-between',
    },
    count: {
        color: '#ADADAD',
    },
    clearButton: {
        position: 'relative',
        left: 15,
        padding: 10,
    },
})

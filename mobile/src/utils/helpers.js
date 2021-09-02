import { Alert } from 'react-native'

export function surveyAlert(onSuccess, text) {
    Alert.alert(
        '',
        text,
        [
            { text: 'Нет', onPress: () => {}, style: 'cancel' },
            {
                text: 'Да',
                onPress: onSuccess,
            },
        ],
    )
}

import { Alert } from 'react-native'

export function deleteAlert(onDelete) {
    Alert.alert(
        '',
        'Вы действительно хотите удалить?',
        [
            { text: 'Нет', onPress: () => {}, style: 'cancel' },
            {
                text: 'Да',
                onPress: onDelete,
            },
        ],
    )
}

import { StyleSheet } from 'react-native';
import { AVATAR_OFFSET } from '../../core/constants';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	avatar: {
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
	},
	name: {
		alignItems: 'center',
		marginHorizontal: 4,
	},
});

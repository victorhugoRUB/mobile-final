import { RootStackParamList } from '../navigation/app_navigator';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
